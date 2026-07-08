"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import RichText from "../RichText";
import { mediaUrl } from "../../lib/media";

type Card = { image?: unknown; title?: string; description?: string };

function WhyCard({ card }: { card: Card }) {
  return (
    <div className="flex h-full flex-col shadow-md bg-white p-2 rounded-[10px]">
      {/* Image */}
      <div className="relative mb-2 h-87 max-sm:h-60 overflow-hidden rounded-[10px]">
        <Image
          src={mediaUrl(card.image)}
          alt={card.title ?? ""}
          quality={100}
          width={373}
          height={326}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2 p-2 border border-[rgba(0,113,227,0.05)] rounded-[10px]">
        <p className="text-lg font-bold text-greyPrimary">{card.title}</p>
        <p className="text-base text-greyPrimary">{card.description}</p>
      </div>
    </div>
  );
}

export default function WhyZing({
  title,
  description,
  cards = [],
}: {
  title?: unknown;
  description?: unknown;
  cards?: Card[];
}) {
  return (
    <section className="whyuse py-16 relative max-sm:py-10 bg-gradientbg">
      <div className="gradient-blue-primary-zing absolute top-0 left-0 h-96.25 w-full"></div>
      <div className="container mx-auto px-6">
        {/* Title */}
        <div
          data-aos="fade-up"
          className="flex items-center justify-between gap-4 mb-10 max-lg:flex-col"
        >
          <h2 className="text-[40px] max-sm:text-[28px] leading-[120%] font-normal text-white w-full max-w-80">
            <RichText data={title} />
          </h2>

          <p className="text-lg w-full max-w-171.25 text-white">
            <RichText data={description} />
          </p>
        </div>

        {/* Cards Swiper */}
        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={16}
            pagination={{ clickable: true, el: ".why-pagination" }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {cards.map((card, i) => (
              <SwiperSlide key={i} className="h-auto! pb-2">
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
