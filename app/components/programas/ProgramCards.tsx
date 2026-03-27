import Image from "next/image";
import Link from "next/link";

export type Program = {
  slug: string;
  category: string;
  title: string;
  description: string;
  badge: string;
  image: string;
  href: string;
};

export const programs: Program[] = [
  {
    slug: "cpsi-porto-itaqui-2-fase",
    category: "INOVA SERRA",
    title: "1° Edital de CPSI do Porto do Itaqui - 2° Fase",
    description:
      "Porto do Itaqui lança primeiro edital de CPSI do Maranhão. Esta é uma oportunidade única de...",
    badge: "Inscrições: 17 nov 2025 à 17 dez 2025",
    image: "/programs/program-01.png",
    href: "/programas/cpsi-porto-itaqui-2-fase",
  },
  {
    slug: "cpsi-porto-suape-logistica",
    category: "INOVA SERRA",
    title: "CPSI do Porto de Suape: Soluções Inovadoras para Logística",
    description:
      "Porto do Itaqui lança primeiro edital de CPSI do Maranhão. Esta é uma oportunidade única de...",
    badge: "Inscrições: encerradas",
    image: "/programs/program-02.png",
    href: "/programas/cpsi-porto-suape-logistica",
  },
  {
    slug: "2-desafio-inovaserra",
    category: "INOVA SERRA",
    title: "2º Desafio de Inovação Aberta InovaSerra",
    description:
      "Porto do Itaqui lança primeiro edital de CPSI do Maranhão. Esta é uma oportunidade única de...",
    badge: "Inscrições: 17 nov 2025 à 17 dez 2025",
    image: "/programs/program-03.png",
    href: "/programas/2-desafio-inovaserra",
  },
  {
    slug: "cpsi-porto-suape-sustentabilidade",
    category: "INOVA SERRA",
    title: "CPSI do Porto de Suape: Soluções Inovadoras para Logística",
    description:
      "Porto do Itaqui lança primeiro edital de CPSI do Maranhão. Esta é uma oportunidade única de...",
    badge: "Inscrições: 17 nov 2025 à 17 dez 2025",
    image: "/programs/program-04.png",
    href: "/programas/cpsi-porto-suape-sustentabilidade",
  },
  {
    slug: "cpsi-porto-itaqui-2-fase",
    category: "INOVA SERRA",
    title: "1° Edital de CPSI do Porto do Itaqui - 2° Fase",
    description:
      "Porto do Itaqui lança primeiro edital de CPSI do Maranhão. Esta é uma oportunidade única de...",
    badge: "Inscrições: 17 nov 2025 à 17 dez 2025",
    image: "/programs/program-01.png",
    href: "/programas/cpsi-porto-itaqui-2-fase",
  },
  {
    slug: "cpsi-porto-suape-logistica",
    category: "INOVA SERRA",
    title: "CPSI do Porto de Suape: Soluções Inovadoras para Logística",
    description:
      "Porto do Itaqui lança primeiro edital de CPSI do Maranhão. Esta é uma oportunidade única de...",
    badge: "Inscrições: encerradas",
    image: "/programs/program-02.png",
    href: "/programas/cpsi-porto-suape-logistica",
  },
  {
    slug: "2-desafio-inovaserra",
    category: "INOVA SERRA",
    title: "2º Desafio de Inovação Aberta InovaSerra",
    description:
      "Porto do Itaqui lança primeiro edital de CPSI do Maranhão. Esta é uma oportunidade única de...",
    badge: "Inscrições: 17 nov 2025 à 17 dez 2025",
    image: "/programs/program-03.png",
    href: "/programas/2-desafio-inovaserra",
  },
  {
    slug: "cpsi-porto-suape-sustentabilidade",
    category: "INOVA SERRA",
    title: "CPSI do Porto de Suape: Soluções Inovadoras para Logística",
    description:
      "Porto do Itaqui lança primeiro edital de CPSI do Maranhão. Esta é uma oportunidade única de...",
    badge: "Inscrições: 17 nov 2025 à 17 dez 2025",
    image: "/programs/program-04.png",
    href: "/programas/cpsi-porto-suape-sustentabilidade",
  },
];

function ProgramCard({ program }: { program: Program }) {
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
  keyword: string;
};

export default function ProgramCards({ keyword }: ProgramCardsProps) {
  const normalized = keyword
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const filtered = normalized
    ? programs.filter((p) =>
        p.title
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(normalized),
      )
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
