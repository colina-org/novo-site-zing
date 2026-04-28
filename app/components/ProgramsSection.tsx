"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { programs } from "./programas/ProgramCards";

export default function ProgramsSection() {
  return (
    <section className="bg-white relative py-16">
      <div className="gradient-blue-primary-zing absolute top-0 left-0 w-full h-96.25 max-sm:h-full"></div>
      <div className="container">
        {/* Header */}
        <div
          data-aos="fade-up"
          className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <h2 className="text-[40px] max-md:text-3xl max-md:text-center text-white">
            Fique por dentro dos nossos <br className="max-md:hidden" />
            <span className="font-bold">programas e chamadas</span>
          </h2>
          {/* <Link
            href="/programas"
            className="inline-flex w-full max-w-50 shrink-0 items-center justify-center rounded-[10px] bg-white px-4 py-2 text-base font-bold hover:scale-105 duration-300 ease-linear max-md:hidden"
          >
            <span className="bg-linear-to-r from-[#6453D1] via-[#0071E3] to-[#1ACBDC] bg-clip-text text-transparent">
              Ver todos
            </span>
          </Link> */}
        </div>

        {/* Cards Swiper */}
        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={16}
            pagination={{ clickable: true }}
            className="programs-swiper"
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {programs.slice(0, 4).map((program, i) => (
              <SwiperSlide
                key={i}
                className="flex items-stretch justify-center h-auto! group pb-4"
              >
                <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white p-2 shadow-[0px_0px_1px_0px_rgba(38,43,47,0.04),0px_4px_10px_0px_rgba(38,43,47,0.07)]">
                  {/* Image */}
                  <div className="relative h-13.5 shrink-0 overflow-hidden mb-4 rounded-[10px]">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      quality={100}
                      className="object-cover group-hover:scale-105 duration-300 ease-linear"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col items-stretch gap-4 border border-[#F6E8FF] p-2 rounded-[10px]">
                    <p className="text-sm font-normal text-greyPrimary">
                      {program.category}
                    </p>

                    {/* Title */}
                    <h3 className="text-lg font-bold leading-snug text-greyPrimary">
                      {program.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base font-normal leading-relaxed text-greyPrimary">
                      {program.description}
                    </p>

                    {/* Date badge */}
                    <span className="text-sm font-medium text-greyPrimary">
                      {program.badge}
                    </span>

                    {/* CTA */}
                    <Link
                      href={program.href}
                      className="mt-auto w-full rounded-[10px] flex text-center justify-center px-4 py-2 text-base font-bold border border-[#6453D1] group-hover:bg-bluePrimary duration-300 ease-linear"
                    >
                      <span className="bg-linear-to-r from-[#6453D1] via-[#0071E3] to-[#1ACBDC] bg-clip-text text-transparent group-hover:text-white">
                        Conheça mais
                      </span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* <Link
          href="/programas"
          className="max-md:table mx-auto mt-10 w-full max-w-50 shrink-0 text-center rounded bg-white px-4 py-2 text-base font-bold hover:scale-105 duration-300 ease-linear hidden"
        >
          <span className="bg-linear-to-r from-[#6453D1] via-[#0071E3] to-[#1ACBDC] bg-clip-text text-transparent">
            Ver todos
          </span>
        </Link> */}
      </div>
    </section>
  );
}
