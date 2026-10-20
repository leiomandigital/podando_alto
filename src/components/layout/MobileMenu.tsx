import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import type { MenuItem } from "@/lib/sections";

interface MobileMenuProps {
  menuItems: MenuItem[];
}

const MobileMenu = ({ menuItems }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="iconSm" className="lg:hidden" aria-label="Abrir menu">
          <Menu className="size-6" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>Menu</SheetTitle>
        <SheetDescription className="sr-only">Links para as seções da página</SheetDescription>
        <nav aria-label="Menu mobile" className="mt-4 flex flex-col">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className="flex min-h-12 items-center border-b font-semibold hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export { MobileMenu };
