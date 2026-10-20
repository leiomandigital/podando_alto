import { BadgeDollarSign, ClipboardCheck, FileText, HardHat, ShieldCheck, Truck, type LucideIcon } from "lucide-react";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { MediaSlot } from "@/components/shared/MediaSlot";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import type { Diferencial, ImagemConfig, TextosSecao } from "@/content/site.types";

const EQUIPMENT_ID = "equipamentos";

const DIFFERENTIAL_ICONS: Record<string, LucideIcon> = {
  qualidade: BadgeDollarSign,
  "responsabilidade-tecnica": ClipboardCheck,
  seguranca: HardHat,
  garantia: ShieldCheck,
  "nota-fiscal": FileText,
  [EQUIPMENT_ID]: Truck,
};

interface DifferentialsProps {
  items: Diferencial[];
  equipment: string[];
  truckPhoto: ImagemConfig | null;
  texts: TextosSecao;
  ctaLabel: string;
}

const Differentials = ({ items, equipment, truckPhoto, texts, ctaLabel }: DifferentialsProps) => (
  <SectionContainer id="diferenciais" headingId="diferenciais-titulo">
    <SectionHeading id="diferenciais-titulo" eyebrow={texts.sobretitulo} title={texts.titulo} />
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const isEquipment = item.id === EQUIPMENT_ID;
        return (
          <FeatureCard
            key={item.id}
            icon={DIFFERENTIAL_ICONS[item.id] ?? ShieldCheck}
            title={item.titulo}
            description={isEquipment ? null : item.texto}
            footer={
              isEquipment ? (
                <ul className="list-disc space-y-1 pl-5 text-base text-muted-foreground">
                  {equipment.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              ) : undefined
            }
          />
        );
      })}
    </div>
    <MediaSlot image={truckPhoto} expectedFile="caminhao-cesto-aereo" ratio={21 / 9} className="mt-4" />
    <div className="mt-10 flex justify-center">
      <WhatsAppButton location="diferenciais" size="lg">
        <WhatsAppIcon className="size-5" />
        {ctaLabel}
      </WhatsAppButton>
    </div>
  </SectionContainer>
);

export { Differentials };
