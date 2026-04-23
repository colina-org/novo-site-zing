"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";

type Logo = { src: string; alt: string; invert?: boolean };

const logos: Logo[] = [
  { src: "/clients/client-01.png", alt: "Caixa" },
  { src: "/clients/client-02.png", alt: "Cemig" },
  { src: "/clients/client-03.png", alt: "Banco do Nordeste" },
  { src: "/clients/client-04.png", alt: "ABDI" },
  { src: "/clients/client-05.png", alt: "Governo de Minas Gerais" },
  { src: "/clients/client-06.png", alt: "Governo do Estado do Espírito Santo" },
  { src: "/clients/client-17.png", alt: "Incesa" },
  { src: "/clients/client-07.png", alt: "Prefeitura de Belo Horizonte" },
  { src: "/clients/client-08.png", alt: "SECTI Alagoas" },
  { src: "/clients/client-09.png", alt: "Hub Verde" },
  { src: "/clients/client-10.png", alt: "União Brasileira para a Qualidade" },
  { src: "/clients/client-11.png", alt: "Seed" },
  { src: "/clients/client-12.png", alt: "Fundação Renova" },
  { src: "/clients/client-18.png", alt: "Prefeitura de Guaxupé" },
  { src: "/clients/client-13.png", alt: "Suape" },
  { src: "/clients/client-14.png", alt: "Porto do Itaqui" },
  { src: "/clients/client-15.png", alt: "bh.tec" },
  { src: "/clients/client-16.png", alt: "Cataguá Construtora" },
  {
    src: "/clients/logo-fundacao-futuro.png",
    alt: "Estação Futuro",
    invert: true,
  },
  { src: "/clients/client-20.png", alt: "CDL" },
  { src: "/clients/client-21.png", alt: "Condumax" },
];

export default function ClientsSection() {
  return (
    <section className="bg-white py-14 max-lg:py-8 clients">
      {/* Title */}
      <div className="container mx-auto px-6">
        <p
          data-aos="fade-up"
          className="mb-10 text-center text-xl font-normal text-greyPrimary"
        >
          Escolhido por instituições públicas e empresas que{" "}
          <span className="font-bold text-bluePrimary!">
            valorizam a inovação
          </span>
        </p>

        {/* Carousel — full-bleed with fade edges */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-white to-transparent" />

          <Swiper
            modules={[Autoplay, Grid]}
            slidesPerView={2}
            grid={{ rows: 2, fill: "row" }}
            loop
            allowTouchMove={false}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={4000}
            breakpoints={{
              480: { slidesPerView: 3 },
              640: { slidesPerView: 4 },
              768: { slidesPerView: 5 },
              1024: {
                slidesPerView: 7,
                grid: { rows: 3, fill: "row" },
                autoplay: false,
                loop: false,
              },
            }}
          >
            {logos.map((logo, i) => (
              <SwiperSlide key={i} className="flex items-center justify-center">
                <div className="flex h-21 w-full max-w-36 items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    className={`w-full max-w-36 h-21 object-contain grayscale transition-[filter] duration-300 hover:grayscale-0 ${
                      logo.invert ? "invert" : ""
                    }`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
