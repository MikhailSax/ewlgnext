"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/services";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 border-t border-ink/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-start justify-between gap-4 py-5 md:py-6 text-left group"
            >
              <span className="flex items-baseline gap-3 md:gap-4">
                <span className="font-mono text-xs text-ink/40 shrink-0 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base sm:text-lg text-ink group-hover:text-brand-500 transition-colors duration-300 leading-snug">
                  {item.q}
                </span>
              </span>
              <span
                className={`shrink-0 mt-1 w-6 h-6 flex items-center justify-center text-ink/40 transition-transform duration-300 ${
                  isOpen ? "rotate-45 text-brand-500" : ""
                }`}
                aria-hidden
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-400 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 md:pb-6 pl-8 md:pl-10 pr-8 text-sm sm:text-base text-graphite leading-relaxed max-w-2xl">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
