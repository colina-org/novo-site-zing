import Image from "next/image";

export default function AboutDesafiosIntra() {
  return (
    <section className="bg-[#f9f2ff] py-16 max-sm:py-10">
      <div className="container">
        <div className="flex flex-col items-center max-md:gap-10 lg:flex-row gap-4  justify-between">
          {/* Text */}
          <div className="w-full max-w-140 max-lg:max-w-full">
            <h2 className="text-[40px] mb-4 max-sm:text-[28px] font-normal leading-tight text-black">
              O que é um{" "}
              <span className="font-bold text-purplePrimary">
                desafio de intraempeededorismo
              </span>
              ?
            </h2>
            <p className="text-lg max-sm:text-base font-normal leading-relaxed text-black">
              Os desafios de intraempreendedorismo permitem que a organização
              convide seus próprios colaboradores a propor soluções para
              problemas reais do dia a dia.
              <br />
              <br />A partir de desafios estruturados ou de chamadas abertas de
              ideias, os colaboradores compartilham iniciativas baseadas em suas
              vivências práticas, fortalecendo a cultura de inovação e
              promovendo melhorias contínuas nos processos e nos negócios.
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
