"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const cards = [
  {
    cover: "/inovacao-aberta/d2401b3c083b7b06003c93c1b1fea9e50621e949.png",
    title: "Criação de programas",
    description:
      "A organização configura o programa de inovação na plataforma, definindo a iniciativa, desafios, documentos e formulário de inscrição.",
  },
  {
    cover: "/inovacao-aberta/e3c82ecdcd76de9f4543665ac5be3705324924e4.png",
    title: "Submissão de soluções",
    description:
      "Os solucionadores se inscrevem diretamente na ZING, enquanto a organização estabelece critérios, pesos e a banca avaliadora.",
  },
  {
    cover: "/inovacao-aberta/5af11ceb6a11e510e8c792bbd819e363c7ee2ba5.png",
    title: "Avaliações",
    description:
      "A plataforma centraliza a avaliação, consolida notas e classifica as propostas para a tomada de decisão.",
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
          quality={100}
          width={373}
          height={326}
          className="object-cover w-full h-full"
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
        <div
          data-aos="fade-up"
          className="flex items-center justify-between gap-4 mb-10 max-lg:flex-col"
        >
          <h2 className="text-[40px] max-sm:text-[28px] leading-[120%] font-normal text-white w-full max-w-80">
            Por que fazer com a <span className="font-bold">ZING</span>?
          </h2>

          <p className="text-lg w-full max-w-171.25 text-white">
            Em um <strong>único ambiente</strong>, a plataforma centraliza
            inscrições, propostas e avaliações, garantindo critérios claros,{" "}
            <strong>rastreabilidade</strong> das decisões e{" "}
            <strong>processos mais ágeis e confiáveis</strong>.
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
