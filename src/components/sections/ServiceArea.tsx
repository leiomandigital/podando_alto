import { Clock, Map as MapIcon, MapPin, Navigation } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { SiteConfig, TextosSecao } from "@/content/site.types";
import { buildMapSearchUrl, formatAddress } from "@/lib/format";
import { hasData } from "@/lib/visibility";

interface ServiceAreaProps {
  area: SiteConfig["regiao"];
  texts: TextosSecao;
}

const ServiceArea = ({ area, texts }: ServiceAreaProps) => (
  <SectionContainer id="regiao" headingId="regiao-titulo">
    <SectionHeading id="regiao-titulo" eyebrow={texts.sobretitulo} title={texts.titulo} subtitle={texts.subtitulo} />
    <ul className="mb-8 flex flex-wrap gap-2">
      {area.cidades.map((city) => (
        <li key={city}>
          <Badge variant="default" className="px-4 py-2 text-sm">
            {city}
          </Badge>
        </li>
      ))}
    </ul>
    <Card className="max-w-xl">
      <CardContent className="gap-3">
        <p className="flex items-start gap-3">
          <MapIcon className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
          <span>
            <strong>{texts.todoEstado}</strong> {texts.todoEstadoDetalhe}
          </span>
        </p>
        {hasData(area.deslocamento) && (
          <p className="flex items-start gap-3">
            <Navigation className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
            {area.deslocamento}
          </p>
        )}
        {area.endereco && (
          <p className="flex items-start gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
            <span>
              {formatAddress(area.endereco)}{" "}
              <a href={buildMapSearchUrl(area.endereco)} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline">
                {texts.mapa}
              </a>
            </span>
          </p>
        )}
        {hasData(area.horario) && (
          <p className="flex items-start gap-3">
            <Clock className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
            <span>
              {texts.horario} {area.horario}
            </span>
          </p>
        )}
      </CardContent>
    </Card>
  </SectionContainer>
);

export { ServiceArea };
