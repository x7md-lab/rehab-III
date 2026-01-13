
import type { ImageMetadata } from 'astro';

export interface ProjectData {
  id: string;
  slug: string;
  titleKey?: string;
  descKey?: string;
  contentKey?: string;
  title?: string;
  description?: string;
  content?: string;
  videoUrl?: string;
  heroImage: string | ImageMetadata;
  galleryImages: (string | ImageMetadata)[];
}

export const projectsData: ProjectData[] = [
  {
    "id": "direct-hajj-1446h",
    "slug": "direct-hajj-1446h",
    "titleKey": "projects.direct_hajj.title",
    "descKey": "projects.direct_hajj.desc",
    "contentKey": "projects.direct_hajj.content",
    "heroImage": "/images/mashair-catering/DSC00360.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=yr1ztd1-gGg",
    "galleryImages": [
      "/images/mashair-catering/DSC00010.jpg",
      "/images/mashair-catering/DSC00047.jpg",
      "/images/mashair-catering/DSC00059.jpg",
      "/images/mashair-catering/DSC00073.jpg"
    ]
  },
  {
    "id": "ithra-alkhair-1446h",
    "slug": "ithra-alkhair-1446h",
    "titleKey": "projects.ithra_alkhair.title",
    "descKey": "projects.ithra_alkhair.desc",
    "contentKey": "projects.ithra_alkhair.content",
    "heroImage": "/images/contracting/DSC08341.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=RfcqW904jOg",
    "galleryImages": [
      "/images/contracting/RRW09172.JPG",
      "/images/contracting/RRW09158.JPG",
      "/images/contracting/RRW09192.JPG",
      "/images/contracting/DSC08349.jpg"
    ]
  }
];
