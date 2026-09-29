import type { ComponentPropsWithoutRef } from "react";

type CardTone = "raised" | "stat" | "quote" | "frame" | "panel";

type CardProps = ComponentPropsWithoutRef<"article"> & {
  as?: "article" | "figure" | "div";
  tone?: CardTone;
};

const tones: Record<CardTone, string> = {
  raised: "rounded-card border-border-card bg-surface shadow-card",
  stat: "rounded-card border-border bg-surface-stat",
  quote: "rounded-card border-border-card bg-surface-quote",
  frame: "rounded-card border-border-card bg-frame",
  panel: "rounded-panel border-border-card bg-surface shadow-panel",
};

export function Card({ as: Tag = "article", tone = "raised", className = "", ...props }: CardProps) {
  return <Tag className={`border ${tones[tone]} ${className}`} {...props} />;
}
