import Link from "next/link";

import Image from "next/image";

export default function HeroGestao() {
  return (
    <section className="bg-white pt-20 max-sm:py-10">
      <div className="container  flex items-start justify-between gap-4 max-lg:flex-col max-lg:gap-10">
        <div className="flex max-w-4xl flex-col gap-13.5">
          <div className="flex flex-col gap-6">
            <h1 data-aos="fade-up" className="text-[42px] max-sm:text-3xl font-medium leading-[120%] text-greyPrimary max-lg:text-center">
              Desafios de intraempreendedorismo:{" "}
              <br className="max-sm:hidden" />
              <span className="font-normal">inovação que nasce de dentro</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" className="text-base font-normal leading-relaxed text-greyPrimary max-lg:text-center">
              Crie desafios que fomentam a inovação em empresas públicas e
              privadas <br className="max-sm:hidden" />e transformam a
              experiência dos colaboradores em ideias estruturadas.
            </p>
          </div>

          <Link
            data-aos="fade-up"
            data-aos-delay="200"
            href="/contato"
            className="gradient-blue-primary-zing w-fit max-lg:table max-lg:mx-auto rounded px-4 py-2 text-lg font-bold text-white transition-opacity hover:opacity-90"
          >
            Fale com especialista
          </Link>
        </div>

        <div data-aos="fade-left" className="w-full max-w-fit max-sm:hidden">
          <Image
            src="/hero-cubes-inva.png"
            alt=""
            width={465}
            height={568}
            className="ml-auto"
          />
        </div>
      </div>
    </section>
  );
}
