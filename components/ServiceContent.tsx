import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import FaqAccordion from "./FaqAccordion";
import { Service, services } from "@/lib/services";
import { ModeIcon } from "./ModeIcons";

export default function ServiceContent({ service }: { service: Service }) {
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Advantages */}
      <section className="py-20 md:py-32 border-t border-ink/8">
        <div className="max-w-8xl mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mb-12 md:mb-16">
            <ScrollReveal className="lg:col-span-5">
              <div className="font-mono text-xs tracking-widest text-brand-500 uppercase mb-4">
                § Преимущества услуги
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.02] tracking-tightest">
                Почему это<br />
                <span className="italic text-brand-500">удобно вам.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150} className="lg:col-span-6 lg:col-start-7 self-end">
              <p className="text-base sm:text-lg text-graphite leading-relaxed">
                {service.hero.intro}
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="stagger" className="grid sm:grid-cols-2 gap-px bg-ink/8">
            {service.advantages.map((c, i) => (
              <div key={c.title} className="bg-cream p-7 sm:p-8 md:p-10 group hover:bg-jade-50 transition-colors duration-500">
                <div className="font-mono text-xs tracking-widest text-ink/40 mb-5 md:mb-6">
                  → {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-ink leading-tight tracking-tightest mb-3 md:mb-4 group-hover:text-brand-500 transition-colors duration-500">
                  {c.title}
                </h3>
                <p className="text-sm sm:text-base text-graphite leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Process — only when defined */}
      {service.process && service.process.length > 0 && (
        <section className="py-20 md:py-32 bg-ink text-cream relative overflow-hidden">
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
                § Как это работает
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tightest">
                От запроса<br />
                <span className="italic text-brand-300">до получателя.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="stagger" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-12">
              {service.process.map((p) => (
                <div key={p.step} className="border-t border-cream/15 pt-6 md:pt-8">
                  <div className="font-mono text-xs tracking-widest text-brand-400 mb-4 md:mb-6">
                    / {p.step}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-cream leading-none tracking-tightest mb-3 md:mb-4">
                    {p.title}
                  </h3>
                  <p className="text-sm text-cream/70 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Facts — only when defined */}
      {service.facts && service.facts.length > 0 && (
        <section className="py-20 md:py-32 border-t border-ink/8">
          <div className="max-w-8xl mx-auto px-5 md:px-10">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
              <ScrollReveal className="lg:col-span-5">
                <div className="font-mono text-xs tracking-widest text-brand-500 uppercase mb-4">
                  § Коротко
                </div>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.02] tracking-tightest">
                  Главное<br />
                  <span className="italic text-brand-500">об услуге.</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal
                variant="stagger"
                delay={150}
                className="lg:col-span-6 lg:col-start-7 grid grid-cols-1 sm:grid-cols-3 gap-px bg-ink/10"
              >
                {service.facts.map((f) => (
                  <div key={f.label} className="bg-cream p-6 sm:p-8">
                    <div className="flex items-baseline gap-2 mb-3 md:mb-4">
                      <span className="font-display text-4xl sm:text-5xl text-ink leading-none tracking-tightest">
                        {f.value}
                      </span>
                      {f.unit && (
                        <span className="font-mono text-xs text-brand-500 uppercase tracking-widest">
                          {f.unit}
                        </span>
                      )}
                    </div>
                    <div className="text-xs sm:text-sm text-graphite leading-snug">
                      {f.label}
                    </div>
                  </div>
                ))}
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 md:py-32 border-t border-ink/8 bg-paper">
        <div className="max-w-8xl mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <ScrollReveal className="lg:col-span-4">
              <div className="font-mono text-xs tracking-widest text-brand-500 uppercase mb-4">
                § Вопросы и ответы
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.02] tracking-tightest">
                Частые<br />
                <span className="italic text-brand-500">вопросы.</span>
              </h2>
              <p className="mt-6 text-base text-graphite leading-relaxed max-w-sm">
                Не нашли ответ? Напишите нам — менеджер подскажет по вашему
                грузу и маршруту.
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex items-center gap-2 text-ink link-underline"
              >
                Задать вопрос →
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={150} className="lg:col-span-7 lg:col-start-6">
              <FaqAccordion items={service.faq} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 md:py-32 border-t border-ink/8">
        <div className="max-w-8xl mx-auto px-5 md:px-10">
          <ScrollReveal className="mb-12 md:mb-16">
            <div className="font-mono text-xs tracking-widest text-brand-500 uppercase mb-4">
              § Ещё услуги
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.02] tracking-tightest">
              Смотрите<br />
              <span className="italic text-brand-500">также.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="stagger" className="grid sm:grid-cols-3 gap-px bg-ink/8">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="bg-cream p-6 sm:p-8 group hover:bg-ink hover:text-cream transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="font-mono text-xs tracking-widest text-ink/40 group-hover:text-cream/50 transition-colors">
                    / {s.number}
                  </div>
                  <ModeIcon
                    iconKey={s.iconKey}
                    className="w-10 sm:w-12 text-ink/30 group-hover:text-brand-400 transition-colors duration-500"
                  />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-ink leading-tight tracking-tightest mb-3 group-hover:text-brand-300 transition-colors duration-500">
                  {s.name}
                </h3>
                <p className="text-sm text-graphite group-hover:text-cream/70 mb-6 transition-colors duration-500 leading-relaxed">
                  {s.description}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase group-hover:gap-3 transition-all">
                  Перейти
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
