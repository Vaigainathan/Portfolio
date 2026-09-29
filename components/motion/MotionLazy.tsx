"use client";

import { useEffect, useState, type ComponentType } from "react";

export function MotionLazy() {
  const [parts, setParts] = useState<{
    Smooth: ComponentType;
    Init: ComponentType;
  } | null>(null);

  useEffect(() => {
    let cancelled = false;
    let idleId = 0;
    let timer = 0;

    const boot = () => {
      void Promise.all([import("./SmoothScroll"), import("./InitMotion")]).then(([smooth, init]) => {
        if (!cancelled) {
          setParts({ Smooth: smooth.SmoothScroll, Init: init.InitMotion });
        }
      });
    };

    const schedule = () => {
      if (typeof requestIdleCallback === "function") {
        idleId = requestIdleCallback(boot, { timeout: 2500 });
      } else {
        timer = window.setTimeout(boot, 1500);
      }
    };

    if (document.readyState === "complete") {
      schedule();
    } else {
      window.addEventListener("load", schedule, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", schedule);
      if (idleId) cancelIdleCallback(idleId);
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  if (!parts) return null;

  return (
    <>
      <parts.Smooth />
      <parts.Init />
    </>
  );
}
