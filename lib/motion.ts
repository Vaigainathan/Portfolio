export const DURATION = 0.7;
export const EASE = "power3.out";
export const STAGGER = 0.08;
export const TRIGGER_START = "top 85%";
export const Y = 20;
export const HEADER_SCROLL = 80;
export const PARALLAX = 40;
export const MAGNETIC = 0.22;
export const LENIS_DURATION = 1.1;

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isCoarsePointer() {
  return window.matchMedia("(pointer: coarse)").matches;
}
