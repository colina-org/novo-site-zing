import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const r2PublicUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;
const r2Host = r2PublicUrl ? new URL(r2PublicUrl).hostname : undefined;

const nextConfig: NextConfig = {
  // sharp é um módulo nativo: deixá-lo externo evita que o bundler tente
  // empacotar o binário, que falha ao carregar na função serverless.
  serverExternalPackages: ["sharp"],
  images: {
    qualities: [75, 100],
    // Em dev, servir direto do R2 (sem passar pelo otimizador local, que
    // estoura timeout com as imagens grandes do r2.dev). Produção mantém
    // a otimização + cache da Vercel.
    unoptimized: process.env.NODE_ENV === "development",
    remotePatterns: r2Host
      ? [{ protocol: "https", hostname: r2Host }]
      : [],
  },
};

export default withPayload(nextConfig);
