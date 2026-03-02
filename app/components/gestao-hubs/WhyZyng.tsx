export default function WhyZingGestao() {
  return (
    <section className="overflow-hidden bg-white py-20 max-md:py-10">
      <div className="container mx-auto px-6">
        {/* Text row */}
        <div className="mb-10 max-md:mb-0 flex flex-col gap-10 lg:flex-row items-center">
          <h2 className="text-[clamp(28px,3vw,40px)] font-normal leading-[120%] text-black w-full max-w-xl max-lg:max-w-full">
            Por que fazer
            <br className="max-lg:hidden" />
            com a <span className="font-bold">ZING</span>?
          </h2>
          <div className="flex flex-col gap-4 text-lg leading-[25.2px] text-black">
            <p>
              A Zing oferece uma{" "}
              <strong>
                gestão completa, estruturada e orientada a resultados para hubs
                de inovação
              </strong>
              . A plataforma integra a operação do espaço físico, a articulação
              do ecossistema e a governança dos programas em um único ambiente,
              garantindo organização, transparência e eficiência.
              <br />
              <br />
              Com a Zing, o hub deixa de ser apenas um local de encontros e
              passa a atuar como um instrumento estratégico de inovação,
              conectando startups, setor público, empresas e academia,
              acompanhando indicadores, registrando interações e promovendo
              colaboração com foco em impacto real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
