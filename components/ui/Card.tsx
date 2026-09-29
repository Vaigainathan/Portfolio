import type { ComponentPropsWithoutRef } from "react";

type CardProps = ComponentPropsWithoutRef<"article">;

export function Card({ className = "", ...props }: CardProps) {
  return (
    <article
      className={`rounded-card border border-border-card bg-surface shadow-card ${className}`}
      {...props}
    />
  );
}
