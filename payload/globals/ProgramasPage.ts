import type { GlobalConfig } from "payload";
import { sectionHeaderFields, richText } from "../fields/shared";

export const ProgramasPage: GlobalConfig = {
  slug: "programas-page",
  label: "Página — Programas",
  admin: { group: "Páginas" },
  access: { read: () => true },
  fields: [
    richText("searchTitle", "Título (barra de busca)"),
    {
      name: "casesSection",
      type: "group",
      label: "Seção — Cases (cabeçalho)",
      fields: [...sectionHeaderFields()],
    },
  ],
};
