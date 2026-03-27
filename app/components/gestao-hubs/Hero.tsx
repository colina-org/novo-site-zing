import Link from "next/link";

import Image from "next/image";
import HubsBar from "./HubsBar";

export default function HeroGestao() {
  return (
    <section className="bg-white py-20 max-sm:py-10">
      <div className="container flex items-start justify-between gap-4 max-lg:flex-col max-lg:gap-10">
        <div className="flex max-w-2xl flex-col gap-13.5 max-lg:text-center">
          <div className="flex flex-col gap-6">
            <h1 data-aos="fade-up" className="text-5xl max-sm:text-3xl font-normal leading-tight text-greyPrimary">
              Gestão completa de <br className="max-sm:hidden" />
              <span className="font-medium">Hubs de inovação</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" className="text-base font-normal leading-relaxed text-greyPrimary">
              Da operação do espaço físico à articulação do ecossistema, a Zing
              oferece <br className="max-sm:hidden" />
              gestão integrada para hubs orientados a resultados.
            </p>
          </div>

          <Link
            data-aos="fade-up"
            data-aos-delay="200"
            href="/contato"
            className="gradient-blue-primary-zing w-fit max-lg:mx-auto max-lg:table rounded px-4 py-2 text-lg font-bold text-white transition-opacity hover:opacity-90"
          >
            Fale com especialista
          </Link>

          <HubsBar />
        </div>

        <div data-aos="fade-left" className="w-full max-w-fit max-sm:hidden">
          <Image
            src="/cubes-hero-hubs.png"
            alt=""
            width={465}
            height={568}
            className=""
          />
        </div>
      </div>
    </section>
  );
}
