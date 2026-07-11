import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { MaterialCover } from "@/components/MaterialCover";
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
    alternates: { canonical: `/materials/${material.slug}` },
    openGraph: { title: `${material.title} — Я Босс Моей Биполярки` },
  };
}

export default async function MaterialPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const material = getMaterial(slug);
  if (!material) notFound();

  const coverFile = material.file.replace(/\.pdf$/i, ".jpg");

  return (
    <Container className="py-16 sm:py-24">
      <div className="grid gap-10 sm:grid-cols-[1fr_1.4fr]">
        <MaterialCover filename={coverFile} title={material.title} className="aspect-[4/5]" />

        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {material.title}
          </h1>
          <p className="mt-2 text-sm text-ink-soft">
            {material.pages} {material.pages === 1 ? "страница" : "страницы"} · стоимость уточняется
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

          <Button href="/contacts" className="mt-10">
            Узнать, как получить
          </Button>
        </div>
      </div>
    </Container>
  );
}
