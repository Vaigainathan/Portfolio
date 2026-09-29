import type { ComponentPropsWithoutRef } from "react";

type CardTone = "raised" | "stat" | "quote" | "frame";

type CardProps = ComponentPropsWithoutRef<"article"> & {
  as?: "article" | "figure" | "div";
  tone?: CardTone;
};

const tones: Record<CardTone, string> = {
  raised: "border-border-card bg-surface shadow-card",
  stat: "border-border bg-surface-stat",
  quote: "border-border-card bg-surface-quote",
  frame: "border-border-card bg-frame",
};

export function Card({ as: Tag = "article", tone = "raised", className = "", ...props }: CardProps) {
  return <Tag className={`rounded-card border ${tones[tone]} ${className}`} {...props} />;
}
