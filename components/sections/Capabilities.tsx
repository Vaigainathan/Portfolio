import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { Devices, Hub, Smartphone } from "@/components/ui/icons";
import { Pill } from "@/components/ui/Pill";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TagChip } from "@/components/ui/TagChip";
import { capabilities, type Capability, type CapabilityIcon } from "@/content/capabilities";

const capabilityIcons: Record<CapabilityIcon, ReactNode> = {
  devices: <Devices size={16.6667} />,
  smartphone: <Smartphone size={12.5} />,
  hub: <Hub size={20} />,
};

export function Capabilities() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-heading">
      <div className="mx-auto flex max-w-content flex-col gap-14 border-t border-border px-6 pt-20 pb-20">
        <div className="flex flex-col gap-2">
          <SectionLabel>{capabilities.label}</SectionLabel>
          <h2 id="capabilities-heading" className="text-heading text-text-strong">
            {capabilities.heading}
          </h2>
          <p className="max-w-2xl pt-2 text-body-lg text-text-muted">{capabilities.subline}</p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.items.map((item) => (
            <CapabilityCard key={item.index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({ item }: { item: Capability }) {
  return (
    <Card className="flex flex-col justify-between p-8">
      <div className="flex flex-col gap-3 pb-6">
        <div className="flex items-center justify-between">
          <span className="flex size-10 items-center justify-center rounded-tile border border-status-border bg-status-tint text-accent-gold">
            {capabilityIcons[item.icon]}
          </span>
          <Pill size="category">{item.index}</Pill>
        </div>
        <h3 className="pt-3 text-card-heading text-text-strong">{item.title}</h3>
        <p className="text-body text-text-muted">{item.body}</p>
      </div>
      <ul className="flex flex-col items-start gap-2 border-t border-border pt-5">
        {item.tags.map((tag) => (
          <li key={tag} className="flex">
            <TagChip>{tag}</TagChip>
          </li>
        ))}
      </ul>
    </Card>
  );
}
