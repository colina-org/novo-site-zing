import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import AosInit from "./components/AosInit";
import { getGlobal, mediaUrl } from "./lib/cms";

// Renderização dinâmica (a cada request): desacopla o build do banco
// e faz as edições do CMS refletirem imediatamente. O transaction pooler
// (6543) + pool max 1 aguentam bem em serverless.
export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getGlobal("site-settings");

  const template = settings?.titleTemplate || "%s | Zing Innovation";
  const defaultTitle =
    settings?.defaultTitle ||
    "Zing Innovation by IEBT — Plataforma de inovação para o setor público";
  const description =
    settings?.description ||
    "Plataforma completa de inovação para os setores público e privado. Gestão de editais CPSI, inovação aberta, hubs e desafios de intraempreendedorismo.";
  const keywords = (settings?.keywords ?? [])
    .map((k: { value?: string }) => k.value)
    .filter(Boolean);
  const faviconUrl = mediaUrl(settings?.favicon);

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    ),
    title: { template, default: defaultTitle },
    description,
    keywords: keywords.length ? keywords : undefined,
    icons: faviconUrl ? { icon: faviconUrl } : undefined,
    authors: [{ name: "Zing Innovation by IEBT" }],
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: "Zing Innovation",
      title: "Zing Innovation by IEBT",
      description:
        "Plataforma completa de inovação para os setores público e privado.",
    },
    twitter: {
      card: "summary_large_image",
      title: "Zing Innovation by IEBT",
      description:
        "Plataforma completa de inovação para os setores público e privado.",
    },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = await getGlobal("header");

  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <AosInit />
        <Header
          logo={mediaUrl(header.logo)}
          serviceItems={header.serviceItems}
          sectorItems={header.sectorItems}
          contentItems={header.contentItems}
          navItems={header.navItems}
          loginCta={header.loginCta}
          demoCta={header.demoCta}
          assistantCta={header.assistantCta}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
