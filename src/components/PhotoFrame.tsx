import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

// Рендерит фото, только если файл реально положен в public/images/<filename>.
// Пока файла нет — ничего не выводит (никаких сломанных картинок или заглушек).
export function PhotoFrame({
  filename,
  alt,
  className = "",
}: {
  filename: string;
  alt: string;
  className?: string;
}) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", "images", filename));
  if (!exists) return null;

  return (
    <div className={`overflow-hidden rounded-2xl bg-paper-alt ${className}`}>
      <Image
        src={`/images/${filename}`}
        alt={alt}
        width={1000}
        height={750}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
