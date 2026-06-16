import ScrollReveal from "./ScrollReveal";
import { keyAdvantages } from "@/lib/content";

export default function Advantages() {
  return (
    <section id="advantages" className="py-20 md:py-32 border-t border-ink/8">
      <div className="max-w-8xl mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mb-12 md:mb-16">
          <ScrollReveal className="lg:col-span-5">
            <div className="font-mono text-xs tracking-widest text-brand-500 uppercase mb-4">
              § Ключевые преимущества
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.02] tracking-tightest">
              Почему<br />
              <span className="italic text-brand-500">выбирают нас.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150} className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-base sm:text-lg text-graphite leading-relaxed">
              Берём на себя весь цикл поставки — от первого расчёта до подписи
              получателя. Вы получаете прозрачные условия, контроль на каждом
              этапе и одного ответственного партнёра вместо десятка подрядчиков.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="stagger" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/8">
          {keyAdvantages.map((a, i) => (
            <div key={a.title} className="bg-cream p-7 sm:p-8 md:p-9 group hover:bg-jade-50 transition-colors duration-500">
              <div className="font-mono text-xs tracking-widest text-ink/40 mb-5 md:mb-6">
                → {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-2xl sm:text-[1.7rem] text-ink leading-tight tracking-tightest mb-3 md:mb-4 group-hover:text-brand-500 transition-colors duration-500">
                {a.title}
              </h3>
              <p className="text-sm sm:text-base text-graphite leading-relaxed">
                {a.body}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
