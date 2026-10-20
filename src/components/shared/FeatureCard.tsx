import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pending } from "@/components/shared/Pending";
import { hasData } from "@/lib/visibility";
import { cn } from "@/lib/utils";

// Altura reservada ao título conforme a largura útil do card (consulta de contêiner), medida com o
// título mais longo ao lado do ícone: 3 linhas até ~18 rem, 2 linhas até ~28 rem e 1 linha acima.
// Em cards muito estreitos (celular de 280 px) a fonte diminui para o título caber em 3 linhas.
const UNIFORM_TITLE_CLASSES =
  "flex min-h-[4.65rem] items-center @min-[18.125rem]:min-h-[3.1rem] @min-[28.125rem]:min-h-0 @max-[13.375rem]:text-base";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description?: string | null;
  descriptionPendingPath?: string;
  featured?: boolean;
  // Reserva o espaço do título e 4 linhas de descrição: os cards da mesma grade ficam sempre do mesmo tamanho
  uniformHeight?: boolean;
  footer?: ReactNode;
  className?: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  descriptionPendingPath,
  featured = false,
  uniformHeight = false,
  footer,
  className,
}: FeatureCardProps) => {
  const hasDescription = hasData(description);
  const hasContentArea = uniformHeight || hasDescription;

  return (
    <Card className={cn(uniformHeight && "@container", featured && "border-primary bg-primary text-primary-foreground shadow-md", className)}>
      <CardHeader className="flex-row items-center gap-3">
        <span
          className={cn(
            "flex shrink-0 items-center justify-center rounded-lg",
            featured ? "size-12 bg-accent text-accent-foreground" : "size-10 bg-muted text-brand",
          )}
        >
          <Icon className={featured ? "size-6" : "size-5"} aria-hidden="true" />
        </span>
        <CardTitle className={cn("min-w-0 flex-1", featured && "text-2xl", uniformHeight && UNIFORM_TITLE_CLASSES)}>{title}</CardTitle>
      </CardHeader>
      {hasContentArea && (
        <CardContent className={cn(uniformHeight && "h-20")}>
          {hasDescription && (
            <p
              className={cn(
                featured ? "text-sm text-primary-foreground/90 sm:text-base max-[319px]:text-xs" : "text-muted-foreground",
                // abaixo de 320 px a fonte diminui e cabem 5 linhas na mesma altura de 4
                uniformHeight ? "line-clamp-4 text-sm text-pretty max-[319px]:line-clamp-5 max-[319px]:text-xs" : !featured && "text-base",
              )}
            >
              {description}
            </p>
          )}
          {!hasDescription && descriptionPendingPath && <Pending path={descriptionPendingPath} />}
        </CardContent>
      )}
      {!hasContentArea && descriptionPendingPath && <Pending path={descriptionPendingPath} />}
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};

export { FeatureCard };
