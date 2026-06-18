import {NextRequest, NextResponse} from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Application = {
    id: string;
    name: string;
    phone: string;
    comment: string;
    createdAt: string;
};

const BOT_TIMEOUT_MS = 8000;

/**
 * Пересылает заявку боту (он уведомляет менеджеров / сохраняет в БД).
 * Настройка в .env.local:
 *   BOT_ENDPOINT_URL=https://адрес-бота/api/application
 *   BOT_API_KEY=общий_секрет   (если бот проверяет ключ; иначе можно не задавать)
 */
async function forwardToBot(
    app: Application
): Promise<{ ok: boolean; error?: string }> {
    const url = process.env.BOT_ENDPOINT_URL;
    if (!url) return {ok: false, error: "BOT_ENDPOINT_URL не задан"};

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), BOT_TIMEOUT_MS);

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...(process.env.BOT_API_KEY ? {"X-API-Key": process.env.BOT_API_KEY} : {}),
            },
            body: JSON.stringify({
                name: app.name,
                phone: app.phone,
                comment: app.comment,
            }),
            signal: controller.signal,
        });

        if (!res.ok) {
            const text = await res.text().catch(() => "");
            console.error("Bot endpoint error:", res.status, text);
            return {ok: false, error: `Бот ответил ${res.status}`};
        }
        return {ok: true};
    } catch (e) {
        const msg =
            e instanceof Error && e.name === "AbortError"
                ? "таймаут запроса к боту"
                : String(e);
        console.error("Bot endpoint request failed:", msg);
        return {ok: false, error: msg};
    } finally {
        clearTimeout(timer);
    }
}

export async function POST(req: NextRequest) {
    let body: { name?: string; phone?: string; comment?: string };
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ok: false, error: "Invalid JSON"}, {status: 400});
    }

    const name = (body.name || "").toString().trim().slice(0, 120);
    const phone = (body.phone || "").toString().trim().slice(0, 40);
    const comment = (body.comment || "").toString().trim().slice(0, 2000);

    if (name.length < 2) {
        return NextResponse.json({ok: false, error: "Name too short"}, {status: 400});
    }
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 7) {
        return NextResponse.json({ok: false, error: "Phone too short"}, {status: 400});
    }

    const application: Application = {
        id: `app_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
        name,
        phone,
        comment,
        createdAt: new Date().toISOString(),
    };

    console.log("📦 Новая заявка EWLG:", JSON.stringify(application));

    const result = await forwardToBot(application);
    if (!result.ok) {
        console.warn("Заявка не доставлена боту:", result.error);
    }

    // ok:true возвращаем даже при сбое доставки — заявка осталась в логах,
    // а пользователь видит успех. Если нужно жёстко (502 при недоставке) — скажи, поменяю.
    return NextResponse.json({ok: true, id: application.id, delivered: result.ok});
}