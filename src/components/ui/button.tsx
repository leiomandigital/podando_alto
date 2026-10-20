import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex max-w-full shrink-0 items-center justify-center gap-2 rounded-lg text-center font-heading font-bold transition-colors select-none disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90",
        outline: "border-2 border-primary bg-background text-primary hover:bg-muted",
        onDark: "border-2 border-primary-foreground/70 bg-transparent text-primary-foreground hover:bg-primary-foreground/10",
        ghost: "text-foreground hover:bg-muted",
      },
      size: {
        default: "min-h-11 px-4 py-2 text-sm sm:px-5",
        lg: "min-h-12 px-4 py-2.5 text-base sm:px-6",
        icon: "size-14 rounded-full",
        iconSm: "size-11",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = ({ className, variant, size, asChild = false, ...props }: ButtonProps) => {
  const Comp = asChild ? Slot.Root : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
};

export { Button, buttonVariants };
