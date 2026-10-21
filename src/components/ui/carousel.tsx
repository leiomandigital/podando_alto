import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AUTOPLAY_INTERVAL_MS = 4500;

interface CarouselProps extends React.ComponentProps<"div"> {
  showControls?: boolean;
  // Volta ao primeiro item depois do último e avança sozinho, sem parar
  loop?: boolean;
}

const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Com 1 item, sem setas (A.4.4). Em modo contínuo o avanço automático nunca termina: só para enquanto o mouse está
// em cima (ou um item tem foco do teclado) e volta ao tirar. Com "reduzir movimento" no aparelho, não avança sozinho.
const Carousel = ({ className, children, showControls = true, loop = false, ...props }: CarouselProps) => {
  const [viewportRef, api] = useEmblaCarousel({ align: "start", loop });
  const [autoplay] = React.useState(() => loop && !prefersReducedMotion());
  const [hovered, setHovered] = React.useState(false);
  const [keyboardFocused, setKeyboardFocused] = React.useState(false);
  const advancing = autoplay && !hovered && !keyboardFocused;

  React.useEffect(() => {
    if (!api || !advancing) return;
    const timer = window.setInterval(() => api.scrollNext(), AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [api, advancing]);

  return (
    <div
      className={cn("relative", className)}
      role="region"
      aria-roledescription="carrossel"
      // Só o mouse conta: no toque o "passar por cima" ficaria preso depois de tocar na foto
      onPointerEnter={(event) => event.pointerType === "mouse" && setHovered(true)}
      onPointerLeave={(event) => event.pointerType === "mouse" && setHovered(false)}
      // Foco por clique não pausa: senão a foto tocada deixaria o carrossel parado para sempre
      onFocus={(event) => setKeyboardFocused(event.target.matches(":focus-visible"))}
      onBlur={() => setKeyboardFocused(false)}
      {...props}
    >
      <div ref={viewportRef} className="overflow-hidden">
        <div className="-ml-4 flex" aria-live={advancing ? "off" : "polite"}>
          {children}
        </div>
      </div>
      {showControls && (
        <div className="mt-4 flex justify-end gap-2">
          <Button variant="outline" size="iconSm" aria-label="Item anterior" onClick={() => api?.scrollPrev()}>
            <ChevronLeft className="size-5" aria-hidden="true" />
          </Button>
          <Button variant="outline" size="iconSm" aria-label="Próximo item" onClick={() => api?.scrollNext()}>
            <ChevronRight className="size-5" aria-hidden="true" />
          </Button>
        </div>
      )}
    </div>
  );
};

// O espaço entre os itens é o padding à esquerda (compensado pelo -ml-4 da faixa): o modo contínuo mede os itens com ele
const CarouselItem = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    role="group"
    aria-roledescription="item"
    className={cn("min-w-0 shrink-0 grow-0 basis-4/5 pl-4 sm:basis-1/2 lg:basis-1/3", className)}
    {...props}
  />
);

export { Carousel, CarouselItem };
