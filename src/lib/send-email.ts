// Тонкая обёртка над Resend HTTP API — без SDK, чтобы не тянуть лишнюю
// зависимость, пока провайдер не подтверждён окончательно.
// Требует env RESEND_API_KEY (нет своего Resend-аккаунта — письма не уходят,
// вызывающий код должен вернуть клиенту стандартное сообщение об ошибке,
// SITE_PRD.md раздел 22). CONTACT_TO_EMAIL можно переопределить в env,
// по умолчанию — рабочий email из CONTENT_MASTER.md.

import { siteConfig } from "./site-config";

export async function sendEmail(subject: string, text: string): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.contactEmail;

  if (!apiKey || !toEmail) {
    return false;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Сайт «Я Босс Моей Биполярки» <onboarding@resend.dev>",
      to: toEmail,
      subject,
      text,
    }),
  });

  return res.ok;
}
