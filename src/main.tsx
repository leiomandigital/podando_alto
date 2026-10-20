import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import { siteConfig } from "@/content/site.config";
import { listPendingFields } from "@/lib/pending";
import { captureCampaignParams } from "@/lib/tracking";
import "@/styles/globals.css";

captureCampaignParams();

if (import.meta.env.DEV) {
  console.table(listPendingFields(siteConfig));
  if (!siteConfig.contato.whatsapp) {
    console.warn("contato.whatsapp vazio em site.config.ts: os botões de WhatsApp ficam desabilitados.");
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
