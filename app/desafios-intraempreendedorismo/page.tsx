import type { Metadata } from "next";
import AboutDesafiosIntra from "../components/desafios-de-intraempreendedorismo/About";
import HeroDesafiosIntra from "../components/desafios-de-intraempreendedorismo/Hero";
import CaseSandbox from "../components/desafios-de-intraempreendedorismo/CaseSandbox";
import FaqSection from "../components/desafios-de-intraempreendedorismo/FaqSection";
import CommunitySection from "../components/CommunitySection";
import WhyUse from "../components/desafios-de-intraempreendedorismo/WhyZing";
import Clients from "../components/desafios-de-intraempreendedorismo/Clients";

export const metadata: Metadata = {
  title: "Desafios de Intraempreendedorismo",
  description:
    "Crie desafios que fomentam a inovação em empresas públicas e privadas, transformando a experiência dos colaboradores em ideias estruturadas.",
  openGraph: {
    title: "Desafios de Intraempreendedorismo | Zing Innovation",
    description:
      "Desafios que fomentam a inovação e transformam ideias de colaboradores em projetos estruturados.",
    url: "/desafios-intraempreendedorismo",
  },
  alternates: { canonical: "/desafios-intraempreendedorismo" },
};

export default function DesafiosIntraempreendedorismo() {
  return (
    <main>
      <HeroDesafiosIntra />
      <Clients />
      <AboutDesafiosIntra />
      <WhyUse />
      <CaseSandbox />
      <FaqSection />
      <CommunitySection />
    </main>
  );
}
