import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { MaterialCard } from "@/components/MaterialCard";
import { materials } from "@/lib/materials";

export const metadata: Metadata = {
  title: "Методички",
  description: "Практические методички Майи Штейнберг для жизни с биполярным расстройством.",
  alternates: { canonical: "/materials" },
  openGraph: { title: "Методички — Я Босс Моей Биполярки" },
};

export default function MaterialsPage() {
  return (
    <Container className="py-16 sm:py-24">
      <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Методички</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
        Короткие практические материалы — то, что реально помогает день за днём.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {materials.map((material) => (
          <MaterialCard key={material.slug} material={material} />
        ))}
      </div>
    </Container>
  );
}
