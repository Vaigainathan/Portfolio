import { footer } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-footer px-32 pt-14 pb-14">
      <div className="mx-auto flex max-w-content items-center justify-between px-6">
        <div className="flex flex-col gap-1.5">
          <p className="text-body-sm font-semibold text-text-strong">{footer.name}</p>
          <p className="text-caption text-text-dim">{footer.tagline}</p>
        </div>

        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {footer.links.map((link) => {
              const isEmail = link.href.startsWith("mailto:");
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(!isEmail && { target: "_blank", rel: "noopener noreferrer" })}
                    className="text-caption font-medium text-text-muted"
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
