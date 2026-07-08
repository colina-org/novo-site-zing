import type { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
  slug: "footer",
  label: "Rodapé",
  admin: { group: "Layout" },
  access: { read: () => true },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "logoZing",
          type: "upload",
          relationTo: "media",
          label: "Logo Zing",
        },
        {
          name: "logoIebt",
          type: "upload",
          relationTo: "media",
          label: "Logo IEBT",
        },
      ],
    },
    { name: "address", type: "textarea", label: "Endereço" },
    { name: "copyright", type: "text", label: "Copyright" },
    {
      name: "socials",
      type: "array",
      label: "Redes sociais",
      fields: [
        {
          name: "network",
          type: "select",
          label: "Rede",
          options: [
            { label: "LinkedIn", value: "linkedin" },
            { label: "Instagram", value: "instagram" },
          ],
        },
        { name: "url", type: "text", label: "URL" },
      ],
    },
  ],
};
