
import type { ImageMetadata } from 'astro';

// Team Images
import teamImg5 from '../assets/team/DSC01116.jpg';

// Reusing other optimized images from assets/hero as replacements for deleted team images
import teamImg1 from '../assets/hero/DSC00130.jpg';
import teamImg2 from '../assets/hero/RRW09172.jpg';
import teamImg3 from '../assets/hero/DSC08341.jpg';
import teamImg4 from '../assets/hero/DSC00360.jpg';

// Other Team/Consulting Images (referenced in data)
// We need to check which specific files are used where to import them correctly.
// Based on the file content:
// management hero: DSC00130 (teamImg1)
// management gallery: RRW09172 (teamImg2), DSC08341 (teamImg3), DSC00360 (teamImg4), DSC01116 (teamImg5)
// consulting hero: DSC01116 (teamImg5)
// consulting gallery: DSC00130 (teamImg1), RRW09172 (teamImg2), FJR09921 (public), DSC00360 (teamImg4)

export interface ServiceData {
  id: string;
  slug: string;
  titleKey: string;
  descKey: string;
  contentKey: string;
  heroImage: string | ImageMetadata;
  galleryImages: (string | ImageMetadata)[];
}

export const servicesData: ServiceData[] = [
  {
    id: 'catering',
    slug: 'catering',
    titleKey: 'services.catering.title',
    descKey: 'services.catering.desc',
    contentKey: 'services.catering.content',
    heroImage: '/images/hotels-catering/DSC00130.jpg',
    galleryImages: [
      '/images/hotels-catering/DSC00136.jpg',
      '/images/hotels-catering/HSN09855.jpg',
      '/images/mashair-catering/DSC00269.jpg',
      '/images/mashair-catering/HSN01509.jpg'
    ],
  },
  {
    id: 'contracting',
    slug: 'contracting',
    titleKey: 'services.contracting.title',
    descKey: 'services.contracting.desc',
    contentKey: 'services.contracting.content',
    heroImage: '/images/contracting/RRW09172.JPG',
    galleryImages: [
      '/images/contracting/RRW09158.JPG',
      '/images/contracting/RRW09192.JPG',
      '/images/contracting/RRW08862.JPG',
      '/images/contracting/DSC08341.jpg'
    ],
  },
  {
    id: 'management',
    slug: 'management',
    titleKey: 'services.management.title',
    descKey: 'services.management.desc',
    contentKey: 'services.management.content',
    heroImage: teamImg1,
    galleryImages: [
      teamImg2,
      teamImg3,
      teamImg4,
      teamImg5
    ],
  },
  {
    id: 'logistics',
    slug: 'logistics',
    titleKey: 'services.logistics.title',
    descKey: 'services.logistics.desc',
    contentKey: 'services.logistics.content',
    heroImage: '/images/contracting/RRW09192.JPG',
    galleryImages: [
      '/images/contracting/RRW09150.JPG',
      '/images/mashair-catering/DSC09962.jpg',
      '/images/contracting/RRW09206.JPG',
      '/images/contracting/RRW09139.JPG'
    ],
  },
  {
    id: 'consulting',
    slug: 'consulting',
    titleKey: 'services.consulting.title',
    descKey: 'services.consulting.desc',
    contentKey: 'services.consulting.content',
    heroImage: teamImg5,
    galleryImages: [
      teamImg1,
      teamImg2,
      '/images/hotels-catering/FJR09921.jpg',
      teamImg4
    ],
  },
];
