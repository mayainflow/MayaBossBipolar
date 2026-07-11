import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "onDark";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors";
  const styles = {
    primary: "bg-gradient-to-r from-gold to-coral text-midnight hover:brightness-105",
    secondary: "border border-ink/15 text-ink hover:bg-paper-alt",
    onDark: "border border-paper/30 text-paper hover:bg-paper/10",
  }[variant];

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
