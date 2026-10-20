import type { Endereco } from "@/content/site.types";

// "5527999999999" -> "(27) 99999-9999". Número fora do padrão volta como veio.
export const formatWhatsAppDisplay = (digits: string): string => {
  const match = /^55(\d{2})(\d{4,5})(\d{4})$/.exec(digits);
  return match ? `(${match[1]}) ${match[2]}-${match[3]}` : digits;
};

// "Júlia Bravin Ferrari" -> "JF" (primeiro e último nome)
export const getInitials = (name: string): string => {
  const words = name.split(" ").filter(Boolean);
  const first = words[0]?.[0] ?? "";
  const last = words.length > 1 ? (words[words.length - 1]?.[0] ?? "") : "";
  return `${first}${last}`.toUpperCase();
};

// Troca "{chave}" pelo valor correspondente; chave sem valor permanece no texto
export const fillTemplate = (template: string, values: Record<string, string | number>): string =>
  template.replace(/\{(\w+)\}/g, (placeholder, key: string) => (key in values ? String(values[key]) : placeholder));

export const formatAddress = ({ logradouro, cidade, uf, cep }: Endereco): string =>
  [`${logradouro}, ${cidade} - ${uf}`, cep].filter(Boolean).join(", ");

// Link de busca no mapa (sem iframe: nenhum script de terceiros carrega antes do clique)
export const buildMapSearchUrl = (address: Endereco): string =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formatAddress(address))}`;
