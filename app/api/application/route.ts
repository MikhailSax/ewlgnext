import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

// Path to local storage. In production swap for DB / email / Telegram bot.
const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "applications.json");

type Application = {
  id: string;
  name: string;
  phone: string;
  comment: string;
  createdAt: string;
};

async function readAll(): Promise<Application[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as Application[];
  } catch {
    return [];
  }
}

async function writeAll(items: Application[]) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(items, null, 2), "utf-8");
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

  // Console log — visible in `npm run dev` output
  console.log("📦 Новая заявка EWLG:");
  console.log(`   ID:      ${application.id}`);
  console.log(`   Имя:     ${application.name}`);
  console.log(`   Телефон: ${application.phone}`);
  if (application.comment) console.log(`   Коммент: ${application.comment}`);
  console.log(`   Время:   ${application.createdAt}\n`);

  // Persist to data/applications.json
  try {
    const all = await readAll();
    all.push(application);
    await writeAll(all);
  } catch (e) {
    console.error("Failed to persist application:", e);
    // Still return ok — the log is captured
  }

  return NextResponse.json({ ok: true, id: application.id });
}

export async function GET() {
  // Convenience endpoint to view captured applications during demo.
  // Remove or protect in production.
  const all = await readAll();
  return NextResponse.json({ count: all.length, items: all });
}
