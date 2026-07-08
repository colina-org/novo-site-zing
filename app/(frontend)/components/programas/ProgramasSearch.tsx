"use client";

import { useState } from "react";
import ProgramasHero from "./Hero";
import ProgramCards from "./ProgramCards";
import type { ProgramView } from "../../lib/cms";

export default function ProgramasSearch({
  programs,
  searchTitle,
}: {
  programs: ProgramView[];
  searchTitle?: unknown;
}) {
  const [keyword, setKeyword] = useState("");

  return (
    <>
      <ProgramasHero
        title={searchTitle}
        keyword={keyword}
        onKeywordChange={setKeyword}
        onSearch={() => {}}
      />
      <ProgramCards programs={programs} keyword={keyword} />
    </>
  );
}
