import Image from "next/image";
import Link from "next/link";

export default function HeroInovacaoAberta() {
  return (
    <section className="relative flex min-h-160  items-center max-sm:items-start max-sm:pt-10 overflow-hidden bg-white lg:min-h-160">
      <Image
        src="/desafios/c9d003e5169a292534ec763e91603f190031fac3.png"
        alt=""
        priority
        quality={100}
        height={1080}
        width={1920}
        aria-hidden="true"
        className="object-cover object-right max-lg:hidden absolute top-0 left-0 w-full h-full"
      />
      <Image
        src="/desafios/image-hero-tablet.png"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={100}
        aria-hidden="true"
        className="object-cover object-bottom max-sm:hidden max-lg:block lg:hidden w-full h-full"
      />
      <Image
        src="/desafios/image-hero-mobile.png"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={100}
        aria-hidden="true"
        className="object-cover sm:hidden lg:hidden w-full h-full"
      />

      <div className="container relative z-10">
        <div className="flex max-w-150 flex-col items-start gap-13.5 max-sm:gap-10 max-lg:text-center max-lg:items-center">
          <div className="flex flex-col gap-6">
            <h1
              data-aos="fade-up"
              className="text-[clamp(32px,4vw,48px)] font-medium leading-[120%] text-greyPrimary max-sm:text-[28px]"
            >
              Desafios de intraempreendedorismo: <br />
              <span className="font-normal">inovação que nasce de dentro</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-base font-normal leading-[140%] text-greyPrimary"
            >
              Crie desafios que fomentam a inovação em empresas públicas e
              privadas e transformam a experiência dos colaboradores em ideias
              estruturadas.
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
