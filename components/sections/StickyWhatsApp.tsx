"use client";

import { useEffect, useState } from "react";
import { Message } from "@/components/ui/icons";
import { contact, whatsappHref } from "@/content/site";

export function StickyWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={contact.whatsapp}
      className="fixed right-fab-right bottom-fab-bottom z-30 flex size-14 items-center justify-center rounded-pill bg-accent-action text-accent-action-text shadow-action md:hidden"
    >
      <Message size={22} />
    </a>
  );
}
