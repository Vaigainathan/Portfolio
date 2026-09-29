export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Site = {
  name: string;
  nav: NavLink[];
  whatsapp: string;
  email: string;
  socials: SocialLink[];
};

export const site: Site = {
  name: "",
  nav: [],
  whatsapp: "",
  email: "",
  socials: [],
};
