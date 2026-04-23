import Image from "next/image";
import Link from "next/link";

export default function HeroInovacaoAberta() {
  return (
    <section className="relative flex min-h-140 max-sm:min-h-100 items-center max-sm:items-start max-sm:pt-10 overflow-hidden bg-white lg:min-h-160">
      <Image
        src="/inovacao-aberta/59cefc48e3cf11ad91991c4ab1347fabcfe6842e.png"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={100}
        className="object-cover object-right max-lg:hidden"
      />
      <Image
        src="/inovacao-aberta/image-hero-inovacao-tablet.png"
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="object-cover object-bottom max-sm:hidden max-lg:block"
      />
      <Image
        src="/inovacao-aberta/image-hero-inovacao-mobile.png"
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="object-cover lg:hidden"
      />

      <div className="container relative z-10">
        <div className="flex max-w-150 flex-col items-start gap-13.5 max-lg:text-center max-lg:items-center">
          <div className="flex flex-col gap-6">
            <h1
              data-aos="fade-up"
              className="text-[clamp(32px,4vw,48px)] font-normal leading-[1.2] text-greyPrimary"
            >
              Programas estruturados de{" "}
              <span className="font-medium">inovação aberta</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-base font-normal leading-[1.4] text-greyPrimary"
            >
              A Zing seleciona e avalia as startups mais aderentes para
              responder à dor da instituição.
            </p>
          </div>

          <Link
            data-aos="fade-up"
            data-aos-delay="200"
            href="/contato"
            className="btn-primary"
          >
            Falar com especialista
          </Link>
        </div>
      </div>
    </section>
  );
}
