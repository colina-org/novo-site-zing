import type { Metadata } from "next";
import {
  getPrograms,
  getClients,
  getTestimonials,
  getFaqs,
  getGlobal,
} from "./lib/cms";
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

export default async function Home() {
  const [home, programs, clients, testimonials, faqs] = await Promise.all([
    getGlobal("home-page"),
    getPrograms(),
    getClients(),
    getTestimonials(),
    getFaqs("home"),
  ]);

  const services = home.servicesSection ?? {};
  const solutions = home.solutionsSection ?? {};

  return (
    <main>
      <HeroSection hero={home.hero} />
      <ClientsSection logos={clients} title={home.clientsTitle} />
      <ServicesSection
        label={services.label}
        title={services.title}
        description={services.description}
        services={services.services}
      />
      <SolutionsSection
        label={solutions.label}
        title={solutions.title}
        solutions={solutions.solutions}
      />
      <ProgramsSection programs={programs} title={home.programsTitle} />
      <TestimonialsSection testimonials={testimonials} title={home.testimonialsTitle} />
      <FaqSection faqs={faqs} title={home.faqTitle} />
      <CommunitySection />
    </main>
  );
}
