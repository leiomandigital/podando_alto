import { getPendingField } from "@/lib/pending";

interface PendingProps {
  path: string;
}

// Placeholder visível só em desenvolvimento
const Pending = ({ path }: PendingProps) => {
  if (!import.meta.env.DEV) return null;
  const field = getPendingField(path);
  const text = field ? `${field.id} ${field.label}` : path;
  return (
    <p className="rounded border border-dashed bg-muted px-3 py-2 text-center text-xs text-muted-foreground">[PENDENTE: {text}]</p>
  );
};

export { Pending };
