import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Медицинский дисклеймер",
  description: "Медицинский дисклеймер проекта «Я Босс Моей Биполярки».",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <Container className="py-16">
      <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Медицинский дисклеймер
      </h1>
      <p className="mt-6 max-w-2xl leading-relaxed text-ink-soft">
        Сайт не оказывает медицинских услуг. Материалы проекта основаны на личном опыте Майи
        Штейнберг и предназначены для информационной поддержки. Любые вопросы лечения, изменения
        дозировок препаратов или отмены терапии необходимо обсуждать только с лечащим психиатром.
        Если человек находится в кризисном состоянии или чувствует непосредственную опасность для
        себя, необходимо обратиться за экстренной медицинской помощью.
      </p>
    </Container>
  );
}
