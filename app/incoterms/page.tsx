import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApplicationForm from "@/components/ApplicationForm";
import ScrollReveal from "@/components/ScrollReveal";
import { incoterms, incotermsIntro } from "@/lib/incoterms";

export const metadata: Metadata = {
  title: "Incoterms — условия поставки | EWLG",
  description:
    "Incoterms простыми словами: EXW, FCA, FOB, CIF, CPT, DAP, DDP и другие условия поставки. Кто отвечает за доставку, расходы, страховку и риски.",
};

export default function IncotermsPage() {
  const popular = ["EXW", "FCA", "FOB", "CIF", "CPT", "DAP", "DDP"];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 overflow-hidden">
        <div className="max-w-8xl mx-auto px-5 md:px-10">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-ink/50 mb-8 md:mb-12 animate-fadeIn">
            <Link href="/" className="hover:text-ink transition-colors">EWLG</Link>
            <span>/</span>
            <span className="text-ink">Incoterms</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-end">
            <div className="lg:col-span-8 animate-revealUp">
              <div className="font-mono text-xs tracking-widest text-brand-500 uppercase mb-4">
                Справочник · Условия поставки
              </div>
              <h1 className="font-display text-[2.75rem] leading-[1.02] sm:text-6xl md:text-[5rem] md:leading-[1] text-ink tracking-tightest">
                Incoterms<br />
                <span className="italic text-brand-500">простыми словами.</span>
              </h1>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 mt-10 md:mt-14">
            <ScrollReveal className="lg:col-span-7">
              <p className="text-base sm:text-lg md:text-xl text-graphite leading-relaxed">
                {incotermsIntro.lead}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={150} className="lg:col-span-4 lg:col-start-9">
              <div className="border border-ink/10 p-6 bg-cream/40">
                <div className="font-mono text-[10px] tracking-widest text-brand-500 uppercase mb-4">
                  {incotermsIntro.whyTitle}
                </div>
                <ul className="space-y-2.5">
                  {incotermsIntro.why.map((w) => (
                    <li key={w} className="text-sm text-graphite flex items-start gap-3 leading-snug">
                      <span className="w-1 h-1 bg-brand-500 rounded-full shrink-0 mt-2" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Popular terms chips */}
          <ScrollReveal delay={200} className="mt-10 md:mt-12">
            <div className="font-mono text-[10px] tracking-widest text-ink/40 uppercase mb-4">
              Самые популярные условия
            </div>
            <div className="flex flex-wrap gap-2">
              {popular.map((code) => (
                <a
                  key={code}
                  href={`#${code}`}
                  className="font-mono text-sm px-4 py-2 border border-ink/15 hover:border-ink hover:bg-ink hover:text-cream transition-all duration-300"
                >
                  {code}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Terms list */}
      <section className="py-12 md:py-20 border-t border-ink/8">
        <div className="max-w-8xl mx-auto px-5 md:px-10">
          <div className="grid gap-px bg-ink/8 border border-ink/8">
            {incoterms.map((term, i) => (
              <ScrollReveal key={term.code} id={term.code}>
                <div className="bg-cream p-6 sm:p-8 md:p-10 scroll-mt-24 group hover:bg-jade-50 transition-colors duration-500">
                  <div className="grid lg:grid-cols-12 gap-5 lg:gap-10 items-start">
                    <div className="lg:col-span-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-xs text-ink/40">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {term.mode === "sea" && (
                          <span className="font-mono text-[10px] tracking-widest text-brand-500 uppercase border border-brand-500/30 px-2 py-0.5">
                            только море
                          </span>
                        )}
                      </div>
                      <h2 className="font-display text-4xl sm:text-5xl text-ink leading-none tracking-tightest mb-2 group-hover:text-brand-500 transition-colors duration-500">
                        {term.code}
                      </h2>
                      <div className="text-sm text-ink/60">
                        {term.nameEn}
                      </div>
                      <div className="text-sm text-ink/40 font-mono">
                        {term.nameRu}
                      </div>
                    </div>

                    <div className="lg:col-span-8">
                      <p className="text-base sm:text-lg text-graphite leading-relaxed mb-4">
                        {term.body}
                      </p>
                      <p className="text-sm text-ink/60 border-l-2 border-brand-500/40 pl-4 leading-relaxed">
                        {term.note}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-10 md:mt-12">
            <div className="border border-ink/10 p-6 sm:p-8 bg-paper">
              <p className="text-sm sm:text-base text-graphite leading-relaxed">
                Не уверены, какие условия выбрать под вашу поставку? Поможем
                подобрать оптимальный вариант с учётом маршрута, рисков и
                бюджета.{" "}
                <Link href="/#contact" className="text-ink link-underline whitespace-nowrap">
                  Обсудить поставку →
                </Link>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ApplicationForm />
      <Footer />
    </main>
  );
}
