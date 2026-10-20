export type CtaLocation =
  | "header"
  | "hero"
  | "servico"
  | "diferenciais"
  | "final"
  | "flutuante"
  | "formulario";

export interface Servico {
  id: string;
  nome: string; // curto: entra na mensagem do WhatsApp
  grupo: "destaque" | "arborismo" | "paisagismo";
  descricao: string | null;
}

export interface ImagemConfig {
  src: string;
  alt: string;
  largura: number;
  altura: number;
}

export interface AntesDepoisConfig {
  antes: ImagemConfig;
  depois: ImagemConfig;
  legenda: string | null;
}

export interface VideoConfig {
  src: string;
  poster: ImagemConfig;
  legenda: string | null;
}

export interface Depoimento {
  nome: string;
  cidade: string;
  texto: string;
}

export interface ItemFaq {
  pergunta: string;
  resposta: string;
}

export interface Endereco {
  logradouro: string;
  cidade: string;
  uf: string;
  cep: string | null;
}

export interface PassoOrcamento {
  titulo: string;
  texto: string;
}

export interface PublicoAtendido {
  id: string;
  titulo: string;
  texto: string;
}

export interface Diferencial {
  id: string;
  titulo: string;
  texto: string;
}

export interface MembroEquipeTecnica {
  id: string;
  nome: string;
  titulo: string;
  descricao: string;
}

export type TextosSecao = Record<string, string>;

export interface SiteConfig {
  empresa: {
    nome: string;
    slogan: string;
    proposta: string;
    responsavel: string | null;
    tempoAtuacao: string | null;
    descritor: string | null;
    historia: string | null;
    cnpj: string;
  };
  credenciais: {
    crea: boolean;
    responsavelTecnico: string | null;
    nomeResponsavelTecnico: string | null;
    segurancaDoTrabalho: string | null;
    registroCrea: string | null;
    garantia: string | null;
    prazoGarantia: string | null;
    notaFiscal: boolean;
  };
  numeros: { arvoresPodadas: string | null };
  hero: { tituloBase: string; ctaPrimario: string; ctaSecundario: string };
  servicos: Servico[];
  publicoAtendido: PublicoAtendido[];
  diferenciais: Diferencial[];
  equipamentos: string[];
  equipeTecnica: MembroEquipeTecnica[];
  clientesCitaveis: string[];
  depoimentos: Depoimento[];
  google: { link: string; nota: number; totalAvaliacoes: number } | null;
  redes: { instagram: string | null; facebook: string | null };
  regiao: {
    cidades: string[];
    deslocamento: string | null;
    endereco: Endereco | null;
    horario: string | null;
  };
  contato: {
    whatsapp: string;
    telefoneFixo: string | null;
    email: string;
    mensagemPadrao: string;
    mensagemServico: string;
    horario: string | null;
    pagamento: string | null;
  };
  orcamento: { passos: PassoOrcamento[] };
  midia: {
    logo: ImagemConfig | null;
    hero: ImagemConfig | null;
    fotoResponsavel: ImagemConfig | null;
    fotoCaminhao: ImagemConfig | null;
    galeria: ImagemConfig[];
    antesDepois: AntesDepoisConfig[];
    videos: VideoConfig[];
  };
  faq: ItemFaq[];
  seo: { cidade: string | null; dominio: string | null };
  rastreamento: { ga4Id: string | null; metaPixelId: string | null };
  textos: Record<string, TextosSecao>;
}
