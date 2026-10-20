import path from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { siteConfig } from "./src/content/site.config.ts";
import { buildLocalBusinessJsonLd, buildFaqJsonLd, buildPageMeta, escapeHtml, serializeJsonLd } from "./src/lib/seo.ts";

const seoPlugin = (): Plugin => ({
  name: "podandoalto-seo",
  transformIndexHtml(html) {
    const meta = buildPageMeta(siteConfig);
    const tags: { tag: string; attrs: Record<string, string>; children?: string; injectTo: "head" }[] = [
      { tag: "meta", attrs: { name: "description", content: meta.description }, injectTo: "head" },
    ];
    if (meta.canonical) {
      tags.push(
        { tag: "link", attrs: { rel: "canonical", href: meta.canonical }, injectTo: "head" },
        { tag: "meta", attrs: { property: "og:url", content: meta.canonical }, injectTo: "head" },
      );
    }
    tags.push(
      { tag: "meta", attrs: { property: "og:type", content: "website" }, injectTo: "head" },
      { tag: "meta", attrs: { property: "og:locale", content: "pt_BR" }, injectTo: "head" },
      { tag: "meta", attrs: { property: "og:title", content: meta.title }, injectTo: "head" },
      { tag: "meta", attrs: { property: "og:description", content: meta.description }, injectTo: "head" },
    );
    if (meta.ogImage) {
      tags.push({ tag: "meta", attrs: { property: "og:image", content: meta.ogImage }, injectTo: "head" });
    }
    tags.push(
      { tag: "script", attrs: { type: "application/ld+json" }, children: serializeJsonLd(buildLocalBusinessJsonLd(siteConfig)), injectTo: "head" },
    );
    const faq = buildFaqJsonLd(siteConfig);
    if (faq) {
      tags.push({ tag: "script", attrs: { type: "application/ld+json" }, children: serializeJsonLd(faq), injectTo: "head" });
    }
    return {
      html: html.replace(/<title>.*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`),
      tags,
    };
  },
});

export default defineConfig(({ mode }) => {
  if (mode === "production" && !siteConfig.contato.whatsapp) {
    throw new Error("Build bloqueado: contato.whatsapp vazio em site.config.ts");
  }
  return {
    plugins: [react(), tailwindcss(), seoPlugin()],
    resolve: { alias: { "@": path.resolve(import.meta.dirname, "src") } },
  };
});
