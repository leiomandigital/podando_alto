export const hasData = (value: unknown): boolean =>
  Array.isArray(value) ? value.length > 0 : value !== null && value !== undefined && value !== "";
