import type { Testimonial } from "./testimonials";

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  role: string;
  stack: string[];
  built: string[];
  liveUrl?: string;
  images: ProjectImage[];
  testimonial?: Testimonial["id"];
};

export type ArchiveItem = {
  name: string;
  description: string;
  tags: string[];
  liveUrl?: string;
};

export const projects: Project[] = [];

export const archive: ArchiveItem[] = [];
