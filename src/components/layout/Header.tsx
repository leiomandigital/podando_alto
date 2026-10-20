import { Logo } from "@/components/shared/Logo";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { MobileMenu } from "@/components/layout/MobileMenu";
import type { MenuItem } from "@/lib/sections";

interface HeaderProps {
  companyName: string;
  ctaLabel: string;
  menuItems: MenuItem[];
}

const Header = ({ companyName, ctaLabel, menuItems }: HeaderProps) => (
  <header className="fixed inset-x-0 top-0 z-40 h-16 border-b bg-background/95 backdrop-blur">
    <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
      <a href="#hero" className="flex min-h-11 items-center gap-2" aria-label={`${companyName}: início`}>
        <Logo variant="emblem" className="w-14" />
        <span className="font-heading text-lg font-extrabold text-primary">{companyName}</span>
      </a>

      <nav aria-label="Principal" className="hidden items-center gap-6 lg:flex">
        {menuItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="inline-flex min-h-11 items-center text-sm font-semibold hover:text-primary">
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        {/* Amarelo fica no CTA principal da tela (hero); o do header usa o verde */}
        <WhatsAppButton location="header" variant="outline" className="hidden sm:inline-flex">
          <WhatsAppIcon className="size-5" />
          {ctaLabel}
        </WhatsAppButton>
        <MobileMenu menuItems={menuItems} />
      </div>
    </div>
  </header>
);

export { Header };
