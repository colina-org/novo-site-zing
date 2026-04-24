import type { Metadata } from "next";
import ProgramasSearch from "../components/programas/ProgramasSearch";
import Cases from "../components/programas/Cases";
import FaqSection from "../components/FaqSection";
import CommunitySection from "../components/CommunitySection";

export const metadata: Metadata = {
  title: "Programas",
  description:
    "Conheça os programas de inovação abertos no Brasil: editais de CPSI, desafios de inovação aberta e oportunidades para startups.",
  openGraph: {
    title: "Programas | Zing Innovation",
    description:
      "Programas de inovação abertos: editais, desafios e oportunidades para startups.",
    url: "/programas",
  },
  alternates: { canonical: "/programas" },
};

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
