import Link from "next/link";
import { Container } from "./Container";
import { siteConfig } from "@/lib/site-config";

const footerLinks = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О Майе" },
  { href: "/lectures", label: "Лекции" },
  { href: "/contacts", label: "Контакты" },
  { href: "/disclaimer", label: "Медицинский дисклеймер" },
];

export function Footer() {
  const hasSocial = siteConfig.social.telegram || siteConfig.social.instagram || siteConfig.social.youtube;

  return (
    <footer className="mt-24 border-t border-ink/10 bg-midnight text-paper/80">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:justify-between">
        <div>
          <p className="font-script text-2xl text-gold">Maya Steinberg</p>
          <p className="mt-2 max-w-xs text-sm text-paper/60">Два полюса. Одна я.</p>
        </div>

        <nav className="flex flex-col gap-2 text-sm">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-gold">
              {item.label}
            </Link>
          ))}
        </nav>

        {hasSocial && (
          <div className="flex flex-col gap-2 text-sm">
            {siteConfig.social.telegram && (
              <a href={siteConfig.social.telegram} className="hover:text-gold">
                Telegram
              </a>
            )}
            {siteConfig.social.instagram && (
              <a href={siteConfig.social.instagram} className="hover:text-gold">
                Instagram
              </a>
            )}
            {siteConfig.social.youtube && (
              <a href={siteConfig.social.youtube} className="hover:text-gold">
                YouTube
              </a>
            )}
          </div>
        )}
      </Container>

      <div className="border-t border-paper/10 py-4 text-center text-xs text-paper/40">
        © {new Date().getFullYear()} {siteConfig.author}
      </div>
    </footer>
  );
}
