# EWLG — International Logistics

Сайт международной логистической компании EWLG.
Доставка в Россию, страны СНГ, Европу и ОАЭ. Главное направление закупок — Китай.

## Услуги (7)
Автомобильные · Авиа · Морские · Железнодорожные перевозки · Таможенное оформление · Консолидация и склад · Агентские и финансовые услуги.

## Структура сайта

```
/                      Главная: герой, преимущества, услуги, направления,
                       процесс (6 шагов), о компании, FAQ, форма заявки
/services              Страница всех услуг + «Почему наши услуги выгодны»
/services/[mode]       Страница услуги (7 шт): преимущества, процесс, факты, FAQ
/incoterms             Справочник Incoterms (11 условий поставки)
/api/application       Приём заявок (POST)
```

## Стек
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS, кастомная палитра (brand-зелёный #167E47 из логотипа + чёрный)
- Шрифты: Manrope (заголовки), Inter (текст), JetBrains Mono (моно) — Google Fonts

## Запуск
```bash
npm install
npm run dev
```
http://localhost:3000

## Контент
Все тексты — в `lib/`:
- `lib/services.ts` — 7 услуг: описания, преимущества, процесс, факты, FAQ
- `lib/content.ts` — главная: ключевые преимущества, процесс, FAQ
- `lib/incoterms.ts` — условия поставки Incoterms

Чтобы поменять текст услуги — правишь объект в `lib/services.ts`, страница обновится автоматически.

## Заявки
Форма → `POST /api/application` (name, phone, comment).
Сохраняется в `data/applications.json` + лог в консоль.
Просмотр: http://localhost:3000/api/application

Интеграция (email / Telegram / БД) — в `app/api/application/route.ts`.

## Контакты компании
- Telegram: @ewlg_bot
- WeChat: KSN990903
- Email: EWLGlog@yandex.com

## Цифры (с сайта)
3 года на рынке · 50 000 тонн доставленных грузов · 500+ клиентов

## Шрифт
Меняется в 2 местах: `app/globals.css` (строка 1, импорт) и `tailwind.config.ts` (поле `display`).
Блок `.font-display` в globals.css настроен под гротеск (гасит италик, ставит жирность) — для serif-шрифта его нужно убрать.

## Баннеры (фото)
Сейчас абстрактные SVG-композиции. Места под реальные фото:
- Главная: `components/Hero.tsx` → `BannerStrip`
- Услуги: `components/ServiceHero.tsx` → `ServiceBanner`
Положить файлы в `public/banners/`, заменить SVG на `<Image>`.
