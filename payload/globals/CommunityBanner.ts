import type { GlobalConfig } from "payload";
import { ctaField, richText } from "../fields/shared";

export const CommunityBanner: GlobalConfig = {
  slug: "community-banner",
  label: "Banner Comunidade (CTA)",
  admin: { group: "Layout" },
  access: { read: () => true },
  fields: [
    richText("title", "Título"),
    richText("description", "Descrição"),
    ctaField(),
  ],
};
