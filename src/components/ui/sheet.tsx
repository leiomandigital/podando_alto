import * as React from "react";
import { Dialog as SheetPrimitive } from "radix-ui";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Sheet = (props: React.ComponentProps<typeof SheetPrimitive.Root>) => <SheetPrimitive.Root {...props} />;

const SheetTrigger = (props: React.ComponentProps<typeof SheetPrimitive.Trigger>) => <SheetPrimitive.Trigger {...props} />;

const SheetContent = ({ className, children, ...props }: React.ComponentProps<typeof SheetPrimitive.Content>) => (
  <SheetPrimitive.Portal>
    <SheetPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
    <SheetPrimitive.Content
      className={cn(
        "fixed inset-y-0 right-0 z-50 flex h-full w-4/5 max-w-sm flex-col gap-4 bg-background p-6 shadow-lg data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:animate-in data-[state=open]:slide-in-from-right",
        className,
      )}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute top-3 right-3 flex size-11 items-center justify-center rounded-md hover:bg-muted">
        <X className="size-5" aria-hidden="true" />
        <span className="sr-only">Fechar menu</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPrimitive.Portal>
);

const SheetTitle = ({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Title>) => (
  <SheetPrimitive.Title className={cn("font-heading text-lg font-bold", className)} {...props} />
);

const SheetDescription = (props: React.ComponentProps<typeof SheetPrimitive.Description>) => (
  <SheetPrimitive.Description {...props} />
);

export { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription };
