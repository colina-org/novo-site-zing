import type { Metadata } from "next";
import { getGlobal, getFaqs } from "../lib/cms";
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

export default async function PageContato() {
  const [page, home, faqs] = await Promise.all([
    getGlobal("contato-page"),
    getGlobal("home-page"),
    getFaqs("home"),
  ]);

  return (
    <main>
      <HeroContato
        title={page.title}
        description={page.description}
        cargoOptions={page.cargoOptions}
        servicoOptions={page.servicoOptions}
        contatoOptions={page.contatoOptions}
      />
      <FaqSection faqs={faqs} title={home.faqTitle} />
      <CommunitySection />
    </main>
  );
}
