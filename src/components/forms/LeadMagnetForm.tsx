"use client";

import { FormEvent } from "react";
import { useFormSubmit } from "@/lib/use-form-submit";
import { Field } from "./Field";
import { SubmitButton, FormError } from "./FormChrome";

export function LeadMagnetForm({ slug }: { slug: string }) {
  const { status, submit } = useFormSubmit("/api/lead-magnet");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    submit({
      slug,
      contact: String(form.get("contact") ?? ""),
    });
  }

  if (status === "success") {
    return (
      <p className="rounded-xl bg-paper-alt p-6 text-ink">
        Спасибо! Я отправлю методичку на указанный контакт в ближайшее время.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Field name="contact" label="Email или Telegram" required />
      <SubmitButton pending={status === "submitting"} label="Получить методичку" pendingLabel="Отправляю…" />
      {status === "error" && <FormError />}
    </form>
  );
}
