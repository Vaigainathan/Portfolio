import { SectionLabel } from "@/components/ui/SectionLabel";
import { processSection } from "@/content/process";

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="border-y border-border bg-surface-band px-4 py-24 md:px-8 xl:px-32"
    >
      <div className="mx-auto flex max-w-content flex-col gap-14 px-6">
        <div className="flex max-w-2xl flex-col gap-2">
          <SectionLabel>{processSection.label}</SectionLabel>
          <h2 id="process-heading" className="text-heading-sm font-semibold text-text-strong">
            {processSection.heading}
          </h2>
          <p className="pt-1 text-body-lg text-text-muted">{processSection.subline}</p>
        </div>

        <div className="flex flex-col gap-10">
          <ol className="grid grid-cols-1 gap-8 pt-2 md:grid-cols-2 xl:flex">
            {processSection.steps.map((step) => (
              <li key={step.number} className="flex min-w-0 flex-col xl:flex-1">
                <span className="pb-3 font-mono text-step-number text-accent-gold" aria-hidden="true">
                  {step.number}
                </span>
                <h3 className="pb-2 text-step-title text-text-strong">{step.title}</h3>
                <p className="text-step-body text-text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="text-body-sm text-text-dim">{processSection.closing}</p>
        </div>
      </div>
    </section>
  );
}
