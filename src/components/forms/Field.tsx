type FieldProps = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  textarea?: boolean;
};

const baseClass =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:border-midnight focus:outline-none";

export function Field({ name, label, type = "text", required, textarea }: FieldProps) {
  const placeholder = required ? `${label}*` : label;

  if (textarea) {
    return (
      <textarea name={name} required={required} placeholder={placeholder} rows={4} className={baseClass} />
    );
  }

  return (
    <input name={name} type={type} required={required} placeholder={placeholder} className={baseClass} />
  );
}
