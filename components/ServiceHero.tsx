"use client";

import Link from "next/link";
import { Service } from "@/lib/services";
import { ModeIcon } from "./ModeIcons";

export default function ServiceHero({ service }: { service: Service }) {
  return (
    <section className="relative pt-28 md:pt-36 pb-12 md:pb-20 overflow-hidden">
      <div className="max-w-8xl mx-auto px-5 md:px-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-ink/50 mb-8 md:mb-12 animate-fadeIn">
          <Link href="/" className="hover:text-ink transition-colors">EWLG</Link>
          <span>/</span>
          <Link href="/#modes" className="hover:text-ink transition-colors">Доставка</Link>
          <span>/</span>
          <span className="text-ink">{service.name}</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          <div className="lg:col-span-8 animate-revealUp">
            <div className="font-mono text-xs tracking-widest text-brand-500 uppercase mb-4">
              {service.hero.subtitle}
            </div>
            <h1 className="font-display text-[2.75rem] leading-[1.02] sm:text-6xl md:text-[5.25rem] lg:text-[6rem] md:leading-[1] text-ink tracking-tightest">
              {service.hero.headline}<br />
              <span className="italic text-brand-500">{service.hero.headlineItalic}</span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pl-6 animate-revealUp" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <ModeIcon
              iconKey={service.iconKey}
              className="w-32 sm:w-40 md:w-48 text-ink animate-floatY ml-auto"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mt-10 md:mt-14">
          <div className="lg:col-span-7 animate-revealUp" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <p className="text-base sm:text-lg md:text-xl text-graphite leading-relaxed">
              {service.hero.intro}
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 animate-revealUp" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <Link
              href="/#contact"
              className="group inline-flex items-center justify-between gap-3 w-full px-6 py-4 sm:px-7 sm:py-5 bg-ink text-cream hover:bg-brand-500 transition-colors duration-300"
            >
              <span className="font-mono text-xs tracking-widest uppercase">Запросить расчёт</span>
              <span className="transition-transform group-hover:translate-x-1.5">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Banner placeholder — replace with real photo when ready */}
      <ServiceBanner service={service} />
    </section>
  );
}

/**
 * Drop-in banner. Currently renders an abstract jade/black scene with the
 * transport icon. Replace this whole block with <Image src="/banners/auto.jpg" .../>
 * when a real photo is available.
 */
function ServiceBanner({ service }: { service: Service }) {
  return (
    <div className="mt-16 md:mt-24 relative h-[280px] sm:h-[360px] md:h-[460px] bg-ink overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#F5F2EC 1px, transparent 1px), linear-gradient(90deg, #F5F2EC 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Massive icon as decorative element */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]">
        <ModeIcon iconKey={service.iconKey} className="w-[90%] max-w-[1100px] text-cream" />
      </div>

      {/* Sparse waypoint elements */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1600 460"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <path
          d="M -50 360 Q 400 200 800 280 T 1700 180"
          stroke="#167E47"
          strokeOpacity="0.4"
          strokeWidth="1"
          strokeDasharray="3 6"
          fill="none"
        />
        <circle cx="200" cy="320" r="3" fill="#167E47" />
        <circle cx="800" cy="280" r="3" fill="#167E47" />
        <circle cx="1400" cy="220" r="3" fill="#167E47" />
      </svg>

      <div className="absolute inset-0 flex items-end">
        <div className="max-w-8xl mx-auto w-full px-5 md:px-10 pb-8 md:pb-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <div className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-brand-300 uppercase mb-2">
                · {service.tagline} · {service.nameEn} ·
              </div>
              <div className="font-display text-3xl sm:text-4xl md:text-6xl text-cream tracking-tightest">
                {service.name}
              </div>
            </div>
            <div className="font-mono text-xs text-cream/50">
              Услуга {service.number}
            </div>
          </div>
        </div>
      </div>

      {/* Small overlay note suggesting where photo can be dropped */}
      <div className="absolute top-4 right-4 font-mono text-[10px] tracking-widest text-cream/30 uppercase">
        EWLG · {service.nameEn.toUpperCase()}-BANNER
      </div>
    </div>
  );
}
