# iOS Safari Image Gallery Performance Analysis

## Executive Summary
This report analyzes the performance bottlenecks causing crashes on Safari iOS during image gallery interactions (sliding/zooming). The investigation identifies **excessive memory consumption** and **GPU layer limits** as the primary causes, stemming from the rendering of full-resolution unoptimized images and improper DOM management in the gallery components.

## 1. Identified Issues

### A. Rendering Full-Resolution Images (`Gallery.astro`)
- **Observation:** The component directly links to raw image files in `public/images` (e.g., `/images/hotels-catering/FJR09968.jpg`).
- **Impact:** These files appear to be high-resolution DSLR photos. Loading 7+ of these simultaneously creates a massive memory footprint.
- **Metric:** A single 24MP image (6000x4000) decompresses to ~96MB of RAM (RGBA). 7 images = ~672MB of raw texture memory, easily overwhelming an iOS tab's available memory, especially on older devices.

### B. "Hidden" DOM Nodes (`ServiceGallery.astro`)
- **Observation:** The lightbox implementation uses Alpine.js `x-show` to toggle visibility of slides.
- **Impact:** `x-show` applies `display: none` but **does not remove the element from the DOM**. All high-resolution images in the gallery are loaded and held in memory simultaneously, even when the user is viewing only one.
- **Crash Trigger:** When the user zooms (pinch-to-zoom), the browser may attempt to rasterize the full content or create larger composited layers, triggering a memory pressure crash (Jetsam) on iOS.

### C. Large Composited Layers
- **Observation:** `EmblaCarousel` typically creates a container with all slides side-by-side.
- **Impact:** On iOS, there is a maximum size for a single composited layer (often 4096px or 8192px). A strip of 7 high-res images exceeds this limit, forcing the browser to tile the layer or consume excessive memory, leading to rendering artifacts or crashes during sliding/zooming.

## 2. Crash Reproduction Scenario
1.  Open the page on an iPhone (e.g., iPhone 12/13/14).
2.  Scroll to the Gallery section.
3.  Wait for all images to load (network activity settles).
4.  **Action:** Pinch-to-zoom into the gallery area OR open the lightbox and swipe rapidly.
5.  **Result:** The tab refreshes (Jetsam event) or the browser closes unexpectedly.

## 3. Recommended Solutions

### Priority: Critical (Immediate Fix)

#### 1. Implement Image Optimization (`Gallery.astro`)
**Action:** Move images to `src/assets` and use Astro's `<Image />` component.
**Benefit:** Astro will generate resized, optimized formats (WebP/AVIF) appropriate for the device viewport, reducing download size by ~90% and memory usage significantly.

#### 2. Virtualize/Lazy Render Lightbox (`ServiceGallery.astro`)
**Action:** Replace `x-show` with `x-if` (using `<template>`) for the lightbox slides.
**Benefit:** Only the currently active image will exist in the DOM. This reduces the memory cost in the lightbox from *N* images to *1* image.

### Priority: High

#### 3. Lazy Loading in Carousel
**Action:** Apply `loading="lazy"` and `decoding="async"` to carousel images.
**Benefit:** Off-screen images won't block the main thread or consume memory until needed.

## 4. Proposed Testing Matrix
- **Devices:** iPhone 11 (3GB RAM), iPhone 13/14 (4GB+ RAM).
- **OS:** iOS 16, iOS 17.
- **Conditions:** Throttle to 4G LTE to observe load behavior.
