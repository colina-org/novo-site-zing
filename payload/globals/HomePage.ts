import type { GlobalConfig } from "payload";
import { heroField, richText } from "../fields/shared";

export const HomePage: GlobalConfig = {
  slug: "home-page",
  label: "Página — Home",
  admin: { group: "Páginas" },
  access: { read: () => true },
  fields: [
    heroField(),
    richText("clientsTitle", "Título — seção Clientes"),
    {
      name: "servicesSection",
      type: "group",
      label: "Seção — Serviços",
      fields: [
        { name: "label", type: "text", label: "Rótulo" },
        richText("title", "Título"),
        richText("description", "Descrição"),
        {
          name: "services",
          type: "array",
          label: "Serviços",
          fields: [
            { name: "title", type: "text", label: "Título" },
            { name: "description", type: "textarea", label: "Descrição" },
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              label: "Imagem",
            },
          ],
        },
      ],
    },
    {
      name: "solutionsSection",
      type: "group",
      label: "Seção — Soluções",
      fields: [
        { name: "label", type: "text", label: "Rótulo" },
        richText("title", "Título"),
        {
          name: "solutions",
          type: "array",
          label: "Soluções",
          fields: [
            { name: "label", type: "text", label: "Rótulo" },
            { name: "description", type: "textarea", label: "Descrição" },
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              label: "Imagem",
            },
            { name: "href", type: "text", label: "Link" },
          ],
        },
      ],
    },
    richText("programsTitle", "Título — seção Programas"),
    richText("testimonialsTitle", "Título — seção Depoimentos"),
    richText("faqTitle", "Título — seção FAQ"),
  ],
};
