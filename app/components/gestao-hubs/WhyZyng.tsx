"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const cards = [
  {
    title: "Gestão de espaço fisíco ",
    description:
      "Operação completa do hub físico, com organização dos espaços, serviços e experiências.",
  },
  {
    title: "Gestão de programas e desafios de inovação ",
    description:
      "Planejamento e execução de programas e desafios que conectam negócios, soluções e oportunidades.",
  },
  {
    title: "Gestão de trilhas de inovação",
    description:
      "Estruturação de jornadas de conteúdo e aprendizagem para impulsionar a inovação no ecossistema.",
  },
];

function WhyCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex h-full flex-col rounded bg-white p-2">
      {/* Image */}
      <div className="relative mb-2 h-87 max-sm:h-60 overflow-hidden rounded">
        <Image
          src="/cpsi/why-card.png"
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2 p-2">
        <p className="text-lg font-bold text-greyPrimary">{title}</p>
        <p className="text-base text-greyPrimary">{description}</p>
      </div>
    </div>
  );
}

export default function WhyUse() {
  return (
    <section className="whyuse py-16 relative max-sm:py-10 bg-gradientbg">
      <div className="gradient-blue-primary-zing absolute top-0 left-0 h-96.25 w-full"></div>
      <div className="container mx-auto px-6">
        {/* Title */}
        <div data-aos="fade-up" className="flex items-center justify-between gap-4 mb-10">
          <h2 className="text-[40px] max-sm:text-[28px] leading-[120%] font-normal text-white w-full max-w-80">
            Por que fazer com a <span className="font-bold">ZING</span>?
          </h2>

          <p className="text-lg w-full max-w-171.25">
            A Zing oferece uma{" "}
            <strong>
              gestão completa, estruturada e orientada a resultados para hubs de
              inovação
            </strong>
            . A plataforma integra a operação do espaço físico, a articulação do
            ecossistema e a governança dos programas em um{" "}
            <strong>único ambiente</strong>, garantindo{" "}
            <strong>organização, transparência e eficiência</strong>.
          </p>
        </div>

        {/* Cards Swiper */}
        <div data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={16}
          pagination={{ clickable: true, el: ".why-pagination" }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cards.map((card, i) => (
            <SwiperSlide key={i} className="h-auto!">
              <WhyCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>

        {/* Pagination dots — hidden on desktop (all 3 cards visible) */}
        <div className="why-pagination mt-8 flex justify-center gap-2 lg:hidden" />
      </div>
    </section>
  );
}
