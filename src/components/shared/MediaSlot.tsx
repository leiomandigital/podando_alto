import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Watermark } from "@/components/shared/Watermark";
import type { ImagemConfig } from "@/content/site.types";
import { cn } from "@/lib/utils";

interface MediaSlotProps {
  image: ImagemConfig | null;
  expectedFile: string;
  ratio: number;
  priority?: boolean;
  className?: string;
}

const MediaSlot = ({ image, expectedFile, ratio, priority = false, className }: MediaSlotProps) => {
  if (!image) {
    if (!import.meta.env.DEV) return null;
    return (
      <AspectRatio ratio={ratio} className={cn("overflow-hidden rounded-xl", className)}>
        <div className="flex size-full items-center justify-center border-2 border-dashed border-border bg-muted p-4 text-center text-sm text-muted-foreground">
          [PENDENTE: imagem {expectedFile}]
        </div>
      </AspectRatio>
    );
  }

  return (
    <AspectRatio ratio={ratio} className={cn("overflow-hidden rounded-xl", className)}>
      <img
        src={image.src}
        alt={image.alt}
        width={image.largura}
        height={image.altura}
        loading={priority ? undefined : "lazy"}
        decoding={priority ? undefined : "async"}
        fetchPriority={priority ? "high" : undefined}
        className="size-full object-cover"
        style={image.posicao ? { objectPosition: image.posicao } : undefined}
      />
      <Watermark />
    </AspectRatio>
  );
};

export { MediaSlot };
