import { FacebookIcon } from "@/components/shared/FacebookIcon";
import { InstagramIcon } from "@/components/shared/InstagramIcon";
import { Logo } from "@/components/shared/Logo";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { Separator } from "@/components/ui/separator";
import type { Endereco, SiteConfig } from "@/content/site.types";
import { formatAddress, formatWhatsAppDisplay } from "@/lib/format";
import type { MenuItem } from "@/lib/sections";
import { trackWhatsAppClick } from "@/lib/tracking";
import { buildCredentialsLine } from "@/lib/trust";
import { hasData } from "@/lib/visibility";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface FooterProps {
  empresa: SiteConfig["empresa"];
  credenciais: SiteConfig["credenciais"];
  contato: SiteConfig["contato"];
  endereco: Endereco | null;
  redes: SiteConfig["redes"];
  menuItems: MenuItem[];
}

const LINK_CLASS = "inline-flex min-h-11 items-center hover:underline";
const ICON_LINK_CLASS =
  "inline-flex size-11 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20";

const Footer = ({ empresa, credenciais, contato, endereco, redes, menuItems }: FooterProps) => (
  <footer className="bg-primary pt-12 pb-28 text-primary-foreground">
    <div className="mx-auto grid grid-cols-1 max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3">
      <div className="flex flex-col gap-3 text-sm">
        <div className="w-40 rounded-xl bg-background p-2">
          <Logo lazy />
        </div>
        <p className="text-base font-semibold">{empresa.slogan}</p>
        {hasData(empresa.descritor) && (
          <p className="text-primary-foreground/85">
            {empresa.nome} · {empresa.descritor}
          </p>
        )}
        <p className="text-primary-foreground/85">CNPJ: {empresa.cnpj}</p>
        <p className="text-primary-foreground/85">{buildCredentialsLine(credenciais)}</p>
      </div>

      <div className="flex flex-col text-sm">
        <h2 className="mb-1 text-base">Contato</h2>
        <a href={`mailto:${contato.email}`} className={LINK_CLASS}>
          {contato.email}
        </a>
        {endereco && <p className="py-2">{formatAddress(endereco)}</p>}
        <div className="mt-2 flex items-center gap-3">
          {hasData(contato.whatsapp) && (
            <a
              href={buildWhatsAppUrl(contato.mensagemPadrao)}
              className={ICON_LINK_CLASS}
              aria-label={`WhatsApp ${formatWhatsAppDisplay(contato.whatsapp)}`}
              title={`WhatsApp ${formatWhatsAppDisplay(contato.whatsapp)}`}
              onClick={() => trackWhatsAppClick({ cta_location: "rodape" })}
            >
              <WhatsAppIcon className="size-6" />
            </a>
          )}
          {hasData(redes.instagram) && (
            <a
              href={redes.instagram ?? undefined}
              target="_blank"
              rel="noopener noreferrer"
              className={ICON_LINK_CLASS}
              aria-label="Instagram"
              title="Instagram"
            >
              <InstagramIcon className="size-6" />
            </a>
          )}
          {hasData(redes.facebook) && (
            <a
              href={redes.facebook ?? undefined}
              target="_blank"
              rel="noopener noreferrer"
              className={ICON_LINK_CLASS}
              aria-label="Facebook"
              title="Facebook"
            >
              <FacebookIcon className="size-6" />
            </a>
          )}
        </div>
      </div>

      <nav aria-label="Rodapé" className="flex flex-col text-sm">
        <h2 className="mb-1 text-base">Na página</h2>
        {menuItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} className={LINK_CLASS}>
            {item.label}
          </a>
        ))}
      </nav>
    </div>
    <Separator className="mx-auto my-8 max-w-6xl bg-primary-foreground/20" />
    <p className="mx-auto max-w-6xl px-4 text-center text-xs text-primary-foreground/80 sm:px-6">
      © {new Date().getFullYear()} {empresa.nome}. Todos os direitos reservados.
    </p>
  </footer>
);

export { Footer };
