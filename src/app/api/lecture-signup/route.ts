import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/send-email";

export async function POST(request: Request) {
  const body = await request.json();
  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();

  if (!name || !phone) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const email = String(body.email ?? "").trim();
  const comment = String(body.comment ?? "").trim();

  const ok = await sendEmail(
    "Запись на лекцию",
    `Имя: ${name}\nТелефон: ${phone}\nEmail: ${email || "—"}\nКомментарий: ${comment || "—"}`
  );

  if (!ok) {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
