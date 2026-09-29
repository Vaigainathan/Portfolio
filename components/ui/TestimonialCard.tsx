import { Card } from "@/components/ui/Card";
import type { Testimonial } from "@/content/testimonials";

type TestimonialCardProps = { testimonial: Testimonial };

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  if (!testimonial.approved) return null;

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
