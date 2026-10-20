import { cn } from "@/lib/utils";

const logoFiles = import.meta.glob<string>("../../assets/logo.png", { eager: true, import: "default" });
const logoSource: string | undefined = Object.values(logoFiles)[0];

const LOGO_WIDTH = 402;
const LOGO_HEIGHT = 300;
// Área do emblema (árvore e sol) dentro do JPG original, sem o nome da empresa
const EMBLEM_CROP = { x: 88, width: 274, height: 210 };

interface LogoProps {
  variant?: "full" | "emblem";
  lazy?: boolean; // true abaixo da dobra
  className?: string;
}

const Logo = ({ variant = "full", lazy = false, className }: LogoProps) => {
  const loading = lazy ? "lazy" : undefined;

  if (!logoSource) {
    return <span className={cn("font-heading text-xl font-extrabold text-primary", className)}>Podando Alto</span>;
  }

  if (variant === "emblem") {
    return (
      <span
        className={cn("relative block shrink-0 overflow-hidden", className)}
        style={{ aspectRatio: `${EMBLEM_CROP.width} / ${EMBLEM_CROP.height}` }}
      >
        <img
          src={logoSource}
          alt="Podando Alto Arborismo"
          width={LOGO_WIDTH}
          height={LOGO_HEIGHT}
          loading={loading}
          decoding="async"
          className="absolute top-0 h-auto max-w-none"
          style={{
            width: `${(LOGO_WIDTH / EMBLEM_CROP.width) * 100}%`,
            left: `${(-EMBLEM_CROP.x / EMBLEM_CROP.width) * 100}%`,
          }}
        />
      </span>
    );
  }

  return (
    <img
      src={logoSource}
      alt="Podando Alto Arborismo"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      loading={loading}
      decoding="async"
      className={cn("h-auto w-full", className)}
    />
  );
};

export { Logo };
