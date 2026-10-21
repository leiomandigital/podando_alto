import { ExternalLink, Quote } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ClientMarquee } from "@/components/shared/ClientMarquee";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { Depoimento, SiteConfig, TextosSecao } from "@/content/site.types";
import { fillTemplate } from "@/lib/format";
import { hasData } from "@/lib/visibility";

interface SocialProofProps {
  clients: string[];
  testimonials: Depoimento[];
  google: SiteConfig["google"];
  texts: TextosSecao;
}

const SocialProof = ({ clients, testimonials, google, texts }: SocialProofProps) => (
  <SectionContainer id="clientes" headingId="clientes-titulo">
    <SectionHeading id="clientes-titulo" eyebrow={texts.sobretitulo} title={texts.titulo} />

    {hasData(clients) && (
      <div className="mb-10">
        <ClientMarquee label={texts.jaAtendemos} items={clients} />
      </div>
    )}

    {hasData(testimonials) && (
      <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={`${testimonial.nome}-${testimonial.cidade}`}>
            <CardHeader>
              <Quote className="size-6 text-brand" aria-hidden="true" />
              <CardTitle>{testimonial.nome}</CardTitle>
              <CardDescription>{testimonial.cidade}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base">{testimonial.texto}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    )}

    {google && (
      <a
        href={google.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline"
      >
        {fillTemplate(texts.google, { nota: google.nota.toLocaleString("pt-BR"), total: google.totalAvaliacoes })}
        <ExternalLink className="size-4" aria-hidden="true" />
      </a>
    )}
  </SectionContainer>
);

export { SocialProof };
