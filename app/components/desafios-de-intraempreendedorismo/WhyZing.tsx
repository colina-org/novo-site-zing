"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const cards = [
  {
    cover: "/desafios/b1c02cf5af8e441803fcc1ebe2bec9e03e7206db.png",
    title: "Cadastro dos colaboradores",
    description:
      "Centralize o registro de todos os colaboradores em um só lugar.",
  },
  {
    cover: "/desafios/61e858700560bce85d843fec94e824553e3f7131.png",
    title: "Submissão estruturada de ideias",
    description:
      "Organize o envio de ideias com clareza, padrão e praticidade.",
  },
  {
    cover: "/desafios/191c32917fefe972a943cd2dc63971a53255f9f8.png",
    title: "Avaliações por banca",
    description:
      "Conduza avaliações com critérios definidos e decisões mais consistentes.",
  },
];

function WhyCard({
  title,
  description,
  cover,
}: {
  title: string;
  description: string;
  cover: string;
}) {
  return (
    <div className="flex h-full flex-col rounded bg-white p-2">
      {/* Image */}
      <div className="relative mb-2 h-87 max-sm:h-60 overflow-hidden rounded">
        <Image
          src={cover}
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
          className="flex items-center justify-between gap-4 mb-10 max-lg:flex-col"
        >
          <h2 className="text-[40px] max-sm:text-[28px] leading-[120%] font-normal text-white w-full max-w-80">
            Por que fazer com a <span className="font-bold">ZING</span>?
          </h2>

          <p className="text-lg w-full max-w-180 text-white">
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
