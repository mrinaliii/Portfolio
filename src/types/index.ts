export interface Project {
  title: string;
  description: string;
  technologies: string[];
  code?: string;
  image?: string;
}

export interface ProjectCategory {
  title: string;
  projects: Project[];
  badgeColor: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}