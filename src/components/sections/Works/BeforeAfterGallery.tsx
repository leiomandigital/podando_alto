import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Watermark } from "@/components/shared/Watermark";
import type { AntesDepoisConfig } from "@/content/site.types";

interface CompareProps {
  item: AntesDepoisConfig;
  compareLabel: string;
}

// Divisor controlado por <input type="range">: operável por teclado e sem travar a rolagem vertical
const Compare = ({ item, compareLabel }: CompareProps) => {
  const [position, setPosition] = useState(50);

  return (
    <figure className="flex flex-col gap-2">
      <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-xl">
        <img src={item.depois.src} alt={item.depois.alt} width={item.depois.largura} height={item.depois.altura} loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover" />
        <img
          src={item.antes.src}
          alt={item.antes.alt}
          width={item.antes.largura}
          height={item.antes.altura}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />
        <div className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-background shadow" style={{ left: `${position}%` }} aria-hidden="true" />
        <Watermark />
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label={`${compareLabel}${item.legenda ? `: ${item.legenda}` : ""}`}
          className="absolute inset-0 size-full cursor-ew-resize touch-pan-y opacity-0"
        />
      </AspectRatio>
      {item.legenda && <figcaption className="text-sm font-semibold">{item.legenda}</figcaption>}
    </figure>
  );
};

interface BeforeAfterGalleryProps {
  items: AntesDepoisConfig[];
  compareLabel: string;
}

const BeforeAfterGallery = ({ items, compareLabel }: BeforeAfterGalleryProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    {items.map((item) => (
      <Compare key={item.antes.src} item={item} compareLabel={compareLabel} />
    ))}
  </div>
);

export { BeforeAfterGallery };
