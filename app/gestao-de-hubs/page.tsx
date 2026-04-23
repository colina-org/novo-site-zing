import CommunitySection from "../components/CommunitySection";
import CaseSandbox from "../components/gestao-hubs/CaseSandbox";
import FaqSection from "../components/gestao-hubs/FaqSection";
import AboutGestao from "../components/gestao-hubs/About";
import Clients from "../components/gestao-hubs/Clients";
import HeroGestao from "../components/gestao-hubs/Hero";

import WhyZingGestao from "../components/gestao-hubs/WhyZyng";

export default function gestaoHubs() {
  return (
    <main>
      <HeroGestao />
      <Clients />
      <AboutGestao />
      <WhyZingGestao />
      <CaseSandbox />
      <FaqSection />
      <CommunitySection />
    </main>
  );
}
