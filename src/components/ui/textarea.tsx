import * as React from "react";
import { fieldControlClass } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const Textarea = ({ className, ...props }: React.ComponentProps<"textarea">) => (
  <textarea className={cn(fieldControlClass, "min-h-24", className)} {...props} />
);

export { Textarea };
