import Hero from "../components/programa-inovacao-aberta/Hero";
import About from "../components/programa-inovacao-aberta/About";
import WhyZing from "../components/programa-inovacao-aberta/WhyZing";
import Clients from "../components/programa-inovacao-aberta/Clients";
import Cases from "../components/cpsi/Cases";
import FaqSection from "../components/programa-inovacao-aberta/FaqSection";
import CommunitySection from "../components/CommunitySection";

export default function PageCPSI() {
  return (
    <main>
      <Hero />
      <Clients />
      <About />
      <WhyZing />
      <Cases />
      <FaqSection />
      <CommunitySection />
    </main>
  );
}
