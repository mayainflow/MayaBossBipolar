import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <p className="text-lg text-ink-soft">
        Похоже, эта страница потерялась. Давайте вернёмся туда, где можно найти что-то полезное.
      </p>
      <Button href="/">На главную</Button>
    </Container>
  );
}
