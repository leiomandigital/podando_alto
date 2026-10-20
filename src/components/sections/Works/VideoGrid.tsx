import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { VideoConfig } from "@/content/site.types";

interface VideoGridProps {
  videos: VideoConfig[];
}

// Abaixo da dobra: nada é baixado antes do clique em reproduzir
const VideoGrid = ({ videos }: VideoGridProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    {videos.map((video) => (
      <figure key={video.src} className="flex flex-col gap-2">
        <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-xl bg-foreground">
          <video src={video.src} poster={video.poster.src} controls preload="none" playsInline className="size-full object-cover" />
        </AspectRatio>
        {video.legenda && <figcaption className="text-sm font-semibold">{video.legenda}</figcaption>}
      </figure>
    ))}
  </div>
);

export { VideoGrid };
