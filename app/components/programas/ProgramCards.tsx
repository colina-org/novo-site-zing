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
    category: "ESPAÇO TEIA - CAIXA",
    title: "CPSI CAIXA | Startups que Transformam o Jurídico",
    description:
      "A CAIXA lançou um novo CPSI voltado à modernização da atuação jurídica, especialmente ...",
    badge: "Inscrições: 23 fev 2026 à 03 mar 2026",
    image: "/programs/6b164d99a5de176fb761c76bfe99fc58c586d69d.png",
    href: "/programas/cpsi-porto-itaqui-2-fase",
  },
  {
    slug: "cpsi-porto-suape-logistica",
    category: "Inova Cemig.Lab",
    title: "Inova Cemig.Lab - Ciclo 4",
    description:
      "Buscamos startups com soluções inovadoras para participar de 08 desafios estratégicos da Cemig.",
    badge: "Inscrições: 18 dez 2025 à 01 jan 2026",
    image: "/programs/80c1f706d174bdad924ab385022ccb6f20d6654f.png",
    href: "/programas/cpsi-porto-suape-logistica",
  },
  {
    slug: "2-desafio-inovaserra",
    category: "ESPAÇO TEIA - CAIXA",
    title: "Teia Startups Ciclo 2",
    description:
      "O Programa TEIA Startups conecta startups ao setor público, promovendo oportunidades reais...",
    badge: "Inscrições: 18 mar 2026 à 17 ago 2026",
    image: "/programs/10798df5a590d60f10440e507d9fc39a0f77b8e7.png",
    href: "/programas/2-desafio-inovaserra",
  },
  {
    slug: "cpsi-porto-suape-sustentabilidade",
    category: "INOVA SERRA",
    title: "CPSI do Porto de Suape: Soluções Inovadoras para",
    description:
      "Porto do Itaqui lança primeiro edital de CPSI do Maranhão. Esta é uma oportunidade única de...",
    badge: "Inscrições: 17 nov 2025 à 17 dez 2025",
    image: "/programs/946faabc89d454ddfca9c767ab44780c4096c291.png",
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
