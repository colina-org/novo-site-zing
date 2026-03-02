import HeroSection from "./components/HeroSection";
import ClientsSection from "./components/ClientsSection";
import ServicesSection from "./components/ServicesSection";
import SolutionsSection from "./components/SolutionsSection";
import ProgramsSection from "./components/ProgramsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";
import CommunitySection from "./components/CommunitySection";

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
