import Image from "next/image";
import Link from "next/link";

export default function HeroGestao() {
  return (
    <section className="relative flex min-h-140 items-center overflow-hidden bg-white lg:min-h-160">
      <Image
        src="/hubs/image-hero-hubs.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-right max-lg:hidden"
      />

      <Image
        src="/hubs/hero-hubs-tablet.png"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="object-cover max-sm:hidden max-lg:block object-bottom"
      />
      <Image
        src="/hubs/hero-hubs-mobile.png"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="object-cover lg:hidden"
      />
      <div className="absolute inset-0 bg-linear-to-r from-white via-white/85 to-white/0" />

      <div className="container relative z-10">
        <div className="flex max-w-154.5 flex-col items-start gap-13.5 max-lg:text-center max-lg:items-center">
          <div className="flex flex-col gap-6">
            <h1
              data-aos="fade-up"
              className="text-[clamp(32px,4vw,48px)] font-normal leading-[1.2] text-greyPrimary"
            >
              Gestão completa de <br />
              <span className="font-medium">Hubs de inovação</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-base font-normal leading-[1.4] text-greyPrimary"
            >
              Da operação do espaço físico à articulação do ecossistema, a Zing
              oferece gestão integrada para hubs orientados a resultados.
            </p>
          </div>

          <Link
            data-aos="fade-up"
            data-aos-delay="200"
            href="/contato"
            className="btn-primary"
          >
            Fale com especialista
          </Link>
        </div>
      </div>
    </section>
  );
}
