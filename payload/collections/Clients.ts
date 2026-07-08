import type { CollectionConfig } from "payload";

export const Clients: CollectionConfig = {
  slug: "clients",
  labels: { singular: "Cliente (logo)", plural: "Clientes (logos)" },
  admin: {
    useAsTitle: "alt",
    defaultColumns: ["alt", "logo", "order"],
    group: "Conteúdo",
  },
  access: { read: () => true },
  defaultSort: "order",
  fields: [
    { name: "alt", type: "text", required: true, label: "Nome (alt)" },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Logo",
    },
    {
      type: "row",
      fields: [
        {
          name: "invert",
          type: "checkbox",
          label: "Inverter cor (logo claro)",
          defaultValue: false,
        },
        { name: "order", type: "number", label: "Ordem", defaultValue: 0 },
      ],
    },
  ],
};
