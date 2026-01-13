
export interface ServiceData {
  id: string;
  slug: string;
  titleKey: string;
  descKey: string;
  contentKey: string;
  heroImage: string;
  galleryImages: string[];
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
    heroImage: '/images/team/DSC00736.jpg',
    galleryImages: [
      '/images/team/DSC09476.jpg',
      '/images/team/DSC01135.jpg',
      '/images/team/DSC00811.jpg',
      '/images/team/DSC01116.jpg'
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
    heroImage: '/images/team/DSC01116.jpg',
    galleryImages: [
      '/images/team/DSC00736.jpg',
      '/images/team/DSC09476.jpg',
      '/images/hotels-catering/FJR09921.jpg',
      '/images/team/DSC00811.jpg'
    ],
  },
];
