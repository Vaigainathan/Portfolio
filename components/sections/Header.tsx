import { ArrowRight } from "@/components/ui/icons";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-header-bg px-32 backdrop-blur-header">
      <div className="mx-auto flex h-header max-w-content items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3">
          <span
            className="size-2.5 rounded-pill bg-accent-gold shadow-logo-glow"
            aria-hidden="true"
          />
          <span className="text-logo text-text">{site.name}</span>
        </a>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-7">
            {site.nav.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-nav text-text-muted">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={site.headerCta.href}
          className="flex items-center gap-1.5 rounded-pill border border-border-strong bg-surface-2 px-3.5 py-1.5 text-nav font-medium text-text-soft"
        >
          {site.headerCta.label}
          <ArrowRight size={9.333} className="text-text-muted" />
        </a>
      </div>
    </header>
  );
}
