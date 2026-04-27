import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { programs } from "../../components/programas/ProgramCards";

function CalendarIcon() {
  return (
    <svg
      className="mt-0.5 shrink-0 text-greyPrimary"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.833 3.333H4.167A1.667 1.667 0 002.5 5v11.667a1.667 1.667 0 001.667 1.666h11.666a1.667 1.667 0 001.667-1.666V5a1.667 1.667 0 00-1.667-1.667zM13.333 1.667v3.333M6.667 1.667v3.333M2.5 8.333h15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  const uniqueSlugs = [...new Set(programs.map((p) => p.slug))];
  return uniqueSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return { title: "Programa não encontrado" };
  }

  return {
    title: program.title,
    description: program.description,
    openGraph: {
      title: `${program.title} | Zing Innovation`,
      description: program.description,
      url: `/programas/${program.slug}`,
      images: [{ url: program.image }],
    },
    alternates: { canonical: `/programas/${program.slug}` },
  };
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) notFound();

  return (
    <main className="bg-white pb-20">
      {/* Banner */}
      <div className="container pt-8">
        <div className="relative h-60 w-full overflow-hidden rounded-[10px]">
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mt-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left — main content */}
          <div className="flex-1 min-w-0">
            <h1 className="text-[clamp(28px,3.5vw,40px)] font-bold leading-[120%] text-greyPrimary">
              {program.title}
            </h1>

            {/* Descrição */}
            {program.content && program.content.length > 0 && (
              <>
                <h2 className="mt-6 text-lg font-medium text-greyPrimary">
                  Descrição
                </h2>
                <div className="mt-4 flex flex-col gap-4">
                  {program.content.map((paragraph, i) => (
                    <p
                      key={i}
                      className="whitespace-pre-line text-base leading-[1.6] text-greyPrimary"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {program.inscricoesLink && (
                  <p className="mt-4 text-base leading-[1.6] text-greyPrimary">
                    <span className="font-medium">Inscrições</span> via:{" "}
                    <a
                      href={program.inscricoesLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all text-bluePrimary underline underline-offset-2 hover:opacity-80"
                    >
                      {program.inscricoesLink}
                    </a>
                  </p>
                )}
              </>
            )}

            {/* Vídeos */}
            {program.videos && program.videos.length > 0 && (
              <>
                <hr className="my-6 border-[#C4C5C6]" />
                <h2 className="text-lg font-medium text-greyPrimary">
                  Vídeos
                </h2>
                <div className="mt-4 flex flex-col gap-2.5">
                  {program.videos.map((v, i) =>
                    v.url ? (
                      <a
                        key={i}
                        href={v.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base text-bluePrimary underline underline-offset-2 hover:opacity-80 wrap-break-word"
                      >
                        {v.title}
                      </a>
                    ) : (
                      <span
                        key={i}
                        className="text-base text-greyPrimary wrap-break-word"
                      >
                        {v.title}
                      </span>
                    )
                  )}
                </div>
              </>
            )}

            {/* Anexos */}
            {program.anexos && program.anexos.length > 0 && (
              <>
                <hr className="my-6 border-[#C4C5C6]" />
                <h2 className="text-lg font-medium text-greyPrimary">
                  Anexos
                </h2>
                <div className="mt-4 flex flex-col gap-2.5">
                  {program.anexos.map((a, i) =>
                    a.url ? (
                      <a
                        key={i}
                        href={a.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base text-bluePrimary underline underline-offset-2 hover:opacity-80 wrap-break-word"
                      >
                        {a.title}
                      </a>
                    ) : (
                      <span
                        key={i}
                        className="text-base text-greyPrimary wrap-break-word"
                      >
                        {a.title}
                      </span>
                    )
                  )}
                </div>
              </>
            )}
          </div>

          {/* Right — sidebar */}
          <aside className="w-full shrink-0 lg:w-75">
            <div className="sticky top-8 flex flex-col gap-6 rounded-[10px] border border-[#C4C5C6] p-4">
              {/* CTA */}
              {program.inscricoesLink ? (
                <a
                  href={program.inscricoesLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded bg-linear-to-r from-[#6453D1] via-[#0071E3] to-[#1ACBDC] px-4 py-2 text-lg font-bold text-white transition-opacity duration-300 hover:opacity-80"
                >
                  Inscreva-se
                </a>
              ) : (
                <button className="flex items-center justify-center rounded bg-linear-to-r from-[#6453D1] via-[#0071E3] to-[#1ACBDC] px-4 py-2 text-lg font-bold text-white transition-opacity duration-300 hover:opacity-80">
                  Inscreva-se
                </button>
              )}

              {/* Inscrições */}
              {program.inscricoes && (
                <div className="flex gap-2.5">
                  <CalendarIcon />
                  <div className="flex flex-col gap-1">
                    <p className="text-base font-medium text-greyPrimary">
                      Inscrições:
                    </p>
                    <p className="text-base text-greyPrimary">
                      {program.inscricoes}
                    </p>
                  </div>
                </div>
              )}

              {/* Avaliações */}
              {program.avaliacoes && program.avaliacoes.length > 0 && (
                <div className="flex gap-2.5">
                  <CalendarIcon />
                  <div className="flex flex-col gap-2.5">
                    <p className="text-base font-medium text-greyPrimary">
                      Avaliações
                    </p>
                    <div className="flex flex-col gap-4 text-base text-greyPrimary">
                      {program.avaliacoes.map((av, i) => (
                        <p key={i}>
                          {av.label}:
                          <br />
                          {av.period}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
