import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-140 items-center overflow-hidden bg-white lg:min-h-160">
      <Image
        src="/image-hero-cpsi.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-right max-lg:hidden"
      />

      <Image
        src="/image-hero-tablet-cpsi.png"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="object-cover sm:hidden max-lg:block object-bottom"
      />
      <Image
        src="/image-hero-mobile-cpsi.png"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="object-cover lg:hidden"
      />

      <div className="container relative z-10">
        <div className="flex max-w-154.5 flex-col items-start gap-13.5 max-lg:text-center max-lg:items-center">
          <div className="flex flex-col gap-6">
            <h1
              data-aos="fade-up"
              className="text-[clamp(32px,4vw,48px)] font-normal leading-[1.2] text-greyPrimary"
            >
              Plataforma líder na{" "}
              <span className="font-medium">gestão de editais de CPSI</span> no
              Brasil
            </h1>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex flex-col items-start gap-1 text-lg font-normal leading-relaxed text-greyPrimary"
            >
              <p>
                A Zing é a plataforma dos maiores editais de{" "}
                <strong className="font-medium">
                  Contrato Público para Solução Inovadora (CPSI)
                </strong>{" "}
                do Brasil.
              </p>
              <p>
                Grandes intuições como CAIXA, CEMIG, Porto Suape e Prefeitura de
                Belo Horizonte confiam na ZING.
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
