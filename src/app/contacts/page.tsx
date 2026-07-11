import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Связаться с Майей Штейнберг — вопросы, приглашения, обратная связь.",
  alternates: { canonical: "/contacts" },
  openGraph: { title: "Контакты — Я Босс Моей Биполярки" },
};

export default function ContactsPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="grid gap-12 sm:grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Свяжитесь со мной
          </h1>

          <div className="mt-8 flex flex-col gap-2 text-ink">
            {siteConfig.contactEmail && (
              <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-midnight">
                {siteConfig.contactEmail}
              </a>
            )}
            {siteConfig.social.telegram && (
              <a href={siteConfig.social.telegram} className="hover:text-midnight">
                Telegram
              </a>
            )}
            {siteConfig.social.instagram && (
              <a href={siteConfig.social.instagram} className="hover:text-midnight">
                Instagram
              </a>
            )}
          </div>
        </div>

        <ContactForm />
      </div>
    </Container>
  );
}
