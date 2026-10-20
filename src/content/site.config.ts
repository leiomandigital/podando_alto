import type { SiteConfig } from "./site.types.ts";

// Única fonte de conteúdo do site. O número entre parênteses é o ID do item no briefing.
export const siteConfig: SiteConfig = {
  empresa: {
    nome: "Podando Alto",
    slogan: "Qualidade e garantia de um bom serviço", // ok (1.5)
    proposta: "Melhorando a sua qualidade de vida e preservando a natureza.", // ok (1.4)
    responsavel: "Bruno Cardoso", // inferido, confirmar cargo
    tempoAtuacao: "3 anos", // ok (1.2; ideal: ano de fundação)
    descritor: "Jardinagem e poda", // informado com o CNPJ; confirmar
    historia:
      "A história começou quando eu descobri que existia o esporte de escalada em árvores. Foi assim que procurei a Arbolab, uma escola de treinamento especializada. Eu me apaixonei pelo esporte e decidi que queria viver essa modalidade e seguir essa profissão.", // ok (1.3)
    cnpj: "52.163.542/0001-89", // ok (1.7)
  },
  credenciais: {
    crea: true, // ok (3.3)
    responsavelTecnico: "Engenheira Ambiental", // ok (3.5); Marcilene Toniatto
    nomeResponsavelTecnico: "Marcilene Toniatto", // material enviado em 20/10/2026
    segurancaDoTrabalho: "Engenheira de Segurança do Trabalho", // material enviado em 20/10/2026
    registroCrea: null, // PENDENTE 3.5
    garantia: "Garantia do serviço", // ok (3.4)
    prazoGarantia: null, // PENDENTE 3.4
    notaFiscal: true, // ok (3.6)
  },
  numeros: { arvoresPodadas: "+2.000" }, // ok (4.5)
  hero: {
    tituloBase: "Poda de árvores e arborismo profissional", // proposta
    ctaPrimario: "Pedir orçamento no WhatsApp",
    ctaSecundario: "Ver serviços",
  },
  // Texto do card: no máximo 4 linhas (cerca de 115 caracteres). Os cards da grade têm tamanho fixo,
  // então um texto maior que isso é cortado. Rascunho feito a partir do briefing: o cliente deve conferir.
  servicos: [
    {
      id: "poda-de-arvores",
      nome: "Poda de árvores",
      grupo: "destaque",
      descricao:
        "Feita após avaliação técnica e planejamento detalhado, para retirar galhos secos, podres ou doentes que oferecem risco.", // 2.2, 2.3
    },
    {
      id: "remocao-em-altura",
      nome: "Remoção de árvores em altura",
      grupo: "arborismo",
      descricao:
        "Retirada de árvores em altura, com técnicas de escalada, quando não há espaço para derrubar a árvore inteira.",
    },
    {
      id: "corte-rede-eletrica",
      nome: "Corte de galhos próximo à rede elétrica",
      grupo: "arborismo",
      descricao:
        "Corte de galhos próximos à rede elétrica, com avaliação técnica prévia para reduzir o risco a pessoas e instalações.", // 2.3
    },
    {
      id: "supressao",
      nome: "Supressão de árvores",
      grupo: "arborismo",
      descricao:
        "Retirada definitiva da árvore, com avaliação técnica e responsabilidade técnica de Engenheira Ambiental.", // 3.5
    },
    {
      id: "destoca",
      nome: "Destoca",
      grupo: "arborismo",
      descricao:
        "Remoção do toco que fica após o corte da árvore, liberando o espaço para novo plantio ou uso da área.",
    },
    {
      id: "laudo-tecnico",
      nome: "Laudo técnico",
      grupo: "arborismo",
      descricao:
        "Avaliação da saúde e da estabilidade da árvore, com laudo e responsabilidade técnica de Engenheira Ambiental.", // 3.5
    },
    {
      id: "tratamento-de-pragas",
      nome: "Tratamento de pragas",
      grupo: "arborismo",
      descricao:
        "Tratamento de árvores atacadas por pragas, para proteger a saúde da planta e evitar que o problema se espalhe.",
    },
    {
      id: "limpeza-de-terreno",
      nome: "Limpeza de terreno",
      grupo: "arborismo",
      descricao:
        "Limpeza de terrenos, com remoção de mato, galhos e resíduos vegetais, conforme definido no orçamento.", // 2.5
    },
    {
      id: "projeto-paisagistico",
      nome: "Projeto paisagístico",
      grupo: "paisagismo",
      descricao:
        "Projeto de paisagismo para jardins e áreas externas, com arquiteta paisagista responsável.", // 2.1
    },
    {
      id: "jardinagem",
      nome: "Jardinagem",
      grupo: "paisagismo",
      descricao:
        "Cuidados com plantas e áreas verdes de residências, condomínios e empresas, como plantio e poda de plantas.", // 2.1
    },
    {
      id: "manutencao-de-jardins",
      nome: "Manutenção de jardins",
      grupo: "paisagismo",
      descricao:
        "Manutenção de jardins em visitas combinadas com o cliente, para manter as plantas saudáveis e a área cuidada.", // 2.1
    },
  ], // lista ok (2.1, 2.2); descrições escritas a partir do briefing (2.3, 3.5)
  publicoAtendido: [
    {
      id: "empresas",
      titulo: "Grandes empresas",
      texto: "Poda e arborismo para empresas, com responsabilidade técnica e nota fiscal.",
    },
    {
      id: "condominios",
      titulo: "Condomínios",
      texto: "Poda e manutenção de árvores para condomínios, com garantia do serviço.",
    },
    {
      id: "residencias",
      titulo: "Residências de alto padrão",
      texto: "Poda e arborismo para residências, com responsabilidade pelos danos causados pela nossa operação.",
    },
  ], // proposta (2.7); copy a validar (só fatos de B.2)
  diferenciais: [
    { id: "qualidade", titulo: "Qualidade e preço justo", texto: "Serviço bem feito, com preço justo." }, // 3.1
    {
      id: "responsabilidade-tecnica",
      titulo: "Responsabilidade técnica",
      texto: "Engenheira Ambiental responsável pela área técnica. Empresa cadastrada no CREA.",
    }, // 3.3, 3.5
    {
      id: "seguranca",
      titulo: "Segurança no serviço",
      texto: "Acompanhamento técnico de Engenheira de Segurança do Trabalho, com foco na prevenção de riscos ocupacionais.",
    }, // 9.5
    {
      id: "garantia",
      titulo: "Garantia do serviço",
      texto: "Garantia do serviço e responsabilidade pelos danos causados pela nossa operação.",
    }, // 3.4, 3.7
    { id: "nota-fiscal", titulo: "Nota fiscal", texto: "Emitimos nota fiscal." }, // 3.6
    {
      id: "equipamentos",
      titulo: "Equipamentos próprios",
      texto:
        "Cordas e equipamentos de escalada, motosserras, triturador, caminhão com cesto aéreo e caminhão de descarte.",
    }, // 3.2
  ], // proposta; cada item liga a um fato de B.2
  equipamentos: [
    "Cordas e equipamentos de escalada",
    "Motosserras",
    "Triturador",
    "Caminhão com cesto aéreo",
    "Caminhão de descarte",
  ], // ok (3.2)
  equipeTecnica: [
    {
      id: "marcilene-toniatto",
      nome: "Marcilene Toniatto",
      titulo: "Engenheira Ambiental e Engenheira de Segurança do Trabalho",
      descricao: "Responsável pela área técnica, com foco no cumprimento da legislação vigente e na prevenção de riscos ocupacionais.",
    },
    {
      id: "julia-bravin-ferrari",
      nome: "Júlia Bravin Ferrari",
      titulo: "Arquiteta e Urbanista",
      descricao: "Responsável pelos projetos de paisagismo.",
    },
  ], // material enviado em 20/10/2026 (3.5 e 2.1); sem contato nem dados pessoais
  clientesCitaveis: ["CODEG", "Condomínio Village dos Pássaros", "Santos Mota Engenharia LTDA"], // ok (4.6), citação autorizada
  depoimentos: [], // PENDENTE 4.1
  google: null, // PENDENTE 4.2 (o cliente tem o perfil; faltam link e nota)
  redes: { instagram: "https://www.instagram.com/podando.alto.arborismo/", facebook: null }, // ok (4.3); Facebook PENDENTE
  regiao: {
    cidades: [
      "Aracruz",
      "Serra",
      "Vitória",
      "Vila Velha",
      "Guarapari",
      "Domingos Martins",
      "Anchieta",
      "Marechal Floriano",
      "Pedra Azul",
      "Cachoeiro de Itapemirim",
    ], // ok (6.1), informado pelo cliente em 20/10/2026
    deslocamento: null, // PENDENTE 6.2
    endereco: null, // ok (6.3): sem endereço no site
    horario: "das 08:00 às 17:30", // ok (6.4); dias da semana PENDENTES
  },
  contato: {
    whatsapp: "5527998020626", // ok (7.1); exibido como (27) 99802-0626
    telefoneFixo: null, // não existe; só WhatsApp
    email: "arborismo.podandoalto@gmail.com", // 7.2 em branco no briefing; veio dos dados complementares
    mensagemPadrao: "Olá! Vim pelo site do Podando Alto e quero um orçamento de poda de árvores.", // proposta (7.7)
    mensagemServico: "Olá! Vim pelo site do Podando Alto e quero um orçamento de {servico}.", // proposta (7.7)
    horario: "das 08:00 às 17:30", // ok (6.4)
    pagamento: "dinheiro, cartão de crédito, cartão de débito e Pix", // ok (7.6); boleto em análise, fica de fora
  },
  orcamento: {
    passos: [
      { titulo: "Chame no WhatsApp", texto: "Envie fotos da árvore, o endereço, a altura aproximada e o motivo do pedido." }, // 7.4
      { titulo: "Visita técnica e orçamento", texto: "Fazemos a avaliação técnica no local e elaboramos o orçamento do serviço." }, // 7.3, 2.3
      { titulo: "Serviço executado", texto: "Serviço executado com garantia e nota fiscal." }, // 3.6
    ],
  },
  midia: {
    logo: null, // PENDENTE 5: original em vetor ou PNG maior (hoje: src/assets/logo.png, 402x300, fundo transparente)
    hero: null,
    fotoResponsavel: null,
    fotoCaminhao: null,
    galeria: [],
    antesDepois: [],
    videos: [],
  }, // PENDENTE 5; todas as fotos recebem a logo como marca d'água (5.2)
  faq: [
    { pergunta: "Como funciona o orçamento?", resposta: "O orçamento é feito em visita técnica." }, // 7.3
    {
      pergunta: "O que devo enviar no primeiro contato?",
      resposta: "Fotos da árvore, o endereço, a altura aproximada e o motivo do pedido.",
    }, // 7.4
    { pergunta: "A retirada de galhos e resíduos está incluída?", resposta: "Pode estar, conforme o orçamento." }, // 2.5
    { pergunta: "Quais formas de pagamento vocês aceitam?", resposta: "Dinheiro, cartão de crédito, cartão de débito e Pix." }, // 7.6
    { pergunta: "Qual o horário de atendimento?", resposta: "Das 08:00 às 17:30." }, // 6.4
    { pergunta: "Emitem nota fiscal e dão garantia?", resposta: "Sim." }, // 3.4, 3.6
    {
      pergunta: "Quem responde por danos durante o serviço?",
      resposta: "Nos responsabilizamos pelos danos causados pela nossa operação.",
    }, // 3.7
    {
      pergunta: "Quem responde tecnicamente pelos serviços?",
      resposta:
        "Marcilene Toniatto, Engenheira Ambiental e Engenheira de Segurança do Trabalho, é responsável pela área técnica. A empresa é cadastrada no CREA.",
    }, // 3.3, 3.5
    {
      pergunta: "Quem faz os projetos de paisagismo?",
      resposta: "Júlia Bravin Ferrari, Arquiteta e Urbanista, é responsável pelos projetos de paisagismo.",
    }, // 2.1
    { pergunta: "Atendem emergência ou 24h?", resposta: "Não." }, // 2.4
  ], // perguntas sobre preço, prazo e autorização da prefeitura PENDENTES (9.1 a 9.3)
  seo: { cidade: null, dominio: null }, // PENDENTE 8.7; o cliente atende várias cidades (6.1), então título e H1 ficam sem cidade
  rastreamento: { ga4Id: null, metaPixelId: null }, // PENDENTE 10.2
  textos: {
    servicos: {
      sobretitulo: "Serviços",
      titulo: "O que fazemos",
      grupoArborismo: "Arborismo",
      grupoPaisagismo: "Paisagismo e jardins",
      botao: "Pedir orçamento",
      notaResiduos: "A retirada de galhos, troncos e resíduos pode estar incluída, conforme o orçamento.", // 2.5
    },
    publico: {
      sobretitulo: "Para quem atendemos",
      titulo: "Empresas, condomínios e residências",
    },
    diferenciais: {
      sobretitulo: "Diferenciais",
      titulo: "Por que o Podando Alto",
    },
    "quem-somos": {
      titulo: "Quem somos",
      atuacao: "Atuamos há {tempo}.", // 1.2
      historia: "Nossa história",
      equipe: "Acompanhamento técnico",
    },
    trabalhos: {
      sobretitulo: "Trabalhos",
      titulo: "Serviços realizados",
      antesDepois: "Antes e depois",
      galeria: "Fotos",
      videos: "Vídeos",
      comparador: "Comparar antes e depois",
    },
    clientes: {
      sobretitulo: "Clientes",
      titulo: "Quem já contratou",
      jaAtendemos: "Já atendemos:",
      google: "Nota {nota} no Google ({total} avaliações)",
    },
    "como-pedir": {
      sobretitulo: "Como pedir orçamento",
      titulo: "Em três passos",
    },
    regiao: {
      sobretitulo: "Região",
      titulo: "Onde atendemos",
      subtitulo: "Atendemos as cidades e regiões abaixo.",
      horario: "Atendimento",
      mapa: "Ver no mapa",
    },
    perguntas: {
      sobretitulo: "Perguntas",
      titulo: "Perguntas frequentes",
    },
    contato: {
      titulo: "Peça seu orçamento",
      subtitulo: "Envie fotos da árvore, o endereço, a altura aproximada e o motivo do pedido pelo WhatsApp.",
      whatsapp: "WhatsApp",
      email: "E-mail",
      horario: "Atendimento",
      pagamento: "Pagamento",
      formNome: "Seu nome",
      formServico: "Serviço",
      formServicoVazio: "Selecione",
      formLocal: "Bairro e cidade",
      formDescricao: "Descreva o serviço (obrigatório)",
    },
  },
};
