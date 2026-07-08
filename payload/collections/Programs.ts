import type { CollectionConfig } from "payload";

export const Programs: CollectionConfig = {
  slug: "programs",
  labels: { singular: "Programa", plural: "Programas" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "badge", "updatedAt"],
    group: "Conteúdo",
  },
  access: { read: () => true },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          label: "Título",
        },
        {
          name: "slug",
          type: "text",
          required: true,
          unique: true,
          index: true,
          label: "Slug (URL)",
        },
      ],
    },
    { name: "category", type: "text", label: "Categoria" },
    { name: "description", type: "textarea", label: "Descrição (card)" },
    {
      name: "badge",
      type: "text",
      label: "Badge",
      admin: { description: 'Ex.: "Inscrições: 23 fev 2026 à 03 mar 2026"' },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Imagem (card / banner)",
    },
    {
      name: "content",
      type: "array",
      label: "Conteúdo (parágrafos)",
      labels: { singular: "Parágrafo", plural: "Parágrafos" },
      fields: [{ name: "text", type: "textarea", label: "Texto" }],
    },
    {
      type: "collapsible",
      label: "Inscrições e avaliações",
      fields: [
        {
          type: "row",
          fields: [
            { name: "inscricoes", type: "text", label: "Período de inscrições" },
            {
              name: "inscricoesLink",
              type: "text",
              label: "Link de inscrição",
            },
          ],
        },
        {
          name: "avaliacoes",
          type: "array",
          label: "Avaliações",
          fields: [
            { name: "label", type: "text", label: "Etapa" },
            { name: "period", type: "text", label: "Período" },
          ],
        },
      ],
    },
    {
      type: "collapsible",
      label: "Vídeos e anexos",
      fields: [
        {
          name: "videos",
          type: "array",
          label: "Vídeos",
          fields: [
            { name: "title", type: "text", label: "Título" },
            { name: "url", type: "text", label: "URL" },
          ],
        },
        {
          name: "anexos",
          type: "array",
          label: "Anexos",
          fields: [
            { name: "title", type: "text", label: "Título" },
            { name: "url", type: "text", label: "URL" },
          ],
        },
      ],
    },
  ],
};
