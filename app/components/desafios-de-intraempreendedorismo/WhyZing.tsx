"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const cards = [
  {
    title: "Cadastro dos colaboradores",
    description:
      "Centralize o registro de todos os colaboradores em um só lugar.",
  },
  {
    title: "Submissão estruturada de ideias",
    description:
      "Organize o envio de ideias com clareza, padrão e praticidade.",
  },
  {
    title: "Avaliações por banca",
    description:
      "Conduza avaliações com critérios definidos e decisões mais consistentes.",
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
        <p className="text-lg font-bold text-greyPrimary">{title} </p>
        <p className="text-base text-greyPrimary">{description}</p>
      </div>
    </div>
  );
}

export default function WhyUse() {
  return (
    <section className="whyuse py-16 relative max-sm:py-10 bg-white">
      <div className="gradient-blue-primary-zing absolute top-0 left-0 h-96.25 w-full"></div>
      <div className="container mx-auto px-6">
        {/* Title */}
        <div
          data-aos="fade-up"
          className="flex items-center justify-between gap-4 mb-10"
        >
          <h2 className="text-[40px] max-sm:text-[28px] leading-[120%] font-normal text-white w-full max-w-80">
            Por que fazer com a <span className="font-bold">ZING</span>?
          </h2>

          <p className="text-lg w-full max-w-171.25 text-white">
            Com a Zing, empresas estruturam e gerenciam desafios de
            intraempreendedorismo, mobilizando colaboradores a propor soluções
            inovadoras para desafios estratégicos do negócio.
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
