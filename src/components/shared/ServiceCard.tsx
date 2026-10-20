import type { LucideIcon } from "lucide-react";
import type { Servico } from "@/content/site.types";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

interface ServiceCardProps {
  service: Servico;
  icon: LucideIcon;
  ctaLabel: string;
  featured?: boolean;
  className?: string;
}

// Os cards da grade têm altura fixa; o card em destaque (Poda) ocupa a largura toda
const ServiceCard = ({ service, icon, ctaLabel, featured = false, className }: ServiceCardProps) => (
  <FeatureCard
    icon={icon}
    title={service.nome}
    description={service.descricao}
    descriptionPendingPath="servicos[].descricao"
    featured={featured}
    uniformHeight={!featured}
    className={className}
    footer={
      <WhatsAppButton location="servico" service={service.nome} variant={featured ? "cta" : "outline"}>
        {ctaLabel}
      </WhatsAppButton>
    }
  />
);

export { ServiceCard };
