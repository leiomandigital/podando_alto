import { BadgeCheck, CalendarClock, GraduationCap, TreeDeciduous, type LucideIcon } from "lucide-react";
import { TechnicalTeam } from "@/components/sections/TechnicalTeam";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/shared/Logo";
import { MediaSlot } from "@/components/shared/MediaSlot";
import { Pending } from "@/components/shared/Pending";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { ImagemConfig, MembroEquipeTecnica, TextosSecao } from "@/content/site.types";
import { fillTemplate } from "@/lib/format";
import { hasData } from "@/lib/visibility";

interface AboutProps {
  responsible: string;
  role: string | null;
  formation: string | null;
  photo: ImagemConfig | null;
  yearsActive: string | null;
  treesPruned: string | null;
  valueProposition: string;
  story: string | null;
  team: MembroEquipeTecnica[];
  texts: TextosSecao;
}

interface Highlight {
  icon: LucideIcon;
  text: string;
}

const About = ({ responsible, role, formation, photo, yearsActive, treesPruned, valueProposition, story, team, texts }: AboutProps) => {
  const highlights: (Highlight | null)[] = [
    formation ? { icon: GraduationCap, text: formation } : null,
    yearsActive ? { icon: CalendarClock, text: fillTemplate(texts.atuacao, { tempo: yearsActive }) } : null,
    treesPruned ? { icon: TreeDeciduous, text: `${treesPruned} árvores podadas` } : null,
  ];

  return (
    <SectionContainer id="quem-somos" headingId="quem-somos-titulo" className="bg-muted">
      <SectionHeading id="quem-somos-titulo" title={texts.titulo} />
      <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-lg">
        <div className="sun-rays pointer-events-none absolute inset-x-0 bottom-0 h-full opacity-50" aria-hidden="true" />
        <div className="relative grid grid-cols-1 gap-8 p-6 sm:p-10 md:grid-cols-[auto_1fr]">
          <div className="mx-auto flex w-56 flex-col gap-3 md:mx-0 md:w-64">
            {photo ? (
              <MediaSlot image={photo} expectedFile="foto-responsavel" ratio={4 / 5} className="shadow-lg ring-4 ring-accent" />
            ) : (
              <>
                <div className="rounded-2xl bg-background p-4 shadow-lg ring-4 ring-accent">
                  <Logo variant="emblem" lazy />
                </div>
                <Pending path="midia.fotoResponsavel" />
              </>
            )}
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col items-start gap-3">
              {role && (
                <Badge variant="accent" className="gap-2 px-4 py-1.5 text-sm">
                  <BadgeCheck className="size-4" aria-hidden="true" />
                  {role}
                </Badge>
              )}
              <h3 className="text-3xl sm:text-4xl">{responsible}</h3>
              <p className="text-lg text-primary-foreground/90">{valueProposition}</p>
            </div>
            <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              {highlights.map(
                (item) =>
                  item && (
                    <li key={item.text} className="flex items-center gap-2 rounded-full bg-black/20 px-4 py-2 text-sm font-semibold">
                      <item.icon className="size-5 shrink-0 text-accent" aria-hidden="true" />
                      {item.text}
                    </li>
                  ),
              )}
            </ul>
            {hasData(story) ? (
              <div className="flex flex-col gap-2 rounded-2xl bg-black/20 p-5">
                <h4 className="font-heading text-xl font-bold">{texts.historia}</h4>
                <p className="text-base text-primary-foreground/90">{story}</p>
              </div>
            ) : (
              <Pending path="empresa.historia" />
            )}
          </div>
        </div>
      </div>
      {hasData(team) && <TechnicalTeam title={texts.equipe} members={team} />}
    </SectionContainer>
  );
};

export { About };
