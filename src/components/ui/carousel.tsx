import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CarouselProps extends React.ComponentProps<"div"> {
  showControls?: boolean;
}

// Com 1 item, sem setas (A.4.4)
const Carousel = ({ className, children, showControls = true, ...props }: CarouselProps) => {
  const [viewportRef, api] = useEmblaCarousel({ align: "start" });

  return (
    <div className={cn("relative", className)} role="region" aria-roledescription="carrossel" {...props}>
      <div ref={viewportRef} className="overflow-hidden">
        <div className="flex gap-4">{children}</div>
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

const CarouselItem = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div role="group" aria-roledescription="item" className={cn("min-w-0 shrink-0 grow-0 basis-4/5 sm:basis-1/2 lg:basis-1/3", className)} {...props} />
);

export { Carousel, CarouselItem };
