import { ContactForm } from "@/components/sections/ContactForm";
import { Pending } from "@/components/shared/Pending";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import type { SiteConfig, TextosSecao } from "@/content/site.types";
import { formatWhatsAppDisplay } from "@/lib/format";
import { hasData } from "@/lib/visibility";

interface FinalCtaProps {
  slogan: string;
  texts: TextosSecao;
  ctaLabel: string;
  contact: SiteConfig["contato"];
  serviceNames: string[];
}

const FinalCta = ({ slogan, texts, ctaLabel, contact, serviceNames }: FinalCtaProps) => (
  <section id="contato" aria-labelledby="contato-titulo" className="bg-primary py-16 text-primary-foreground sm:py-20">
    <div className="mx-auto grid grid-cols-1 w-full max-w-6xl items-start gap-10 px-4 sm:px-6 md:grid-cols-2">
      <div className="flex flex-col items-start gap-6">
        <SectionHeading id="contato-titulo" tone="dark" eyebrow={slogan} title={texts.titulo} subtitle={texts.subtitulo} className="mb-0" />
        <WhatsAppButton location="final" size="lg">
          <WhatsAppIcon className="size-5" />
          {ctaLabel}
        </WhatsAppButton>
        <div className="flex flex-col gap-1 text-base">
          <p>
            {texts.whatsapp}: <span className="font-semibold">{formatWhatsAppDisplay(contact.whatsapp)}</span>
          </p>
          <a href={`mailto:${contact.email}`} className="inline-flex min-h-11 flex-wrap items-center gap-x-1">
            {texts.email}:<span className="font-semibold underline [overflow-wrap:anywhere]">{contact.email}</span>
          </a>
          {hasData(contact.horario) ? (
            <p>
              {texts.horario}: {contact.horario}
            </p>
          ) : (
            <Pending path="contato.horario" />
          )}
          {hasData(contact.pagamento) ? (
            <p>
              {texts.pagamento}: {contact.pagamento}
            </p>
          ) : (
            <Pending path="contato.pagamento" />
          )}
        </div>
      </div>
      <ContactForm serviceNames={serviceNames} texts={texts} ctaLabel={ctaLabel} />
    </div>
  </section>
);

export { FinalCta };
