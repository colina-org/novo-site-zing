"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";

type Logo = { src: string; alt: string };

const logos: Logo[] = [
  { src: "/clients/client-01.png", alt: "Cliente 1" },
  { src: "/clients/client-02.png", alt: "Cliente 2" },
  { src: "/clients/client-03.png", alt: "Cliente 3" },
  { src: "/clients/client-04.png", alt: "Cliente 4" },
  { src: "/clients/client-05.png", alt: "Cliente 5" },
  { src: "/clients/client-06.png", alt: "Cliente 6" },
  { src: "/clients/client-07.png", alt: "Cliente 7" },
  { src: "/clients/client-08.png", alt: "Cliente 8" },
  { src: "/clients/client-09.png", alt: "Cliente 9" },
  { src: "/clients/client-10.png", alt: "Cliente 10" },
  { src: "/clients/client-11.png", alt: "Cliente 11" },
  { src: "/clients/client-12.png", alt: "Cliente 12" },
  { src: "/clients/client-13.png", alt: "Cliente 13" },
  { src: "/clients/client-14.png", alt: "Cliente 14" },
  { src: "/clients/client-15.png", alt: "Cliente 15" },
  { src: "/clients/client-16.png", alt: "Cliente 16" },
];

export default function ClientsSection() {
  return (
    <section className="bg-white py-14 max-lg:py-8 clients">
      {/* Title */}
      <div className="container mx-auto px-6">
        <p className="mb-10 text-center text-xl font-normal text-greyPrimary">
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
              1024: { slidesPerView: 6, autoplay: false, loop: false },
              1280: { slidesPerView: 8, autoplay: false, loop: false },
            }}
          >
            {logos.map((logo, i) => (
              <SwiperSlide key={i} className="flex items-center justify-center">
                <div className="flex h-21 w-36 items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    className="h-15 w-auto object-contain grayscale transition-[filter] duration-300 hover:grayscale-0"
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
