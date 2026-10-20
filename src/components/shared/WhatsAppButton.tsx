import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import type { CtaLocation } from "@/content/site.types";
import { trackWhatsAppClick } from "@/lib/tracking";
import { getWhatsAppHref } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  location: CtaLocation;
  service?: string;
  message?: string;
  variant?: "cta" | "outline" | "onDark";
  size?: "default" | "lg" | "icon";
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
  children: ReactNode;
}

const BUTTON_VARIANT = { cta: "accent", outline: "outline", onDark: "onDark" } as const;

const WhatsAppButton = ({
  location,
  service,
  message,
  variant = "cta",
  size = "default",
  disabled = false,
  ariaLabel,
  className,
  children,
}: WhatsAppButtonProps) => {
  const href = disabled ? undefined : getWhatsAppHref({ service, message });
  const isDisabled = href === undefined;

  return (
    <Button asChild variant={BUTTON_VARIANT[variant]} size={size} className={className}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        role={isDisabled ? "link" : undefined}
        aria-disabled={isDisabled || undefined}
        aria-label={ariaLabel}
        onClick={isDisabled ? undefined : () => trackWhatsAppClick({ cta_location: location, ...(service && { service }) })}
      >
        {children}
      </a>
    </Button>
  );
};

export { WhatsAppButton };
