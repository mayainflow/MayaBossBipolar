import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/send-email";

export async function POST(request: Request) {
  const body = await request.json();
  const name = String(body.name ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !message) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const email = String(body.email ?? "").trim();

  const ok = await sendEmail(
    "Сообщение с сайта",
    `Имя: ${name}\nEmail: ${email || "—"}\nСообщение: ${message}`
  );

  if (!ok) {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
