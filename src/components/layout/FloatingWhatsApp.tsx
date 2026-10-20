import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";

// Visível em todas as telas. O rodapé reserva espaço embaixo para o botão não cobrir links.
const FloatingWhatsApp = () => (
  <aside
    aria-label="Contato rápido"
    className="fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 sm:right-6 sm:bottom-[calc(1.5rem+env(safe-area-inset-bottom))]"
  >
    <WhatsAppButton location="flutuante" size="icon" ariaLabel="Falar no WhatsApp" className="shadow-lg">
      <WhatsAppIcon className="size-7" />
    </WhatsAppButton>
  </aside>
);

export { FloatingWhatsApp };
