import {NextRequest, NextResponse} from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Application = {
    id: string;
    name: string;
    phone: string;
    comment: string;
    createdAt: string;
};

/** Проверка капчи Cloudflare Turnstile. */
async function verifyCaptcha(token: string, ip: string): Promise<boolean> {
    const secret = process.env.TURNSTILE_SECRET_KEY;
    // Если секрет не задан — капча отключена (например, локально). Прод: задайте ключ.
    if (!secret) {
        console.warn("TURNSTILE_SECRET_KEY не задан — проверка капчи пропущена");
        return true;
    }
    try {
        const res = await fetch(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            {
                method: "POST",
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                body: new URLSearchParams({secret, response: token, remoteip: ip}),
            }
        );
        const data = await res.json();
        return data.success === true;
    } catch (e) {
        console.error("Captcha verify failed:", e);
        return false;
    }
}

/** Отправка письма на почту через SMTP Яндекса. */
async function sendEmail(app: Application): Promise<{ ok: boolean; error?: string }> {
    const host = process.env.SMTP_HOST || "smtp.yandex.ru";
    const port = Number(process.env.SMTP_PORT || "465");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.MAIL_TO || user;

    if (!user || !pass) return {ok: false, error: "SMTP не настроен"};

    const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465, // 465 — SSL, 587 — STARTTLS
        auth: {user, pass},
    });

    const esc = (s: string) =>
        s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const when = new Date(app.createdAt).toLocaleString("ru-RU");
    const text = [
        "Новая заявка с сайта EWLG",
        "",
        `Имя: ${app.name}`,
        `Телефон: ${app.phone}`,
        `Комментарий: ${app.comment || "—"}`,
        "",
        `ID: ${app.id}`,
        `Время: ${when}`,
    ].join("\n");

    const html = `
    <h2 style="margin:0 0 12px">Новая заявка с сайта EWLG</h2>
    <p style="margin:0 0 4px"><b>Имя:</b> ${esc(app.name)}</p>
    <p style="margin:0 0 4px"><b>Телефон:</b> ${esc(app.phone)}</p>
    <p style="margin:0 0 12px"><b>Комментарий:</b> ${app.comment ? esc(app.comment) : "—"}</p>
    <p style="color:#888;font-size:12px;margin:0">ID ${app.id} · ${when}</p>
  `;

    try {
        await transporter.sendMail({
            from: `"EWLG — сайт" <${user}>`, // у Яндекса отправитель должен совпадать с логином
            to,
            subject: `Заявка с сайта — ${app.name}`,
            text,
            html,
        });
        return {ok: true};
    } catch (e) {
        console.error("Email send failed:", e);
        return {ok: false, error: String(e)};
    }
}

/*
 * ─── ОТПРАВКА БОТУ (отключена) ────────────────────────────────────────────
 * Бот сейчас на локальном ПК — Vercel до него не достучится. Когда бот
 * переедет на сервер с постоянным адресом:
 *   1) задай BOT_ENDPOINT_URL и BOT_API_KEY в переменных окружения Vercel;
 *   2) раскомментируй функцию ниже и строки с её вызовом в POST.
 *
 * const BOT_TIMEOUT_MS = 8000;
 *
 * async function forwardToBot(app: Application): Promise<{ ok: boolean; error?: string }> {
 *   const url = process.env.BOT_ENDPOINT_URL;
 *   if (!url) return { ok: false, error: "BOT_ENDPOINT_URL не задан" };
 *   const controller = new AbortController();
 *   const timer = setTimeout(() => controller.abort(), BOT_TIMEOUT_MS);
 *   try {
 *     const res = await fetch(url, {
 *       method: "POST",
 *       headers: {
 *         "Content-Type": "application/json",
 *         ...(process.env.BOT_API_KEY ? { "X-API-Key": process.env.BOT_API_KEY } : {}),
 *       },
 *       body: JSON.stringify({ name: app.name, phone: app.phone, comment: app.comment }),
 *       signal: controller.signal,
 *     });
 *     if (!res.ok) return { ok: false, error: `Бот ответил ${res.status}` };
 *     return { ok: true };
 *   } catch (e) {
 *     return { ok: false, error: String(e) };
 *   } finally {
 *     clearTimeout(timer);
 *   }
 * }
 * ──────────────────────────────────────────────────────────────────────────
 */

export async function POST(req: NextRequest) {
    let body: { name?: string; phone?: string; comment?: string; captchaToken?: string };
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ok: false, error: "Invalid JSON"}, {status: 400});
    }

    // 1) Капча
    const captchaToken = (body.captchaToken || "").toString();
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "";
    const captchaOk = await verifyCaptcha(captchaToken, ip);
    if (!captchaOk) {
        return NextResponse.json({ok: false, error: "Captcha failed"}, {status: 400});
    }

    // 2) Валидация
    const name = (body.name || "").toString().trim().slice(0, 120);
    const phone = (body.phone || "").toString().trim().slice(0, 40);
    const comment = (body.comment || "").toString().trim().slice(0, 2000);

    if (name.length < 2) {
        return NextResponse.json({ok: false, error: "Name too short"}, {status: 400});
    }
    if (phone.replace(/\D/g, "").length < 7) {
        return NextResponse.json({ok: false, error: "Phone too short"}, {status: 400});
    }

    const application: Application = {
        id: `app_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
        name,
        phone,
        comment,
        createdAt: new Date().toISOString(),
    };

    console.log("Новая заявка EWLG:", JSON.stringify(application));

    // 3) Доставка (сейчас только на почту)
    const mail = await sendEmail(application);
    if (!mail.ok) console.warn("На почту не доставлено:", mail.error);

    // Когда бот переедет на сервер — раскомментируй:
    // const bot = await forwardToBot(application);
    // if (!bot.ok) console.warn("Боту не доставлено:", bot.error);

    return NextResponse.json({
        ok: true,
        id: application.id,
        deliveredMail: mail.ok,
        // deliveredBot: bot.ok,
    });
}