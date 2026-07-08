import type { CollectionConfig } from "payload";

export const FAQ_GROUPS = [
  { label: "Home", value: "home" },
  { label: "CPSI", value: "cpsi" },
  { label: "Inovação Aberta", value: "inovacao" },
  { label: "Gestão de Hubs", value: "hubs" },
  { label: "Desafios", value: "desafios" },
] as const;

export const Faqs: CollectionConfig = {
  slug: "faqs",
  labels: { singular: "FAQ", plural: "FAQs" },
  admin: {
    useAsTitle: "question",
    defaultColumns: ["question", "group", "order"],
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
      options: [...FAQ_GROUPS],
    },
    { name: "question", type: "text", required: true, label: "Pergunta" },
    { name: "answer", type: "textarea", required: true, label: "Resposta" },
    { name: "order", type: "number", label: "Ordem", defaultValue: 0 },
  ],
};
