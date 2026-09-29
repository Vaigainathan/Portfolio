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
        body: "Customer, delivery partner and shop apps, plus the admin dashboard, in daily production.",
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
    built: ["Customer app", "Delivery partner app", "Shop app", "Admin dashboard"],
    images: [
      {
        frame: "browser",
        src: "/images/epickup-admin.png",
        alt: "Admin dashboard showing system status and summary cards for drivers, bookings, customers, revenue and support tickets",
        caption: "Admin dashboard — live operations",
      },
      {
        frame: "phone",
        src: "/images/epickup-customer.jpg",
        alt: "Customer app home screen with a map and fields to choose the pickup location, drop-off location and package weight",
        caption: "Customer app — booking & tracking",
      },
      {
        frame: "phone",
        src: "/images/epickup-driver.jpg",
        alt: "Delivery partner app home screen with today's deliveries and earnings, an online toggle, wallet balance and work slots",
        caption: "Delivery partner app — job routing",
      },
      {
        frame: "phone",
        src: "/images/epickup-shop.jpg",
        alt: "Shop app dashboard showing the store open for orders, today's earnings, total orders and live order statuses",
        caption: "Shop app — store orders",
      },
    ],
    testimonial: "bhoopathy-epickup",
  },
];

export const archive: ArchiveItem[] = [];
