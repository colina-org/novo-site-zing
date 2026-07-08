import type { Metadata } from "next";
import { getGlobal, getFaqs, mapClient } from "../lib/cms";
import Hero from "../components/programa-inovacao-aberta/Hero";
import About from "../components/programa-inovacao-aberta/About";
import WhyZing from "../components/programa-inovacao-aberta/WhyZing";
import Clients from "../components/programa-inovacao-aberta/Clients";
import FaqSection from "../components/FaqSection";
import CommunitySection from "../components/CommunitySection";

export const metadata: Metadata = {
  title: "Programa de Inovação Aberta",
  description:
    "Programas estruturados de inovação aberta: a Zing seleciona e avalia as startups mais aderentes para responder aos desafios das instituições.",
  openGraph: {
    title: "Programa de Inovação Aberta | Zing Innovation",
    description:
      "Programas estruturados de inovação aberta que conectam instituições a startups.",
    url: "/programa-inovacao-aberta",
  },
  alternates: { canonical: "/programa-inovacao-aberta" },
};

export default async function PageInovacaoAberta() {
  const [page, faqs] = await Promise.all([
    getGlobal("inovacao-aberta-page"),
    getFaqs("inovacao"),
  ]);

  const clients = (page.clients ?? []).map(mapClient);

  return (
    <main>
      <Hero hero={page.hero} />
      <Clients logos={clients} title={page.clientsTitle} />
      <About about={page.about} />
      <WhyZing
        title={page.whyZing?.title}
        description={page.whyZing?.description}
        cards={page.whyZing?.cards}
      />
      <FaqSection faqs={faqs} title={page.faqTitle} />
      <CommunitySection />
    </main>
  );
}
