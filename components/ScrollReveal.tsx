"use client";

import { useEffect, useRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Use 'stagger' for staggered child reveal, 'reveal' for the whole block. */
  variant?: "reveal" | "stagger";
  /** ms delay before reveal triggers. */
  delay?: number;
  /** Custom intersection threshold (0–1). */
  threshold?: number;
  /** Optional id for anchor links. */
  id?: string;
};

export default function ScrollReveal({
  children,
  className = "",
  variant = "reveal",
  delay = 0,
  threshold = 0.15,
  id,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => el.classList.add("is-visible"), delay);
            } else {
              el.classList.add("is-visible");
            }
            obs.unobserve(el);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, threshold]);

  const baseClass = variant === "stagger" ? "stagger" : "reveal";

  return (
    <div ref={ref} id={id} className={`${baseClass} ${className}`}>
      {children}
    </div>
  );
}
