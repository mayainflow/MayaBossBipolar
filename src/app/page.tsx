import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PhotoFrame } from "@/components/PhotoFrame";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const recognitionPoints = [
  "только что услышали диагноз",
  "боитесь новой депрессии",
  "переживаете из-за гипомании",
  "устали объяснять окружающим, что с вами происходит",
  "родственник человека с БАР и хотите понять, как помочь",
];

export default function Home() {
  return (
    <>
      {/* Экран 1 — Hero */}
      <section className="bg-gradient-to-br from-midnight via-midnight-2 to-coral/40 text-paper">
        <Container className="flex flex-col items-start gap-6 py-24 sm:py-32">
          <h1 className="max-w-2xl font-script text-4xl leading-tight text-gold sm:text-6xl">
            Я Босс Моей Биполярки
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-paper/85">
            Жизнь с биполярным расстройством не должна состоять только из страха, депрессий и
            ожидания следующего эпизода. Здесь вы найдёте честный опыт человека, который прошёл
            этот путь, практические материалы и лекции, помогающие научиться жить в балансе.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/lectures#signup">Записаться на лекцию</Button>
            <Button href="/about" variant="onDark">
              Моя история
            </Button>
          </div>
        </Container>
      </section>

      {/* Экран 2 — Узнавание себя */}
      <Container className="py-16 sm:py-24">
        <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Возможно, сейчас вы...
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {recognitionPoints.map((point) => (
            <li key={point} className="rounded-2xl bg-paper-alt p-5 text-ink">
              {point}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-ink-soft">
          Если хотя бы один пункт знаком — вы попали по адресу.
        </p>
      </Container>

      {/* Экран 3 — Знакомство с Майей */}
      <div className="bg-paper-alt">
        <Container className="grid gap-10 py-16 sm:grid-cols-[1fr_1.2fr] sm:items-center sm:py-24">
          <PhotoFrame filename="lecture_offline.jpg" alt="Майя проводит лекцию" className="aspect-[4/3]" />
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Меня зовут Майя Штейнберг
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-ink-soft">
              Лектор о биполярном расстройстве и о больничной клоунаде. Больничная и театральная
              клоунесса. Ранее (до 2014) — математик, программист.
            </p>
            <Button href="/about" variant="secondary" className="mt-6">
              Читать историю целиком
            </Button>
          </div>
        </Container>
      </div>

      {/* Экран 4 — О лекциях (кратко) */}
      <Container className="py-16 sm:py-24">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr] sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              О лекциях
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-ink-soft">
              Честный разговор о жизни с биполярным расстройством — без запугивания, без
              романтизации, с уважением к каждому человеку. Онлайн, офлайн, домашние встречи и
              выступления для организаций.
            </p>
            <Button href="/lectures" className="mt-6">
              Подробнее о лекциях
            </Button>
          </div>
          <PhotoFrame
            filename="lecture_presentation.jpg"
            alt="Майя выступает с презентацией"
            className="aspect-[4/3]"
          />
        </div>
      </Container>

      {/* Экран 6 — Отзывы */}
      <div className="bg-midnight text-paper">
        <Container className="py-16 sm:py-24">
          <h2 className="text-2xl font-semibold tracking-tight text-gold sm:text-3xl">Отзывы</h2>
          <blockquote className="mt-8 max-w-xl border-l-2 border-gold pl-6 text-lg leading-relaxed text-paper/85">
            «Мая, поздравляю, ты была искренна и очень открыта, это было очень полезно и
            впечатляюще! Благодарю за эфир!»
            <footer className="mt-3 text-sm text-paper/50">— Анжелика</footer>
          </blockquote>
        </Container>
      </div>

      {/* Экран 8 — финальный CTA */}
      <Container className="flex flex-col items-start gap-6 py-16 sm:py-24">
        <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Готовы сделать следующий шаг?
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button href="/lectures#signup">Записаться на лекцию</Button>
          <Button href="/contacts" variant="secondary">
            Связаться
          </Button>
        </div>
      </Container>
    </>
  );
}
