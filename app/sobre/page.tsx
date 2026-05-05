import Historia from "@/app/components/sobre/Historia";
import OQueFazemos from "@/app/components/sobre/OQueFazemos";
import CasesDestaque from "@/app/components/sobre/CasesDestaque";
import ProximoPasso from "@/app/components/sobre/ProximoPasso";
import IebtSection from "@/app/components/sobre/IebtSection";
import CommunitySection from "../components/CommunitySection";

export default function Sobre() {
  return (
    <main>
      <Historia />
      <OQueFazemos />
      <CasesDestaque />
      <ProximoPasso />
      <IebtSection />
      <CommunitySection />
    </main>
  );
}
