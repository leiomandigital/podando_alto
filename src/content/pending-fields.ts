// Campos que podem ficar sem dado. listPendingFields mostra só os que estão vazios no momento.
export interface PendingField {
  path: string; // caminho na config; "lista[].campo" percorre todos os itens da lista
  id: string; // ID do item no briefing
  label: string;
}

export const PENDING_FIELDS: PendingField[] = [
  { path: "empresa.historia", id: "1.3", label: "história da empresa" },
  { path: "credenciais.nomeResponsavelTecnico", id: "3.5", label: "nome da responsável técnica" },
  { path: "credenciais.registroCrea", id: "3.5", label: "registro no CREA" },
  { path: "credenciais.prazoGarantia", id: "3.4", label: "prazo da garantia" },
  { path: "servicos[].descricao", id: "2.3", label: "descrição dos serviços" },
  { path: "depoimentos", id: "4.1", label: "depoimentos de clientes" },
  { path: "google", id: "4.2", label: "link e nota do Google" },
  { path: "redes.instagram", id: "4.3", label: "Instagram" },
  { path: "redes.facebook", id: "4.3", label: "Facebook" },
  { path: "regiao.cidades", id: "6.1", label: "cidades atendidas" },
  { path: "regiao.deslocamento", id: "6.2", label: "deslocamento" },
  { path: "regiao.horario", id: "6.4", label: "horário de atendimento" },
  { path: "contato.horario", id: "6.4", label: "horário de contato" },
  { path: "contato.pagamento", id: "7.6", label: "formas de pagamento" },
  { path: "midia.hero", id: "5", label: "foto do hero" },
  { path: "midia.galeria", id: "5", label: "fotos de trabalhos" },
  { path: "midia.antesDepois", id: "5", label: "fotos de antes e depois" },
  { path: "midia.videos", id: "5", label: "vídeos curtos" },
  { path: "midia.fotoResponsavel", id: "5", label: "foto do responsável" },
  { path: "midia.fotoCaminhao", id: "5", label: "foto do caminhão com cesto aéreo" },
  { path: "midia.logo", id: "5", label: "logo em vetor ou PNG de alta resolução" },
  { path: "seo.dominio", id: "8.7", label: "domínio do site" },
  { path: "rastreamento.ga4Id", id: "10.2", label: "ID do GA4" },
  { path: "rastreamento.metaPixelId", id: "10.2", label: "ID do Meta Pixel" },
];
