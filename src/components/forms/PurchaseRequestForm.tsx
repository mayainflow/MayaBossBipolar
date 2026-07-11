"use client";

import { FormEvent } from "react";
import { useFormSubmit } from "@/lib/use-form-submit";
import { Field } from "./Field";
import { SubmitButton, FormError } from "./FormChrome";

export function PurchaseRequestForm({ slug }: { slug: string }) {
  const { status, submit } = useFormSubmit("/api/purchase-request");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    submit({
      slug,
      name: String(form.get("name") ?? ""),
      contact: String(form.get("contact") ?? ""),
    });
  }

  if (status === "success") {
    return (
      <p className="rounded-xl bg-paper-alt p-6 text-ink">
        Спасибо! Я свяжусь с вами по поводу оплаты и отправлю методичку.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Field name="name" label="Имя" required />
      <Field name="contact" label="Email или Telegram" required />
      <SubmitButton pending={status === "submitting"} label="Заявка на покупку" pendingLabel="Отправляю…" />
      {status === "error" && <FormError />}
    </form>
  );
}
