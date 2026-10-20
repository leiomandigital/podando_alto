import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id: string;
  title: string;
  eyebrow?: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

const SectionHeading = ({ id, title, eyebrow, subtitle, align = "left", tone = "light", className }: SectionHeadingProps) => (
  <div className={cn("mb-10 flex max-w-2xl flex-col gap-3", align === "center" && "mx-auto items-center text-center", className)}>
    {eyebrow &&
      (tone === "dark" ? (
        <Badge variant="accent">{eyebrow}</Badge>
      ) : (
        <p className="text-sm font-bold tracking-wide text-primary uppercase">{eyebrow}</p>
      ))}
    <h2 id={id} className={cn("text-3xl sm:text-4xl", tone === "dark" ? "text-primary-foreground" : "text-foreground")}>
      {title}
    </h2>
    {subtitle && (
      <p className={cn("text-lg", tone === "dark" ? "text-primary-foreground/85" : "text-muted-foreground")}>{subtitle}</p>
    )}
  </div>
);

export { SectionHeading };
