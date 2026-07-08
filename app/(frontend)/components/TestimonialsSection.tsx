"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import RichText from "./RichText";
import type { TestimonialView } from "../lib/cms";

const DEFAULT_AVATAR = "/testimonials/avatar-default.png";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-start justify-center gap-1 text-xl text-[#2974d9]">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} aria-hidden="true">
          ★
        </span>
      ))}
      <span className="sr-only">{count} de 5 estrelas</span>
    </div>
  );
}

function TestimonialCard({ t }: { t: TestimonialView }) {
  return (
    <article className="flex w-full flex-col items-center rounded-[10px] bg-white p-6 shadow-[0_16px_24px_0_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-3">
        <div className="relative size-16 shrink-0 overflow-hidden">
          <Image
            src={t.image || DEFAULT_AVATAR}
            alt={t.name}
            fill
            className="object-cover w-full h-full rounded-full"
            sizes="64px"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-[15px] leading-none font-medium text-[#222e3f]">
            {t.name}
          </p>
          <p className="text-[11px] leading-none text-[#667082]">{t.role}</p>
          <p className="text-xs leading-none font-bold text-[#222e3f]">
            {t.company}
          </p>
        </div>
      </div>

      <div className="my-4 h-px w-full bg-[#e0e7f2]" />

      <p className="text-sm leading-relaxed text-greyPrimary">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="mt-4">
        <Stars count={t.rating ?? 5} />
      </div>
    </article>
  );
}

export default function TestimonialsSection({
  testimonials = [],
  title,
}: {
  testimonials?: TestimonialView[];
  title?: unknown;
}) {
  return (
    <section className="bg-[#F2F8FD] py-20 max-md:py-12 overflow-clip">
      <div className="container flex flex-col gap-15">
        <h2
          data-aos="fade-up"
          className="text-greyPrimary text-center text-[clamp(28px,3vw,40px)] leading-[1.2] font-normal"
        >
          <RichText data={title} />
        </h2>

        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={16}
            autoHeight
            pagination={{ clickable: true, el: ".testimonials-pagination" }}
            className="testimonials-swiper overflow-visible! [&_.swiper-wrapper]:items-center"
            breakpoints={{
              768: { slidesPerView: 3, spaceBetween: 16, autoHeight: false },
            }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className="flex! items-center justify-center">
                <TestimonialCard t={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="testimonials-pagination flex justify-center gap-2" />
      </div>
    </section>
  );
}
