import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

// Пока реальной обложки нет — показывает акцентную заглушку с названием.
// Как только появится файл public/materials/covers/<filename>, подхватится
// автоматически (тот же принцип, что и PhotoFrame).
export function MaterialCover({
  filename,
  title,
  className = "",
}: {
  filename: string;
  title: string;
  className?: string;
}) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", "materials", "covers", filename));

  if (exists) {
    return (
      <div className={`overflow-hidden rounded-2xl ${className}`}>
        <Image
          src={`/materials/covers/${filename}`}
          alt={title}
          width={600}
          height={800}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-midnight via-midnight-2 to-coral/50 p-6 text-center ${className}`}
    >
      <span className="font-script text-xl leading-snug text-gold">{title}</span>
    </div>
  );
}
