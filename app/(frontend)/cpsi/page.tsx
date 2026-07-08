import type { Metadata } from "next";
import { getGlobal, getFaqs, getCaseStudies, mapClient } from "../lib/cms";
import Hero from "../components/cpsi/Hero";
import About from "../components/cpsi/About";
import Clients from "../components/cpsi/Clients";
import Calls from "../components/cpsi/Calls";
import WhyUse from "../components/cpsi/WhyUse";
import Steps from "../components/cpsi/steps";
import FaqSection from "../components/FaqSection";
import CommunitySection from "../components/CommunitySection";
import Cases from "../components/cpsi/Cases";
import WhenCPSI from "../components/cpsi/WhenCPSI";

export const metadata: Metadata = {
  title: "Chamadas CPSI",
  description:
    "Plataforma líder na gestão de editais de CPSI (Contrato Público para Solução Inovadora) no Brasil. CAIXA, CEMIG, Porto Suape e Prefeitura de BH confiam na Zing.",
  openGraph: {
    title: "Chamadas CPSI | Zing Innovation",
    description: "Plataforma líder em gestão de editais de CPSI no Brasil.",
    url: "/cpsi",
  },
  alternates: { canonical: "/cpsi" },
};

export default async function PageCPSI() {
  const [page, faqs, cases] = await Promise.all([
    getGlobal("cpsi-page"),
    getFaqs("cpsi"),
    getCaseStudies("cpsi"),
  ]);

  const clients = (page.clients ?? []).map(mapClient);
  const quizSteps = (page.quizSection?.steps ?? []).map((s: any) => ({
    kind: s.kind,
    question: s.question,
    helper: s.helper,
    options: (s.options ?? []).map((o: any) => o.value),
  }));

  return (
    <main>
      <Hero hero={page.hero} />
      <Clients logos={clients} title={page.clientsTitle} />
      <About about={page.about} />
      <Calls
        title={page.callsSection?.title}
        description={page.callsSection?.description}
        steps={page.callsSection?.steps}
      />
      <Steps
        title={page.quizSection?.title}
        description={page.quizSection?.description}
        backgroundImage={page.quizSection?.backgroundImage}
        steps={quizSteps}
      />
      <WhenCPSI
        title={page.whenCpsi?.title}
        bullets={page.whenCpsi?.bullets}
        image={page.whenCpsi?.image}
        ebookCta={page.whenCpsi?.ebookCta}
      />
      <WhyUse title={page.whyUse?.title} cards={page.whyUse?.cards} />
      <Cases
        title={page.casesSection?.title}
        description={page.casesSection?.description}
        cases={cases}
      />
      <FaqSection faqs={faqs} title={page.faqTitle} />
      <CommunitySection />
    </main>
  );
}
