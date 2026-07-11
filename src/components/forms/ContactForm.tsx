"use client";

import { FormEvent } from "react";
import { useFormSubmit } from "@/lib/use-form-submit";
import { Field } from "./Field";
import { SubmitButton, FormError } from "./FormChrome";

export function ContactForm() {
  const { status, submit } = useFormSubmit("/api/contact");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    submit({
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      message: String(form.get("message") ?? ""),
    });
  }

  if (status === "success") {
    return (
      <p className="rounded-xl bg-paper-alt p-6 text-ink">
        Спасибо! Я получила ваше сообщение и постараюсь ответить как можно скорее.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Field name="name" label="Имя" />
      <Field name="email" label="Email" type="email" />
      <Field name="message" label="Сообщение" textarea />
      <SubmitButton pending={status === "submitting"} label="Отправить" pendingLabel="Отправляю…" />
      {status === "error" && <FormError />}
    </form>
  );
}
