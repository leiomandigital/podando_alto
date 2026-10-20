import { Logo } from "@/components/shared/Logo";
import { Separator } from "@/components/ui/separator";
import type { Endereco, SiteConfig } from "@/content/site.types";
import { formatAddress, formatWhatsAppDisplay } from "@/lib/format";
import type { MenuItem } from "@/lib/sections";
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
        {hasData(contato.whatsapp) && (
          <a href={buildWhatsAppUrl(contato.mensagemPadrao)} className={LINK_CLASS}>
            WhatsApp: {formatWhatsAppDisplay(contato.whatsapp)}
          </a>
        )}
        <a href={`mailto:${contato.email}`} className={LINK_CLASS}>
          {contato.email}
        </a>
        {endereco && <p className="py-2">{formatAddress(endereco)}</p>}
        {hasData(redes.instagram) && (
          <a href={redes.instagram ?? undefined} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
            Instagram
          </a>
        )}
        {hasData(redes.facebook) && (
          <a href={redes.facebook ?? undefined} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
            Facebook
          </a>
        )}
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
    <p className="mx-auto max-w-6xl px-4 text-xs text-primary-foreground/80 sm:px-6">
      © {new Date().getFullYear()} {empresa.nome}. Todos os direitos reservados.
    </p>
  </footer>
);

export { Footer };
