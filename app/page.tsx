import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import ClientsSection from "./components/ClientsSection";
import ServicesSection from "./components/ServicesSection";
import SolutionsSection from "./components/SolutionsSection";
import ProgramsSection from "./components/ProgramsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";
import CommunitySection from "./components/CommunitySection";

export const metadata: Metadata = {
  title: {
    absolute:
      "Zing Innovation by IEBT — Plataforma de inovação para o setor público",
  },
  description:
    "Conectamos startups e instituições para desenvolver soluções sob medida aos desafios reais do setor público e privado. CPSI, inovação aberta, hubs e desafios internos.",
  openGraph: {
    title: "Zing Innovation by IEBT",
    description:
      "Plataforma completa de inovação para os setores público e privado.",
    url: "/",
  },
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <SolutionsSection />
      <ProgramsSection />
      <TestimonialsSection />
      <FaqSection />
      <CommunitySection />
    </main>
  );
}
