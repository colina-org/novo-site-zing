"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  { src: "/hubs/hub-estacao-futuro.png", alt: "Estação Futuro" },
  { src: "/hubs/hub-teia.png", alt: "Espaço Teia Caixa" },
  {
    src: "/hubs/ef6f8885-2310-402d-827b-7b586e6d980c.jpg",
    alt: "Prefeitura de Guaxupé",
  },
  {
    src: "/hubs/7ace8e24-4dea-4014-8bca-418093544975.jpg",
    alt: "CDL Belo Horizonte",
  },
];

export default function Clients() {
  return (
    <section className="bg-white py-10 clients">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
          {/* Title */}
          <p className="shrink-0 text-xl text-black w-full max-w-fit max-lg:text-center">
            Hubs que a <span className="font-bold text-bluePrimary">ZING </span>
            atende
          </p>

          {/* Logos carousel */}
          <div className="relative min-w-0 flex-1">
            {/* <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent" /> */}

            <Swiper
              modules={[Autoplay]}
              slidesPerView={2.3}
              spaceBetween={16}
              loop
              allowTouchMove={false}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              speed={4000}
              breakpoints={{
                480: { slidesPerView: 4 },
                768: { slidesPerView: 5 },
                1024: { slidesPerView: 5, autoplay: false, loop: false },
              }}
            >
              {logos.map((logo, i) => (
                <SwiperSlide key={i}>
                  <div className="flex h-21 w-36 items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={144}
                      height={84}
                      className="h-full w-full object-contain grayscale transition-[filter] duration-300 hover:grayscale-0"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
