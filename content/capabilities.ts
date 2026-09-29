export type CapabilityIcon = "devices" | "smartphone" | "hub";

export type Capability = {
  index: string;
  icon: CapabilityIcon;
  title: string;
  body: string;
  tags: string[];
};

export type CapabilitiesSection = {
  label: string;
  heading: string;
  subline: string;
  items: Capability[];
};

export const capabilities: CapabilitiesSection = {
  label: "WHAT I BUILD",
  heading: "Three things, done properly.",
  subline:
    "Not nine services sliced thin — websites, apps, and the systems that connect them.",
  items: [
    {
      index: "01",
      icon: "devices",
      title: "Websites that bring in business",
      body: "A site is only worth the enquiries it brings in. I build business websites with the lead path wired in from the start — WhatsApp enquiries, email routing, booking and quote forms — so a customer's message lands somewhere you'll actually see it.",
      tags: ["WordPress", "Framer", "WhatsApp API", "CRM"],
    },
    {
      index: "02",
      icon: "smartphone",
      title: "Mobile apps, from MVP to launch",
      body: "Most apps stall in the final stretch: login edge cases, notifications that don't arrive, data that drifts out of sync. I've taken a three-app delivery platform through exactly that to live users.",
      tags: ["React Native", "Expo", "Android", "Play Store"],
    },
    {
      index: "03",
      icon: "hub",
      title: "The systems behind it",
      body: "Admin dashboards, backend APIs, live tracking, and automation between the tools you already use. The parts customers never see but your business runs on.",
      tags: ["Node.js", "Firebase", "REST APIs", "Dashboards"],
    },
  ],
};
