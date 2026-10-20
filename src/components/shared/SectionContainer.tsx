import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id: string;
  headingId?: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}

const SectionContainer = ({ id, headingId, className, innerClassName, children }: SectionContainerProps) => (
  <section id={id} aria-labelledby={headingId} className={cn("py-16 sm:py-20", className)}>
    <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", innerClassName)}>{children}</div>
  </section>
);

export { SectionContainer };
