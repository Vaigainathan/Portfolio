"use client";

import "lenis/dist/lenis.css";
import Lenis from "lenis";
import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { isCoarsePointer, LENIS_DURATION, prefersReducedMotion } from "@/lib/motion";

export function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion() || isCoarsePointer()) return;

    const lenis = new Lenis({
      duration: LENIS_DURATION,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      anchors: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    let destroyed = false;
    const teardown = () => {
      if (destroyed) return;
      destroyed = true;
      gsap.ticker.remove(tick);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.destroy();
    };

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)");
    const onChange = () => {
      if (motion.matches || coarse.matches) teardown();
    };
    motion.addEventListener("change", onChange);
    coarse.addEventListener("change", onChange);

    return () => {
      motion.removeEventListener("change", onChange);
      coarse.removeEventListener("change", onChange);
      teardown();
    };
  }, []);

  return null;
}
