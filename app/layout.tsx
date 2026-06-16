import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EWLG — Международная логистика | Россия, СНГ, Европа, ОАЭ",
  description:
    "Комплексная логистика для стабильных поставок в Россию, страны СНГ,ОАЭ. Авто, авиа, ЖД и морские перевозки, таможенное оформление, складская обработка и агентские услуги. Главное направление закупок — Китай.",
  openGraph: {
    title: "EWLG — Международная логистика",
    description: "Комплексная логистика «под ключ»: перевозки, таможня, склад, ВЭД.",
    type: "website",
  },
  icons : {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="relative min-h-screen antialiased">
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
