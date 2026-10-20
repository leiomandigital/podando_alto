import * as React from "react";
import { Avatar as AvatarPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";

const Avatar = ({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>) => (
  <AvatarPrimitive.Root className={cn("relative flex size-20 shrink-0 overflow-hidden rounded-full", className)} {...props} />
);

const AvatarImage = ({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) => (
  <AvatarPrimitive.Image className={cn("aspect-square size-full object-cover", className)} {...props} />
);

const AvatarFallback = ({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback>) => (
  <AvatarPrimitive.Fallback
    className={cn("flex size-full items-center justify-center bg-primary font-heading text-xl font-bold text-primary-foreground", className)}
    {...props}
  />
);

export { Avatar, AvatarImage, AvatarFallback };
