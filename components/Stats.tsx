import ScrollReveal from "./ScrollReveal";

const stats = [
    {value: "3", unit: "года", label: "На рынке международной логистики"},
    {value: "50 000", unit: "тонн", label: "Доставленных грузов"},
    {value: "500", unit: "+", label: "Довольных клиентов"},
    {value: "24/7", unit: "", label: "Персональный менеджер на связи"},
];

export default function Stats() {
    return (
        <section id="about" className="py-20 md:py-32 border-t border-ink/8">
            <div className="max-w-8xl mx-auto px-5 md:px-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
                    <ScrollReveal className="lg:col-span-5">
                        <div className="font-mono text-xs tracking-widest text-brand-500 uppercase mb-4">
                            § О компании
                        </div>
                        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.02] tracking-tightest">
                            EWLG<br/>
                            <span className="italic text-brand-500">доставляем грузы, создаём возможности.</span>
                        </h2>
                        <p className="mt-6 md:mt-8 text-base sm:text-lg text-graphite leading-relaxed max-w-md">
                            EWLG — не маклер с таблицей перевозчиков. Это команда, которая
                            ведёт каждую отправку лично: от первого звонка до подписи на
                            накладной у получателя.
                        </p>
                        <div className="mt-8 md:mt-10 inline-block">
                            <a
                                href="#contact"
                                className="text-ink underline underline-offset-8 decoration-brand-500 decoration-2 hover:decoration-ink transition-colors"
                            >
                                Обсудить ваш груз →
                            </a>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal
                        variant="stagger"
                        delay={150}
                        className="lg:col-span-6 lg:col-start-7 grid grid-cols-2 gap-px bg-ink/10"
                    >
                        {stats.map((s) => (
                            <div key={s.label} className="bg-cream p-6 sm:p-8 md:p-10">
                                <div className="flex items-baseline gap-2 mb-3 md:mb-4">
                  <span
                      className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-none tracking-tightest whitespace-nowrap">
                    {s.value}
                  </span>
                                    <span
                                        className="font-mono text-xs sm:text-sm text-brand-500 uppercase tracking-widest">
                    {s.unit}
                  </span>
                                </div>
                                <div className="text-xs sm:text-sm text-graphite leading-snug max-w-[18ch]">
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
