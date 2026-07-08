import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  admin: {
    group: "Conteúdo",
  },
  upload: {
    // Storage is handled by the S3 (R2) plugin in payload.config.ts.
    // We keep the original file plus a couple of useful sizes for next/image.
    mimeTypes: ["image/*", "video/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Texto alternativo",
    },
  ],
};
