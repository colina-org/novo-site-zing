import type { Metadata } from "next";
import { getPrograms, getGlobal, getFaqs, getCaseStudies } from "../lib/cms";
import ProgramasSearch from "../components/programas/ProgramasSearch";
import Cases from "../components/programas/Cases";
import FaqSection from "../components/FaqSection";
import CommunitySection from "../components/CommunitySection";

export const metadata: Metadata = {
  title: "Programas",
  description:
    "Conheça os programas de inovação abertos no Brasil: editais de CPSI, desafios de inovação aberta e oportunidades para startups.",
  openGraph: {
    title: "Programas | Zing Innovation",
    description:
      "Programas de inovação abertos: editais, desafios e oportunidades para startups.",
    url: "/programas",
  },
  alternates: { canonical: "/programas" },
};

export default async function Programas() {
  const [programs, page, cases, home, faqs] = await Promise.all([
    getPrograms(),
    getGlobal("programas-page"),
    getCaseStudies("programas"),
    getGlobal("home-page"),
    getFaqs("home"),
  ]);

  return (
    <main>
      <ProgramasSearch programs={programs} searchTitle={page.searchTitle} />
      <Cases
        title={page.casesSection?.title}
        description={page.casesSection?.description}
        cases={cases}
      />
      <FaqSection faqs={faqs} title={home.faqTitle} />
      <CommunitySection />
    </main>
  );
}
