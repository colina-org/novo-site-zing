const timelineItems = [
  {
    year: "2022",
    text: "Um time com mais de 30 especialistas construiu a plataforma para gestão da inovação.",
  },
  {
    year: "2024",
    text: "Lançamento e operacionalização dos maiores contratos de CPSI e dos principais Hubs do Brasil.",
  },
  {
    year: "2026",
    text: "Torna-se a plataforma completa para atender o setor público.",
  },
];

const sectors = [
  ["Setor público", "Setor financeiro"],
  ["Inovação e tecnologia", "Mineração e siderurgia"],
  ["Energia/Óleo e Gás", "Logística e infraestrutura"],
];

export default function Historia() {
  return (
    <section className="bg-white py-16 max-sm:py-10">
      <div className="container flex items-start justify-between gap-4 max-lg:flex-col max-lg:gap-10 max-lg:items-center">
        {/* Left Column */}
        <div className="mb-16 lg:mb-0 max-sm:mb-0 w-full max-w-150">
          <h2
            data-aos="fade-up"
            className="mb-8 text-[clamp(28px,3.5vw,40px)] leading-tight text-greyPrimary"
          >
            Uma trajetória construída
            <br />
            com <span className="font-bold">método, evolução e escala</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mb-8 text-base leading-6 text-[#595959]"
          >
            Da inovação inicial à consolidação em grandes programas, evoluímos
            com consistência, ampliando impacto e entregando resultados de alto
            valor para a sociedade.
          </p>

          {/* Timeline */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="relative mb-8"
          >
            <div className="absolute left-5.25 top-5.5 h-[calc(100%-44px)] w-px bg-bluePrimary" />
            {timelineItems.map(({ year, text }, i) => (
              <div
                key={year}
                className={`flex items-center gap-4 ${
                  i < timelineItems.length - 1 ? "mb-4" : ""
                }`}
              >
                <div className="relative z-10 flex shrink-0 size-11 items-center justify-center rounded-full bg-bluePrimary">
                  <span className="text-sm font-medium text-white">{year}</span>
                </div>
                <p className="text-sm leading-5 text-[#454545]">{text}</p>
              </div>
            ))}
          </div>

          {/* Bottom tag */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex items-center gap-2.5 rounded-lg bg-[#f5f7fa] px-4 py-3"
          >
            <span className="shrink-0 size-5 rounded bg-[#b2cce5]" />
            <p className="text-sm font-medium text-greyPrimary">
              Atuação com grandes corporações, como Cemig, CAIXA, BNB
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-140">
          <div
            data-aos="fade-left"
            className="relative mb-8 h-72.5 w-full overflow-hidden rounded-xl"
          >
            <video
              src="/sobre/video-exemple.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          </div>

          {/* Sectors */}
          <div data-aos="fade-up" data-aos-delay="100">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-wide text-bluePrimary">
              Setores em que atuamos
            </p>
            {sectors.map((row, i) => (
              <div
                key={i}
                className={`flex gap-3 ${i < sectors.length - 1 ? "mb-3" : ""}`}
              >
                {row.map((sector) => (
                  <div
                    key={sector}
                    className="flex flex-1 items-center gap-2.5 rounded-lg bg-[#f5f7fa] px-4 py-3"
                  >
                    <span className="shrink-0 size-5 rounded bg-[#b2cce5]" />
                    <p className="text-sm font-medium text-greyPrimary">
                      {sector}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
