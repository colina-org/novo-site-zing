export default function WhyZing() {
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
              Conduzir um programa de inovação aberta exige{" "}
              <strong>método, governança e escala.</strong> A Zing foi criada
              para atender exatamente a esses desafios.
              <br />
              <br />
              Em um <strong>único ambiente</strong>, a plataforma centraliza
              inscrições, propostas e avaliações, garantindo critérios claros,
              <strong>rastreabilidade</strong> das decisões e{" "}
              <strong>processos mais ágeis e confiáveis</strong>.
              <br />
              <br />
              Já utilizada em programas reais de grandes organizações, a ZING
              opera com fluxos validados para{" "}
              <strong>
                contextos de alta complexidade, volume e responsabilidade
              </strong>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
