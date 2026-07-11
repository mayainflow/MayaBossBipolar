"use client";

import { FormEvent } from "react";
import { useFormSubmit } from "@/lib/use-form-submit";
import { Field } from "./Field";
import { SubmitButton, FormError } from "./FormChrome";

export function InviteForm() {
  const { status, submit } = useFormSubmit("/api/invite");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    submit({
      name: String(form.get("name") ?? ""),
      organization: String(form.get("organization") ?? ""),
      phone: String(form.get("phone") ?? ""),
      email: String(form.get("email") ?? ""),
      city: String(form.get("city") ?? ""),
      comment: String(form.get("comment") ?? ""),
    });
  }

  if (status === "success") {
    return (
      <p className="rounded-xl bg-paper-alt p-6 text-ink">
        Спасибо за приглашение! Я свяжусь с вами, чтобы обсудить детали выступления.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Field name="name" label="Имя" required />
      <Field name="organization" label="Организация" />
      <Field name="phone" label="Телефон" type="tel" />
      <Field name="email" label="Email" type="email" />
      <Field name="city" label="Город" />
      <Field name="comment" label="Комментарий" textarea />
      <SubmitButton
        pending={status === "submitting"}
        label="Пригласить Майю выступить"
        pendingLabel="Отправляю…"
      />
      {status === "error" && <FormError />}
    </form>
  );
}
