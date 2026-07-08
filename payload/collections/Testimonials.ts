import type { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  labels: { singular: "Depoimento", plural: "Depoimentos" },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "company", "role", "order"],
    group: "Conteúdo",
  },
  access: { read: () => true },
  defaultSort: "order",
  fields: [
    {
      type: "row",
      fields: [
        { name: "name", type: "text", required: true, label: "Nome / iniciativa" },
        { name: "company", type: "text", label: "Empresa / instituição" },
      ],
    },
    { name: "role", type: "text", label: "Tipo de programa" },
    { name: "quote", type: "textarea", required: true, label: "Depoimento" },
    {
      type: "row",
      fields: [
        { name: "image", type: "upload", relationTo: "media", label: "Foto" },
        {
          name: "rating",
          type: "number",
          label: "Estrelas",
          defaultValue: 5,
          min: 0,
          max: 5,
        },
        { name: "order", type: "number", label: "Ordem", defaultValue: 0 },
      ],
    },
  ],
};
