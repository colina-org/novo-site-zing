"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

type Card = {
  image: string;
  title: string;
  description: string;
};

const cards: Card[] = [
  {
    image: "/cpsi/whyuse-1.jpg",
    title: "Rastreabilidade",
    description:
      "Histórico completo, organizado e auditável de todo o processo.",
  },
  {
    image: "/cpsi/whyuse-2.jpg",
    title: "Transparência",
    description: "Visibilidade e clareza em todas as etapas da contratação.",
  },
  {
    image: "/cpsi/whyuse-3.jpg",
    title: "Isonomia",
    description: "Tratamento equânime e competição justa entre os proponentes.",
  },
  {
    image: "/cpsi/whyuse-4.jpg",
    title: "Segurança jurídica",
    description: "Processos estruturados com respaldo legal em cada etapa.",
  },
  {
    image: "/cpsi/whyuse-5.jpg",
    title: "Eficiência processual",
    description:
      "Fluxos otimizados que reduzem burocracia e aceleram resultados.",
  },
  {
    image: "/cpsi/whyuse-6.jpg",
    title: "Gestão integrada",
    description:
      "Visão unificada de todos os projetos e indicadores em um só lugar.",
  },
];

function WhyCard({ card }: { card: Card }) {
  return (
    <div className="flex h-full flex-col rounded-[10px] bg-white p-2 shadow-[0px_4px_10px_0px_rgba(38,43,47,0.07),0px_0px_1px_0px_rgba(38,43,47,0.04)]">
      <div className="relative mb-2 h-50 w-full overflow-hidden rounded-[10px]">
        <Image
          src={card.image}
          alt={card.title}
          quality={100}
          className="object-cover"
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="rounded-[10px] border border-[rgba(0,113,227,0.05)] p-2">
        <p className="mb-4 text-lg font-bold leading-[1.4] text-greyPrimary">
          {card.title}
        </p>
        <p className="text-base leading-[1.4] text-greyPrimary">
          {card.description}
        </p>
      </div>
    </div>
  );
}

export default function WhyUse() {
  return (
    <section className="whyuse relative bg-gradientbg py-16 max-sm:py-10">
      <div className="gradient-blue-primary-zing absolute top-0 left-0 h-96.25 w-full" />
      <div className="container">
        <h2
          data-aos="fade-up"
          className="mb-10 text-[clamp(28px,4vw,48px)] font-normal text-white"
        >
          Por que usar a <span className="font-bold">ZING</span>?
        </h2>

        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Grid, Pagination]}
            slidesPerView={1.2}
            spaceBetween={16}
            grid={{ rows: 1, fill: "row" }}
            pagination={{ clickable: true, el: ".why-pagination" }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
                grid: { rows: 2, fill: "row" },
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
                grid: { rows: 2, fill: "row" },
              },
            }}
          >
            {cards.map((card, i) => (
              <SwiperSlide key={i} className="h-auto!">
                <WhyCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="why-pagination mt-8 flex justify-center gap-2 lg:hidden" />
      </div>
    </section>
  );
}
