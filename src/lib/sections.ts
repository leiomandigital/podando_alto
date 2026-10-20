import type { SiteConfig } from "@/content/site.types";
import { hasData } from "./visibility";

export type SectionId =
  | "hero"
  | "confianca"
  | "servicos"
  | "publico"
  | "diferenciais"
  | "quem-somos"
  | "trabalhos"
  | "clientes"
  | "como-pedir"
  | "regiao"
  | "perguntas"
  | "contato";

interface SectionDefinition {
  id: SectionId;
  label: string | null;
  showInMenu: boolean;
  // Campo de PENDING_FIELDS mostrado em desenvolvimento quando a seção está oculta
  pendingPath: string | null;
  isVisible: (config: SiteConfig) => boolean;
}

const always = (): boolean => true;

export const SECTION_DEFINITIONS: SectionDefinition[] = [
  { id: "hero", label: null, showInMenu: false, pendingPath: null, isVisible: always },
  { id: "confianca", label: null, showInMenu: false, pendingPath: null, isVisible: always },
  { id: "servicos", label: "Serviços", showInMenu: true, pendingPath: null, isVisible: (c) => hasData(c.servicos) },
  { id: "publico", label: null, showInMenu: false, pendingPath: null, isVisible: always },
  { id: "diferenciais", label: "Diferenciais", showInMenu: true, pendingPath: null, isVisible: always },
  {
    id: "quem-somos",
    label: "Quem somos",
    showInMenu: true,
    pendingPath: "empresa.historia",
    isVisible: (c) => hasData(c.empresa.responsavel),
  },
  {
    id: "trabalhos",
    label: "Trabalhos",
    showInMenu: true,
    pendingPath: "midia.galeria",
    isVisible: (c) => hasData(c.midia.galeria) || hasData(c.midia.antesDepois) || hasData(c.midia.videos),
  },
  {
    id: "clientes",
    label: null,
    showInMenu: false,
    pendingPath: "depoimentos",
    isVisible: (c) => hasData(c.clientesCitaveis) || hasData(c.depoimentos) || hasData(c.google),
  },
  { id: "como-pedir", label: null, showInMenu: false, pendingPath: null, isVisible: always },
  { id: "regiao", label: "Região", showInMenu: true, pendingPath: "regiao.cidades", isVisible: (c) => hasData(c.regiao.cidades) },
  { id: "perguntas", label: "Perguntas", showInMenu: true, pendingPath: null, isVisible: (c) => hasData(c.faq) },
  { id: "contato", label: null, showInMenu: false, pendingPath: null, isVisible: always },
];

export const isSectionVisible = (id: SectionId, config: SiteConfig): boolean =>
  SECTION_DEFINITIONS.some((section) => section.id === id && section.isVisible(config));

export interface MenuItem {
  id: SectionId;
  label: string;
}

export const getMenuItems = (config: SiteConfig): MenuItem[] =>
  SECTION_DEFINITIONS.flatMap((section) =>
    section.showInMenu && section.label !== null && section.isVisible(config)
      ? [{ id: section.id, label: section.label }]
      : [],
  );

export const getSectionPendingPath = (id: SectionId): string | null =>
  SECTION_DEFINITIONS.find((section) => section.id === id)?.pendingPath ?? null;
