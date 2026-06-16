import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApplicationForm from "@/components/ApplicationForm";
import ScrollReveal from "@/components/ScrollReveal";
import { ModeIcon } from "@/components/ModeIcons";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Услуги — EWLG | Международная логистика под задачи бизнеса",
  description:
    "Комплексные услуги в сфере международной логистики: автомобильные, авиа, морские и железнодорожные перевозки, таможенное оформление, складская обработка, агентские и финансовые услуги.",
};

const whyUs = [
  {
    title: "Оптимизация логистических затрат",
    body: "Снижаем совокупную стоимость логистики за счёт выбора эффективных маршрутов, консолидации грузов и комплексного управления цепочкой поставок.",
  },
  {
    title: "Агентские и финансовые услуги",
    body: "Сокращаем вероятность простоев, задержек, ошибок в документах и штрафных санкций благодаря профессиональному сопровождению на всех этапах.",
  },
  {
    title: "Прогнозируемые сроки доставки",
    body: "Планируем маршруты и контролируем движение груза, обеспечивая прозрачность процессов и соблюдение согласованных сроков.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 overflow-hidden">
        <div className="max-w-8xl mx-auto px-5 md:px-10">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-ink/50 mb-8 md:mb-12 animate-fadeIn">
            <Link href="/" className="hover:text-ink transition-colors">EWLG</Link>
            <span>/</span>
            <span className="text-ink">Услуги</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 animate-revealUp">
              <div className="font-mono text-xs tracking-widest text-brand-500 uppercase mb-4">
                Услуги
              </div>
              <h1 className="font-display text-[2.75rem] leading-[1.02] sm:text-6xl md:text-[5rem] md:leading-[1] text-ink tracking-tightest">
                Комплексные услуги<br />
                <span className="italic text-brand-500">под задачи бизнеса.</span>
              </h1>
            </div>
          </div>

          <ScrollReveal className="mt-10 md:mt-14 max-w-3xl">
            <p className="text-base sm:text-lg md:text-xl text-graphite leading-relaxed">
              Оказываем комплексные услуги в сфере международной логистики:
              организуем перевозки, обеспечиваем таможенное сопровождение,
              складскую обработку грузов и предоставляем сопутствующие
              финансовые решения.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-12 md:py-20 border-t border-ink/8">
        <div className="max-w-8xl mx-auto px-5 md:px-10">
          <ScrollReveal variant="stagger" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/8 border border-ink/8">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="bg-cream p-7 sm:p-8 md:p-9 group hover:bg-ink hover:text-cream transition-all duration-500 flex flex-col"
              >
                <div className="flex items-start justify-between mb-6 md:mb-8">
                  <div className="font-mono text-xs tracking-widest text-ink/40 group-hover:text-cream/50 transition-colors">
                    / {s.number}
                  </div>
                  <ModeIcon
                    iconKey={s.iconKey}
                    className="w-12 sm:w-14 text-ink/30 group-hover:text-brand-400 transition-colors duration-500"
                  />
                </div>
                <h2 className="font-display text-2xl sm:text-3xl text-ink leading-tight tracking-tightest mb-3 group-hover:text-brand-300 transition-colors duration-500">
                  {s.name}
                </h2>
                <p className="text-sm sm:text-base text-graphite group-hover:text-cream/70 mb-6 transition-colors duration-500 leading-relaxed flex-1">
                  {s.description}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-brand-500 group-hover:text-brand-300 group-hover:gap-3 transition-all">
                  Подробнее
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Why our services */}
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
              § Почему наши услуги выгодны
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tightest">
              Выгода —<br />
              <span className="italic text-brand-300">в деталях.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="stagger" className="grid sm:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-10">
            {whyUs.map((w, i) => (
              <div key={w.title} className="border-t border-cream/15 pt-6 md:pt-8">
                <div className="font-mono text-xs tracking-widest text-brand-400 mb-4 md:mb-6">
                  / 0{i + 1}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-cream leading-tight tracking-tightest mb-3 md:mb-4">
                  {w.title}
                </h3>
                <p className="text-sm text-cream/70 leading-relaxed">
                  {w.body}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <ApplicationForm />
      <Footer />
    </main>
  );
}
