export function SubmitButton({
  pending,
  label,
  pendingLabel,
}: {
  pending: boolean;
  label: string;
  pendingLabel: string;
}) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold to-coral px-6 py-3 text-sm font-medium text-midnight transition hover:brightness-105 disabled:opacity-60"
    >
      {pending ? pendingLabel : label}
    </button>
  );
}

// Текст ошибки фиксирован SITE_PRD.md разделом 22 — не показывать технические коды.
export function FormError() {
  return (
    <p className="text-sm text-coral">
      Не удалось отправить сообщение. Попробуйте ещё раз через несколько минут или напишите мне
      напрямую.
    </p>
  );
}
