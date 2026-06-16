import ScrollReveal from "./ScrollReveal";
import { processSteps } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-32 bg-ink text-cream relative overflow-hidden">
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
            § Как мы работаем
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tightest">
            Поэтапный процесс<br />
            <span className="italic text-brand-300">перевозки.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="stagger" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-10 md:gap-y-14">
          {processSteps.map((p) => (
            <div key={p.step} className="border-t border-cream/15 pt-6 md:pt-8">
              <div className="font-mono text-xs tracking-widest text-brand-400 mb-4 md:mb-6">
                / {p.step}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-cream leading-tight tracking-tightest mb-3 md:mb-4">
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
  );
}
