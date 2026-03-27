import AboutDesafiosIntra from "../components/desafios-de-intraempreendedorismo/About";
import HeroDesafiosIntra from "../components/desafios-de-intraempreendedorismo/Hero";
import CaseSandbox from "../components/desafios-de-intraempreendedorismo/CaseSandbox";
import FaqSection from "../components/FaqSection";
import CommunitySection from "../components/CommunitySection";
import WhyUse from "../components/desafios-de-intraempreendedorismo/WhyZing";

export default function DesafiosIntraempreendedorismo() {
  return (
    <main>
      <HeroDesafiosIntra />
      <AboutDesafiosIntra />
      <WhyUse />
      <CaseSandbox />
      <FaqSection />
      <CommunitySection />
    </main>
  );
}
