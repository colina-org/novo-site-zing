"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import RichText from "./RichText";
import type { ClientView } from "../lib/cms";

export default function ClientsSection({
  logos,
  title,
}: {
  logos: ClientView[];
  title?: unknown;
}) {
  return (
    <section className="bg-white py-14 max-lg:py-8 clients">
      {/* Title */}
      <div className="container mx-auto px-6">
        <p
          data-aos="fade-up"
          className="mb-10 text-center text-xl font-normal text-greyPrimary"
        >
          <RichText data={title as never} />
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
