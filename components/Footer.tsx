import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70 py-14 md:py-16">
      <div className="max-w-8xl mx-auto px-5 md:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-5 group">
              EWLG
            </Link>
            <p className="text-cream/60 max-w-sm leading-relaxed text-sm sm:text-base">
              Международная мультимодальная логистика.
              Доставляем туда, где знаем дорогу.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="font-mono text-[10px] tracking-widest text-brand-400 uppercase mb-4">
              Направления
            </div>
            <ul className="space-y-2 text-sm">
              <li>Китай · Гуанчжоу</li>
              <li>ОАЭ</li>
              <li>Казахстан</li>
              <li>Россия</li>
              <li>Беларусь</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="font-mono text-[10px] tracking-widest text-brand-400 uppercase mb-4">
              Услуги
            </div>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-cream transition-colors link-underline">
                    {s.tagline}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/incoterms" className="hover:text-cream transition-colors link-underline text-brand-400">
                  Incoterms
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="font-mono text-[10px] tracking-widest text-brand-400 uppercase mb-4">
              Связь
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://t.me/ewlg_bot" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors inline-flex items-center gap-2">
                  <span className="font-mono text-[10px] text-brand-400">TG</span>
                  @ewlg_bot
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="font-mono text-[10px] text-brand-400"><a href="/wechat">WeChat</a></span>
                KSN990903
              </li>
              <li>
                <a href="mailto:EWLGlog@yandex.com" className="hover:text-cream transition-colors break-all">
                  EWLGlog@yandex.com
                </a>
              </li>
              <li className="pt-2 text-cream/40">Москва · Минск · Алматы · Дубай</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/40 font-mono tracking-wider">
          <div>© {new Date().getFullYear()} EWLG. Все права защищены.</div>
          <div>Сделано с заботой о грузе</div>
        </div>
      </div>
    </footer>
  );
}
