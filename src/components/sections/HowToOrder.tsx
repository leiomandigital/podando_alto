import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { PassoOrcamento, TextosSecao } from "@/content/site.types";

interface HowToOrderProps {
  steps: PassoOrcamento[];
  texts: TextosSecao;
}

const HowToOrder = ({ steps, texts }: HowToOrderProps) => (
  <SectionContainer id="como-pedir" headingId="como-pedir-titulo" className="bg-muted">
    <SectionHeading id="como-pedir-titulo" eyebrow={texts.sobretitulo} title={texts.titulo} />
    <ol className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {steps.map((step, index) => (
        <li key={step.titulo}>
          <Card className="h-full">
            <CardHeader>
              <span className="flex size-10 items-center justify-center rounded-full bg-primary font-heading text-lg font-extrabold text-primary-foreground">
                {index + 1}
              </span>
              <CardTitle>{step.titulo}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground">{step.texto}</p>
            </CardContent>
          </Card>
        </li>
      ))}
    </ol>
  </SectionContainer>
);

export { HowToOrder };
