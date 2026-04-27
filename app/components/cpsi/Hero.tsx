import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-160 max-sm:pt-10 items-center max-sm:items-start overflow-hidden bg-white lg:min-h-160">
      <Image
        src="/image-hero-cpsi2.png"
        alt=""
        priority
        quality={100}
        height={1080}
        width={1920}
        aria-hidden="true"
        className="object-cover object-right max-lg:hidden absolute top-0 left-0 w-full h-full"
      />

      <Image
        src="/cpsi/image-hero-nova.png"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={100}
        aria-hidden="true"
        className="object-cover max-sm:hidden max-lg:block lg:hidden object-bottom w-full h-full"
      />
      <Image
        src="/cpsi/image-hero-mobile.png"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={100}
        aria-hidden="true"
        className="object-cover sm:hidden w-full h-full"
      />

      <div className="container relative z-10">
        <div className="flex max-w-156 max-lg:max-w-full flex-col items-start gap-13.5 max-sm:gap-10 max-lg:text-center max-lg:items-center">
          <div className="flex flex-col gap-6">
            <h1
              data-aos="fade-up"
              className="text-[clamp(32px,4vw,48px)] font-normal leading-[120%] text-greyPrimary"
            >
              Plataforma líder na{" "}
              <span className="font-medium">gestão de CPSI</span> impulsionada
              por IA
            </h1>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex flex-col items-start gap-1 text-lg max-sm:text-base font-normal leading-[140%] text-greyPrimary"
            >
              <p>
                Da preparação institucional à seleção das propostas e ao
                acompanhamento dos projetos, a Zing centraliza a jornada do CPSI
                em uma única plataforma.
              </p>
            </div>
          </div>

          <Link
            data-aos="fade-up"
            data-aos-delay="200"
            href="#cpsi-steps"
            className="btn-primary"
          >
            Quero fazer CPSI
          </Link>
        </div>
      </div>
    </section>
  );
}
