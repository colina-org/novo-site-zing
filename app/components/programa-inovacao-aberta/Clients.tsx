"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  { src: "/clients/client-02.png", alt: "Cemig" },
  { src: "/clients/client-08.png", alt: "SECTI Alagoas" },
  { src: "/clients/client-15.png", alt: "bh.tec" },
  { src: "/clients/client-03.png", alt: "Banco do Nordeste" },
  { src: "/clients/client-06.png", alt: "Governo do Estado do Espírito Santo" },
];

export default function Clients() {
  return (
    <section className="bg-white py-10 clients">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
          {/* Title */}
          <p
            data-aos="fade-up"
            className="shrink-0 text-xl text-black lg:max-w-49 max-lg:text-center"
          >
            Clientes que inovam com a
            <span className="font-bold text-bluePrimary"> ZING</span>
          </p>

          {/* Logos carousel */}
          <div className="relative min-w-0 flex-1">
            {/* <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent" /> */}

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
