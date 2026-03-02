import Hero from "../components/programa-inovacao-aberta/Hero";
import About from "../components/programa-inovacao-aberta/About";
import WhyZing from "../components/programa-inovacao-aberta/WhyZing";
import Clients from "../components/cpsi/Clients";
import WhyUse from "../components/cpsi/WhyUse";
import Cases from "../components/cpsi/Cases";
import FaqSection from "../components/FaqSection";
import CommunitySection from "../components/CommunitySection";

export default function PageCPSI() {
  return (
    <main>
      <Hero />
      <About />
      <WhyZing />
      <Clients />
      <WhyUse />
      <Cases />
      <FaqSection />
      <CommunitySection />
    </main>
  );
}
