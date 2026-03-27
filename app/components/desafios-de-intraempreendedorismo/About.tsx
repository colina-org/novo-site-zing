import Image from "next/image";

export default function AboutGestao() {
  return (
    <section className="bg-gradientbg py-16 max-sm:py-10">
      <div className="container">
        <div className="flex flex-col items-center max-md:gap-10 lg:flex-row gap-4  justify-between">
          {/* Text */}
          <div data-aos="fade-right" className="w-full max-w-140 max-lg:max-w-full">
            <h2 className="text-[40px] mb-4 max-sm:text-[28px] font-normal leading-tight text-greyPrimary">
              O que é um{" "}
              <span className="font-bold text-bluePrimary">
                desafio de intraempreendedorismo
              </span>
              ?
            </h2>
            <p className="text-lg max-sm:text-base font-normal leading-relaxed text-greyPrimary">
              Os <strong>desafios de intraempreendedorismo</strong> permitem que
              a organização convide seus próprios colaboradores a propor{" "}
              <strong>soluções para problemas reais</strong> do dia a dia.
            </p>
          </div>

          {/* Image */}
          <div data-aos="fade-left" className="w-full overflow-hidden rounded-[10px] lg:max-w-155">
            <Image
              src="/cpsi/about.png"
              alt="Sobre o CPSI"
              width={620}
              height={199}
              className="h-full max-h-49.75 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
