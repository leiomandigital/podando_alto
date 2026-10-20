import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TechnicalTeam } from "@/components/sections/TechnicalTeam";
import { Logo } from "@/components/shared/Logo";
import { Pending } from "@/components/shared/Pending";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { ImagemConfig, MembroEquipeTecnica, TextosSecao } from "@/content/site.types";
import { fillTemplate, getInitials } from "@/lib/format";
import { hasData } from "@/lib/visibility";

interface AboutProps {
  responsible: string;
  photo: ImagemConfig | null;
  yearsActive: string | null;
  valueProposition: string;
  story: string | null;
  team: MembroEquipeTecnica[];
  texts: TextosSecao;
}

const About = ({ responsible, photo, yearsActive, valueProposition, story, team, texts }: AboutProps) => (
  <SectionContainer id="quem-somos" headingId="quem-somos-titulo" className="bg-muted">
    <SectionHeading id="quem-somos-titulo" title={texts.titulo} />
    <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
      {photo ? (
        <Avatar className="size-24">
          <AvatarImage src={photo.src} alt={photo.alt} width={photo.largura} height={photo.altura} />
          <AvatarFallback>{getInitials(responsible)}</AvatarFallback>
        </Avatar>
      ) : (
        <Logo variant="emblem" lazy className="w-36 shrink-0" />
      )}
      <div className="flex max-w-2xl flex-col gap-3">
        <p className="font-heading text-xl font-bold">{responsible}</p>
        {hasData(yearsActive) && <p className="text-lg">{fillTemplate(texts.atuacao, { tempo: yearsActive ?? "" })}</p>}
        <p className="text-lg text-muted-foreground">{valueProposition}</p>
        {hasData(story) ? (
          <div className="mt-2 flex flex-col gap-1">
            <h3 className="text-lg text-primary">{texts.historia}</h3>
            <p className="text-base text-muted-foreground">{story}</p>
          </div>
        ) : (
          <Pending path="empresa.historia" />
        )}
      </div>
    </div>
    {hasData(team) && <TechnicalTeam title={texts.equipe} members={team} />}
  </SectionContainer>
);

export { About };
