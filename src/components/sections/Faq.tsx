import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { ItemFaq, TextosSecao } from "@/content/site.types";

interface FaqProps {
  questions: ItemFaq[];
  texts: TextosSecao;
}

const Faq = ({ questions, texts }: FaqProps) => (
  <SectionContainer id="perguntas" headingId="perguntas-titulo" innerClassName="max-w-3xl">
    <SectionHeading id="perguntas-titulo" eyebrow={texts.sobretitulo} title={texts.titulo} />
    <Accordion type="single" collapsible>
      {questions.map((item, index) => (
        <AccordionItem key={item.pergunta} value={`item-${index}`}>
          <AccordionTrigger>{item.pergunta}</AccordionTrigger>
          <AccordionContent>{item.resposta}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </SectionContainer>
);

export { Faq };
