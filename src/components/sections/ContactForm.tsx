import { useState } from "react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeSelect } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import type { TextosSecao } from "@/content/site.types";
import { buildFormMessage } from "@/lib/whatsapp";

interface ContactFormProps {
  serviceNames: string[];
  texts: TextosSecao;
  ctaLabel: string;
}

const ContactForm = ({ serviceNames, texts, ctaLabel }: ContactFormProps) => {
  const [nome, setNome] = useState("");
  const [servico, setServico] = useState("");
  const [local, setLocal] = useState("");
  const [descricao, setDescricao] = useState("");

  const isDescriptionFilled = descricao.trim().length > 0;
  const message = buildFormMessage({ nome: nome.trim(), servico, local: local.trim(), descricao: descricao.trim() });

  return (
    <form className="rounded-xl bg-background p-4 text-foreground shadow-lg sm:p-6" onSubmit={(event) => event.preventDefault()}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="form-nome">{texts.formNome}</FieldLabel>
          <Input id="form-nome" name="nome" autoComplete="name" inputMode="text" value={nome} onChange={(event) => setNome(event.target.value)} />
        </Field>
        <Field>
          <FieldLabel htmlFor="form-servico">{texts.formServico}</FieldLabel>
          <NativeSelect id="form-servico" name="servico" value={servico} onChange={(event) => setServico(event.target.value)}>
            <option value="">{texts.formServicoVazio}</option>
            {serviceNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </NativeSelect>
        </Field>
        <Field>
          <FieldLabel htmlFor="form-local">{texts.formLocal}</FieldLabel>
          <Input id="form-local" name="local" autoComplete="address-level2" inputMode="text" value={local} onChange={(event) => setLocal(event.target.value)} />
        </Field>
        <Field>
          <FieldLabel htmlFor="form-descricao">{texts.formDescricao}</FieldLabel>
          <Textarea id="form-descricao" name="descricao" required value={descricao} onChange={(event) => setDescricao(event.target.value)} />
        </Field>
        <WhatsAppButton
          location="formulario"
          variant="outline"
          service={servico || undefined}
          message={message}
          disabled={!isDescriptionFilled}
        >
          <WhatsAppIcon className="size-5" />
          {ctaLabel}
        </WhatsAppButton>
      </FieldGroup>
    </form>
  );
};

export { ContactForm };
