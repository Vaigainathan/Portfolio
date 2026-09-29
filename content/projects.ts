import type { Testimonial } from "./testimonials";

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  frame: "browser" | "phone" | "screen";
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
  /** Stored for reference; not rendered. */
  client?: string;
  summary: string;
  role: string;
  stack: string[];
  built?: string[];
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
        body: "Customer, delivery partner and admin apps running in daily production, with the shop app in testing.",
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
    built: ["Customer app", "Delivery partner app", "Admin dashboard", "Shop app (in testing)"],
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
        src: "/images/epickup_driver.jpg",
        alt: "Delivery partner app home screen with today's deliveries and earnings, an online toggle, wallet balance and work slots",
        caption: "Delivery partner app — job routing",
      },
    ],
    testimonial: "bhoopathy-epickup",
  },
  {
    slug: "nestaira-trails",
    name: "NestaIra Trails",
    category: "Travel & Hospitality",
    client: "NestaIra Projects, Bengaluru",
    summary:
      "A holiday destination site with live departure dates, and enquiries routed straight to WhatsApp and email — so no booking request sits unanswered.",
    role: "Design & development",
    stack: ["WordPress", "Figma", "WhatsApp API"],
    liveUrl: "https://nestairatrails.com/",
    images: [
      // Pending replacement: this file will be recaptured to show the departure dates; update the alt text with it.
      {
        frame: "screen",
        src: "/images/nestaira-trails.png",
        alt: "NestaIra Trails homepage with a photo banner of two pilgrims, trip categories in the navigation and an Upcoming Trips heading",
      },
    ],
    testimonial: "vinod-nestaira",
  },
  {
    slug: "v3-agritech",
    name: "V3 Agritech",
    category: "Agri-Commerce",
    summary:
      "A product catalogue for an agri-tech business, with WhatsApp enquiries wired in so buyers can ask about a product the moment they find it.",
    role: "Design & development",
    stack: ["WordPress", "Figma", "WhatsApp API"],
    liveUrl: "https://vthreeagritech.com/",
    images: [
      {
        frame: "screen",
        src: "/images/v3-agritech.png",
        alt: "V3 Agritech homepage with a banner of fertiliser and crop-nutrient product packs above an About section",
      },
    ],
    testimonial: "vinayak-v3",
  },
];

export const clientWorkSlugs: Project["slug"][] = ["nestaira-trails", "v3-agritech"];

export const clientWork = {
  label: "Selected work",
  heading: "Recent client partnerships",
  linkLabel: "Visit live website",
  archiveLabel: "Also shipped",
  archiveLinkLabel: "View",
};

/** Delivered through a partner studio: never label these as direct clients. Role tags only. */
export const archive: ArchiveItem[] = [
  {
    name: "Radcam Technologies",
    description: "Industrial machinery catalogue and spec index",
    tags: ["Design & WordPress"],
    liveUrl: "https://radcamtechnologies.com/",
  },
  {
    name: "Deepanjan Cables",
    description: "Cable manufacturer, product range and quote flow",
    tags: ["Design & Framer"],
  },
];
