import type { GlobalConfig } from "payload";
import { ctaField } from "../fields/shared";

export const Header: GlobalConfig = {
  slug: "header",
  label: "Cabeçalho",
  admin: { group: "Layout" },
  access: { read: () => true },
  fields: [
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      label: "Logo (header)",
    },
    {
      name: "serviceItems",
      type: "array",
      label: 'Menu "Serviços"',
      fields: [
        { name: "label", type: "text", label: "Texto" },
        { name: "href", type: "text", label: "Link" },
      ],
    },
    {
      name: "sectorItems",
      type: "array",
      label: 'Menu "Pra quem oferecemos"',
      fields: [{ name: "label", type: "text", label: "Texto" }],
    },
    {
      name: "contentItems",
      type: "array",
      label: "Menu — Conteúdos",
      fields: [{ name: "label", type: "text", label: "Texto" }],
    },
    {
      name: "navItems",
      type: "array",
      label: "Links diretos da navegação",
      fields: [
        { name: "label", type: "text", label: "Texto" },
        { name: "href", type: "text", label: "Link" },
      ],
    },
    {
      type: "collapsible",
      label: "Ações (botões)",
      fields: [
        { ...ctaField("loginCta", "Botão Entrar") },
        { ...ctaField("demoCta", "Botão Solicite uma demonstração") },
        { ...ctaField("assistantCta", "Link Assistente IA") },
      ],
    },
  ],
};
