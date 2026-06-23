import ScrollReveal from "./ScrollReveal";

const routes = [
    {
        code: "CN", name: "Китай",
        title: "Китайская\u00A0Народная\u00A0Республика",
        cities: ["Гуанчжоу", "Шэньчжэнь", "Иу", "Шанхай"],
        transit: "ЖД · авиа · море",
        note: "Главное направление закупок: регулярные железнодорожные отправки, консолидация сборных грузов, морские контейнеры и авиа в Россию и страны СНГ.",
    },
    {
        code: "RU", name: "Россия",
        title: "Российская\u00A0Федерация",
        cities: ["Москва", "Санкт-Петербург", "Казань", "Екатеринбург"],
        transit: "",
        note: "Авто и ЖД по всей территории. Собственный парк магистральных тягачей.",
    },
    {
        code: "BY", name: "Беларусь",
        title: "Республика\u00A0Беларусь",
        cities: ["Минск", "Брест", "Гомель", "Витебск"],
        transit: "",
        note: "Доставка дверь-в-дверь с консолидацией грузов в Минске.",
    },
    {
        code: "KZ", name: "Казахстан",
        title: "Республика\u00A0Казахстан",
        cities: ["Алматы", "Астана", "Шымкент", "Актобе"],
        transit: "",
        note: "ЖД и авто с растаможкой в Алматы. Стабильные сроки круглый год.",
    },
    {
        code: "AE", name: "ОАЭ",
        title: "Объединённые\u00A0Арабские\u00A0Эмираты",
        cities: ["Дубай", "Абу-Даби", "Шарджа", "Аджман"],
        transit: "",
        note: "Прямые рейсы Cargo и морские контейнеры через Джебель-Али.",
    },

];

export default function Routes() {
    return (
        <section id="routes" className="py-20 md:py-32 border-t border-ink/8">
            <div className="max-w-8xl mx-auto px-5 md:px-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mb-12 md:mb-16">
                    <ScrollReveal className="lg:col-span-5">
                        <div className="font-mono text-xs tracking-widest text-brand-500 uppercase mb-4">
                            § Направления
                        </div>
                        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.02] tracking-tightest">
                            Пять стран.<br/>
                            <span className="italic text-brand-500">Одна команда.</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={200} className="lg:col-span-6 lg:col-start-7 self-end">
                        <p className="text-base sm:text-lg text-graphite leading-relaxed">
                            Главное направление закупок - Китай, доставка в Россию, страны
                            СНГ,ОАЭ. Работаем там, где знаем каждого таможенного
                            брокера, узловой склад и особенность маршрута.
                        </p>
                    </ScrollReveal>
                </div>

                <ScrollReveal variant="stagger" className="bg-ink/8 grid gap-px">
                    {/* Flagship: China — full width with featured styling */}
                    <RouteCard {...routes[0]} index={0} featured/>
                    {/* Other 4 in a 2-col grid */}
                    <div className="grid sm:grid-cols-2 gap-px bg-ink/8">
                        {routes.slice(1).map((r, i) => (
                            <RouteCard key={r.code} {...r} index={i + 1}/>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

function RouteCard({
                       code, name, title, cities, transit, note, index, featured = false,
                   }: {
    code: string; name: string; title: string; cities: string[];
    transit: string; note: string; index: number; featured?: boolean;
}) {
    if (featured) {
        return (
            <div
                className="bg-cream p-7 sm:p-10 md:p-12 group hover:bg-jade-50 transition-all duration-500 cursor-default relative overflow-hidden">
                {/* Large CN watermark */}
                <div
                    className="absolute -bottom-8 -right-2 font-display text-[12rem] sm:text-[18rem] leading-none text-ink/[0.03] select-none pointer-events-none tracking-tightest">
                    {code}
                </div>

                <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                    <div className="lg:col-span-5">
                        <div className="flex items-start justify-between mb-5 md:mb-6">
                            <div className="font-mono text-xs tracking-widest text-ink/40">
                                0{index + 1} / {code}
                            </div>
                            <div
                                className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-brand-500 uppercase">
                                <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"/>
                                Флагманский хаб
                            </div>
                        </div>

                        <h3 className="font-display text-5xl sm:text-6xl md:text-7xl text-ink leading-[1.02] tracking-tightest mb-2 group-hover:text-brand-500 transition-colors duration-500">
                            {name}
                        </h3>
                        <div className="text-xs sm:text-sm text-ink/50 mb-5 font-mono">
                            {title} · транзит {transit}
                        </div>
                    </div>

                    <div className="lg:col-span-7 lg:border-l lg:border-ink/10 lg:pl-10">
                        <div className="font-mono text-[10px] tracking-widest text-ink/40 uppercase mb-3">
                            Города отправления
                        </div>
                        <div className="flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-2 mb-6 md:mb-7">
                            {cities.map((city, i) => (
                                <span
                                    key={city}
                                    className={`text-base sm:text-lg ${i === 0 ? "text-brand-500 font-medium" : "text-ink/70"} after:content-['·'] after:ml-3 sm:after:ml-4 after:text-ink/30 last:after:content-none`}
                                >
                  {city}
                </span>
                            ))}
                        </div>

                        <p className="text-sm sm:text-base text-graphite leading-relaxed">
                            {note}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-cream p-7 sm:p-8 md:p-10 group hover:bg-jade-50 transition-all duration-500 cursor-default">
            <div className="flex items-start justify-between mb-6 md:mb-8">
                <div className="font-mono text-xs tracking-widest text-ink/40">
                    0{index + 1} / {code}
                </div>
                <div className="font-mono text-xs tracking-widest text-brand-500 uppercase">
                    транзит {transit}
                </div>
            </div>

            <h3 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.02] tracking-tightest mb-2 group-hover:text-brand-500 transition-colors duration-500">
                {name}
            </h3>
            <div className="text-xs sm:text-sm text-ink/50 mb-6 md:mb-8 font-mono">{title}</div>

            <div className="flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-2 mb-6 md:mb-8">
                {cities.map((city) => (
                    <span
                        key={city}
                        className="text-sm text-ink/70 after:content-['·'] after:ml-3 sm:after:ml-4 after:text-ink/30 last:after:content-none"
                    >
            {city}
          </span>
                ))}
            </div>

            <p className="text-sm sm:text-base text-graphite leading-relaxed border-t border-ink/8 pt-5 md:pt-6">
                {note}
            </p>
        </div>
    );
}
