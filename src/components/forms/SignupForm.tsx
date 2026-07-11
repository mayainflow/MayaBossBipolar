"use client";

import { FormEvent } from "react";
import { useFormSubmit } from "@/lib/use-form-submit";
import { Field } from "./Field";
import { SubmitButton, FormError } from "./FormChrome";

export function SignupForm() {
  const { status, submit } = useFormSubmit("/api/lecture-signup");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    submit({
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      email: String(form.get("email") ?? ""),
      comment: String(form.get("comment") ?? ""),
    });
  }

  if (status === "success") {
    return (
      <p className="rounded-xl bg-paper-alt p-6 text-ink">
        Спасибо! Я получила вашу заявку и свяжусь с вами, чтобы подтвердить участие.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Field name="name" label="Имя" required />
      <Field name="phone" label="Телефон" type="tel" required />
      <Field name="email" label="Email" type="email" />
      <Field name="comment" label="Комментарий" textarea />
      <SubmitButton pending={status === "submitting"} label="Записаться" pendingLabel="Отправляю…" />
      {status === "error" && <FormError />}
    </form>
  );
}
