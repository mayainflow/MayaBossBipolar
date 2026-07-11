import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Условия использования",
  description: "Условия использования сайта «Я Босс Моей Биполярки».",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <Container className="py-16 sm:py-24">
      <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Условия использования
      </h1>

      <div className="mt-8 flex max-w-2xl flex-col gap-8 leading-relaxed text-ink">
        <section>
          <h2 className="text-sm font-medium uppercase tracking-widest text-ink-soft">
            Назначение сайта
          </h2>
          <p className="mt-3">
            Сайт «Я Босс Моей Биполярки» предоставляет информационные материалы, лекции и
            методички, основанные на личном опыте Майи Штейнберг. Сайт не оказывает медицинских
            услуг и не заменяет консультацию врача.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-medium uppercase tracking-widest text-ink-soft">
            Медицинский дисклеймер
          </h2>
          <p className="mt-3">
            Материалы сайта не являются медицинской консультацией. Любые вопросы лечения,
            диагностики, изменения дозировок препаратов необходимо обсуждать только с лечащим
            врачом. Если вы находитесь в кризисном состоянии — обратитесь за экстренной
            медицинской помощью.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-medium uppercase tracking-widest text-ink-soft">
            Авторские права
          </h2>
          <p className="mt-3">
            Все материалы сайта (тексты, методички, лекции) — собственность Майи Штейнберг.
            Копирование и распространение без разрешения автора запрещено.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-medium uppercase tracking-widest text-ink-soft">
            Оплата и возврат
          </h2>
          <p className="mt-3">
            Оплаченные методички предоставляются в цифровом виде сразу после оплаты. Возврат
            средств возможен в течение 3 дней с момента покупки, если файл не был скачан.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-medium uppercase tracking-widest text-ink-soft">
            Изменения условий
          </h2>
          <p className="mt-3">
            Мы можем обновлять эти условия. Актуальная версия всегда доступна на этой странице.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-medium uppercase tracking-widest text-ink-soft">Контакты</h2>
          <p className="mt-3">
            По всем вопросам — через форму на странице «Контакты» или на email, указанный там же.
          </p>
        </section>
      </div>
    </Container>
  );
}
