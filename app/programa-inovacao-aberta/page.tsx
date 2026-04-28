import type { Metadata } from "next";
import Hero from "../components/programa-inovacao-aberta/Hero";
import About from "../components/programa-inovacao-aberta/About";
import WhyZing from "../components/programa-inovacao-aberta/WhyZing";
import Clients from "../components/programa-inovacao-aberta/Clients";
// import Cases from "../components/cpsi/Cases";
import FaqSection from "../components/programa-inovacao-aberta/FaqSection";
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

export default function PageCPSI() {
  return (
    <main>
      <Hero />
      <Clients />
      <About />
      <WhyZing />
      {/* <Cases /> */}
      <FaqSection />
      <CommunitySection />
    </main>
  );
}
