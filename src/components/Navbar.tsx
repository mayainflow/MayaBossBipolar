"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "./Container";

// Блог и FAQ пока не в меню — по CLAUDE.md/CONTENT_MASTER.md для них ещё
// нет утверждённого контента, публиковать разделы без него нельзя.
const navItems = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О Майе" },
  { href: "/lectures", label: "Лекции" },
  { href: "/materials", label: "Методички" },
  { href: "/contacts", label: "Контакты" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <Container
        className={`flex items-center justify-between transition-all duration-200 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <Link href="/" className="font-script text-2xl text-midnight" onClick={() => setMenuOpen(false)}>
          Maya Steinberg
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-ink-soft md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/lectures#signup"
            className="hidden rounded-full bg-gradient-to-r from-gold to-coral px-5 py-2 text-sm font-medium text-midnight transition hover:brightness-105 sm:inline-flex"
          >
            Записаться
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 md:hidden"
          >
            <span className="sr-only">Меню</span>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </Container>

      {menuOpen && (
        <nav className="border-t border-ink/10 bg-paper md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-ink-soft hover:bg-paper-alt hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/lectures#signup"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-gradient-to-r from-gold to-coral px-5 py-2 text-center text-sm font-medium text-midnight"
            >
              Записаться
            </Link>
          </Container>
        </nav>
      )}
    </header>
  );
}
