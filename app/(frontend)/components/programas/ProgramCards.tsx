import Image from "next/image";
import Link from "next/link";
import type { ProgramView } from "../../lib/cms";

function ProgramCard({ program }: { program: ProgramView }) {
  return (
    <div className="group flex flex-col gap-2 rounded bg-white p-2 shadow-[0px_0px_1px_0px_rgba(38,43,47,0.04),0px_4px_10px_0px_rgba(38,43,47,0.07)]">
      {/* Image */}
      <div className="relative h-14 overflow-hidden rounded">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover transition-transform duration-300 ease-linear group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 rounded border border-[#f6e8ff] p-2">
        <p className="text-sm text-black">{program.category}</p>

        <h3 className="line-clamp-2 text-lg font-bold leading-snug text-black">
          {program.title}
        </h3>

        <p className="line-clamp-3 text-base leading-relaxed text-black">
          {program.description}
        </p>

        <span className="text-sm font-medium text-black">{program.badge}</span>

        <Link
          href={program.href}
          className=" px-4 py-2 text-center text-base font-bold transition-transform duration-300 ease-linear group-hover:scale-[1.02]"
        >
          <span className="bg-linear-to-r from-[#6453D1] via-[#0071E3] to-[#1ACBDC] bg-clip-text text-transparent">
            Conheça mais
          </span>
        </Link>
      </div>
    </div>
  );
}

type ProgramCardsProps = {
  programs: ProgramView[];
  keyword: string;
};

const normalize = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");

export default function ProgramCards({ programs, keyword }: ProgramCardsProps) {
  const normalized = normalize(keyword);

  const filtered = normalized
    ? programs.filter((p) => normalize(p.title).includes(normalized))
    : programs;

  return (
    <section className="bg-white py-16 lg:pb-20">
      <div className="container">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((program, i) => (
              <ProgramCard key={i} program={program} />
            ))}
          </div>
        ) : (
          <p className="py-10 text-center text-lg text-greyPrimary">
            Nenhum programa encontrado para &ldquo;{keyword}&rdquo;
          </p>
        )}
      </div>
    </section>
  );
}
