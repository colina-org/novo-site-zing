import Image from "next/image";

export default function AboutGestao() {
  return (
    <section className="relative overflow-hidden py-28 max-sm:py-10 bg-gradientbg">
      <Image
        src="/inovacao-aberta/oque-e-programa-inovacao-nova.png"
        alt=""
        height={368}
        width={880}
        className="object-cover object-top w-full max-w-220 absolute right-0 top-0 max-sm:hidden"
      />

      <div className="container relative z-10">
        <div data-aos="fade-right" className="flex max-w-xl flex-col gap-4">
          <h2 className="text-[clamp(32px,4vw,40px)] font-normal leading-[1.2] text-greyPrimary">
            O que é um <br className="max-sm:hidden" />
            <span className="font-bold text-bluePrimary">
              Programa de inovação
            </span>
            ?
          </h2>
          <p className="text-lg font-normal leading-relaxed text-greyPrimary">
            Programas de inovação aberta{" "}
            <strong>
              conectam organizações a startups, pesquisadores e outros agentes
              do ecossistema{" "}
            </strong>
            para resolver desafios reais de negócio.
          </p>
        </div>
      </div>
    </section>
  );
}
