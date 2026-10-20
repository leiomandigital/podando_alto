import { PENDING_FIELDS, type PendingField } from "@/content/pending-fields";
import type { SiteConfig } from "@/content/site.types";
import { hasData } from "./visibility";

// "a.b" lê um campo; "lista[].campo" lê o campo de cada item da lista
const readPathValues = (source: unknown, path: string): unknown[] =>
  path.split(".").reduce<unknown[]>(
    (current, segment) =>
      current.flatMap((node) => {
        const isEachItem = segment.endsWith("[]");
        const key = isEachItem ? segment.slice(0, -2) : segment;
        const value = node !== null && typeof node === "object" ? (node as Record<string, unknown>)[key] : undefined;
        return isEachItem && Array.isArray(value) ? value : [value];
      }),
    [source],
  );

const isFieldPending = (config: SiteConfig, field: PendingField): boolean => {
  const values = readPathValues(config, field.path);
  return values.length === 0 || values.some((value) => !hasData(value));
};

export const getPendingField = (path: string): PendingField | undefined =>
  PENDING_FIELDS.find((field) => field.path === path);

export const listPendingFields = (config: SiteConfig): PendingField[] =>
  PENDING_FIELDS.filter((field) => isFieldPending(config, field));
