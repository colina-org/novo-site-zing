"use client";

import { useState } from "react";
import ProgramasHero from "../components/programas/Hero";
import ProgramCards from "../components/programas/ProgramCards";
import Cases from "../components/cpsi/Cases";
import FaqSection from "../components/FaqSection";
import CommunitySection from "../components/CommunitySection";

export default function Programas() {
  const [keyword, setKeyword] = useState("");

  return (
    <main>
      <ProgramasHero
        keyword={keyword}
        onKeywordChange={setKeyword}
        onSearch={() => {}}
      />
      <ProgramCards keyword={keyword} />
      <Cases />
      <FaqSection />
      <CommunitySection />
    </main>
  );
}
