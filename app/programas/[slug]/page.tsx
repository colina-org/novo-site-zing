import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { programs } from "../../components/programas/ProgramCards";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  const uniqueSlugs = [...new Set(programs.map((p) => p.slug))];
  return uniqueSlugs.map((slug) => ({ slug }));
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
          <div className="flex-1">
            <h1 className="text-[clamp(28px,3.5vw,40px)] font-medium leading-[120%] text-black">
              {program.title}
            </h1>

            {/* Descrição */}
            <h2 className="mt-6 text-lg font-medium text-black">Descrição</h2>
            <p className="mt-6 text-lg leading-[140%] text-greyPrimary">
              Show Único de Mike Love em Belo Horizonte no Dístrital.
              {"\n\n"}
              Mike Love estará em turnê pelo Brasil para o lançamento de seu
              novo álbum. Filho do Havaí, Mike é um multiartista que encanta com
              uma mistura única de reggae, folk e música havaiana. Usando loop
              stations, ele cria performances ao vivo que são verdadeiras
              experiências sonoras.
              {"\n\n"}
              No show de BH, o artista traz o melhor de sua discografia e faixas
              inéditas do novo trabalho. Prepare-se para uma noite de música
              envolvente e vibrações positivas no coração da capital mineira.
              {"\n\n"}
              Abertura dos portões: 18h. Início do show: 20h. Classificação: 16
              anos. Menores de 16 apenas acompanhados dos pais ou responsáveis
              legais.
            </p>

            {/* Divider */}
            <hr className="my-6 border-[#C4C5C6]" />

            {/* Vídeos */}
            <h2 className="text-lg font-medium text-black">Vídeos</h2>
            <div className="mt-6 flex flex-col gap-2.5">
              <Link
                href="#"
                className="text-lg text-black underline-offset-2 hover:underline max-sm:text-sm wrap-break-word"
              >
                Live - Tira-dúvidas | 2º Desafio de Inovação Aberta InovaSerra
              </Link>
            </div>

            {/* Divider */}
            <hr className="my-6 border-[#C4C5C6]" />

            {/* Anexos */}
            <h2 className="text-lg font-medium text-black">Anexos</h2>
            <div className="mt-6 flex flex-col gap-2.5">
              <Link
                href="#"
                className="text-lg text-black underline-offset-2 hover:underline max-sm:text-sm wrap-break-word"
              >
                Anexo_I_-_Declaração_de_Aceite_Integral.docx
              </Link>
              <Link
                href="#"
                className="text-lg text-black underline-offset-2 hover:underline max-sm:text-sm wrap-break-word"
              >
                EDITAL_DE_SELEÇÃO_-_2º_Desafio_de_Inovação_Aberta_InovaSerra_Assinado.pdf
              </Link>
              <Link
                href="#"
                className="text-lg text-black underline-offset-2 hover:underline max-sm:text-sm wrap-break-word"
              >
                ALTERAÇÃO_1_-_EDITAL_DE_SELEÇÃO_-2º_Desafio_de_Inovação_Aberta_InovaSerra_Assinado.pdf
              </Link>
              <Link
                href="#"
                className="text-lg text-black underline-offset-2 hover:underline max-sm:text-sm wrap-break-word"
              >
                Anexo_II_-_Detalhamento_das_Empresas_e_Desafios.pdf
              </Link>
            </div>
          </div>

          {/* Right — sidebar */}
          <aside className="w-full shrink-0 lg:w-75">
            <div className="sticky top-8 flex flex-col gap-6 rounded-[10px] border border-[#C4C5C6] p-4">
              {/* CTA */}
              <Link
                href="#"
                className="flex items-center justify-center rounded bg-linear-to-br from-[#9500FF] to-[#35005A] px-4 py-2 text-lg font-bold text-white transition-opacity duration-300 hover:opacity-80"
              >
                Inscreva-se
              </Link>

              {/* Inscrições */}
              <div className="flex gap-2.5">
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
                <div className="flex flex-col gap-2.5">
                  <p className="text-base text-black">
                    <span className="font-medium">Inscrições:</span>
                  </p>
                  <p className="text-base text-black">
                    17 nov 2025 à 17 dez 2025
                  </p>
                </div>
              </div>

              {/* Avaliações */}
              <div className="flex gap-2.5">
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
                <div className="flex flex-col gap-2.5">
                  <p className="text-base font-medium text-black">Avaliações</p>
                  <div className="flex flex-col gap-4 text-base text-black">
                    <p>
                      Etapa inicial:
                      <br />
                      17 nov 2025 à 17 dez 2025
                    </p>
                    <p>
                      Etapa intermediária:
                      <br />
                      17 nov 2025 à 17 dez 2025
                    </p>
                    <p>
                      Etapa final:
                      <br />
                      17 nov 2025 à 17 dez 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
