"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/services", label: "Услуги" },
  { href: "/#advantages", label: "Преимущества" },
  { href: "/incoterms", label: "Incoterms" },
  { href: "/#faq", label: "Вопросы" },
  { href: "/#contact", label: "Контакты" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "bg-cream/90 backdrop-blur-md border-b border-ink/10"
            : "bg-transparent"
        }`}
      >
        <div className={`max-w-8xl mx-auto px-5 md:px-10 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16 md:h-20" : "h-20 md:h-24"
        }`}>
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="EWLG · Логистическая компания"
              width={180}
              height={180}
              className={`object-contain transition-all duration-300 ${
                scrolled ? "h-12 md:h-14" : "h-14 md:h-20"
              } w-auto`}
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-ink/70 hover:text-ink transition-colors link-underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <a
              href="https://t.me/ewlg_bot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram @ewlg_bot"
              className="hidden sm:inline-flex w-10 h-10 items-center justify-center text-ink/70 hover:text-brand-500 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
              </svg>
            </a>
            <Link
              href="/#contact"
              className="hidden md:inline-flex items-center gap-2 text-sm px-5 py-2.5 bg-ink text-cream hover:bg-brand-500 transition-colors duration-300"
            >
              Оставить заявку
              <span aria-hidden>→</span>
            </Link>

            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={open}
              className="lg:hidden w-10 h-10 flex items-center justify-center -mr-2"
            >
              <span className="relative w-5 h-4 flex flex-col justify-between">
                <span className={`block h-px bg-ink transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
                <span className={`block h-px bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
                <span className={`block h-px bg-ink transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-cream pt-20 px-5 overflow-y-auto">
          <nav className="flex flex-col py-6">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`group flex items-baseline justify-between border-b border-ink/10 py-5 transition-all duration-500 ${
                  open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
              >
                <span className="font-display text-4xl text-ink tracking-tightest">
                  {item.label}
                </span>
                <span className="font-mono text-xs text-ink/30 group-hover:text-brand-500 transition-colors">
                  / 0{i + 1}
                </span>
              </Link>
            ))}
          </nav>

          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className={`mt-8 inline-flex w-full items-center justify-between px-6 py-5 bg-ink text-cream transition-all duration-500 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: open ? "440ms" : "0ms" }}
          >
            <span className="font-mono text-xs tracking-widest uppercase">Оставить заявку</span>
            <span>→</span>
          </Link>

          <div className="mt-12 pb-8 space-y-3 text-sm">
            <a
              href="https://t.me/ewlg_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-baseline justify-between border-b border-ink/10 pb-3 hover:text-brand-500 transition-colors"
            >
              <span className="font-mono text-[11px] tracking-widest text-ink/40 uppercase">Telegram</span>
              <span>@ewlg_bot</span>
            </a>
            <div className="flex items-baseline justify-between border-b border-ink/10 pb-3">
              <span className="font-mono text-[11px] tracking-widest text-ink/40 uppercase">WeChat</span>
              <span>KSN990903</span>
            </div>
            <a
              href="mailto:EWLGlog@yandex.com"
              className="flex items-baseline justify-between border-b border-ink/10 pb-3 hover:text-brand-500 transition-colors"
            >
              <span className="font-mono text-[11px] tracking-widest text-ink/40 uppercase">Email</span>
              <span className="text-right">EWLGlog@yandex.com</span>
            </a>
            <div className="text-ink/50 pt-2">Гуанчжоу · Dubai · Almaty · Минск</div>
          </div>
        </div>
      </div>
    </>
  );
}
