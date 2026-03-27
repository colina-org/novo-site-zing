"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const steps = [
  "Preparação da instituição",
  "Chamada pública",
  "Seleção de proposta",
  "Acompanhamento dos projetos",
];

function BookmarkIcon() {
  return (
    <svg width="47" height="60" viewBox="0 0 47 60" fill="none" aria-hidden="true">
      <path
        d="M40 0H6.667C3 0 .033 3 .033 6.667L0 60l23.333-10L46.667 60V6.667C46.667 3 43.667 0 40 0ZM40 50l-16.667-7.267L6.667 50V6.667H40V50Z"
        fill="white"
      />
    </svg>
  );
}

function StepCard({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-14 max-sm:gap-10">
      <div
        className="flex h-43 w-full max-w-50 items-center justify-center rounded"
        style={{ backgroundImage: "linear-gradient(76deg, #6453D1 8%, #0071E3 58%, #1ACBDC 91%)" }}
      >
        <BookmarkIcon />
      </div>
      <p className="text-lg max-w-50 max-sm:text-base font-bold text-greyPrimary text-center">
        {label}
      </p>
    </div>
  );
}

export default function Calls() {
  return (
    <section className="bg-white max-sm:py-10 py-20 calls">
      <div className="container">
        {/* Header */}
        <div data-aos="fade-up" className="mb-25.5 max-sm:mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10">
          <h2 className="w-full max-w-99 text-[clamp(28px,3.5vw,40px)] font-normal leading-[120%] text-greyPrimary">
            Como é feito na <span className="font-bold">ZING</span>
          </h2>
          <p className="max-w-3xl text-lg text-greyPrimary">
            Preparamos a instituição para executar o CPSI desde a primeira vez e
            impulsionamos instituições que já fazem o CPSI.
          </p>
        </div>

        {/* Steps Swiper */}
        <div data-aos="fade-up" data-aos-delay="100" className="relative lg:pt-8 lg:pb-9">
          {/* Decorative outlined rects (desktop only, behind cards) */}
          <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
            <div className="absolute top-0.5 left-[12%] h-40.75 w-[25.5%] rounded-[30px] border-3 border-black" />
            <div className="absolute top-21 left-[37%] h-39.25 w-[25.5%] rounded-[30px] border-3 border-black" />
            <div className="absolute top-0 left-[63%] h-40.75 w-[25.5%] rounded-[30px] border-3 border-black" />
          </div>

          <div className="relative z-10">
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={2}
              spaceBetween={16}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true, el: ".calls-pagination" }}
              breakpoints={{
                768: { slidesPerView: 3, spaceBetween: 20 },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                  loop: false,
                  autoplay: false,
                },
              }}
            >
              {steps.map((step, i) => (
                <SwiperSlide key={i}>
                  <StepCard label={step} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Pagination dots — hidden on desktop (all 4 cards visible) */}
          <div className="calls-pagination mt-8 flex justify-center gap-2 lg:hidden" />
        </div>
      </div>
    </section>
  );
}
