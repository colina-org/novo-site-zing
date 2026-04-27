import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <Image
        src="/hero-bg.png"
        alt=""
        priority
        quality={100}
        height={1080}
        width={1920}
        aria-hidden="true"
        className="object-cover object-right max-lg:hidden absolute top-0 left-0 w-full h-full"
      />
      <Image
        src="/image-hero-tablet-home.png"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={100}
        aria-hidden="true"
        className="object-cover max-sm:hidden max-lg:block lg:hidden object-bottom w-full h-full"
      />
      <Image
        src="/image-hero-mobile-home.png"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={100}
        aria-hidden="true"
        className="object-cover sm:hidden lg:hidden w-full h-full"
      />

      <div className="container relative z-10 flex min-h-140 max-sm:items-start max-sm:justify-start flex-col justify-center py-16 lg:min-h-160 lg:py-32">
        <div className="w-full max-w-209.25">
          <h1
            data-aos="fade-up"
            className="text-greyPrimary text-[clamp(32px,5vw,58px)] font-normal leading-[1.2]"
          >
            Plataforma de inovação completa para o{" "}
            <span className="text-bluePrimary font-bold">setor público</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-greyPrimary mt-10 text-[clamp(16px,1.5vw,18px)] font-medium leading-[1.4] max-lg:mt-8"
          >
            Conectamos, com o <strong>poder da Inteligência Artificial</strong>,
            os atores do ecossistema de inovação para que startups desenvolvam
            soluções sob medida para os{" "}
            <strong>desafios reais do setor público e privado</strong>
          </p>

          <Link
            data-aos="fade-up"
            data-aos-delay="200"
            href="/contato"
            className="bg-bluePrimary mt-10 inline-flex items-center justify-center rounded-[10px] px-4 py-2 text-base font-bold text-white transition-opacity hover:opacity-90 max-lg:mt-8"
          >
            Solicite uma demonstração
          </Link>
        </div>
      </div>
    </section>
  );
}
