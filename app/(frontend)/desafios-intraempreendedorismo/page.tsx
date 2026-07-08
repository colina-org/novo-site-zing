import type { Metadata } from "next";
import { getGlobal, getFaqs, mapClient } from "../lib/cms";
import AboutDesafiosIntra from "../components/desafios-de-intraempreendedorismo/About";
import HeroDesafiosIntra from "../components/desafios-de-intraempreendedorismo/Hero";
import CaseSandbox from "../components/desafios-de-intraempreendedorismo/CaseSandbox";
import FaqSection from "../components/FaqSection";
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

export default async function DesafiosIntraempreendedorismo() {
  const [page, faqs] = await Promise.all([
    getGlobal("desafios-page"),
    getFaqs("desafios"),
  ]);

  const clients = (page.clients ?? []).map(mapClient);

  return (
    <main>
      <HeroDesafiosIntra hero={page.hero} />
      <Clients logos={clients} title={page.clientsTitle} />
      <AboutDesafiosIntra about={page.about} />
      <WhyUse
        title={page.whyZing?.title}
        description={page.whyZing?.description}
        cards={page.whyZing?.cards}
      />
      <CaseSandbox data={page.caseSandbox} />
      <FaqSection faqs={faqs} title={page.faqTitle} />
      <CommunitySection />
    </main>
  );
}
