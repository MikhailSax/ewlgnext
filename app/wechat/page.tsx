import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "WeChat — EWLG",
    description: "Добавьте EWLG в WeChat: отсканируйте QR-код или найдите по ID.",
};

const WECHAT_ID = "KSN990903";

export default function WeChatPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
                <div className="max-w-8xl mx-auto px-5 md:px-10">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-ink/50 mb-8 md:mb-12">
                        <Link href="/" className="hover:text-ink transition-colors">EWLG</Link>
                        <span>/</span>
                        <span className="text-ink">WeChat</span>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                        <div className="lg:col-span-6">
                            <div className="font-mono text-xs tracking-widest text-brand-500 uppercase mb-4">
                                Связь · WeChat
                            </div>
                            <h1 className="font-display text-[2.75rem] leading-[1.02] sm:text-6xl md:text-7xl text-ink tracking-tightest">
                                Добавьте нас<br />
                                <span className="italic text-brand-500">в WeChat.</span>
                            </h1>
                            <p className="mt-6 md:mt-8 text-base sm:text-lg text-graphite leading-relaxed max-w-md">
                                Отсканируйте QR-код камерой WeChat, чтобы написать нашему
                                менеджеру в Китае. Или добавьте по ID — пришлём расчёт и
                                ответим на вопросы по поставке.
                            </p>

                            <div className="mt-8 md:mt-10 border-t border-ink/10 pt-6 md:pt-8">
                                <div className="font-mono text-[10px] tracking-widest text-ink/40 uppercase mb-2">
                                    WeChat ID
                                </div>
                                <div className="flex items-center gap-4">
                  <span className="font-display text-2xl sm:text-3xl text-ink tracking-tightest">
                    {WECHAT_ID}
                  </span>
                                </div>
                            </div>
                        </div>

                        {/* QR card */}
                        <div className="lg:col-span-5 lg:col-start-8">
                            <div className="bg-cream border border-ink/10 p-6 sm:p-8 relative">
                                <div className="absolute top-4 right-4 font-mono text-[10px] tracking-widest text-ink/40 uppercase">
                                    EWLG · WECHAT
                                </div>
                                <div className="bg-white p-4 sm:p-6 mt-6">
                                    <Image
                                        src="/wechat-qr.jpg"
                                        alt={`QR-код WeChat — ${WECHAT_ID}`}
                                        width={880}
                                        height={1160}
                                        className="w-full h-auto"
                                        priority
                                    />
                                </div>
                                <p className="mt-5 text-sm text-graphite leading-relaxed text-center">
                                    Откройте WeChat → «+» → «Сканировать» и наведите камеру на код.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}