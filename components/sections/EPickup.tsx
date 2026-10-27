import { Card } from "@/components/ui/Card";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { ArrowUpRight } from "@/components/ui/icons";
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
    { label: "Built", items: project.built ?? [] },
  ];

  return (
    <section
      id="e-pickup"
      aria-labelledby="e-pickup-heading"
      className="border-y border-border bg-band px-4 py-24 md:px-8 xl:px-32"
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

          {project.links && project.links.length > 0 && (
            <div className="mt-4 flex flex-col gap-2 pt-1.5">
              {project.links.map((link) => (
                <p key={link.href} className="pb-0.5">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-tap w-fit items-center gap-1.5 text-caption font-medium text-accent-gold xl:min-h-0"
                  >
                    {link.label}
                    <ArrowUpRight size={8.125} />
                  </a>
                </p>
              ))}
            </div>
          )}
        </div>

        {project.metrics && (
          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3" data-reveal-stagger>
            {project.metrics.map((metric) => (
              <MetricCard key={metric.title} metric={metric} />
            ))}
          </div>
        )}

        <div className="flex flex-col gap-6 pt-2" data-parallax-root>
          {browser && (
            <div className="w-full" data-parallax="-16">
              <Frame image={browser} />
            </div>
          )}
          <div
            className="mx-auto grid w-full max-w-[584px] grid-cols-2 justify-items-center gap-4 md:max-w-[888px] md:grid-cols-3 md:gap-6"
            data-parallax="24"
          >
            {phones.map((image) => (
              <div key={image.src} className="w-full max-w-[280px] min-w-0">
                <Frame image={image} />
              </div>
            ))}
          </div>
        </div>

        {testimonial && (
          <div data-reveal>
            <TestimonialCard testimonial={testimonial} />
          </div>
        )}
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
      caption={image.caption}
      chromeLabel={image.chromeLabel}
    />
  );
}

function MetricCard({ metric }: { metric: ProjectMetric }) {
  const isStatus = metric.kind === "status";

  return (
    <Card tone="stat" className={`flex flex-col p-6 ${isStatus ? "gap-2" : "gap-1"}`} data-reveal-item>
      <p
        className={
          isStatus
            ? "font-mono text-eyebrow text-accent-gold uppercase"
            : "tabular-nums text-stat text-accent-gold"
        }
        {...(!isStatus ? { "data-count": "" } : {})}
      >
        {metric.value}
      </p>
      <h3 className="text-body-sm font-medium text-text">{metric.title}</h3>
      <p className="pt-1 text-card-body text-text-muted">{metric.body}</p>
    </Card>
  );
}
