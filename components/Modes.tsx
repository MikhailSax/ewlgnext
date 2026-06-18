import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { ModeIcon } from "./ModeIcons";
import { services } from "@/lib/services";

export default function Modes() {
  return (
      <section id="modes" className="pt-20 md:pt-32 pb-[3.75rem] md:pb-24 bg-ink text-cream relative overflow-hidden">
      {/* grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#F5F2EC 1px, transparent 1px), linear-gradient(90deg, #F5F2EC 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-8xl mx-auto px-5 md:px-10 relative">
        <ScrollReveal className="mb-14 md:mb-20 max-w-3xl">
          <div className="font-mono text-xs tracking-widest text-brand-400 uppercase mb-4">
            § Основные услуги
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1.02] tracking-tightest">
            Логистика<br />
            <span className="italic text-brand-300">под ключ.</span>
          </h2>
          <p className="mt-6 md:mt-8 text-base sm:text-lg text-cream/70 leading-relaxed">
            Предлагаем комплексные логистические и внешнеторговые решения для
            доставки, хранения и сопровождения грузов с учётом сроков, бюджета,
            маршрута и особенностей товара.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="stagger" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-10 gap-y-10 md:gap-y-14">
          {services.map((m) => (
            <Link
              key={m.slug}
              href={`/services/${m.slug}`}
              className="border-t border-cream/15 pt-6 md:pt-7 group block focus:outline-none"
            >
              <div className="flex items-start justify-between mb-5 md:mb-6">
                <div className="font-mono text-xs tracking-widest text-cream/40">
                  / {m.number}
                </div>
                <ModeIcon
                  iconKey={m.iconKey}
                  className="w-12 sm:w-14 text-cream/30 group-hover:text-brand-400 transition-colors duration-500 group-hover:animate-floatY"
                />
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-cream leading-tight tracking-tightest mb-3 md:mb-4 group-hover:text-brand-300 transition-colors duration-500">
                {m.name}
              </h3>

              <p className="text-cream/75 leading-relaxed mb-5 max-w-md text-sm sm:text-base">
                {m.description}
              </p>

              <ul className="space-y-2 mb-6">
                {m.bulletPoints.map((p) => (
                  <li key={p} className="text-xs sm:text-sm text-cream/60 flex items-center gap-3">
                    <span className="w-1 h-1 bg-brand-400 rounded-full shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-brand-300 group-hover:gap-3 transition-all duration-300">
                Подробнее
                <span className="transition-transform group-hover:translate-x-1.5">→</span>
              </div>
            </Link>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
