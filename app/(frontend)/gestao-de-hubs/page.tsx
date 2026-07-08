import type { Metadata } from "next";
import { getGlobal, getFaqs, mapClient } from "../lib/cms";
import CommunitySection from "../components/CommunitySection";
import CaseSandbox from "../components/gestao-hubs/CaseSandbox";
import FaqSection from "../components/FaqSection";
import AboutGestao from "../components/gestao-hubs/About";
import Clients from "../components/gestao-hubs/Clients";
import HeroGestao from "../components/gestao-hubs/Hero";
import WhyZingGestao from "../components/gestao-hubs/WhyZyng";

export const metadata: Metadata = {
  title: "Gestão de Hubs de Inovação",
  description:
    "Gestão completa de hubs de inovação: da operação do espaço físico à articulação do ecossistema, a Zing oferece gestão integrada para hubs orientados a resultados.",
  openGraph: {
    title: "Gestão de Hubs de Inovação | Zing Innovation",
    description:
      "Gestão integrada para hubs de inovação orientados a resultados.",
    url: "/gestao-de-hubs",
  },
  alternates: { canonical: "/gestao-de-hubs" },
};

export default async function gestaoHubs() {
  const [page, faqs] = await Promise.all([
    getGlobal("gestao-hubs-page"),
    getFaqs("hubs"),
  ]);

  const clients = (page.clients ?? []).map(mapClient);

  return (
    <main>
      <HeroGestao hero={page.hero} />
      <Clients logos={clients} title={page.clientsTitle} />
      <AboutGestao about={page.about} />
      <WhyZingGestao
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
