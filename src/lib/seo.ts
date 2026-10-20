import type { SiteConfig } from "../content/site.types.ts";

const OG_IMAGE_PATH = "/og-image.jpg";

export const withCity = (base: string, city: string | null): string => (city ? `${base} em ${city}` : base);

export const escapeHtml = (value: string): string =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const serializeJsonLd = (data: object): string => JSON.stringify(data).replace(/</g, "\\u003c");

const buildDomainUrl = (domain: string | null, path: string): string | null =>
  domain ? `https://${domain.replace(/^https?:\/\//, "").replace(/\/$/, "")}${path}` : null;

export interface PageMeta {
  title: string;
  description: string;
  canonical: string | null;
  ogImage: string | null;
}

export const buildPageMeta = ({ seo, empresa, hero, credenciais }: SiteConfig): PageMeta => {
  const cityPart = seo.cidade ? ` em ${seo.cidade}` : "";
  const credentialPart =
    credenciais.crea && credenciais.responsavelTecnico
      ? ` Empresa cadastrada no CREA, com ${credenciais.responsavelTecnico} responsável.`
      : "";
  return {
    title: `${withCity(hero.tituloBase, seo.cidade)} | ${empresa.nome}`,
    description: `Poda de árvores, remoção em altura e paisagismo${cityPart}.${credentialPart} Peça orçamento pelo WhatsApp.`,
    canonical: buildDomainUrl(seo.dominio, "/"),
    ogImage: buildDomainUrl(seo.dominio, OG_IMAGE_PATH),
  };
};

// Sem endereço divulgado, o markup descreve a empresa mas não é elegível ao rich result de negócio local
export const buildLocalBusinessJsonLd = ({ empresa, contato, regiao, seo, redes, midia }: SiteConfig): object => {
  const url = buildDomainUrl(seo.dominio, "/");
  const logo = midia.logo ? buildDomainUrl(seo.dominio, midia.logo.src) : null;
  const sameAs = [redes.instagram, redes.facebook].filter((link): link is string => link !== null);
  const { endereco } = regiao;
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: empresa.nome,
    ...(contato.whatsapp && { telephone: `+${contato.whatsapp}` }),
    ...(url && { url }),
    ...(logo && { logo }),
    ...(regiao.cidades.length > 0 && {
      // AdministrativeArea aceita cidade e localidade (ex.: Pedra Azul, que é distrito)
      areaServed: regiao.cidades.map((area) => ({ "@type": "AdministrativeArea", name: area })),
    }),
    ...(endereco && {
      address: {
        "@type": "PostalAddress",
        streetAddress: endereco.logradouro,
        addressLocality: endereco.cidade,
        addressRegion: endereco.uf,
        addressCountry: "BR",
        ...(endereco.cep && { postalCode: endereco.cep }),
      },
    }),
    ...(sameAs.length > 0 && { sameAs }),
  };
};

export const buildFaqJsonLd = ({ faq }: SiteConfig): object | null =>
  faq.length === 0
    ? null
    : {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map(({ pergunta, resposta }) => ({
          "@type": "Question",
          name: pergunta,
          acceptedAnswer: { "@type": "Answer", text: resposta },
        })),
      };
