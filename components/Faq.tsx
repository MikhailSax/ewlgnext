import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import FaqAccordion from "./FaqAccordion";
import { homeFaq } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-32 border-t border-ink/8 bg-paper">
      <div className="max-w-8xl mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <ScrollReveal className="lg:col-span-4">
            <div className="font-mono text-xs tracking-widest text-brand-500 uppercase mb-4">
              § Вопросы и ответы
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.02] tracking-tightest">
              Коротко<br />
              <span className="italic text-brand-500">о главном.</span>
            </h2>
            <p className="mt-6 text-base text-graphite leading-relaxed max-w-sm">
              Собрали частые вопросы клиентов. Если нужного нет — напишите нам,
              ответим по вашей ситуации.
            </p>
            <Link
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-ink link-underline"
            >
              Задать вопрос →
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={150} className="lg:col-span-7 lg:col-start-6">
            <FaqAccordion items={homeFaq} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
