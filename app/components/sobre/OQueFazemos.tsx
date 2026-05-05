"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const items = [
  {
    image: "/sobre/oquefazemos-cpsi.jpg",
    title: "Chamadas CPSI",
    description:
      "Referência na gestão de editais de Contrato Público para Soluções Inovadoras.",
  },
  {
    image: "/sobre/oquefazemos-programas.jpg",
    title: "Programas de Inovação Aberta",
    description:
      "Conectamos startups a grandes organizações do setor público e privado para responder a desafios reais.",
  },
  {
    image: "/sobre/oquefazemos-desafios.jpg",
    title: "Desafios de Intraempreendedorismo",
    description:
      "Mobilizamos colaboradores para transformar ideias em soluções estruturadas.",
  },
  {
    image: "/sobre/oquefazemos-hubs.jpg",
    title: "Gestão de Hubs",
    description:
      "Integramos operação, articulação do ecossistema e governança em um único ambiente.",
  },
];

export default function OQueFazemos() {
  return (
    <section className="relative bg-gradientbg py-16 max-sm:py-10">
      <div className="gradient-blue-primary-zing absolute left-0 top-0 h-88 w-full max-sm:h-full" />

      <div className="container relative">
        {/* Header */}
        <div data-aos="fade-up" className="mb-10">
          <h2 className="mb-6 text-[clamp(28px,3.5vw,40px)] leading-tight text-white">
            O que fazemos na <span className="font-bold">ZING?</span>
          </h2>
          <p className="text-lg leading-relaxed text-white">
            <strong>
              Conectamos estratégia, inovação e execução para gerar resultados
              concretos.
            </strong>
            <br />
            Atuamos no desenvolvimento e na gestão de iniciativas que
            simplificam a inovação em organizações públicas e privadas.
          </p>
        </div>

        {/* Cards Swiper */}
        <div data-aos="fade-up" data-aos-delay="100" className="overflow-x-hidden">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={16}
            pagination={{ clickable: true }}
            className="oquefazemos-swiper"
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {items.map((item, i) => (
              <SwiperSlide key={i} className="h-auto! flex items-stretch">
                <div className="flex h-full w-full flex-col overflow-hidden rounded-[10px] bg-white p-2 shadow-[0px_0px_1px_0px_rgba(38,43,47,0.04),0px_4px_10px_0px_rgba(38,43,47,0.07)]">
                  {/* Image */}
                  <div className="relative mb-2 aspect-square w-full overflow-hidden rounded-[10px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      quality={100}
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col rounded-[10px] border border-[rgba(0,113,227,0.05)] p-2">
                    <p className="mb-4 text-base font-bold leading-snug text-greyPrimary">
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
