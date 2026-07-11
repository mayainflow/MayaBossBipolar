import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/send-email";
import { getMaterial } from "@/lib/materials";

export async function POST(request: Request) {
  const body = await request.json();
  const name = String(body.name ?? "").trim();
  const contact = String(body.contact ?? "").trim();
  const slug = String(body.slug ?? "").trim();
  const material = getMaterial(slug);

  if (!name || !contact || !material || material.kind !== "paid") {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const ok = await sendEmail(
    `Заявка на покупку: ${material.title}`,
    `Методичка: ${material.title} (${material.price} ₪)\nИмя: ${name}\nКонтакт: ${contact}`
  );

  if (!ok) {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
