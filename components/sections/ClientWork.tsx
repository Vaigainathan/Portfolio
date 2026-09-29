import { ArrowUpRight } from "@/components/ui/icons";
import { ProjectBlock } from "@/components/ui/ProjectBlock";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { archive, clientWork, clientWorkSlugs, projects, type Project } from "@/content/projects";
import { testimonials } from "@/content/testimonials";

const blocks = clientWorkSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((project): project is Project => project !== undefined);

export function ClientWork() {
  return (
    <section id="work" aria-labelledby="work-heading">
      <div className="mx-auto flex max-w-content flex-col gap-14 px-6 py-24">
        <div className="flex flex-col gap-2">
          <SectionLabel>{clientWork.label}</SectionLabel>
          <h2 id="work-heading" className="text-heading-sm font-semibold text-text-strong">
            {clientWork.heading}
          </h2>
        </div>

        <div className="flex flex-col gap-16">
          {blocks.map((project, index) => (
            <ProjectBlock
              key={project.slug}
              project={project}
              testimonial={testimonials.find((t) => t.id === project.testimonial)}
              linkLabel={clientWork.linkLabel}
              previewFirst={index % 2 === 1}
            />
          ))}
        </div>

        {archive.length > 0 && (
          <div className="flex flex-col gap-6 border-t border-border pt-10">
            <SectionLabel tone="muted">{clientWork.archiveLabel}</SectionLabel>
            <ul>
              {archive.map((item, index) => (
                <li
                  key={item.name}
                  className={`hover-row-bright flex flex-col gap-2 py-4 xl:flex-row xl:items-center xl:justify-between ${index > 0 ? "border-t border-border" : ""}`}
                >
                  <p className="flex flex-col gap-1 xl:flex-row xl:items-baseline xl:gap-4">
                    <span className="text-body-sm font-medium text-text-strong">{item.name}</span>
                    <span className="text-caption text-text-dim">{item.description}</span>
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-caption text-text-dim">{item.tags.join(" · ")}</span>
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${clientWork.archiveLinkLabel} ${item.name}`}
                        className="flex min-h-tap items-center gap-1 text-caption text-text-muted xl:min-h-0"
                      >
                        {clientWork.archiveLinkLabel}
                        <ArrowUpRight size={7.583} />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
