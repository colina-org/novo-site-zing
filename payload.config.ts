import path from "path";
import { fileURLToPath } from "url";

import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import sharp from "sharp";

import { Users } from "./payload/collections/Users";
import { Media } from "./payload/collections/Media";
import { Programs } from "./payload/collections/Programs";
import { Testimonials } from "./payload/collections/Testimonials";
import { Clients } from "./payload/collections/Clients";
import { Faqs } from "./payload/collections/Faqs";
import { CaseStudies } from "./payload/collections/CaseStudies";

import { Header } from "./payload/globals/Header";
import { Footer } from "./payload/globals/Footer";
import { CommunityBanner } from "./payload/globals/CommunityBanner";
import { SiteSettings } from "./payload/globals/SiteSettings";
import { HomePage } from "./payload/globals/HomePage";
import { CpsiPage } from "./payload/globals/CpsiPage";
import { AboutPage } from "./payload/globals/AboutPage";
import { ProgramasPage } from "./payload/globals/ProgramasPage";
import { ContatoPage } from "./payload/globals/ContatoPage";
import {
  InovacaoAbertaPage,
  GestaoHubsPage,
  DesafiosPage,
} from "./payload/globals/thematicPages";

import {
  revalidateCollection,
  revalidateGlobal,
} from "./payload/hooks/revalidate";
import type { CollectionConfig, GlobalConfig } from "payload";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Injeta revalidação do site nas mudanças de conteúdo (afterChange/afterDelete).
const withRevalidate = (c: CollectionConfig): CollectionConfig => ({
  ...c,
  hooks: {
    ...c.hooks,
    afterChange: [...(c.hooks?.afterChange ?? []), revalidateCollection],
    afterDelete: [...(c.hooks?.afterDelete ?? []), revalidateCollection],
  },
});
const withRevalidateGlobal = (g: GlobalConfig): GlobalConfig => ({
  ...g,
  hooks: {
    ...g.hooks,
    afterChange: [...(g.hooks?.afterChange ?? []), revalidateGlobal],
  },
});

const contentCollections = [
  Media,
  Programs,
  Testimonials,
  Clients,
  Faqs,
  CaseStudies,
].map(withRevalidate);

const allGlobals = [
  Header,
  Footer,
  CommunityBanner,
  SiteSettings,
  HomePage,
  AboutPage,
  CpsiPage,
  ProgramasPage,
  InovacaoAbertaPage,
  GestaoHubsPage,
  DesafiosPage,
  ContatoPage,
].map(withRevalidateGlobal);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, ...contentCollections],
  globals: allGlobals,
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
      // Serverless (Vercel): 1 conexão por instância — o transaction pooler
      // (porta 6543) multiplexa. Local: pool pequeno para o session pooler.
      max: process.env.VERCEL ? 1 : 5,
      idleTimeoutMillis: 10000,
    },
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: {
          // Serve assets from the R2 public URL via next/image.
          generateFileURL: ({ filename }) =>
            `${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}/${filename}`,
          disableLocalStorage: true,
        },
      },
      bucket: process.env.S3_BUCKET || "",
      config: {
        endpoint: process.env.S3_ENDPOINT,
        region: process.env.S3_REGION || "auto",
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || "",
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "",
        },
        // R2 requires path-style addressing.
        forcePathStyle: true,
      },
    }),
  ],
});
