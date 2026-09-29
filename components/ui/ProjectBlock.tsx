import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { ArrowUpRight } from "@/components/ui/icons";
import { TagChip } from "@/components/ui/TagChip";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import type { Project } from "@/content/projects";
import type { Testimonial } from "@/content/testimonials";

type ProjectBlockProps = {
  project: Project;
  testimonial?: Testimonial;
  linkLabel: string;
  previewFirst?: boolean;
};

export function ProjectBlock({ project, testimonial, linkLabel, previewFirst = false }: ProjectBlockProps) {
  const [image] = project.images;
  const tags = [project.role, ...project.stack];

  return (
    <article className="grid grid-cols-12 items-stretch overflow-hidden rounded-panel border border-border-project bg-surface-project">
      <div className={`col-span-5 flex flex-col justify-between p-10 ${previewFirst ? "order-last" : ""}`}>
        <div className="flex flex-col gap-3 pt-1.5 pb-6">
          <p className="font-mono text-caption text-text-muted">{project.category}</p>
          <h3 className="text-heading-sm font-bold text-text-strong">{project.name}</h3>
          <p className="pt-1 pb-3 text-body-lg text-text-muted">{project.summary}</p>
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={tag} className="flex">
                <TagChip>{tag}</TagChip>
              </li>
            ))}
          </ul>
          {testimonial && <TestimonialCard testimonial={testimonial} variant="embedded" />}
        </div>

        {project.liveUrl && (
          <p className="pt-1.5 pb-0.5">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-1.5 text-caption font-medium text-accent-gold"
            >
              {linkLabel}
              <ArrowUpRight size={8.125} />
            </a>
          </p>
        )}
      </div>

      {image && (
        <div
          className={`col-span-7 flex items-center justify-center border-border bg-surface-preview p-8 ${
            previewFirst ? "border-r" : "border-l"
          }`}
        >
          <DeviceFrame variant="screen" src={image.src} alt={image.alt} caption={image.caption} />
        </div>
      )}
    </article>
  );
}
