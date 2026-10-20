import { BadgeCheck, CalendarClock, ClipboardCheck, FileText, HardHat, TreeDeciduous, type LucideIcon } from "lucide-react";
import { TrustItem } from "@/components/shared/TrustItem";
import type { TrustIconKey, TrustItemData } from "@/lib/trust";

const TRUST_ICONS: Record<TrustIconKey, LucideIcon> = {
  arvores: TreeDeciduous,
  tempo: CalendarClock,
  crea: BadgeCheck,
  tecnico: ClipboardCheck,
  seguranca: HardHat,
  nota: FileText,
};

interface TrustBarProps {
  items: TrustItemData[];
}

const TrustBar = ({ items }: TrustBarProps) => (
  <section id="confianca" aria-label="Por que confiar" className="border-b bg-muted py-6">
    <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
      {items.map((item) => (
        <TrustItem key={item.id} icon={TRUST_ICONS[item.id]} text={item.text} />
      ))}
    </ul>
  </section>
);

export { TrustBar };
