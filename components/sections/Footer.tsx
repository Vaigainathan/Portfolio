import { footer } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-footer px-4 pt-14 pb-14 md:px-8 xl:px-32" data-reveal>
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-6 px-2 md:px-4 xl:flex-row xl:items-center xl:px-6">
        <div className="flex flex-col gap-1.5">
          <p className="text-body-sm font-semibold text-text-strong">{footer.name}</p>
          <p className="text-caption text-text-dim">{footer.tagline}</p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <ul className="flex flex-wrap items-center gap-6">
            {footer.links.map((link) => {
              const isEmail = link.href.startsWith("mailto:");
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(!isEmail && { target: "_blank", rel: "noopener noreferrer" })}
                    className="flex min-h-tap items-center text-caption font-medium text-text-muted xl:min-h-0"
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <span className="text-caption font-medium text-text-separator" aria-hidden="true">
            •
          </span>
          <p className="text-caption text-text-dim">{footer.legal}</p>
        </div>
      </div>
    </footer>
  );
}
