import type { GlobalConfig } from "payload";
import {
  heroField,
  aboutField,
  cardListField,
  sectionHeaderFields,
  caseSandboxField,
  richText,
} from "../fields/shared";

type ThematicArgs = {
  slug: string;
  label: string;
  withCaseSandbox?: boolean;
};

/**
 * Páginas temáticas com layout comum:
 * Hero → Clients → About → "Por que fazer com a ZING?" (cards) → [CaseSandbox] → FAQ
 */
const thematicPage = ({
  slug,
  label,
  withCaseSandbox,
}: ThematicArgs): GlobalConfig => ({
  slug,
  label,
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
      name: "whyZing",
      type: "group",
      label: "Seção — Por que fazer com a ZING?",
      fields: [...sectionHeaderFields(), cardListField("cards", "Cards")],
    },
    ...(withCaseSandbox ? [caseSandboxField()] : []),
    richText("faqTitle", "Título — seção FAQ"),
  ],
});

export const InovacaoAbertaPage = thematicPage({
  slug: "inovacao-aberta-page",
  label: "Página — Inovação Aberta",
});

export const GestaoHubsPage = thematicPage({
  slug: "gestao-hubs-page",
  label: "Página — Gestão de Hubs",
  withCaseSandbox: true,
});

export const DesafiosPage = thematicPage({
  slug: "desafios-page",
  label: "Página — Desafios de Intraempreendedorismo",
  withCaseSandbox: true,
});
