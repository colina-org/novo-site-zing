import type { Metadata } from "next";
import CommunitySection from "../components/CommunitySection";
import CaseSandbox from "../components/gestao-hubs/CaseSandbox";
import FaqSection from "../components/gestao-hubs/FaqSection";
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

export default function gestaoHubs() {
  return (
    <main>
      <HeroGestao />
      <Clients />
      <AboutGestao />
      <WhyZingGestao />
      <CaseSandbox />
      <FaqSection />
      <CommunitySection />
    </main>
  );
}
