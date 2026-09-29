import { Card } from "@/components/ui/Card";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TagChip } from "@/components/ui/TagChip";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { projects, type ProjectImage, type ProjectMetric } from "@/content/projects";
import { testimonials } from "@/content/testimonials";

const project = projects.find((p) => p.slug === "e-pickup");

export function EPickup() {
  if (!project) return null;

  const testimonial = testimonials.find((t) => t.id === project.testimonial);
  const [browser, ...phones] = project.images;
  const [summaryBefore, summaryAfter] = project.summary.split(project.name);
  const details = [
    { label: "Role", items: [project.role] },
    { label: "Stack", items: project.stack },
    { label: "Built", items: project.built },
  ];

  return (
    <section
      id="e-pickup"
      aria-labelledby="e-pickup-heading"
      className="border-y border-border bg-band px-32 py-24"
    >
      <div className="mx-auto flex max-w-content flex-col gap-12 px-6">
        <div className="flex max-w-2xl flex-col">
          <SectionLabel dot>{project.category}</SectionLabel>
          <h2 id="e-pickup-heading" className="mt-3 text-heading text-text-strong">
            {project.heading}
          </h2>
          <p className="mt-4 text-intro text-text-soft">
            {summaryBefore}
            <strong className="font-semibold text-text-strong">{project.name}</strong>
            {summaryAfter}
          </p>
          <p className="mt-2 text-body text-text-dim">{project.body}</p>

          <div className="mt-6 flex flex-col gap-4">
            {details.map((group) => (
              <div key={group.label} className="flex flex-col gap-2">
                <p className="font-mono text-label text-text-muted uppercase">{group.label}</p>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex">
                      <TagChip>{item}</TagChip>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {project.metrics && (
          <div className="grid grid-cols-3 items-stretch gap-5">
            {project.metrics.map((metric) => (
              <MetricCard key={metric.title} metric={metric} />
            ))}
          </div>
        )}

        <div className="grid grid-cols-12 gap-6 pt-2">
          {browser && (
            <div className="col-span-7 self-start">
              <Frame image={browser} />
            </div>
          )}
          <div className="col-span-5 flex gap-4">
            {phones.map((image) => (
              <div key={image.src} className="flex-1">
                <Frame image={image} />
              </div>
            ))}
          </div>
        </div>

        {testimonial && <TestimonialCard testimonial={testimonial} />}
      </div>
    </section>
  );
}

function Frame({ image }: { image: ProjectImage }) {
  return (
    <DeviceFrame
      variant={image.frame}
      src={image.src}
      alt={image.alt}
      caption={image.caption ?? ""}
      chromeLabel={image.chromeLabel}
    />
  );
}

function MetricCard({ metric }: { metric: ProjectMetric }) {
  const isStatus = metric.kind === "status";

  return (
    <Card tone="stat" className={`flex flex-col p-6 ${isStatus ? "gap-2" : "gap-1"}`}>
      <p
        className={
          isStatus
            ? "font-mono text-eyebrow text-accent-gold uppercase"
            : "text-stat text-accent-gold"
        }
      >
        {metric.value}
      </p>
      <h3 className="text-body-sm font-medium text-text">{metric.title}</h3>
      <p className="pt-1 text-card-body text-text-muted">{metric.body}</p>
    </Card>
  );
}
