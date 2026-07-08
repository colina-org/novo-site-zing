"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import RichText from "../RichText";
import { mediaUrl } from "../../lib/media";

type Stat = {
  display?: string | null;
  prefix?: string;
  value?: number | null;
  suffix?: string;
  label?: string;
};

function useCounter(target: number, started: boolean, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return count;
}

function StatCard({ stat, started }: { stat: Stat; started: boolean }) {
  const count = useCounter(stat.value ?? 0, started && stat.value != null);
  const displayValue =
    stat.display ??
    `${stat.prefix}${(stat.value === stat.value && stat.value != null ? count : 0).toLocaleString("pt-BR")}${stat.suffix}`;

  return (
    <div className="flex flex-1 h-full flex-col items-center justify-center rounded-[10px] border border-[rgba(70,70,70,0.5)] p-4 text-center">
      <p className="mb-1 text-[22px] font-bold leading-normal text-greyPrimary">
        {displayValue}
      </p>
      <p className="text-[12px] leading-4.25 text-greyPrimary">{stat.label}</p>
    </div>
  );
}

export default function IebtSection({
  label,
  title,
  description,
  backgroundImage,
  cta,
  stats = [],
}: {
  label?: string;
  title?: unknown;
  description?: unknown;
  backgroundImage?: unknown;
  cta?: { label?: string; href?: string };
  stats?: Stat[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);
  const link = cta ?? {};

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 max-sm:py-10"
    >
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <img
          src={mediaUrl(backgroundImage)}
          alt=""
          aria-hidden
          className="h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, white 44%, rgba(255,255,255,0.4) 70%, rgba(255,255,255,0) 100%)",
          }}
        />
      </div>

      <div className="container relative">
        {/* Left content */}
        <div className="max-w-150">
          {/* Label */}
          <div data-aos="fade-up" className="mb-6 flex items-center gap-2">
            <span
              className="size-4 shrink-0 rounded-sm"
              style={{
                background:
                  "linear-gradient(125deg, #6453D1 0%, #0071E3 60%, #1ACBDC 100%)",
              }}
            />
            <p className="text-[12px] font-bold uppercase tracking-[0.48px] text-greyPrimary">
              {label}
            </p>
          </div>

          {/* Title */}
          <h2
            data-aos="fade-up"
            data-aos-delay="50"
            className="mb-6 text-[clamp(28px,3.5vw,40px)] leading-tight text-greyPrimary"
          >
            <RichText data={title} />
          </h2>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mb-6 text-[15px] leading-5.5 text-greyPrimary"
          >
            <RichText data={description} />
          </p>

          {/* Stats — grid no desktop, swiper no mobile/tablet */}
          <div className="mb-6">
            {/* Desktop */}
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="hidden md:block"
            >
              <div className="mb-6 flex gap-10">
                {stats.slice(0, 3).map((stat) => (
                  <StatCard key={stat.label} stat={stat} started={started} />
                ))}
              </div>
              <div className="flex gap-10">
                {stats.slice(3, 6).map((stat) => (
                  <StatCard key={stat.label} stat={stat} started={started} />
                ))}
              </div>
            </div>

            {/* Mobile/Tablet Swiper */}
            <div className="overflow-x-hidden md:hidden">
              <Swiper
                modules={[Pagination]}
                slidesPerView={2}
                spaceBetween={12}
                pagination={{ clickable: true }}
                className="iebt-swiper"
              >
                {stats.map((stat) => (
                  <SwiperSlide
                    key={stat.label}
                    className="flex! h-auto! items-stretch"
                  >
                    <StatCard stat={stat} started={started} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* CTA */}
          <div data-aos="fade-up" data-aos-delay="200">
            <Link
              href={link.href ?? "#"}
              target="_blank"
              className="inline-flex items-center justify-center rounded-[10px] border border-white bg-bluePrimary px-4 py-2 text-base font-bold text-white backdrop-blur-sm transition-opacity hover:opacity-90"
            >
              {link.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
