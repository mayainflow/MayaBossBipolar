import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PhotoFrame } from "@/components/PhotoFrame";
import { SignupForm } from "@/components/forms/SignupForm";
import { InviteForm } from "@/components/forms/InviteForm";

export const metadata: Metadata = {
  title: "Лекции",
  description:
    "Честный разговор о жизни с биполярным расстройством — лекции Майи Штейнберг. Онлайн и офлайн, для участников и организаций.",
  alternates: { canonical: "/lectures" },
  openGraph: { title: "Лекции — Я Босс Моей Биполярки" },
};

const topics = [
  "путь от первых симптомов до сегодняшнего дня",
  "как выглядит жизнь с БАР изнутри",
  "что реально помогает сохранять стабильность",
  "ошибки, которые были совершены",
  "поддержка близких",
  "ответы на вопросы участников",
];

export default function LecturesPage() {
  return (
    <>
      <Container className="py-16 sm:py-24">
        <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Я Босс Моей Биполярки
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Честный разговор о жизни с биполярным расстройством — без запугивания, без
          романтизации, с уважением к каждому человеку.
        </p>

        <PhotoFrame
          filename="lecture_offline.jpg"
          alt="Майя проводит лекцию"
          className="mt-10 aspect-video"
        />

        <div className="mt-12 grid gap-12 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest text-ink-soft">
              Основные темы
            </h2>
            <ul className="mt-4 flex flex-col gap-2 text-ink">
              {topics.map((topic) => (
                <li key={topic} className="flex gap-2">
                  <span className="text-gold">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-sm font-medium uppercase tracking-widest text-ink-soft">
                Форматы
              </h2>
              <p className="mt-4 text-ink">Онлайн (Zoom), офлайн, домашние встречи, выступления для организаций.</p>
            </div>
            <div>
              <h2 className="text-sm font-medium uppercase tracking-widest text-ink-soft">
                Продолжительность
              </h2>
              <p className="mt-4 text-ink">
                60–90 минут, при необходимости адаптируется под запрос организатора.
              </p>
            </div>
          </div>
        </div>

      </Container>

      <div className="bg-paper-alt">
        <Container className="grid gap-12 py-16 sm:grid-cols-2 sm:py-20">
          <div id="signup">
            <h2 className="text-xl font-semibold text-ink">Записаться на ближайшую лекцию</h2>
            <div className="mt-6">
              <SignupForm />
            </div>
          </div>

          <div id="invite">
            <h2 className="text-xl font-semibold text-ink">Пригласить Майю выступить</h2>
            <div className="mt-6">
              <InviteForm />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
