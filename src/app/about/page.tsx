import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PhotoFrame } from "@/components/PhotoFrame";

export const metadata: Metadata = {
  title: "О Майе",
  description:
    "История Майи Штейнберг: жизнь с биполярным расстройством, путь к стабильной ремиссии, лекции и больничная клоунада.",
  alternates: { canonical: "/about" },
  openGraph: { title: "О Майе — Я Босс Моей Биполярки" },
};

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="grid gap-12 sm:grid-cols-[1.2fr_1fr] sm:items-start">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Меня зовут Майя Штейнберг
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            «В 2001 году я овдовела, воспитывая дочь. В 2003 начались первые депрессии, в 2006 —
            диагноз: биполярное расстройство. Были периоды, когда приходилось ложиться в больницу
            — в том числе в психиатрическое отделение Беэр-Яакова (отделение «Лецидех» — «Мы с
            тобой»). В 2018 я приняла решение стать боссом своей жизни и болезни — но это не
            значит, что болезнь исчезла. Даже после этого случались тяжёлые эпизоды. С января 2024
            я нахожусь в стабильной ремиссии. Болезнь никуда не делась — я просто научилась быть
            боссом, а не жертвой.»
          </p>

          <div className="mt-12">
            <h2 className="text-sm font-medium uppercase tracking-widest text-ink-soft">
              Кто я сейчас
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink">
              Лектор о биполярном расстройстве и о больничной клоунаде. Больничная и театральная
              клоунесса. Ранее (до 2014) — математик, программист.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-sm font-medium uppercase tracking-widest text-ink-soft">
              Характер
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink">
              Открытая, эмпатичная, харизматичная — говорю от сердца. Люблю добрых и открытых
              людей и меткий юмор.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/lectures">Лекции Майи</Button>
            <Button href="/materials" variant="secondary">
              Методички
            </Button>
            <Button href="/contacts" variant="secondary">
              Связаться
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <PhotoFrame filename="lecture_offline.jpg" alt="Майя проводит офлайн-лекцию" />
        </div>
      </div>
    </Container>
  );
}
