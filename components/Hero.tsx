"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const destinations = [
  { name: "Россия", code: "RU", coords: "55.7°N · 37.6°E" },
  { name: "Беларусь", code: "BY", coords: "53.9°N · 27.5°E" },
  { name: "Казахстан", code: "KZ", coords: "48.0°N · 66.9°E" },
  { name: "ОАЭ", code: "AE", coords: "25.2°N · 55.3°E" },

];

const modes = ["Авто", "Авиа", "ЖД", "Море"];

export default function Hero() {
  const [destIdx, setDestIdx] = useState(0);
  const [modeIdx, setModeIdx] = useState(0);

  useEffect(() => {
    const t1 = setInterval(() => setDestIdx((i) => (i + 1) % destinations.length), 2800);
    const t2 = setInterval(() => setModeIdx((i) => (i + 1) % modes.length), 1900);
    return () => { clearInterval(t1); clearInterval(t2); };
  }, []);

  const dest = destinations[destIdx];

  return (
    <section className="relative pt-28 md:pt-36 pb-0 overflow-hidden">
      {/* Decorative arc */}
      <RouteArc />

      <div className="max-w-8xl mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-8 lg:gap-10 items-end relative">
        <div className="lg:col-span-7 animate-revealUp">
          <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.18em] uppercase text-ink/60 mb-6 md:mb-8">
            <span className="w-8 h-px bg-brand-500" />
            Международная логистика · 3 года на рынке
          </div>

          <h1 className="font-display text-[2.75rem] leading-[1.02] sm:text-6xl md:text-[5.25rem] lg:text-[6rem] md:leading-[1] text-ink tracking-tightest">
            Груз доезжает.<br />
            <span className="italic text-brand-500">Всегда.</span>
          </h1>

          {/* Mode + destination rotating */}
          <div className="mt-8 md:mt-10 space-y-3">
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.18em] text-ink/50 uppercase">
                Способ
              </span>
              <div className="relative h-[1.5em] overflow-hidden inline-flex items-center">
                <span
                  key={modes[modeIdx]}
                  className="font-display text-3xl sm:text-3xl md:text-xl text-ink italic animate-slideUp inline-block leading-none pr-1"
                >
                  {modes[modeIdx]}
                </span>
              </div>
            </div>
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.18em] text-ink/50 uppercase">
                Направление
              </span>
              <div className="relative h-[1.5em] overflow-hidden inline-flex items-center">
                <span
                  key={dest.code}
                  className="font-display text-3xl sm:text-3xl md:text-3xl text-brand-500 italic animate-slideUp inline-block leading-none pr-1"
                >
                  {dest.name}
                </span>
              </div>
              <span className="font-mono text-[10px] sm:text-xs text-ink/40 hidden sm:inline">
                {dest.coords}
              </span>
            </div>
          </div>

          <p className="mt-8 md:mt-10 max-w-xl text-base sm:text-lg text-graphite leading-relaxed">
            Комплексная логистика для стабильных поставок в Россию, страны СНГ,
            Европу и ОАЭ. Выстраиваем эффективные маршруты, оптимизируем сроки
            и стоимость, берём на себя оформление документов и контроль
            перевозки на каждом этапе.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 items-stretch sm:items-center">
            <Link
              href="#contact"
              className="group inline-flex items-center justify-between sm:justify-start gap-3 px-6 py-4 sm:px-7 sm:py-4 bg-ink text-cream hover:bg-brand-500 transition-colors duration-300"
            >
              <span>Рассчитать перевозку</span>
              <span className="transition-transform group-hover:translate-x-1.5">→</span>
            </Link>
            <Link
              href="#modes"
              className="group inline-flex items-center justify-between sm:justify-start gap-3 px-6 py-4 sm:px-7 sm:py-4 bg-ink text-cream hover:bg-brand-500 transition-colors duration-300"
            >
              <span>Способы доставки</span>
              <span className="opacity-50">→</span>
            </Link>
          </div>
        </div>

        {/* Right: manifest card */}
        <div className="lg:col-span-5 lg:pl-8 animate-revealUp" style={{ animationDelay: "0.15s", opacity: 0 }}>
          <ManifestCard activeIdx={destIdx} />
        </div>
      </div>

      {/* Banner strip + ticker */}
      <div className="mt-16 md:mt-24">
        <BannerStrip />
        <Ticker />
      </div>
    </section>
  );
}

function ManifestCard({ activeIdx }: { activeIdx: number }) {
  return (
    <div className="border border-ink/10 bg-cream/40 backdrop-blur-sm p-5 sm:p-6 md:p-8 relative">
      <div className="absolute top-3 right-3 font-mono text-[10px] tracking-widest text-ink/40 uppercase">
        EWLG · MFT-024
      </div>

      <div className="font-mono text-[10px] tracking-widest text-ink/50 uppercase mb-5 md:mb-6">
        Активные направления
      </div>

      <div className="space-y-4 md:space-y-5">
        {destinations.map((d, i) => {
          const active = i === activeIdx;
          return (
            <div
              key={d.code}
              className={`flex items-center justify-between gap-4 pb-4 md:pb-5 border-b border-ink/8 last:border-0 last:pb-0 transition-all duration-500 ${
                active ? "opacity-100" : "opacity-60"
              }`}
            >
              <div className="flex items-center gap-3 md:gap-4">
                <span className="font-mono text-[11px] text-ink/40 w-6">0{i + 1}</span>
                <div>
                  <div className="font-display text-xl sm:text-2xl text-ink leading-none">{d.name}</div>
                  <div className="font-mono text-[10px] text-ink/40 mt-1">{d.coords}</div>
                </div>
              </div>
              <span
                className={`font-mono text-[10px] tracking-widest uppercase flex items-center gap-2 transition-colors ${
                  active ? "text-brand-500" : "text-ink/30"
                }`}
              >
                <span className="relative inline-flex w-1.5 h-1.5">
                  <span
                    className={`absolute inset-0 rounded-full ${
                      active ? "bg-brand-500" : "bg-ink/20"
                    }`}
                  />
                  {active && (
                    <span className="absolute inset-0 rounded-full bg-brand-500 animate-ping" />
                  )}
                </span>
                {active ? "везём" : "онлайн"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Banner strip — large abstract visual band that sits below the hero.
 * Drop a real photograph in here later: replace the SVG with <Image src="/banner.jpg" .../>.
 */
function BannerStrip() {
  return (
    <div className="relative h-[260px] sm:h-[340px] md:h-[420px] bg-ink overflow-hidden">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#F5F2EC 1px, transparent 1px), linear-gradient(90deg, #F5F2EC 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Abstract route SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1600 420"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="brandFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#167E47" stopOpacity="0" />
            <stop offset="0.5" stopColor="#167E47" stopOpacity="1" />
            <stop offset="1" stopColor="#167E47" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Long curved route */}
        <path
          d="M -50 320 Q 300 100 600 200 T 1200 140 T 1700 80"
          stroke="#F5F2EC"
          strokeOpacity="0.25"
          strokeWidth="1.5"
          strokeDasharray="6 10"
          fill="none"
          className="animate-drawPath"
          style={{ strokeDasharray: "1000", strokeDashoffset: "1000" }}
        />
        <path
          d="M -50 320 Q 300 100 600 200 T 1200 140 T 1700 80"
          stroke="url(#brandFade)"
          strokeWidth="2"
          fill="none"
        />

        {/* Waypoints */}
        {[
          { x: 160, y: 230, label: "CAN" },
          { x: 460, y: 195, label: "DXB" },
          { x: 800, y: 200, label: "ALA" },
          { x: 1140, y: 160, label: "MOW" },
          { x: 1440, y: 105, label: "MSQ" },
        ].map((p, i) => (
          <g key={p.label} style={{ animation: `fadeIn 0.6s ease-out ${0.4 + i * 0.2}s forwards`, opacity: 0 }}>
            <circle cx={p.x} cy={p.y} r="20" fill="#0A0A0A" stroke="#167E47" strokeWidth="1.5" />
            <circle cx={p.x} cy={p.y} r="4" fill="#167E47" />
            <text
              x={p.x}
              y={p.y - 32}
              textAnchor="middle"
              fill="#F5F2EC"
              fontSize="11"
              fontFamily="JetBrains Mono, monospace"
              letterSpacing="2"
            >
              {p.label}
            </text>
          </g>
        ))}
      </svg>

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-end">
        <div className="max-w-8xl mx-auto w-full px-5 md:px-10 pb-8 md:pb-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <div className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-brand-300 uppercase mb-3">
                · Активный маршрут ·
              </div>
              <div className="font-display italic text-3xl sm:text-4xl md:text-6xl text-cream tracking-tightest">
                Китай → Россия
              </div>
            </div>
            <div className="font-mono text-xs text-cream/50 flex flex-col sm:items-end gap-1">
              <span>Контейнер MSC-2241</span>
              <span>ETA · 16 дней</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Endless ticker with destinations and modes — gives the page motion. */
function Ticker() {
  const items = [
    "Китай", "·", "Гуанчжоу", "·", "Иу", "·", "Шанхай", "·",
    "Россия", "·", "Москва", "·", "Санкт-Петербург", "·", "Казань", "·",
    "Беларусь", "·", "Минск", "·", "Брест", "·", "Гомель", "·",
    "Казахстан", "·", "Алматы", "·", "Астана"
  ];
  return (
    <div className="bg-ink text-cream py-5 md:py-6 border-y border-ink/30 overflow-hidden marquee-mask">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((it, i) => (
          <span
            key={i}
            className={`font-display text-2xl md:text-4xl px-4 md:px-6 ${
              i % 4 === 1 ? "text-brand-400" : "text-cream"
            } ${i % 2 === 0 ? "italic" : ""}`}
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

function RouteArc() {
  return (
    <svg
      className="absolute -right-32 top-10 w-[60%] max-w-[800px] opacity-[0.06] pointer-events-none hidden md:block"
      viewBox="0 0 800 500"
      fill="none"
      aria-hidden
    >
      <path
        d="M 20 400 Q 200 100 400 250 T 780 80"
        stroke="#0A0A0A"
        strokeWidth="1.5"
        strokeDasharray="4 8"
        fill="none"
      />
      <circle cx="20" cy="400" r="6" fill="#0A0A0A" />
      <circle cx="400" cy="250" r="4" fill="#0A0A0A" />
      <circle cx="780" cy="80" r="6" fill="#167E47" />
    </svg>
  );
}
