import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Application = {
  id: string;
  name: string;
  phone: string;
  comment: string;
  createdAt: string;
};

/**
 * Пересылает заявку Telegram-боту EWLG (он сохранит её в БД и уведомит менеджеров).
 * Настраивается через переменные окружения:
 *   BOT_ENDPOINT_URL — адрес эндпоинта бота, например https://bot.ewlg.ru/api/application
 *   BOT_API_KEY      — тот же ключ, что WEB_API_KEY у бота
 *
 * Запасной вариант (если бот не настроен) — отправка напрямую в Telegram-чат:
 *   TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID
 */
async function forwardToBot(app: Application): Promise<boolean> {
  const url = process.env.BOT_ENDPOINT_URL;
  if (!url) return false;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.BOT_API_KEY ? { "X-API-Key": process.env.BOT_API_KEY } : {}),
      },
      body: JSON.stringify({
        name: app.name,
        phone: app.phone,
        comment: app.comment,
      }),
    });
    if (!res.ok) {
      console.error("Bot endpoint error:", res.status, await res.text());
      return false;
    }
    return true;
  } catch (e) {
    console.error("Bot endpoint request failed:", e);
    return false;
  }
}

async function sendToTelegramDirect(app: Application): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;

  const esc = (s: string) => s.replace(/([_*`\[\]])/g, "\\$1");
  const lines = [
    "🟢 *Новая заявка с сайта EWLG*",
    "",
    `👤 *Имя:* ${esc(app.name)}`,
    `📞 *Телефон:* ${esc(app.phone)}`,
  ];
  if (app.comment) lines.push(`💬 *Комментарий:* ${esc(app.comment)}`);
  lines.push("", `🕒 ${new Date(app.createdAt).toLocaleString("ru-RU")}`);

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: lines.join("\n"),
        parse_mode: "Markdown",
        disable_web_page_preview: true,
      }),
    });
    return res.ok;
  } catch (e) {
    console.error("Telegram direct failed:", e);
    return false;
  }
}

export async function POST(req: NextRequest) {
  let body: { name?: string; phone?: string; comment?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name || "").toString().trim().slice(0, 120);
  const phone = (body.phone || "").toString().trim().slice(0, 40);
  const comment = (body.comment || "").toString().trim().slice(0, 2000);

  if (name.length < 2) {
    return NextResponse.json({ ok: false, error: "Name too short" }, { status: 400 });
  }
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 7) {
    return NextResponse.json({ ok: false, error: "Phone too short" }, { status: 400 });
  }

  const application: Application = {
    id: `app_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name,
    phone,
    comment,
    createdAt: new Date().toISOString(),
  };

  console.log("📦 Новая заявка EWLG:", JSON.stringify(application));

  // 1) Пробуем переслать боту (он сохранит в БД + уведомит менеджеров)
  let delivered = await forwardToBot(application);
  // 2) Если бот не настроен — запасной путь: прямо в Telegram-чат
  if (!delivered) {
    delivered = await sendToTelegramDirect(application);
  }
  if (!delivered) {
    console.warn("Заявка не доставлена (ни бот, ни Telegram не настроены). Сохранена в логах.");
  }

  return NextResponse.json({ ok: true, id: application.id, delivered });
}