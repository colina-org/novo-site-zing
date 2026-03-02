"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
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
];

export default function Clients() {
  return (
    <section className="bg-white py-10 clients">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
          {/* Title */}
          <p className="shrink-0 text-xl text-black lg:max-w-49 max-lg:text-center">
            Clientes que fazem
            <br />
            <span className="font-bold text-purplePrimary">CPSI na ZING</span>
          </p>

          {/* Logos carousel */}
          <div className="relative min-w-0 flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent" />

            <Swiper
              modules={[Autoplay]}
              slidesPerView={3}
              spaceBetween={32}
              loop
              allowTouchMove={false}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              speed={4000}
              breakpoints={{
                480: { slidesPerView: 4 },
                768: { slidesPerView: 5 },
                1024: { slidesPerView: 6 },
              }}
            >
              {logos.map((logo, i) => (
                <SwiperSlide key={i}>
                  <div className="flex h-21 w-36 items-center justify-center rounded bg-white p-3 shadow-sm">
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
      </div>
    </section>
  );
}
