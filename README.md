# Я Босс Моей Биполярки

Сайт проекта Майи Штейнберг. Требования — в `SITE_PRD.md`, контент — в `CONTENT_MASTER.md`,
статус задач — в `TASKS.md`, инструкции для Claude Code — в `CLAUDE.md`.

Next.js (App Router) + TypeScript + Tailwind CSS.

## Разработка

```bash
npm install
npm run dev
```

Открыть [http://localhost:3000](http://localhost:3000).

## Переменные окружения

Формы (запись на лекцию, приглашение выступить, обратная связь) отправляют письма через
Resend HTTP API. Без переменных ниже формы работают, но письма не уходят — см. `TASKS.md`.

```
RESEND_API_KEY=
CONTACT_TO_EMAIL=
```

## Сборка

```bash
npm run build
```
