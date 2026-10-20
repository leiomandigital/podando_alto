import type { LucideIcon } from "lucide-react";

interface TrustItemProps {
  icon: LucideIcon;
  text: string;
}

const TrustItem = ({ icon: Icon, text }: TrustItemProps) => (
  <li className="flex items-center gap-3">
    <Icon className="size-6 shrink-0 text-brand" aria-hidden="true" />
    <span className="text-sm font-semibold sm:text-base">{text}</span>
  </li>
);

export { TrustItem };
