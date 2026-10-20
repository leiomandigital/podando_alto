import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { SiteConfig, TextosSecao } from "@/content/site.types";
import { hasData } from "@/lib/visibility";
import { BeforeAfterGallery } from "./BeforeAfterGallery";
import { PhotoGallery } from "./PhotoGallery";
import { VideoGrid } from "./VideoGrid";

interface WorksProps {
  media: SiteConfig["midia"];
  texts: TextosSecao;
}

const Works = ({ media, texts }: WorksProps) => (
  <SectionContainer id="trabalhos" headingId="trabalhos-titulo" className="bg-muted">
    <SectionHeading id="trabalhos-titulo" eyebrow={texts.sobretitulo} title={texts.titulo} />
    <div className="flex flex-col gap-12">
      {hasData(media.antesDepois) && (
        <div>
          <h3 className="mb-4 text-xl text-primary">{texts.antesDepois}</h3>
          <BeforeAfterGallery items={media.antesDepois} compareLabel={texts.comparador} />
        </div>
      )}
      {hasData(media.galeria) && (
        <div>
          <h3 className="mb-4 text-xl text-primary">{texts.galeria}</h3>
          <PhotoGallery images={media.galeria} />
        </div>
      )}
      {hasData(media.videos) && (
        <div>
          <h3 className="mb-4 text-xl text-primary">{texts.videos}</h3>
          <VideoGrid videos={media.videos} />
        </div>
      )}
    </div>
  </SectionContainer>
);

export { Works };
