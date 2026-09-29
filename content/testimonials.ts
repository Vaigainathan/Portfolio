export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  title: string;
  /** Only client-approved wording may render; drafts stay false. */
  approved: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "bhoopathy-epickup",
    quote:
      "Vaigainathan built our customer app, driver app and admin dashboard, and has kept everything running since launch. When something breaks, it gets fixed fast. We've now brought him back to build our marketplace upgrade.",
    name: "Bhoopathy K",
    title: "E-Pickup",
    approved: false,
  },
];
