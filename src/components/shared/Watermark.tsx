import { Logo } from "@/components/shared/Logo";

// Selo da marca no canto das fotos (briefing 5.2). O fundo claro evita o contorno
// esbranquiçado da logo transparente sobre fotos escuras. Decorativo: fora da leitura de tela.
const Watermark = () => (
  <span aria-hidden="true" className="pointer-events-none absolute right-2 bottom-2 rounded-md bg-background/85 p-1 shadow-sm">
    <Logo variant="emblem" lazy className="w-14" />
  </span>
);

export { Watermark };
