import { BadgeCheck, CalendarClock, ClipboardCheck, FileText, HardHat, ShieldCheck, TreeDeciduous, type LucideIcon } from "lucide-react";
import { TrustItem } from "@/components/shared/TrustItem";
import type { TrustIconKey, TrustItemData } from "@/lib/trust";

const TRUST_ICONS: Record<TrustIconKey, LucideIcon> = {
  arvores: TreeDeciduous,
  tempo: CalendarClock,
  crea: BadgeCheck,
  tecnico: ClipboardCheck,
  seguranca: HardHat,
  "sem-acidentes": ShieldCheck,
  nota: FileText,
};

interface TrustBarProps {
  items: TrustItemData[];
}

// Colunas por largura de tela (1, 2 e 3); a última linha, quando incompleta, fica centralizada
const ITEM_WIDTH = "w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]";

const TrustBar = ({ items }: TrustBarProps) => (
  <section id="confianca" aria-label="Por que confiar" className="border-b bg-muted py-6">
    <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-8 gap-y-4 px-4 sm:px-6">
      {items.map((item) => (
        <TrustItem key={item.id} icon={TRUST_ICONS[item.id]} text={item.text} className={ITEM_WIDTH} />
      ))}
    </ul>
  </section>
);

export { TrustBar };
