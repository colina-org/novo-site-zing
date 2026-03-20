import Image from "next/image";

export default function About() {
  return (
    <section className="bg-gradientbg! py-16 max-sm:py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-20">
          {/* Text */}
          <div className="flex flex-col gap-4 lg:max-w-125">
            <h2 className="text-[clamp(32px,4vw,48px)] font-normal leading-tight text-greyPrimary">
              O que é <span className="font-bold text-bluePrimary">CPSI</span>?
            </h2>
            <p className="text-lg font-normal leading-relaxed text-greyPrimary">
              O CPSI (Contrato Público para Solução Inovadora) é um instrumento
              jurídico que permite ao setor público{" "}
              <span className="font-medium">contratar, testar e validar </span>
              soluções inovadoras para desafios reais da gestão, com{" "}
              <span className="font-medium">
                segurança jurídica, transparência e foco em resultados
              </span>
              .
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
