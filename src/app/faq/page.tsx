import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { faq } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Частые вопросы",
  description: "Ответы на частые вопросы о лекциях, методичках и проекте «Я Босс Моей Биполярки».",
  alternates: { canonical: "/faq" },
  openGraph: { title: "FAQ — Я Босс Моей Биполярки" },
};

export default function FaqPage() {
  return (
    <Container className="py-16 sm:py-24">
      <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        Частые вопросы
      </h1>

      <div className="mt-10 flex flex-col divide-y divide-ink/10 border-y border-ink/10">
        {faq.map((item) => (
          <details key={item.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink">
              {item.question}
              <span className="text-gold transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 leading-relaxed text-ink-soft">{item.answer}</p>
          </details>
        ))}
      </div>
    </Container>
  );
}
