import * as React from "react";
import { cn } from "@/lib/utils";

const FieldGroup = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cn("flex flex-col gap-5", className)} {...props} />
);

const Field = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cn("flex flex-col gap-2", className)} {...props} />
);

const FieldLabel = ({ className, ...props }: React.ComponentProps<"label">) => (
  <label className={cn("text-sm font-semibold", className)} {...props} />
);

export { FieldGroup, Field, FieldLabel };
