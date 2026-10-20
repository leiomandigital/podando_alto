import { Axe, Bug, ClipboardList, Flower2, Leaf, Scissors, Shovel, Sprout, Trash2, TreePine, Zap, type LucideIcon } from "lucide-react";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import type { Servico, TextosSecao } from "@/content/site.types";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "poda-de-arvores": Scissors,
  "remocao-em-altura": TreePine,
  "corte-rede-eletrica": Zap,
  supressao: Axe,
  destoca: Shovel,
  "laudo-tecnico": ClipboardList,
  "tratamento-de-pragas": Bug,
  "limpeza-de-terreno": Trash2,
  "projeto-paisagistico": Flower2,
  jardinagem: Sprout,
  "manutencao-de-jardins": Leaf,
};

const GROUPS = [
  { group: "arborismo", titleKey: "grupoArborismo" },
  { group: "paisagismo", titleKey: "grupoPaisagismo" },
] as const;

interface ServicesProps {
  services: Servico[];
  texts: TextosSecao;
}

const Services = ({ services, texts }: ServicesProps) => {
  const featured = services.find((service) => service.grupo === "destaque");

  return (
    <SectionContainer id="servicos" headingId="servicos-titulo">
      <SectionHeading id="servicos-titulo" eyebrow={texts.sobretitulo} title={texts.titulo} />

      {featured && (
        <ServiceCard service={featured} icon={SERVICE_ICONS[featured.id] ?? Scissors} ctaLabel={texts.botao} featured className="mb-10" />
      )}

      {GROUPS.map(({ group, titleKey }) => (
        <div key={group} className="mb-10">
          <h3 className="mb-4 text-xl text-primary">{texts[titleKey]}</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((service) => service.grupo === group)
              .map((service) => (
                <ServiceCard key={service.id} service={service} icon={SERVICE_ICONS[service.id] ?? Leaf} ctaLabel={texts.botao} />
              ))}
          </div>
        </div>
      ))}

      <p className="text-sm text-muted-foreground">{texts.notaResiduos}</p>
    </SectionContainer>
  );
};

export { Services };
