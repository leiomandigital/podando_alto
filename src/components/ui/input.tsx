import * as React from "react";
import { cn } from "@/lib/utils";

export const fieldControlClass =
  "w-full min-h-11 rounded-lg border-2 border-border bg-background px-3 py-2 text-base text-foreground placeholder:text-muted-foreground focus-visible:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40";

const Input = ({ className, ...props }: React.ComponentProps<"input">) => (
  <input className={cn(fieldControlClass, className)} {...props} />
);

export { Input };
