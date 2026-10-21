import type { CSSProperties } from "react";
import { Badge } from "@/components/ui/badge";

// Abaixo disso a faixa ficaria mais curta que a tela: a lista fica parada, como antes
const MIN_ITEMS_TO_SCROLL = 5;
const SECONDS_PER_ITEM = 5;

interface ClientMarqueeProps {
  label: string;
  items: string[];
}

const ClientList = ({ items, labelId, hidden = false }: { items: string[]; labelId?: string; hidden?: boolean }) => (
  <ul aria-labelledby={hidden ? undefined : labelId} aria-hidden={hidden || undefined} className="marquee-copy flex shrink-0 items-center">
    {items.map((item) => (
      <li key={item} className="mr-3">
        <Badge variant="secondary" className="border px-5 py-2.5 text-sm sm:text-base">
          {item}
        </Badge>
      </li>
    ))}
  </ul>
);

// Faixa contínua, sem fim: a lista aparece duas vezes (a segunda só visual) e a faixa anda metade da largura, em ciclo.
// Para só enquanto o mouse está em cima (CSS). Com "reduzir movimento" no aparelho, vira uma lista que quebra linha.
const ClientMarquee = ({ label, items }: ClientMarqueeProps) => {
  if (items.length < MIN_ITEMS_TO_SCROLL) {
    return (
      <div className="flex flex-wrap items-center gap-3">
        <p className="font-semibold">{label}</p>
        {items.map((item) => (
          <Badge key={item} variant="secondary" className="px-4 py-2 text-sm">
            {item}
          </Badge>
        ))}
      </div>
    );
  }

  return (
    <div>
      <p id="clientes-lista" className="mb-3 font-semibold">
        {label}
      </p>
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track flex w-max" style={{ "--marquee-duration": `${items.length * SECONDS_PER_ITEM}s` } as CSSProperties}>
          <ClientList items={items} labelId="clientes-lista" />
          <ClientList items={items} hidden />
        </div>
      </div>
    </div>
  );
};

export { ClientMarquee };
