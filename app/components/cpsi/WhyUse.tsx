"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const cards = [
  {
    title: "Rastreabilidade",
    description:
      "Histórico completo, organizado e auditável de todo o processo.",
  },
  {
    title: "Transparência",
    description: "Visibilidade e clareza em todas as etapas da contratação.",
  },
  {
    title: "Isonomia",
    description: "Tratamento equânime e competição justa entre os proponentes.",
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
        <p className="text-lg font-bold text-black">{title}</p>
        <p className="text-base text-black">{description}</p>
      </div>
    </div>
  );
}

export default function WhyUse() {
  return (
    <section className="whyuse py-16 relative max-sm:py-10 bg-[#f1e8fb]">
      <div className="bg-linear-to-br from-[#9500FF] to-[#35005A] absolute top-0 left-0 h-96.25 w-full"></div>
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="mb-10 text-[clamp(28px,4vw,48px)] font-normal text-white">
          Por que usar a <span className="font-bold">ZING</span>?
        </h2>

        {/* Cards Swiper */}
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

        {/* Pagination dots — hidden on desktop (all 3 cards visible) */}
        <div className="why-pagination mt-8 flex justify-center gap-2 lg:hidden" />
      </div>
    </section>
  );
}
