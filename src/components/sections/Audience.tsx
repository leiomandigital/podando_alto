import { Building2, Home, Landmark, type LucideIcon } from "lucide-react";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { PublicoAtendido, TextosSecao } from "@/content/site.types";

const AUDIENCE_ICONS: Record<string, LucideIcon> = {
  empresas: Building2,
  condominios: Landmark,
  residencias: Home,
};

interface AudienceProps {
  items: PublicoAtendido[];
  texts: TextosSecao;
}

const Audience = ({ items, texts }: AudienceProps) => (
  <SectionContainer id="publico" headingId="publico-titulo" className="bg-muted">
    <SectionHeading id="publico-titulo" eyebrow={texts.sobretitulo} title={texts.titulo} />
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {items.map((item) => (
        <FeatureCard key={item.id} icon={AUDIENCE_ICONS[item.id] ?? Building2} title={item.titulo} description={item.texto} />
      ))}
    </div>
  </SectionContainer>
);

export { Audience };
