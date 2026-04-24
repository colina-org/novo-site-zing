import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import AosInit from "./components/AosInit";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    template: "%s | Zing Innovation",
    default:
      "Zing Innovation by IEBT — Plataforma de inovação para o setor público",
  },
  description:
    "Plataforma completa de inovação para os setores público e privado. Gestão de editais CPSI, inovação aberta, hubs e desafios de intraempreendedorismo.",
  keywords: [
    "Zing",
    "IEBT",
    "inovação",
    "CPSI",
    "inovação aberta",
    "hubs de inovação",
    "intraempreendedorismo",
    "setor público",
    "startups",
  ],
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
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <AosInit />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
