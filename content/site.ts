export type Link = {
  label: string;
  href: string;
};

export type ProofCardIcon = "chart-trend" | "badge-verified";

export type ProofCard = {
  label: string;
  status?: string;
  icon?: ProofCardIcon;
  metric: string;
  unit: string;
  title: string;
  body: string;
};

export type Hero = {
  pill: string;
  headline: [string, string];
  subline: string[];
  primaryCta: Link;
  secondaryCta: Link;
  proofCards: ProofCard[];
};

export type ContactDetails = {
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  github: string;
  linkedin: string;
};

export type Reassurance = {
  title: string;
  body: string;
};

export type Contact = {
  heading: [string, string];
  body: string;
  whatsapp: string;
  email: string;
  reassurance: Reassurance[];
};

export type Footer = {
  name: string;
  tagline: string;
  links: Link[];
  legal: string;
};

export type Site = {
  name: string;
  nav: Link[];
  headerCta: Link;
  hero: Hero;
};

export const contactDetails: ContactDetails = {
  whatsappNumber: "919148101698",
  whatsappMessage: "Hi Vaigainathan, I have a project in mind.",
  email: "rvaigainathan@gmail.com",
  github: "https://github.com/Vaigainathan",
  linkedin: "https://www.linkedin.com/in/vaigainathan-r",
};

export const whatsappHref = `https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(contactDetails.whatsappMessage)}`;
export const mailtoHref = `mailto:${contactDetails.email}`;

/** Canonical origin. Change this when a custom domain is attached. */
export const siteUrl = "https://vaigainathan.vercel.app";

export const siteDescription =
  "Freelance developer in Bengaluru building websites, mobile apps and the systems behind them — WhatsApp and CRM integration, React Native apps, and admin dashboards.";

export const contact: Contact = {
  heading: ["Have a project in mind?", "Tell me what you need."],
  body: "Every project is scoped on its own terms — tell me what you're building and I'll come back with a plan, a timeline and a clear quote.",
  whatsapp: "Message on WhatsApp",
  email: "Send an email",
  reassurance: [
    {
      title: "Direct access",
      body: "You work with the developer building it. No middlemen, no handoffs.",
    },
    {
      title: "Fixed timelines",
      body: "Agreed milestones, and delivery when promised.",
    },
    {
      title: "Support included",
      body: "Handover documentation and active support after launch.",
    },
  ],
};

export const footer: Footer = {
  name: "Vaigainathan",
  tagline: "Websites, mobile apps and the systems behind them.",
  links: [
    { label: "GitHub", href: contactDetails.github },
    { label: "LinkedIn", href: contactDetails.linkedin },
    { label: "Email", href: mailtoHref },
  ],
  legal: "© 2026 Vaigainathan. All rights reserved.",
};

export const site: Site = {
  name: "Vaigainathan",
  nav: [
    { label: "Work", href: "#work" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
  ],
  headerCta: { label: "Start a project", href: "#contact" },
  hero: {
    pill: "Available for new client partnerships",
    headline: ["Built to work.", "Built to last."],
    subline: [
      "Websites, mobile apps, and the systems behind them —",
      "designed, built, and supported end to end.",
    ],
    primaryCta: { label: "Start a project", href: "#contact" },
    secondaryCta: { label: "Explore featured case study", href: "#e-pickup" },
    proofCards: [
      {
        label: "Fleet scale",
        status: "Live",
        metric: "3",
        unit: "apps",
        title: "Live Apps + Dashboard",
        body: "Customer, delivery partner and admin apps running in daily production.",
      },
      {
        label: "User base",
        icon: "chart-trend",
        metric: "200+",
        unit: "active",
        title: "Active Customers",
        body: "Recurring local orders handled every day since launch.",
      },
      {
        label: "Ownership",
        icon: "badge-verified",
        metric: "Direct",
        unit: "delivery",
        title: "One Point of Contact",
        body: "You work with the developer building it — no account managers, no handoffs.",
      },
    ],
  },
};
