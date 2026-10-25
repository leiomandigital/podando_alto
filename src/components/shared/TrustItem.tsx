import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustItemProps {
  icon: LucideIcon;
  text: string;
  className?: string;
}

const TrustItem = ({ icon: Icon, text, className }: TrustItemProps) => (
  <li className={cn("flex items-center gap-3", className)}>
    <Icon className="size-6 shrink-0 text-brand" aria-hidden="true" />
    <span className="text-sm font-semibold sm:text-base">{text}</span>
  </li>
);

export { TrustItem };
