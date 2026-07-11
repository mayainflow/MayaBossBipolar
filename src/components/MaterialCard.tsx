import Link from "next/link";
import { MaterialCover } from "./MaterialCover";
import type { Material } from "@/lib/materials";

export function MaterialCard({ material }: { material: Material }) {
  const coverFile = material.file.replace(/\.pdf$/i, ".jpg");
  const priceLabel = material.kind === "free" ? "Бесплатно" : `${material.price} ₪`;

  return (
    <Link
      href={`/materials/${material.slug}`}
      className="flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition hover:border-ink/20"
    >
      <MaterialCover filename={coverFile} title={material.title} className="aspect-[4/5]" />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-semibold text-ink">{material.title}</h3>
        <p className="text-sm text-ink-soft">{material.description}</p>
        <div className="mt-auto flex items-center justify-between pt-2 text-xs uppercase tracking-widest text-ink-soft/70">
          <span>
            {material.pages} {material.pages === 1 ? "страница" : "страницы"}
          </span>
          <span className="font-medium text-midnight">{priceLabel}</span>
        </div>
      </div>
    </Link>
  );
}
