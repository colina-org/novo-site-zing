import Image from "next/image";

export default function CaseSandbox() {
  return (
    <section className="bg-gradientbg py-16 max-sm:py-10">
      <div className="container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-10">
          {/* Image */}
          <div
            data-aos="fade-right"
            className="relative aspect-580/353 w-full overflow-hidden rounded-[10px] lg:w-1/2 lg:shrink-0"
          >
            <Image
              src="/desafios/0ee06c8768d0a082aa56bf9ff3632b97da230eb0.png"
              alt="UBQ"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div data-aos="fade-left" className="flex flex-col gap-10">
            <h2 className="text-[clamp(28px,3.5vw,48px)] leading-[1.2] text-greyPrimary">
              Case de sucesso — <span className="font-bold">UBQ</span>
            </h2>
            <p className="text-base leading-[1.4] text-greyPrimary">
              Na UBQ, a ZING garante organização, segurança e rastreabilidade na
              avaliação do “O Grande Encontro – Equipes de Alta Performance”,
              tornando a experiência dos avaliadores mais fluida e os resultados
              mais profissionais.Conta com a participação de empresas como Vale,
              Vallourec, Cemig, Anglo American e outras grandes corporações.
            </p>
            <button className="flex h-8 w-fit items-center gap-2 rounded px-4 border bg-white border-bluePrimary text-base font-bold text-bluePrimary transition-colors hover:bg-bluePrimary hover:text-white">
              Leia case completo
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
