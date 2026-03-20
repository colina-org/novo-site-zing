import CommunitySection from "../components/CommunitySection";
import CaseSandbox from "../components/desafios-intra/CaseSandbox";
import FaqSection from "../components/FaqSection";
import AboutGestao from "../components/gestao-hubs/About";
import HeroGestao from "../components/gestao-hubs/Hero";
import HubsBar from "../components/gestao-hubs/HubsBar";
import WhyZingGestao from "../components/gestao-hubs/WhyZyng";

export default function gestaoHubs() {
  return (
    <main>
      <HeroGestao />
      <HubsBar />
      <AboutGestao />
      <WhyZingGestao />
      <CaseSandbox />
      <FaqSection />
      <CommunitySection />
    </main>
  );
}
