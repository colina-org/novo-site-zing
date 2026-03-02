import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#f9f2ff] py-16 max-sm:py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-20">
          {/* Text */}
          <div className="flex flex-col gap-4 lg:max-w-125">
            <h2 className="text-[clamp(32px,4vw,48px)] font-normal leading-tight text-black">
              O que é <span className="font-bold text-purplePrimary">CPSI</span>
              ?
            </h2>
            <p className="text-lg font-normal leading-relaxed text-black">
              O CPSI (Contrato Público para Solução Inovadora) é um instrumento
              jurídico que permite ao setor público contratar, testar e validar
              soluções inovadoras para desafios reais da gestão, com segurança
              jurídica, transparência e foco em resultados.
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
