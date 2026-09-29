export type ProcessStep = {
  number: string;
  title: string;
  body: string;
};

export type ProcessSection = {
  label: string;
  heading: string;
  subline: string;
  steps: ProcessStep[];
  closing: string;
};

export const processSection: ProcessSection = {
  label: "Process",
  heading: "Predictable execution, no black boxes.",
  subline:
    "No endless meetings or vanishing acts. A clear, structured path from first call to launch.",
  steps: [
    {
      number: "01",
      title: "Plan",
      body: "Fixed scope, architecture and milestones agreed in writing before any code starts.",
    },
    {
      number: "02",
      title: "Design",
      body: "Mockups reviewed and confirmed together, so there are no surprises when the build begins.",
    },
    {
      number: "03",
      title: "Build",
      body: "Progress you can see at key stages, not one reveal at the end.",
    },
    {
      number: "04",
      title: "Launch",
      body: "Clean deployment, documentation, and post-launch support — 15 days for websites, a month for apps.",
    },
  ],
  closing: "Most business websites take around three weeks, design to launch.",
};
