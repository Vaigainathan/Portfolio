// TODO before launch: each anchor below needs a section with the matching id,
// or it becomes a dead link.
//   #about         — About
//   #contact       — Contact CTA
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

export type Site = {
  name: string;
  nav: Link[];
  headerCta: Link;
  hero: Hero;
  whatsapp: string;
  email: string;
  socials: Link[];
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
  whatsapp: "",
  email: "",
  socials: [],
};
