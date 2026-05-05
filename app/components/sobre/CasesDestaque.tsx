"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const cases = [
  {
    image: "/sobre/cases-suape.jpg",
    title: "Porto de SUAPE",
    description:
      "Estruturação legal e operacional, priorização de desafios, capacitação do time, lançamento de editais e acompanhamento dos projetos contratados.",
  },
  {
    image: "/sobre/cases-caixa-teia.jpg",
    title: "CAIXA - TEIA",
    description:
      "Customização de plataforma, lançamento de desafios, gestão de inscrições de startups e suporte à comissão avaliadora.",
  },
  {
    image: "/sobre/cases-cemig.jpg",
    title: "CEMIG Lab",
    description:
      "Gestão completa do programa com escala, governança e apoio à contratação, apoiando a evolução do ecossistema.",
  },
];

export default function CasesDestaque() {
  return (
    <section className="bg-white py-16 max-sm:py-10">
      <div className="container">
        {/* Section label */}
        <div data-aos="fade-up" className="mb-8 flex items-center gap-2">
          <span
            className="size-4 shrink-0 rounded-sm"
            style={{
              background:
                "linear-gradient(125deg, #6453D1 0%, #0071E3 60%, #1ACBDC 100%)",
            }}
          />
          <p className="text-xs font-bold uppercase tracking-[0.48px] text-[#464646]">
            Cases em destaque
          </p>
        </div>

        {/* Header */}
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          className="mb-10 lg:flex lg:items-center lg:gap-10"
        >
          <h2 className="mb-4 text-[clamp(28px,3.5vw,40px)] leading-tight text-greyPrimary lg:mb-0 lg:w-1/2">
            Experiências que mostram
            <br />
            nossa <span className="font-bold">capacidade de entrega</span>
          </h2>
          <p className="text-[15px] leading-[22px] text-[#595959] lg:w-1/2">
            Estruturamos operações de inovação aberta, plataformas white label e
            programas escaláveis para organizações de grande porte.
          </p>
        </div>

        {/* Cards Swiper */}
        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={16}
            pagination={{ clickable: true }}
            className="casesdestaque-swiper"
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {cases.map((item, i) => (
              <SwiperSlide
                key={i}
                className="h-auto! flex items-stretch"
              >
                <div className="flex h-full w-full flex-col overflow-hidden rounded-[10px] bg-white p-2 shadow-[0px_0px_1px_0px_rgba(38,43,47,0.04),0px_4px_10px_0px_rgba(38,43,47,0.07)]">
                  {/* Image */}
                  <div className="relative mb-2 h-68 w-full overflow-hidden rounded-[10px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      quality={100}
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col rounded-[10px] border border-[rgba(0,113,227,0.05)] p-2">
                    <p className="mb-4 text-lg font-bold leading-snug text-greyPrimary">
                      {item.title}
                    </p>
                    <p className="text-base leading-[1.4] text-[#595959]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
