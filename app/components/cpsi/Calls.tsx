"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Step = {
  image: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    image: "/cpsi/1608b6ee36751d3daf6811b56a58a2cebe960969.png",
    title: "Preparação da instituição",
    description:
      "Diagnóstico de maturidade institucional, geração automática de documentos jurídicos e governança estruturada desde o início.",
  },
  {
    image: "/cpsi/e30bfe5f80fb1a56bec244516a17341c21edb941.png",
    title: "Chamada pública",
    description:
      "Edital com segurança jurídica embutida, match com startups via IA e gestão completa das inscrições.",
  },
  {
    image: "/cpsi/57f22c8281d0390378764f974585fdb45399bd1b.png",
    title: "Seleção de proposta",
    description:
      "Comparação de propostas com apoio de IA, redução de subjetividade e registro auditável de cada decisão.",
  },
  {
    image: "/cpsi/a372e4097f1c5ca52da82ca80a59d7d7c488c069.png",
    title: "Acompanhamento dos projetos",
    description:
      "Gestão de sprints, checkpoints Go/No-Go e rastreabilidade total da execução.",
  },
  {
    image: "/cpsi/019b18447b324230dbc4c126192f20644a99184f.png",
    title: "Contrato de fornecimento",
    description:
      "Contrato gerado com histórico completo do processo — do edital ao fornecimento, tudo documentado e sob controle.",
  },
];

function StepCard({ step, index }: { step: Step; index: number }) {
  return (
    <div className="rounded-[10px]">
      {/* Image */}
      <div className="relative h-37.5 w-full overflow-hidden rounded-[10px]">
        <Image
          src={step.image}
          alt={step.title}
          className="object-cover"
          quality={100}
          width={235}
          height={150}
        />
      </div>

      {/* Content */}
      <div className="flex gap-2.5 pt-3 pb-4">
        {/* Badge */}
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-bluePrimary">
          <span className="text-lg font-bold leading-none text-white">
            {index + 1}
          </span>
        </div>

        {/* Text */}
        <div>
          <p className="mb-2.5 text-lg font-bold leading-[1.4] text-greyPrimary">
            {step.title}
          </p>
          <p className="text-base font-normal leading-[1.4] text-greyPrimary">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Calls() {
  return (
    <section className="bg-white py-20 max-sm:py-10">
      <div className="container">
        {/* Header */}
        <div
          data-aos="fade-up"
          className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10"
        >
          <h2 className="shrink-0 text-[clamp(28px,3.5vw,40px)] font-normal leading-[1.2] text-greyPrimary">
            Como é feito na <span className="font-bold">ZING</span>
          </h2>
          <p className="text-base text-greyPrimary">
            Preparamos a instituição para executar o CPSI desde a primeira vez e
            impulsionamos instituições que já fazem o CPSI.
          </p>
        </div>

        {/* Swiper */}
        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1.2}
            spaceBetween={16}
            pagination={{ clickable: true, el: ".calls-pagination" }}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
            }}
          >
            {steps.map((step, i) => (
              <SwiperSlide key={i}>
                <StepCard step={step} index={i} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="calls-pagination mt-8 flex justify-center gap-2" />
        </div>
      </div>
    </section>
  );
}
