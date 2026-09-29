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
    approved: true,
  },
  {
    id: "vinod-nestaira",
    quote:
      "Our destinations and departure dates are finally presented properly, and every enquiry now reaches us on WhatsApp straight away. Delivered on time and exactly as discussed.",
    name: "Vinod",
    title: "Director, NestaIra Projects",
    approved: true,
  },
  {
    id: "vinayak-v3",
    quote:
      "Clear, fast, and exactly what our buyers needed. Customers can reach us directly from any product page now.",
    name: "Vinayak",
    title: "Founder, V3 Agritech",
    approved: true,
  },
];
