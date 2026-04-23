import Image from "next/image";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-gradientbg">
      <Image
        src="/cpsi/image-about-zing.png"
        alt=""
        height={368}
        width={880}
        quality={100}
        className="object-cover object-right w-full max-w-220 absolute right-0 max-sm:hidden"
      />

      <div className="container relative z-10">
        <div
          data-aos="fade-right"
          className="flex max-w-xl flex-col gap-10 py-16 lg:py-20"
        >
          <h2 className="text-[clamp(32px,4vw,40px)] font-normal leading-[1.2] text-greyPrimary">
            O que é <span className="font-bold text-bluePrimary">CPSI</span>?
          </h2>
          <p className="text-lg font-normal leading-relaxed text-greyPrimary">
            O CPSI (Contrato Público para Solução Inovadora) é um instrumento
            jurídico que permite ao setor público{" "}
            <span className="font-medium">contratar, testar e validar</span>{" "}
            soluções inovadoras para desafios reais da gestão, com{" "}
            <span className="font-medium">
              segurança jurídica, transparência e foco em resultados
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
