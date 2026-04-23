import Hero from "../components/cpsi/Hero";
import About from "../components/cpsi/About";
import Clients from "../components/cpsi/Clients";
import Calls from "../components/cpsi/Calls";
import WhyUse from "../components/cpsi/WhyUse";
import Cases from "../components/cpsi/Cases";
import Steps from "../components/cpsi/steps";
import FaqSection from "../components/cpsi/FaqSection";
import CommunitySection from "../components/CommunitySection";
import CaseSandbox from "../components/cpsi/CaseSandbox";

export default function PageCPSI() {
  return (
    <main>
      <Hero />
      <Clients />
      <About />
      <Calls />
      <Steps />
      <CaseSandbox />
      <WhyUse />
      <Cases />
      <FaqSection />
      <CommunitySection />
    </main>
  );
}
