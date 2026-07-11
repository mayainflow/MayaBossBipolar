import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/send-email";

export async function POST(request: Request) {
  const body = await request.json();
  const name = String(body.name ?? "").trim();

  if (!name) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const organization = String(body.organization ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const city = String(body.city ?? "").trim();
  const comment = String(body.comment ?? "").trim();

  const ok = await sendEmail(
    "Приглашение выступить",
    `Имя: ${name}\nОрганизация: ${organization || "—"}\nТелефон: ${phone || "—"}\nEmail: ${
      email || "—"
    }\nГород: ${city || "—"}\nКомментарий: ${comment || "—"}`
  );

  if (!ok) {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
