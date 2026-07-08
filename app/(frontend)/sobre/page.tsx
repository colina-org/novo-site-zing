import type { Metadata } from "next";
import { getGlobal, getCaseStudies } from "../lib/cms";
import Historia from "../components/sobre/Historia";
import OQueFazemos from "../components/sobre/OQueFazemos";
import CasesDestaque from "../components/sobre/CasesDestaque";
import ProximoPasso from "../components/sobre/ProximoPasso";
import IebtSection from "../components/sobre/IebtSection";
import CommunitySection from "../components/CommunitySection";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a trajetória da Zing Innovation by IEBT — método, evolução e escala na gestão da inovação para os setores público e privado.",
  openGraph: {
    title: "Sobre | Zing Innovation",
    description: "A trajetória da Zing Innovation by IEBT.",
    url: "/sobre",
  },
  alternates: { canonical: "/sobre" },
};

export default async function Sobre() {
  const [page, cases] = await Promise.all([
    getGlobal("about-page"),
    getCaseStudies("sobre"),
  ]);

  return (
    <main>
      <Historia data={page.historia} />
      <OQueFazemos
        title={page.oQueFazemos?.title}
        description={page.oQueFazemos?.description}
        items={page.oQueFazemos?.items}
      />
      <CasesDestaque
        label={page.casesDestaque?.label}
        title={page.casesDestaque?.title}
        description={page.casesDestaque?.description}
        cases={cases}
      />
      <ProximoPasso
        title={page.proximoPasso?.title}
        cta={page.proximoPasso?.cta}
        stats={page.proximoPasso?.stats}
      />
      <IebtSection
        label={page.iebt?.label}
        title={page.iebt?.title}
        description={page.iebt?.description}
        backgroundImage={page.iebt?.backgroundImage}
        cta={page.iebt?.cta}
        stats={page.iebt?.stats}
      />
      <CommunitySection />
    </main>
  );
}
