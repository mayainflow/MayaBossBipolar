import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { MaterialCover } from "@/components/MaterialCover";
import { LeadMagnetForm } from "@/components/forms/LeadMagnetForm";
import { PurchaseRequestForm } from "@/components/forms/PurchaseRequestForm";
import { getMaterial, materials } from "@/lib/materials";

export function generateStaticParams() {
  return materials.map((material) => ({ slug: material.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const material = getMaterial(slug);
  if (!material) return {};

  return {
    title: material.title,
    description: material.description,
    alternates: { canonical: `/materials/${material.slug}` },
    openGraph: { title: `${material.title} — Я Босс Моей Биполярки` },
  };
}

export default async function MaterialPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const material = getMaterial(slug);
  if (!material) notFound();

  const coverFile = material.file.replace(/\.pdf$/i, ".jpg");
  const priceLabel = material.kind === "free" ? "Бесплатно" : `${material.price} ₪`;

  return (
    <Container className="py-16 sm:py-24">
      <div className="grid gap-10 sm:grid-cols-[1fr_1.4fr]">
        <MaterialCover filename={coverFile} title={material.title} className="aspect-[4/5]" />

        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {material.title}
          </h1>
          <p className="mt-2 text-sm text-ink-soft">
            {material.pages} {material.pages === 1 ? "страница" : "страницы"} ·{" "}
            <span className="font-medium text-midnight">{priceLabel}</span>
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">{material.description}</p>
          <p className="mt-2 text-sm text-ink-soft">
            <span className="font-medium text-ink">Для кого:</span> {material.audience}
          </p>

          <div className="mt-8">
            <h2 className="text-sm font-medium uppercase tracking-widest text-ink-soft">
              Что внутри
            </h2>
            <ul className="mt-4 flex flex-col gap-2 text-ink">
              {material.preview.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="text-gold">•</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 max-w-sm">
            {material.kind === "free" ? (
              <LeadMagnetForm slug={material.slug} />
            ) : (
              <PurchaseRequestForm slug={material.slug} />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
