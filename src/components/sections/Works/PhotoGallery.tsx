import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Watermark } from "@/components/shared/Watermark";
import type { ImagemConfig } from "@/content/site.types";

interface PhotoGalleryProps {
  images: ImagemConfig[];
}

const PhotoGallery = ({ images }: PhotoGalleryProps) => (
  <Carousel showControls={images.length > 1} loop={images.length > 1}>
    {images.map((image) => (
      <CarouselItem key={image.src}>
        <Dialog>
          <DialogTrigger className="block w-full rounded-xl" aria-label={`Ampliar: ${image.alt}`}>
            <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-xl">
              <img
                src={image.src}
                alt={image.alt}
                width={image.largura}
                height={image.altura}
                loading="lazy"
                decoding="async"
                className="size-full object-cover"
                style={image.posicao ? { objectPosition: image.posicao } : undefined}
              />
              <Watermark />
            </AspectRatio>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>{image.alt}</DialogTitle>
            <DialogDescription>Foto ampliada</DialogDescription>
            <div className="relative mx-auto w-fit max-w-full">
              <img src={image.src} alt={image.alt} width={image.largura} height={image.altura} className="max-h-[80vh] w-auto max-w-full rounded-lg" />
              <Watermark />
            </div>
          </DialogContent>
        </Dialog>
      </CarouselItem>
    ))}
  </Carousel>
);

export { PhotoGallery };
