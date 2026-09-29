import type { Testimonial } from "./testimonials";

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  frame: "browser" | "phone";
  chromeLabel?: string;
};

export type ProjectMetric = {
  value: string;
  title: string;
  body: string;
  kind: "figure" | "status";
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
  heading?: string;
  body?: string;
  metrics?: ProjectMetric[];
};

export type ArchiveItem = {
  name: string;
  description: string;
  tags: string[];
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "e-pickup",
    name: "E-Pickup",
    category: "Flagship project · Tirupattur",
    heading: "Built it. Launched it. Still keeping it running.",
    summary:
      "Lead developer for E-Pickup, a delivery startup in Tirupattur — maintaining the platform every month since launch.",
    body: "A delivery service for a town the big apps don't reach. Customers book pickups, delivery partners take jobs with live routing, and the team runs drivers, bookings and tracking from one dashboard.",
    metrics: [
      {
        kind: "figure",
        value: "200+",
        title: "Active Customers",
        body: "Recurring local orders handled every day since launch.",
      },
      {
        kind: "figure",
        value: "3",
        title: "Live Apps + Dashboard",
        body: "Customer, delivery partner and admin apps running in daily production.",
      },
      {
        kind: "status",
        value: "Now building",
        title: "Merchant Marketplace",
        body: "Expanding into a local marketplace so any shop in town can list and sell.",
      },
    ],
    role: "Full-stack development — architecture to launch, plus monthly maintenance",
    stack: ["React Native", "Expo", "Node.js", "Firebase"],
    built: ["Customer app", "Delivery partner app", "Admin dashboard", "Merchant app (in progress)"],
    images: [
      {
        frame: "browser",
        src: "/images/epickup-admin.png",
        alt: "Admin dashboard with a live map of delivery partners, a table of active bookings and today's order totals",
        caption: "Admin dashboard — live operations",
      },
      {
        frame: "phone",
        src: "/images/epickup-customer.png",
        alt: "Customer app booking screen with pickup and drop-off addresses, a fare estimate and a confirm button",
        caption: "Customer app — booking & tracking",
      },
      {
        frame: "phone",
        src: "/images/epickup-driver.png",
        alt: "Delivery partner app showing a new pickup request with the route drawn on a map and an accept button",
        caption: "Delivery partner app — job routing",
      },
    ],
    testimonial: "bhoopathy-epickup",
  },
];

export const archive: ArchiveItem[] = [];
