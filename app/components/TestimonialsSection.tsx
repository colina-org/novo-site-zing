"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Testimonial = {
  name: string;
  quote: string;
  company: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Hannah Schmitt",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim.",
    company: "Nome da empresa - Papel no ecossistema",
    image: "/testimonials/testimonial-01.png",
  },
  {
    name: "Hannah Schmitt",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim.",
    company: "Nome da empresa - Papel no ecossistema",
    image: "/testimonials/testimonial-02.png",
  },
  {
    name: "Hannah Schmitt",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim.",
    company: "Nome da empresa - Papel no ecossistema",
    image: "/testimonials/testimonial-03.png",
  },

  {
    name: "Hannah Schmitt",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim.",
    company: "Nome da empresa - Papel no ecossistema",
    image: "/testimonials/testimonial-03.png",
  },

  {
    name: "Hannah Schmitt",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim.",
    company: "Nome da empresa - Papel no ecossistema",
    image: "/testimonials/testimonial-03.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f9f2ff] py-20 max-md:py-10">
      <div className="container max-w-full!">
        {/* Header */}
        <h2 className="mb-15 max-sm:mb-10 text-center text-[clamp(28px,3vw,40px)] font-normal text-black">
          O que nossos <span className="font-medium">clientes</span> dizem
        </h2>

        {/* Cards Swiper */}
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          pagination={{ clickable: true, el: ".testimonials-pagination" }}
          className="testimonials-swiper"
          breakpoints={{
            1023: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="rounded bg-linear-to-br from-[#9500FF] to-[#35005A] p-6">
                <div className="flex w-full items-end gap-4 max-md:flex-col max-md:items-center">
                  {/* Profile photo */}
                  <div className="relative h-55.75 max-sm:h-40 w-full max-w-45 shrink-0 overflow-hidden rounded">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-3 max-md:text-center">
                    <p className="text-2xl font-bold text-white">{t.name}</p>
                    <p className="text-lg  text-white/90">{t.quote}</p>
                    <p className="text-xs font-bold text-white/70">
                      {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination dots */}
        <div className="testimonials-pagination mt-10 flex justify-center gap-2" />
      </div>
    </section>
  );
}
