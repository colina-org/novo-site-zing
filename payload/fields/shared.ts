import type { Field } from "payload";

/**
 * Campo de texto formatado (richText/Lexical). Usado em títulos e descrições
 * que misturam negrito/normal/itálico. Campos planos continuam text/textarea.
 */
export const richText = (name: string, label: string): Field => ({
  name,
  type: "richText",
  label,
});

/**
 * Campo de link/CTA reutilizável: rótulo + destino (href).
 */
export const ctaField = (name = "cta", label = "Botão (CTA)"): Field => ({
  name,
  type: "group",
  label,
  fields: [
    { name: "label", type: "text", label: "Texto do botão" },
    { name: "href", type: "text", label: "Link (href)" },
  ],
});

/**
 * Cabeçalho de seção: label opcional (texto) + título e descrição (richText).
 */
export const sectionHeaderFields = (): Field[] => [
  { name: "label", type: "text", label: "Rótulo (eyebrow)" },
  richText("title", "Título"),
  richText("description", "Descrição"),
];

/**
 * Hero responsivo: título, descrição (richText), CTA e imagens
 * desktop/tablet/mobile.
 */
export const heroField = (name = "hero", label = "Hero"): Field => ({
  name,
  type: "group",
  label,
  fields: [
    richText("title", "Título"),
    richText("description", "Descrição"),
    ctaField(),
    {
      type: "row",
      fields: [
        {
          name: "imageDesktop",
          type: "upload",
          relationTo: "media",
          label: "Imagem (desktop)",
        },
        {
          name: "imageTablet",
          type: "upload",
          relationTo: "media",
          label: "Imagem (tablet)",
        },
        {
          name: "imageMobile",
          type: "upload",
          relationTo: "media",
          label: "Imagem (mobile)",
        },
      ],
    },
  ],
});

/**
 * Lista de cards { image, title, description } — usada em WhyUse/WhyZing,
 * Calls, OQueFazemos, etc. Títulos/descrições de card são planos.
 */
export const cardListField = (
  name = "cards",
  label = "Cards",
  withImage = true,
): Field => ({
  name,
  type: "array",
  label,
  fields: [
    ...(withImage
      ? ([
          {
            name: "image",
            type: "upload",
            relationTo: "media",
            label: "Imagem",
          },
        ] as Field[])
      : []),
    { name: "title", type: "text", label: "Título" },
    { name: "description", type: "textarea", label: "Descrição" },
  ],
});

/**
 * Seção "About" das páginas temáticas: título e descrição (richText) +
 * imagem de fundo.
 */
export const aboutField = (name = "about", label = "Seção — O que é"): Field => ({
  name,
  type: "group",
  label,
  fields: [
    richText("title", "Título"),
    richText("description", "Descrição"),
    {
      name: "backgroundImage",
      type: "upload",
      relationTo: "media",
      label: "Imagem de fundo",
    },
  ],
});

/**
 * Bloco "CaseSandbox": case de sucesso com imagem + CTA (Hubs/Desafios).
 */
export const caseSandboxField = (
  name = "caseSandbox",
  label = "Case de sucesso",
): Field => ({
  name,
  type: "group",
  label,
  fields: [
    richText("title", "Título"),
    richText("description", "Descrição"),
    { name: "image", type: "upload", relationTo: "media", label: "Imagem" },
    ctaField(),
  ],
});
