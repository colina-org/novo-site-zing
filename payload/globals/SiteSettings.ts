import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Configurações do site",
  admin: { group: "Sistema" },
  access: { read: () => true },
  fields: [
    {
      name: "favicon",
      type: "upload",
      relationTo: "media",
      label: "Favicon",
      admin: {
        description:
          "Ícone da aba do navegador. Ideal: PNG/ICO quadrado (ex.: 512x512).",
      },
    },
    { name: "defaultTitle", type: "text", label: "Título padrão (SEO)" },
    { name: "titleTemplate", type: "text", label: "Template de título" },
    {
      name: "description",
      type: "textarea",
      label: "Descrição padrão (SEO)",
    },
    {
      name: "keywords",
      type: "array",
      label: "Palavras-chave",
      fields: [{ name: "value", type: "text", label: "Palavra-chave" }],
    },
  ],
};
