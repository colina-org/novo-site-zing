import Image from "next/image";

export default function AboutProgram() {
  return (
    <section className="bg-[#f9f2ff] py-16 max-sm:py-10">
      <div className="container">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-20">
          {/* Text */}
          <div className="w-full max-w-125 max-lg:max-w-full">
            <h2 className="text-[40px] mb-4 max-sm:text-[28px] font-normal leading-tight text-black">
              O que é um <br />
              <span className="font-bold text-purplePrimary">
                Programa de inovação
              </span>
              ?
            </h2>
            <p className="text-lg max-sm:text-base font-normal leading-relaxed text-black">
              Programas de inovação aberta{" "}
              <strong>
                conectam organizações a startups, pesquisadores e outros agentes
                do ecossistema
              </strong>{" "}
              para resolver desafios reais de negócio.
              <br />
              <br />
              De forma estruturada e orientada a resultados, a empresa{" "}
              <strong>
                define seus desafios, avalia propostas e desenvolve soluções
              </strong>{" "}
              por meio de provas de conceito ou projetos piloto,{" "}
              <strong>
                acelerando a inovação, reduzindo riscos e transformando ideias
              </strong>{" "}
              em valor concreto.
            </p>
          </div>

          {/* Image */}
          <div className="w-full overflow-hidden rounded-[10px] lg:max-w-155">
            <Image
              src="/cpsi/about.png"
              alt="Sobre o CPSI"
              width={620}
              height={300}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
