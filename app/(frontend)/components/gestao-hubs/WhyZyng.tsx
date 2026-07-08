"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import RichText from "../RichText";
import { mediaUrl } from "../../lib/media";

type Card = {
  image?: unknown;
  title?: string;
  description?: string;
};

function WhyCard({ card }: { card: Card }) {
  return (
    <div className="flex w-full h-full flex-col rounded-[10px] bg-white p-2 shadow-[0px_4px_10px_0px_rgba(38,43,47,0.07),0px_0px_1px_0px_rgba(38,43,47,0.04)]">
      <div className="relative h-72 overflow-hidden rounded-[10px] max-sm:h-52">
        <Image
          src={mediaUrl(card.image)}
          alt={card.title ?? ""}
          fill
          quality={100}
          className="object-cover"
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="mt-2 flex-1 rounded-[10px] border border-[rgba(0,113,227,0.05)] p-2">
        <p className="mb-4 text-lg font-bold leading-[1.4] text-greyPrimary">
          {card.title}
        </p>
        <p className="text-base leading-[140%] w-full max-w-80 text-greyPrimary">
          {card.description}
        </p>
      </div>
    </div>
  );
}

export default function WhyZyng({
  title,
  description,
  cards = [],
}: {
  title?: unknown;
  description?: unknown;
  cards?: Card[];
}) {
  return (
    <section className="whyuse relative bg-gradientbg py-16 max-sm:py-10">
      <div className="gradient-blue-primary-zing absolute top-0 left-0 h-96.25 w-full" />
      <div className="container">
        {/* Header: title left + description right */}
        <div
          data-aos="fade-up"
          className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10"
        >
          <h2 className="shrink-0 text-[clamp(28px,4vw,40px)] font-normal leading-[1.2] text-white lg:max-w-xs">
            <RichText data={title} />
          </h2>
          <p className="text-lg leading-[1.4] text-white">
            <RichText data={description} />
          </p>
        </div>

        {/* Cards */}
        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1.2}
            spaceBetween={16}
            pagination={{ clickable: true, el: ".why-pagination" }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 16 },
            }}
          >
            {cards.map((card, i) => (
              <SwiperSlide key={i} className="h-auto! flex! items-stretch">
                <WhyCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="why-pagination mt-8 flex justify-center gap-2 lg:hidden" />
      </div>
    </section>
  );
}
