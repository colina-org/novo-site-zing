import type { CollectionConfig } from "payload";

export const CASE_GROUPS = [
  { label: "CPSI", value: "cpsi" },
  { label: "Programas", value: "programas" },
  { label: "Sobre", value: "sobre" },
] as const;

export const CaseStudies: CollectionConfig = {
  slug: "case-studies",
  labels: { singular: "Case", plural: "Cases" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "group", "badge", "order"],
    group: "Conteúdo",
  },
  access: { read: () => true },
  defaultSort: "order",
  fields: [
    {
      name: "group",
      type: "select",
      required: true,
      label: "Página / grupo",
      options: [...CASE_GROUPS],
    },
    { name: "title", type: "textarea", required: true, label: "Título" },
    { name: "badge", type: "text", label: "Badge" },
    { name: "description", type: "textarea", label: "Descrição" },
    { name: "image", type: "upload", relationTo: "media", label: "Imagem" },
    { name: "order", type: "number", label: "Ordem", defaultValue: 0 },
  ],
};
