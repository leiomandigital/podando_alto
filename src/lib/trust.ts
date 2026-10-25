import type { SiteConfig } from "@/content/site.types";
import { hasData } from "./visibility";

export type TrustIconKey = "arvores" | "tempo" | "crea" | "tecnico" | "seguranca" | "sem-acidentes" | "nota";

export interface TrustItemData {
  id: TrustIconKey;
  text: string;
}

const buildInvoiceAndWarrantyText = ({ notaFiscal, garantia }: SiteConfig["credenciais"]): string | null => {
  const hasWarranty = hasData(garantia);
  if (notaFiscal && hasWarranty) return "Nota fiscal e garantia";
  if (notaFiscal) return "Nota fiscal";
  return hasWarranty ? "Garantia do serviço" : null;
};

export const buildTrustItems = ({ numeros, empresa, credenciais }: SiteConfig): TrustItemData[] => {
  const invoiceAndWarranty = buildInvoiceAndWarrantyText(credenciais);
  const items: (TrustItemData | null)[] = [
    hasData(numeros.arvoresPodadas) ? { id: "arvores", text: `${numeros.arvoresPodadas} árvores podadas` } : null,
    hasData(empresa.tempoAtuacao) ? { id: "tempo", text: `${empresa.tempoAtuacao} de experiência` } : null,
    credenciais.crea ? { id: "crea", text: "Empresa cadastrada no CREA" } : null,
    hasData(credenciais.responsavelTecnico) ? { id: "tecnico", text: `${credenciais.responsavelTecnico} responsável` } : null,
    credenciais.segurancaDoTrabalho ? { id: "seguranca", text: credenciais.segurancaDoTrabalho } : null,
    credenciais.semAcidentes ? { id: "sem-acidentes", text: "Nenhum acidente de trabalho nos serviços" } : null,
    invoiceAndWarranty ? { id: "nota", text: invoiceAndWarranty } : null,
  ];
  return items.filter((item): item is TrustItemData => item !== null);
};

// Credenciais exatamente como o cliente informou; nome e registro só aparecem quando enviados.
// O rótulo "Responsabilidade técnica" vale para qualquer pessoa; o gênero fica no título vindo da config.
export const buildCredentialsLine = ({
  crea,
  responsavelTecnico,
  nomeResponsavelTecnico,
  registroCrea,
}: SiteConfig["credenciais"]): string => {
  const technicalResponsibility = responsavelTecnico
    ? `Responsabilidade técnica: ${[responsavelTecnico, nomeResponsavelTecnico].filter(Boolean).join(" ")}`
    : null;
  return [crea ? "Empresa cadastrada no CREA" : null, technicalResponsibility, registroCrea].filter(Boolean).join(" · ");
};
