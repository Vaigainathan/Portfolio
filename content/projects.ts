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

export type ProjectLink = {
  label: string;
  href: string;
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
  links?: ProjectLink[];
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
    heading: "Built it. Shipped it. Grew it into a marketplace.",
    summary:
      "Lead developer for E-Pickup, a delivery startup in Tirupattur. I built the original parcel platform and then its new local marketplace.",
    body:
      "E-Pickup started as a parcel service for a town the big apps don't reach. I've extended it into a local marketplace. Shops list their products, customers order from them inside the same app, and E-Pickup's own riders deliver from the shop to the doorstep.",
    metrics: [
      {
        kind: "figure",
        value: "200+",
        title: "Active Customers",
        body: "Recurring local orders handled every day since launch.",
      },
      {
        kind: "figure",
        value: "4",
        title: "Live Apps",
        body: "Customer, delivery partner and shop apps on Google Play, plus the admin dashboard.",
      },
      {
        kind: "status",
        value: "Shipped",
        title: "Local Marketplace",
        body: "Any shop in town can now list and sell through E-Pickup. Orders go to the shop's own app, then on to a delivery partner.",
      },
    ],
    role: "Full-stack development — architecture to launch, plus monthly maintenance",
    stack: ["React Native", "Expo", "TypeScript", "Node.js", "Firebase"],
    built: [
      "Customer app: parcel booking plus shop marketplace",
      "Delivery partner app",
      "Shop app, a new app built from scratch",
      "Admin dashboard",
    ],
    links: [
      {
        label: "Customer app on Google Play",
        href: "https://play.google.com/store/apps/details?id=com.customer.epickup",
      },
      {
        label: "Delivery partner app on Google Play",
        href: "https://play.google.com/store/apps/details?id=com.driver.epickup",
      },
    ],
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
        alt: "Customer app Shop tab showing local shop categories and a list of shops to order from",
        caption: "Customer app, shop marketplace",
      },
      {
        frame: "phone",
        src: "/images/epickup-shop.jpg",
        alt: "Shop app screen showing incoming marketplace orders for a local shop",
        caption: "Shop app, order management",
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
    description: "Sheet-metal machinery supplier — product range and spec index",
    tags: ["Design & WordPress"],
    liveUrl: "https://radcamtechnologies.com/",
  },
  {
    name: "Deepanjan Cables",
    description: "Cable manufacturer, product range and quote flow",
    tags: ["Design & Framer"],
  },
];
