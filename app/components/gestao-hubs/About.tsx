import Image from "next/image";

export default function AboutGestao() {
  return (
    <section className="bg-gradientbg py-16 max-sm:py-10">
      <div className="container">
        <div className="flex flex-col items-center max-md:gap-10 lg:flex-row gap-4  justify-between">
          {/* Text */}
          <div className="w-full max-w-140 max-lg:max-w-full">
            <h2 className="text-[40px] mb-4 max-sm:text-[28px] font-normal leading-tight text-greyPrimary">
              O que é{" "}
              <span className="font-bold text-bluePrimary">
                Hub de inovação
              </span>
              ?
            </h2>
            <p className="text-lg max-sm:text-base font-normal leading-relaxed text-greyPrimary">
              Um <strong>hub de inovação</strong> é um ambiente — físico,
              digital ou híbrido — criado para{" "}
              <strong>conectar pessoas, organizações e conhecimentos</strong> em
              torno do desenvolvimento de soluções inovadoras.
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
