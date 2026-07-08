import type { GlobalConfig } from "payload";
import { richText } from "../fields/shared";

const optionArray = (name: string, label: string) => ({
  name,
  type: "array" as const,
  label,
  fields: [
    { name: "value", type: "text" as const, label: "Valor (chave)" },
    { name: "label", type: "text" as const, label: "Rótulo exibido" },
  ],
});

export const ContatoPage: GlobalConfig = {
  slug: "contato-page",
  label: "Página — Contato",
  admin: { group: "Páginas" },
  access: { read: () => true },
  fields: [
    richText("title", "Título"),
    richText("description", "Descrição"),
    optionArray("cargoOptions", "Opções — Cargo"),
    optionArray("servicoOptions", "Opções — Serviço de interesse"),
    optionArray("contatoOptions", "Opções — Preferência de contato"),
  ],
};
