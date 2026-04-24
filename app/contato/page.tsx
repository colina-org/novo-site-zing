import type { Metadata } from "next";
import CommunitySection from "../components/CommunitySection";
import HeroContato from "../components/contato/HeroContato";
import FaqSection from "../components/FaqSection";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com um especialista da Zing. Nossa equipe entrará em contato para entender seus desafios e mostrar como transformar ideias em impacto.",
  openGraph: {
    title: "Contato | Zing Innovation",
    description: "Fale com um especialista da Zing.",
    url: "/contato",
  },
  alternates: { canonical: "/contato" },
};

export default function PageContato() {
  return (
    <main>
      <HeroContato />
      <FaqSection />
      <CommunitySection />
    </main>
  );
}
