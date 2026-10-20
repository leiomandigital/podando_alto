import type { CtaLocation } from "@/content/site.types";

const CAMPAIGN_KEYS = ["gclid", "fbclid", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
const STORAGE_KEY = "campaign_params";

type CampaignParams = Partial<Record<(typeof CAMPAIGN_KEYS)[number], string>>;

export interface WhatsAppClickParams {
  cta_location: CtaLocation;
  service?: string;
}

export const captureCampaignParams = (): void => {
  try {
    const query = new URLSearchParams(window.location.search);
    const found: CampaignParams = {};
    CAMPAIGN_KEYS.forEach((key) => {
      const value = query.get(key);
      if (value) found[key] = value;
    });
    if (Object.keys(found).length > 0) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
    }
  } catch {
    // armazenamento indisponível: segue sem parâmetros de campanha
  }
};

const readCampaignParams = (): CampaignParams => {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as CampaignParams) : {};
  } catch {
    return {};
  }
};

export const trackWhatsAppClick = (params: WhatsAppClickParams): void => {
  try {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({ event: "whatsapp_click", ...params, ...readCampaignParams() });
  } catch {
    // falha de rastreamento nunca quebra o clique do visitante
  }
};
