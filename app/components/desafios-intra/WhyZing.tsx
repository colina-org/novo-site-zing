export default function WhyZingDesafios() {
  return (
    <section className="overflow-hidden bg-white py-20 max-md:py-10">
      <div className="container mx-auto px-6">
        {/* Text row */}
        <div className="mb-10 max-md:mb-0 flex flex-col gap-10 lg:flex-row">
          <h2 className="text-[clamp(28px,3vw,40px)] font-normal leading-[120%] text-black w-full max-w-xl max-lg:max-w-full">
            Por que fazer
            <br className="max-lg:hidden" />
            com a <span className="font-bold">ZING</span>?
          </h2>
          <div className="flex flex-col gap-4 text-lg leading-[25.2px] text-black">
            <p>
              A Zing oferece uma experiência completa para programas de
              intraempreendedorismo.
              <br />
              <br />A plataforma permite o cadastro dos colaboradores, a
              submissão estruturada de ideias, a avaliação por banca, a
              divulgação dos resultados e o acompanhamento de todas as etapas em
              um único ambiente, garantindo organização, transparência e gestão
              eficiente do programa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
