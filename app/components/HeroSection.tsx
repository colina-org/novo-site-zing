import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full py-10 lg:py-32 overflow-hidden bg-white">
      {/* Decorative cubes — left */}
      <div className="pointer-events-none absolute -left-[8%] xl:-left-[7%] 2xl:-left-[3%] max-lg:-left-[10%] top-20 hidden w-82.75 lg:block">
        <Image
          src="/hero-left-cubes.png"
          alt=""
          width={331}
          height={329}
          aria-hidden="true"
        />
      </div>

      {/* Decorative cubes — right */}
      <div className="pointer-events-none absolute -right-[8%] xl:-right-[7%] 2xl:-right-[3%] max-lg:-right-[10%] top-20 hidden w-82.75 lg:block">
        <Image
          src="/hero-cubes-right-new.png"
          alt=""
          width={331}
          height={329}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <h1 data-aos="fade-up" className="text-center lg:text-[58px] leading-[120%] text-3xl font-normal text-black mb-14 max-sm:mb-8">
          Plataforma de inovação completa <br className="max-sm:hidden" />
          para o{" "}
          <span
            className="bg-clip-text font-medium text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(42deg, #6453D1 8%, #0071E3 58%, #1ACBDC 91%)",
            }}
          >
            setor público
          </span>
        </h1>

        {/* Description */}
        <p data-aos="fade-up" data-aos-delay="100" className="max-w-3xl mx-auto mb-14 max-sm:mb-8 text-[clamp(16px,1.5vw,18px)] font-normal leading-relaxed text-greyPrimary text-center">
          Conectamos os atores do ecossistema de inovação para que startups
          desenvolvam soluções sob medida para os desafios reais do setor
          público e privado.
        </p>

        {/* CTA Button */}
        <Link
          data-aos="fade-up"
          data-aos-delay="200"
          href="/contato"
          className="gradient-blue-primary-zing table mx-auto whitespace-nowrap rounded px-4 py-2 text-base font-bold text-white transition-opacity hover:opacity-90"
        >
          Solicite uma demonstração
        </Link>
      </div>
    </section>
  );
}
