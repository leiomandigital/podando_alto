import { siteConfig } from "@/content/site.config";

export const buildWhatsAppUrl = (message: string): string => {
  // contato.whatsapp: só dígitos, com 55 + DDD. Ex.: "5527999999999"
  const number = siteConfig.contato.whatsapp;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};

export const buildServiceMessage = (template: string, serviceName: string): string =>
  template.replace("{servico}", serviceName.toLowerCase());

export interface FormMessageFields {
  nome: string;
  servico: string;
  local: string;
  descricao: string;
}

export const buildFormMessage = ({ nome, servico, local, descricao }: FormMessageFields): string => {
  const { mensagemPadrao, mensagemServico } = siteConfig.contato;
  const intro = servico ? buildServiceMessage(mensagemServico, servico) : mensagemPadrao;
  const details = [nome && `Nome: ${nome}`, local && `Local: ${local}`, `Descrição: ${descricao}`];
  return [intro, ...details].filter(Boolean).join("\n");
};

interface CtaOptions {
  service?: string;
  message?: string;
}

const buildCtaMessage = ({ service, message }: CtaOptions): string => {
  if (message) return message;
  if (service) return buildServiceMessage(siteConfig.contato.mensagemServico, service);
  return siteConfig.contato.mensagemPadrao;
};

// undefined quando não há número na config: o botão fica desabilitado
export const getWhatsAppHref = (options: CtaOptions): string | undefined =>
  siteConfig.contato.whatsapp ? buildWhatsAppUrl(buildCtaMessage(options)) : undefined;
