import Link from "next/link";
import { MaterialCover } from "./MaterialCover";
import type { Material } from "@/lib/materials";

export function MaterialCard({ material }: { material: Material }) {
  const coverFile = material.file.replace(/\.pdf$/i, ".jpg");

  return (
    <Link
      href={`/materials/${material.slug}`}
      className="flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition hover:border-ink/20"
    >
      <MaterialCover filename={coverFile} title={material.title} className="aspect-[4/5]" />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-semibold text-ink">{material.title}</h3>
        <p className="text-sm text-ink-soft">{material.preview[0]}</p>
        <p className="mt-auto pt-2 text-xs uppercase tracking-widest text-ink-soft/70">
          {material.pages} {material.pages === 1 ? "страница" : "страницы"}
        </p>
      </div>
    </Link>
  );
}
