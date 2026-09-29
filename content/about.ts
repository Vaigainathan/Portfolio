export type AboutSection = {
  label: string;
  heading: string;
  pullQuote: string;
  paragraphs: string[];
  status: string;
  note: string;
};

export const about: AboutSection = {
  label: "About",
  heading: "I got into this out of curiosity — how does an app on a phone actually work?",
  pullQuote: "That question turned into building them.",
  paragraphs: [
    "Today I design and develop websites, mobile apps and the systems behind them, for startups and growing businesses across Bengaluru and Tamil Nadu.",
    "What clients come back for isn't the launch — it's that problems get fixed fast, deadlines hold, and I'm still there after handover. For larger projects, I bring in a designer and developers I've worked with before.",
  ],
  status: "Based in Bengaluru & Tamil Nadu · Working with clients worldwide",
  note: "This site is designed and built from scratch — no template, no page builder.",
};
