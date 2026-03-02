import AboutDesafiosIntra from "../components/desafios-intra/About";
import HeroDesafiosIntra from "../components/desafios-intra/Hero";
import WhyZingDesafios from "../components/desafios-intra/WhyZing";
import CaseSandbox from "../components/desafios-intra/CaseSandbox";
import FaqSection from "../components/FaqSection";
import CommunitySection from "../components/CommunitySection";

export default function DesafiosIntraempreendedorismo() {
  return (
    <main>
      <HeroDesafiosIntra />
      <AboutDesafiosIntra />
      <WhyZingDesafios />
      <CaseSandbox />
      <FaqSection />
      <CommunitySection />
    </main>
  );
}
