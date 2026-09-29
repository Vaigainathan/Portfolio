"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ArrowRight, Close, Menu } from "@/components/ui/icons";
import { site } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (media.matches) close();
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [close]);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;

      const focusable = [toggleRef.current, ...panel.querySelectorAll<HTMLElement>("a")].filter(
        (node): node is HTMLElement => Boolean(node),
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector("a")?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-header-bg px-4 backdrop-blur-header md:px-8 xl:px-32">
        <div className="mx-auto flex h-header max-w-content items-center justify-between lg:px-6">
          <a href="#top" className="flex items-center gap-3" onClick={close}>
            <span className="size-2.5 rounded-pill bg-accent-gold shadow-logo-glow" aria-hidden="true" />
            <span className="text-logo text-text">{site.name}</span>
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
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
            className="hidden items-center gap-1.5 rounded-pill border border-border-strong bg-surface-2 px-3.5 py-1.5 text-nav font-medium text-text-soft lg:flex"
          >
            {site.headerCta.label}
            <ArrowRight size={9.333} className="text-text-muted" />
          </a>

          <button
            ref={toggleRef}
            type="button"
            className="flex size-tap items-center justify-center text-text lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <Close size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </header>

      {open && (
        <div
          id={menuId}
          ref={panelRef}
          className="fixed top-header right-0 bottom-0 left-0 z-40 bg-bg lg:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto flex max-w-content flex-col gap-8 px-6 pt-8">
            <ul className="flex flex-col">
              {site.nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={close}
                    className="flex min-h-tap items-center text-intro font-medium text-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={site.headerCta.href}
              onClick={close}
              className="flex min-h-tap items-center justify-center gap-1.5 rounded-pill border border-border-strong bg-surface-2 px-3.5 text-button font-medium text-text-soft"
            >
              {site.headerCta.label}
              <ArrowRight size={9.333} className="text-text-muted" />
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
