import Image from "next/image";

export default function AboutGestao() {
  return (
    <section className="relative overflow-hidden py-28 max-sm:py-10 bg-gradientbg">
      <Image
        src="/desafios/image-about-desafio-nova.png"
        alt=""
        height={368}
        quality={100}
        width={880}
        className="object-cover object-top w-full max-w-220 absolute right-0 top-0 max-sm:hidden"
      />

      <div className="container relative z-10">
        <div data-aos="fade-right" className="flex max-w-xl flex-col gap-4">
          <h2 className="text-[clamp(32px,4vw,40px)] font-normal leading-[120%] max-sm:text-[28px] text-greyPrimary">
            O que é um{" "}
            <span className="font-bold text-bluePrimary">
              desafio de intraempreendedorismo
            </span>
            ?
          </h2>
          <p className="text-lg font-normal leading-relaxed text-greyPrimary">
            Os <strong>desafios de intraempreendedorismo</strong> permitem que a
            organização convide seus próprios colaboradores a propor{" "}
            <strong>soluções para problemas reais</strong> do dia a dia.
          </p>
        </div>
      </div>
    </section>
  );
}
