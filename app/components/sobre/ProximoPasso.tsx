"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const stats = [
  { value: 3000, label: "startups no ecossistema" },
  { value: 300, label: "avaliadores cadastrados" },
  { value: 80, label: "organizações envolvidas" },
  { value: 30, label: "programas executados" },
];

function useCounter(target: number, started: boolean, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return count;
}

function StatCard({
  value,
  label,
  started,
}: {
  value: number;
  label: string;
  started: boolean;
}) {
  const count = useCounter(value, started);
  return (
    <div className="flex flex-col items-center justify-center rounded-[10px] border border-white/50 p-4">
      <p className="mb-1.5 text-[32px] font-bold text-white">
        +{count.toLocaleString("pt-BR")}
      </p>
      <p className="text-[13px] font-medium text-[#e0ebfa]">{label}</p>
    </div>
  );
}

export default function ProximoPasso() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 max-sm:py-10"
      style={{
        background: "linear-gradient(90deg, #1acbdc 0%, #0071e3 50%, #6453d1 100%)",
      }}
    >
      <div className="container">
        {/* Title */}
        <p
          data-aos="fade-up"
          className="mb-16 text-center text-[clamp(24px,3vw,40px)] leading-tight text-white max-sm:mb-10"
        >
          Vamos construir a próxima fase da sua{" "}
          <span className="font-bold">estratégia de inovação.</span>
        </p>

        {/* Stats — grid no desktop, swiper no mobile */}
        <div className="mb-16 max-sm:mb-10">
          {/* Desktop */}
          <div data-aos="fade-up" data-aos-delay="100" className="hidden gap-6 sm:grid sm:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} started={started} />
            ))}
          </div>

          {/* Mobile Swiper */}
          <div className="sm:hidden">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1.5}
              spaceBetween={12}
              pagination={{ clickable: true }}
              className="proximopasso-swiper pb-10"
            >
              {stats.map((stat) => (
                <SwiperSlide key={stat.label}>
                  <StatCard {...stat} started={started} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* CTA */}
        <div data-aos="fade-up" data-aos-delay="150" className="flex justify-center">
          <Link
            href="/contato"
            className="rounded-[10px] bg-white px-4 py-2 text-lg font-bold text-bluePrimary backdrop-blur-sm transition-opacity hover:opacity-90"
          >
            Falar com especialista
          </Link>
        </div>
      </div>
    </section>
  );
}
