import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { ArrowDown, ArrowRight, BadgeVerified, ChartTrend } from "@/components/ui/icons";
import { Pill } from "@/components/ui/Pill";
import { site, type ProofCard, type ProofCardIcon } from "@/content/site";

const proofIcons: Record<ProofCardIcon, ReactNode> = {
  "chart-trend": <ChartTrend size={13.5} />,
  "badge-verified": <BadgeVerified size={16.5} />,
};

export function Hero() {
  const { hero } = site;
  const [headlineTop, headlineBottom] = hero.headline;

  return (
    <section id="top" className="mx-auto flex max-w-hero flex-col items-center pt-hero-offset pb-24">
      <div className="mb-8 flex">
        <Pill>{hero.pill}</Pill>
      </div>

      <h1 className="mb-6 text-center text-display whitespace-nowrap">
        <span className="block text-text-strong">{headlineTop}</span>
        <span className="block font-semibold text-gradient-headline">{headlineBottom}</span>
      </h1>

      <p className="mb-10 text-center text-lead text-text-muted">
        {hero.subline.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>

      <div className="flex items-center justify-center gap-4">
        <a
          href={hero.primaryCta.href}
          className="flex h-cta items-center gap-2 rounded-pill bg-button-primary-bg px-6 text-button font-semibold text-bg"
        >
          {hero.primaryCta.label}
          <span className="flex w-3.5">
            <ArrowRight size={10.667} />
          </span>
        </a>
        <a
          href={hero.secondaryCta.href}
          className="flex h-cta items-center gap-2 rounded-pill border border-border-strong bg-surface-2-soft px-5 text-button font-medium text-text-soft"
        >
          {hero.secondaryCta.label}
          <ArrowDown size={10.667} className="text-text-dim" />
        </a>
      </div>

      <div className="mt-16 grid w-full grid-cols-3 items-stretch gap-6 border-t border-border-card pt-8">
        {hero.proofCards.map((card) => (
          <ProofCardItem key={card.label} card={card} />
        ))}
      </div>
    </section>
  );
}

function ProofCardItem({ card }: { card: ProofCard }) {
  return (
    <Card className="flex flex-col p-7">
      <div className="flex flex-col gap-2 pb-1">
        <div className="flex h-status-pill items-center justify-between">
          <span className="font-mono text-label text-text-muted uppercase">{card.label}</span>
          {card.status ? (
            <Pill size="sm">{card.status}</Pill>
          ) : (
            card.icon && <span className="flex text-text-dim">{proofIcons[card.icon]}</span>
          )}
        </div>
        <p className="flex items-baseline gap-2 pt-2 font-mono whitespace-nowrap">
          <span className="text-metric text-accent-gold">{card.metric}</span>
          <span className="text-unit text-text-dim">{card.unit}</span>
        </p>
        <h3 className="text-card-title text-text">{card.title}</h3>
      </div>
      <p className="pt-2 text-card-body text-text-dim">{card.body}</p>
    </Card>
  );
}
