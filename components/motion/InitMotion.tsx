"use client";

import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import {
  DURATION,
  EASE,
  HEADER_SCROLL,
  MAGNETIC,
  prefersReducedMotion,
  STAGGER,
  TRIGGER_START,
  Y,
} from "@/lib/motion";

const fadeFrom = { opacity: 0, y: Y };
const fadeTo = { opacity: 1, y: 0, duration: DURATION, ease: EASE };

export function InitMotion() {
  useGSAP(() => {
    if (prefersReducedMotion()) return;

    const cleanups: Array<() => void> = [];

    const shade = document.querySelector<HTMLElement>("[data-header-shade]");
    if (shade) {
      let shown = window.scrollY >= HEADER_SCROLL;
      gsap.set(shade, { opacity: shown ? 1 : 0 });

      const onScroll = () => {
        const next = window.scrollY >= HEADER_SCROLL;
        if (next === shown) return;
        shown = next;
        gsap.to(shade, {
          opacity: next ? 1 : 0,
          duration: DURATION,
          ease: EASE,
          overwrite: true,
        });
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", onScroll));
    }

    const maskLines = gsap.utils.toArray<HTMLElement>("[data-mask-line]");
    if (maskLines.length > 0) {
      gsap.set(maskLines, { yPercent: 100 });
      gsap.to(maskLines, {
        yPercent: 0,
        duration: DURATION,
        ease: EASE,
        stagger: STAGGER,
      });
    }

    const headlineDone = maskLines.length > 0 ? DURATION + STAGGER : 0;

    const heroAfter = gsap.utils.toArray<HTMLElement>("[data-hero-after]");
    if (heroAfter.length > 0) {
      gsap.set(heroAfter, fadeFrom);
      gsap.to(heroAfter, { ...fadeTo, delay: headlineDone, stagger: STAGGER });
    }

    const proofs = gsap.utils.toArray<HTMLElement>("[data-hero-proof]");
    if (proofs.length > 0) {
      gsap.set(proofs, fadeFrom);
      gsap.to(proofs, {
        ...fadeTo,
        delay: headlineDone + STAGGER * 2,
        stagger: STAGGER,
      });
    }

    document.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach((parent) => {
      const items = parent.querySelectorAll<HTMLElement>("[data-reveal-item]");
      if (items.length === 0) return;
      gsap.set(items, fadeFrom);
      gsap.to(items, {
        ...fadeTo,
        stagger: STAGGER,
        scrollTrigger: {
          trigger: parent,
          start: TRIGGER_START,
          once: true,
        },
      });
    });

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      const delay = Number(el.dataset.delay) || 0;
      gsap.set(el, fadeFrom);
      gsap.to(el, {
        ...fadeTo,
        delay,
        scrollTrigger: {
          trigger: el,
          start: TRIGGER_START,
          once: true,
        },
      });
    });

    document.querySelectorAll<HTMLElement>("[data-scale-in]").forEach((el) => {
      gsap.set(el, { scale: 1.02 });
      gsap.to(el, {
        scale: 1,
        duration: DURATION,
        ease: EASE,
        scrollTrigger: {
          trigger: el.closest("[data-reveal]") ?? el,
          start: TRIGGER_START,
          once: true,
        },
      });
    });

    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
      const original = el.textContent ?? "";
      const match = original.match(/^(\d+)(.*)$/);
      if (!match) return;

      const target = Number(match[1]);
      const suffix = match[2];
      const width = el.getBoundingClientRect().width;
      el.style.minWidth = `${width}px`;

      const counter = { val: 0 };

      ScrollTrigger.create({
        trigger: el,
        start: TRIGGER_START,
        once: true,
        onEnter: () => {
          el.textContent = `0${suffix}`;
          gsap.to(counter, {
            val: target,
            duration: DURATION,
            ease: EASE,
            onUpdate: () => {
              el.textContent = `${Math.round(counter.val)}${suffix}`;
            },
          });
        },
      });
    });

    const parallaxMq = window.matchMedia("(min-width: 1024px)");
    const parallaxEls = gsap.utils.toArray<HTMLElement>("[data-parallax]");
    const parallaxRoot = document.querySelector("[data-parallax-root]");
    const parallaxTweens: gsap.core.Tween[] = [];

    const syncParallax = () => {
      parallaxTweens.forEach((tween) => tween.kill());
      parallaxTweens.length = 0;
      gsap.set(parallaxEls, { y: 0 });
      if (!parallaxMq.matches) return;

      parallaxEls.forEach((el) => {
        const amount = Number(el.dataset.parallax);
        if (!Number.isFinite(amount)) return;
        parallaxTweens.push(
          gsap.to(el, {
            y: amount,
            ease: "none",
            scrollTrigger: {
              trigger: parallaxRoot ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }),
        );
      });
    };

    syncParallax();
    parallaxMq.addEventListener("change", syncParallax);
    cleanups.push(() => {
      parallaxMq.removeEventListener("change", syncParallax);
      parallaxTweens.forEach((tween) => tween.kill());
      gsap.set(parallaxEls, { y: 0 });
    });

    const magneticMq = window.matchMedia("(min-width: 1024px)");
    const fineMq = window.matchMedia("(hover: hover) and (pointer: fine)");

    const bindMagnetic = () => {
      if (!(magneticMq.matches && fineMq.matches)) return () => undefined;

      const unbind: Array<() => void> = [];
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        const onMove = (event: PointerEvent) => {
          const rect = el.getBoundingClientRect();
          const x = (event.clientX - (rect.left + rect.width / 2)) * MAGNETIC;
          const y = (event.clientY - (rect.top + rect.height / 2)) * MAGNETIC;
          gsap.to(el, { x, y, duration: 0.35, ease: EASE, overwrite: true });
        };
        const onLeave = () => {
          gsap.to(el, { x: 0, y: 0, duration: DURATION, ease: EASE, overwrite: true });
        };

        el.addEventListener("pointermove", onMove);
        el.addEventListener("pointerleave", onLeave);
        unbind.push(() => {
          el.removeEventListener("pointermove", onMove);
          el.removeEventListener("pointerleave", onLeave);
          gsap.set(el, { x: 0, y: 0 });
        });
      });

      return () => unbind.forEach((fn) => fn());
    };

    let unbindMagnetic = bindMagnetic();
    const syncMagnetic = () => {
      unbindMagnetic();
      unbindMagnetic = bindMagnetic();
    };
    magneticMq.addEventListener("change", syncMagnetic);
    fineMq.addEventListener("change", syncMagnetic);
    cleanups.push(() => {
      magneticMq.removeEventListener("change", syncMagnetic);
      fineMq.removeEventListener("change", syncMagnetic);
      unbindMagnetic();
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  });

  return null;
}
