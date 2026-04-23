import ProgramasSearch from "../components/programas/ProgramasSearch";
import Cases from "../components/programas/Cases";
import FaqSection from "../components/FaqSection";
import CommunitySection from "../components/CommunitySection";

export default function Programas() {
  return (
    <main>
      <ProgramasSearch />
      <Cases />
      <FaqSection />
      <CommunitySection />
    </main>
  );
}
