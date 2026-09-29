import { Card } from "@/components/ui/Card";
import type { Testimonial } from "@/content/testimonials";

type TestimonialCardProps = { testimonial: Testimonial; variant?: "card" | "embedded" };

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function TestimonialCard({ testimonial, variant = "card" }: TestimonialCardProps) {
  if (!testimonial.approved) return null;

  if (variant === "embedded") {
    return (
      <figure className="flex flex-col gap-1 border-l border-border-quote py-1 pl-4">
        <blockquote className="font-quote text-body-sm text-text-soft italic">
          <p>“{testimonial.quote}”</p>
        </blockquote>
        <figcaption className="flex items-center gap-1.5 font-mono text-attribution text-accent-gold">
          <span className="size-1.5 shrink-0 rounded-pill bg-accent-gold" aria-hidden="true" />
          {testimonial.name} — {testimonial.title}
        </figcaption>
      </figure>
    );
  }

  return (
    <Card as="div" tone="quote" className="overflow-hidden p-9">
      <figure className="flex max-w-3xl flex-col gap-6">
        <blockquote className="text-lead text-text-bright">
          <p>“{testimonial.quote}”</p>
        </blockquote>
        <figcaption className="flex items-center gap-3">
          <span
            className="flex size-12 shrink-0 items-center justify-center rounded-pill border border-border-strong bg-avatar-bg text-body-sm font-semibold text-text"
            aria-hidden="true"
          >
            {initials(testimonial.name)}
          </span>
          <span className="flex flex-col">
            <span className="text-intro font-semibold text-text-strong">{testimonial.name}</span>
            <span className="text-body-sm text-text-muted">{testimonial.title}</span>
          </span>
        </figcaption>
      </figure>
    </Card>
  );
}
