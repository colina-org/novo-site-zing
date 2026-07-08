import type { GlobalConfig } from "payload";
import {
  heroField,
  aboutField,
  cardListField,
  sectionHeaderFields,
  ctaField,
  richText,
} from "../fields/shared";

export const CpsiPage: GlobalConfig = {
  slug: "cpsi-page",
  label: "Página — CPSI",
  admin: { group: "Páginas" },
  access: { read: () => true },
  fields: [
    heroField(),
    richText("clientsTitle", "Título — seção Clientes"),
    {
      name: "clients",
      type: "relationship",
      relationTo: "clients",
      hasMany: true,
      label: "Clientes exibidos",
    },
    aboutField(),
    {
      name: "callsSection",
      type: "group",
      label: "Seção — Como é feito (etapas)",
      fields: [...sectionHeaderFields(), cardListField("steps", "Etapas")],
    },
    {
      name: "quizSection",
      type: "group",
      label: "Seção — Quiz (CPSI é para mim?)",
      fields: [
        richText("title", "Título"),
        richText("description", "Descrição"),
        {
          name: "backgroundImage",
          type: "upload",
          relationTo: "media",
          label: "Imagem de fundo",
        },
        {
          name: "steps",
          type: "array",
          label: "Perguntas / etapas",
          fields: [
            {
              name: "kind",
              type: "select",
              label: "Tipo",
              defaultValue: "quiz",
              options: [
                { label: "Pergunta (quiz)", value: "quiz" },
                { label: "Formulário de contato", value: "contact" },
              ],
            },
            { name: "question", type: "textarea", label: "Pergunta / título" },
            { name: "helper", type: "textarea", label: "Texto auxiliar" },
            {
              name: "options",
              type: "array",
              label: "Opções (quiz)",
              fields: [{ name: "value", type: "text", label: "Opção" }],
            },
          ],
        },
      ],
    },
    {
      name: "whenCpsi",
      type: "group",
      label: "Seção — Quando o CPSI faz sentido",
      fields: [
        richText("title", "Título"),
        {
          name: "bullets",
          type: "array",
          label: "Tópicos",
          fields: [{ name: "text", type: "textarea", label: "Texto" }],
        },
        { name: "image", type: "upload", relationTo: "media", label: "Imagem" },
        { ...ctaField("ebookCta", "Botão e-book") },
      ],
    },
    {
      name: "whyUse",
      type: "group",
      label: "Seção — Por que usar a Zing",
      fields: [...sectionHeaderFields(), cardListField("cards", "Cards")],
    },
    {
      name: "casesSection",
      type: "group",
      label: "Seção — Cases de sucesso (cabeçalho)",
      fields: [...sectionHeaderFields()],
    },
    richText("faqTitle", "Título — seção FAQ"),
  ],
};
