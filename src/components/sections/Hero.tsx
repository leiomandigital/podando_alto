import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/Logo";
import { MediaSlot } from "@/components/shared/MediaSlot";
import { Pending } from "@/components/shared/Pending";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import type { ImagemConfig } from "@/content/site.types";

interface HeroProps {
  heading: string;
  subtitle: string;
  slogan: string;
  image: ImagemConfig | null;
  primaryLabel: string;
  secondaryLabel: string;
}

const Hero = ({ heading, subtitle, slogan, image, primaryLabel, secondaryLabel }: HeroProps) => (
  <section id="hero" className="relative overflow-hidden bg-primary pt-24 pb-14 text-primary-foreground sm:pt-32 sm:pb-20">
    <div className="sun-rays pointer-events-none absolute inset-x-0 bottom-0 h-full" aria-hidden="true" />
    <div className="relative mx-auto grid grid-cols-1 w-full max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
      <div className="flex flex-col items-start gap-5">
        <Badge variant="accent">{slogan}</Badge>
        <h1 className="text-3xl sm:text-5xl">{heading}</h1>
        <p className="text-lg text-primary-foreground/90 sm:text-xl">{subtitle}</p>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <WhatsAppButton location="hero" size="lg">
            <WhatsAppIcon className="size-5" />
            {primaryLabel}
          </WhatsAppButton>
          <Button asChild variant="onDark" size="lg">
            <a href="#servicos">{secondaryLabel}</a>
          </Button>
        </div>
      </div>

      {image ? (
        <MediaSlot image={image} expectedFile="hero" ratio={4 / 3} priority className="shadow-lg" />
      ) : (
        <div className="hidden flex-col items-center gap-3 md:flex">
          <div className="w-full max-w-sm rounded-3xl bg-background p-4 shadow-lg">
            <Logo />
          </div>
          <Pending path="midia.hero" />
        </div>
      )}
    </div>
  </section>
);

export { Hero };
