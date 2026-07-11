import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Политика конфиденциальности сайта «Я Босс Моей Биполярки».",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <Container className="py-16 sm:py-24">
      <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Политика конфиденциальности
      </h1>
      <p className="mt-2 text-sm text-ink-soft">Дата последнего обновления: 11.07.2026</p>

      <div className="mt-8 flex max-w-2xl flex-col gap-8 leading-relaxed text-ink">
        <section>
          <h2 className="text-sm font-medium uppercase tracking-widest text-ink-soft">
            Какие данные мы собираем
          </h2>
          <p className="mt-3">
            Мы собираем только те данные, которые вы добровольно оставляете через формы на сайте:
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            <li>— Имя, телефон, email — при записи на лекцию или заполнении формы обратной связи.</li>
            <li>— Email или Telegram — при получении бесплатной методички.</li>
            <li>
              — Данные оплаты — при покупке платной методички (обрабатываются платёжным
              провайдером, мы не храним данные карт).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-medium uppercase tracking-widest text-ink-soft">
            Как мы используем данные
          </h2>
          <ul className="mt-3 flex flex-col gap-2">
            <li>— Чтобы связаться с вами по поводу записи на лекцию или вашего обращения.</li>
            <li>— Чтобы отправить вам запрошенную бесплатную методичку.</li>
            <li>— Чтобы обработать покупку методички.</li>
          </ul>
          <p className="mt-3">
            Мы не продаём и не передаём ваши данные третьим лицам, кроме случаев, необходимых для
            работы сайта (например, платёжный провайдер для обработки оплаты).
          </p>
        </section>

        <section>
          <h2 className="text-sm font-medium uppercase tracking-widest text-ink-soft">
            Хранение данных
          </h2>
          <p className="mt-3">
            Данные хранятся столько, сколько необходимо для указанных целей, и удаляются по
            вашему запросу.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-medium uppercase tracking-widest text-ink-soft">
            Ваши права
          </h2>
          <p className="mt-3">
            Вы можете в любой момент запросить удаление своих данных, написав на контактный email
            сайта.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-medium uppercase tracking-widest text-ink-soft">
            Cookies и аналитика
          </h2>
          <p className="mt-3">
            Сайт использует Google Analytics и Meta Pixel для понимания того, как посетители
            используют сайт. Эти инструменты не идентифицируют вас лично.
          </p>
        </section>
      </div>
    </Container>
  );
}
