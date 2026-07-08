import type { GlobalConfig } from "payload";
import { ctaField, sectionHeaderFields, richText } from "../fields/shared";

export const AboutPage: GlobalConfig = {
  slug: "about-page",
  label: "Página — Sobre",
  admin: { group: "Páginas" },
  access: { read: () => true },
  fields: [
    {
      name: "historia",
      type: "group",
      label: "Seção — História",
      fields: [
        ...sectionHeaderFields(),
        { name: "bottomBadge", type: "text", label: "Selo inferior" },
        { name: "video", type: "upload", relationTo: "media", label: "Vídeo" },
        {
          name: "timeline",
          type: "array",
          label: "Linha do tempo",
          fields: [
            { name: "year", type: "text", label: "Ano" },
            { name: "text", type: "textarea", label: "Texto" },
          ],
        },
        {
          name: "sectors",
          type: "array",
          label: "Setores de atuação",
          fields: [{ name: "name", type: "text", label: "Setor" }],
        },
      ],
    },
    {
      name: "oQueFazemos",
      type: "group",
      label: "Seção — O que fazemos",
      fields: [
        ...sectionHeaderFields(),
        {
          name: "items",
          type: "array",
          label: "Itens",
          fields: [
            { name: "image", type: "upload", relationTo: "media", label: "Imagem" },
            { name: "title", type: "text", label: "Título" },
            { name: "description", type: "textarea", label: "Descrição" },
          ],
        },
      ],
    },
    {
      name: "casesDestaque",
      type: "group",
      label: "Seção — Cases em destaque (cabeçalho)",
      fields: [...sectionHeaderFields()],
    },
    {
      name: "proximoPasso",
      type: "group",
      label: "Seção — Próximo passo (números)",
      fields: [
        richText("title", "Título"),
        ctaField(),
        {
          name: "stats",
          type: "array",
          label: "Números",
          fields: [
            { name: "value", type: "number", label: "Valor" },
            { name: "label", type: "text", label: "Rótulo" },
          ],
        },
      ],
    },
    {
      name: "iebt",
      type: "group",
      label: "Seção — IEBT",
      fields: [
        ...sectionHeaderFields(),
        {
          name: "backgroundImage",
          type: "upload",
          relationTo: "media",
          label: "Imagem de fundo",
        },
        ctaField(),
        {
          name: "stats",
          type: "array",
          label: "Números",
          fields: [
            {
              name: "display",
              type: "text",
              label: "Valor pronto (ex.: 16 anos)",
            },
            { name: "prefix", type: "text", label: "Prefixo (ex.: +)" },
            { name: "value", type: "number", label: "Valor (counter)" },
            { name: "suffix", type: "text", label: "Sufixo" },
            { name: "label", type: "text", label: "Rótulo" },
          ],
        },
      ],
    },
  ],
};
