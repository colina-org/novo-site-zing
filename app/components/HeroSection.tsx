import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="object-cover object-right max-lg:hidden"
      />
      <Image
        src="/image-hero-tablet-home.png"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="object-cover max-sm:hidden max-lg:block object-bottom"
      />
      <Image
        src="/image-hero-mobile-home.png"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="object-cover lg:hidden"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-r from-white via-white/85 to-white/0 lg:via-white/70 lg:to-white/0"
      />

      <div className="container relative z-10 flex min-h-140 flex-col justify-center py-16 lg:min-h-160 lg:py-32">
        <div className="max-w-205.25">
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
            className="text-greyPrimary mt-10 max-w-180 text-[clamp(16px,1.5vw,18px)] font-medium leading-[1.4] max-lg:mt-8"
          >
            Conectamos os atores do ecossistema de inovação para que startups
            desenvolvam soluções sob medida para os desafios reais do setor
            público e privado.
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
