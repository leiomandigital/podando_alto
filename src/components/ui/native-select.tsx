import * as React from "react";
import { ChevronDown } from "lucide-react";
import { fieldControlClass } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const NativeSelect = ({ className, children, ...props }: React.ComponentProps<"select">) => (
  <div className="relative">
    <select className={cn(fieldControlClass, "appearance-none pr-10", className)} {...props}>
      {children}
    </select>
    <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
  </div>
);

export { NativeSelect };
