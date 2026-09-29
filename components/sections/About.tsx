import { Pill } from "@/components/ui/Pill";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { about } from "@/content/about";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto w-full max-w-content border-b border-border px-6 pt-24 pb-24"
    >
      <div className="flex max-w-3xl flex-col items-start gap-4">
        <SectionLabel>{about.label}</SectionLabel>
        <h2 id="about-heading" className="text-heading-sm font-semibold text-text-strong">
          {about.heading}
        </h2>
        <p className="pt-4 text-pull-quote text-accent-gold">{about.pullQuote}</p>
        <div className="flex flex-col gap-5 pt-4 pb-6">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-body-lg text-text-muted">
              {paragraph}
            </p>
          ))}
        </div>
        <Pill size="outline">{about.status}</Pill>
        <p className="text-caption text-text-dim">{about.note}</p>
      </div>
    </section>
  );
}
