
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
  heroImage: string | ImageMetadata;
  mainVideo: string;
  subVideos: string[];
}

export const projectsData: ProjectData[] = [
  {
    id: "direct-hajj-catering",
    slug: "direct-hajj-catering",
    titleKey: "projects.direct_hajj_catering.title",
    descKey: "projects.direct_hajj_catering.desc",
    contentKey: "projects.direct_hajj_catering.content",
    heroImage: "https://img.youtube.com/vi/yr1ztd1-gGg/hqdefault.jpg",
    mainVideo: "yr1ztd1-gGg",
    subVideos: ["RZaWFvCDo60", "_KPQv53Bo4Y", "DVRgXUfGxHI", "B13_smPg8KI", "rLTrd_RFSAE", "kuIFybFLDDk"]
  },
  {
    id: "holy-sites-catering",
    slug: "holy-sites-catering",
    titleKey: "projects.holy_sites_catering.title",
    descKey: "projects.holy_sites_catering.desc",
    contentKey: "projects.holy_sites_catering.content",
    heroImage: "https://img.youtube.com/vi/oVAqba0zFbA/hqdefault.jpg",
    mainVideo: "oVAqba0zFbA",
    subVideos: ["cZWrr5CPPyQ", "IhkjELk7L80", "vS8XFv24QIU", "-OXAJADxP9I", "mDQBB6YBaDo", "bCGlAzOhMQQ"]
  },
  {
    id: "dry-meals",
    slug: "dry-meals",
    titleKey: "projects.dry_meals.title",
    descKey: "projects.dry_meals.desc",
    contentKey: "projects.dry_meals.content",
    heroImage: "https://img.youtube.com/vi/XSBmKdgSgBA/hqdefault.jpg",
    mainVideo: "XSBmKdgSgBA",
    subVideos: []
  },
  {
    id: "water-supply",
    slug: "water-supply",
    titleKey: "projects.water_supply.title",
    descKey: "projects.water_supply.desc",
    contentKey: "projects.water_supply.content",
    heroImage: "https://img.youtube.com/vi/bgdsle3md-E/hqdefault.jpg",
    mainVideo: "bgdsle3md-E",
    subVideos: []
  },
  {
    id: "pre-cooked-meals",
    slug: "pre-cooked-meals",
    titleKey: "projects.pre_cooked_meals.title",
    descKey: "projects.pre_cooked_meals.desc",
    contentKey: "projects.pre_cooked_meals.content",
    heroImage: "https://img.youtube.com/vi/puZ1wQGNtAk/hqdefault.jpg",
    mainVideo: "puZ1wQGNtAk",
    subVideos: ["rTq0UUSmCTU"]
  },
  {
    id: "contracting-equipment",
    slug: "contracting-equipment",
    titleKey: "projects.contracting_equipment.title",
    descKey: "projects.contracting_equipment.desc",
    contentKey: "projects.contracting_equipment.content",
    heroImage: "https://img.youtube.com/vi/RfcqW904jOg/hqdefault.jpg",
    mainVideo: "RfcqW904jOg",
    subVideos: ["FRCjMNGnyyI", "xxuONoYiH5s", "GY_Dx2W_-Ac", "g7Zn241mlY4"]
  }
];
