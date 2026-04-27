import Image from "next/image";

const items = [
  "Quando o problema público não é bem resolvido por soluções prontas.",
  "Quando é preciso testar ou validar alternativas inovadoras.",
  "Quando a instituição busca mais método, governança e evidências no processo.",
];

export default function WhenCPSI() {
  return (
    <section className="bg-white py-16 max-sm:py-10">
      <div className="container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-10">
          {/* Image */}
          <div
            data-aos="fade-right"
            className="relative w-full max-w-145 h-105.75 overflow-hidden rounded-[10px]"
          >
            <Image
              src="/cpsi/new-image-faz-sentido.png"
              alt="E-book CPSI — Contrato Público para Soluções Inovadoras"
              width={500}
              height={500}
              quality={100}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content */}
          <div data-aos="fade-left" className="flex flex-col gap-10">
            <h2 className="text-[clamp(28px,3.5vw,48px)] leading-[1.2] text-greyPrimary">
              Quando o <span className="font-bold">CPSI</span> faz sentido?
            </h2>

            <ul className="flex flex-col">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-[10px] px-4 py-4">
                  <span className="mt-[3px] shrink-0 size-4 bg-bluePrimary rounded-sm" />
                  <p className="text-base leading-[1.4] text-greyPrimary">
                    {item}
                  </p>
                </li>
              ))}
            </ul>

            <button className="flex h-10 w-fit items-center gap-2 rounded px-4 bg-bluePrimary text-base font-bold text-white transition-colors hover:opacity-90">
              Baixe nosso e-book completo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
