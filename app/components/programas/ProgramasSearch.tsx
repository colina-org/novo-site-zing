"use client";

import { useState } from "react";
import ProgramasHero from "./Hero";
import ProgramCards from "./ProgramCards";

export default function ProgramasSearch() {
  const [keyword, setKeyword] = useState("");

  return (
    <>
      <ProgramasHero
        keyword={keyword}
        onKeywordChange={setKeyword}
        onSearch={() => {}}
      />
      <ProgramCards keyword={keyword} />
    </>
  );
}
