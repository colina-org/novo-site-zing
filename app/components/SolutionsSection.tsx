"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    label: "Setor público",
    description:
      "Lance chamadas de CPSI e desafios de inovação para resolver problemas reais da gestão pública, testando e validando soluções com startups de forma segura, transparente e orientada a resultados.",
    image: "/img-card-setor-publico.png",
    href: "#",
  },
  {
    label: "Setor privado",
    description:
      "A Zing apoia empresas na criação e execução de programas de inovação aberta, conectando startups a desafios reais do negócio. Também desenvolve desafios de intraempreendedorismo para engajar colaboradores na criação de soluções inovadoras.",
    image: "/img-card-setor-privado.png",
    href: "#",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M1 5H15M15 5L10.5 1M15 5L10.5 9"
        stroke="url(#solutions-arrow-grad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="solutions-arrow-grad"
          x1="0"
          y1="5"
          x2="16"
          y2="5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6453D1" />
          <stop offset="0.6" stopColor="#0071E3" />
          <stop offset="1" stopColor="#1ACBDC" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function SolutionsSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="overflow-hidden bg-white max-lg:py-14">
      <div className="relative flex min-h-125 flex-col lg:min-h-150">
        {/* Full-bleed purple bg for the left half — desktop only */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-full max-w-[58%] bg-[#0071E30D] lg:block" />

        {/* Container aligns content with the rest of the page */}
        <div className="container mx-auto flex flex-1 flex-col px-6 lg:flex-row">
          {/* Left: text content */}
          <div className="flex items-center bg-[#0071E30D] py-14 max-sm:py-0 max-md:mb-10 w-full max-w-[50%] max-lg:max-w-full max-lg:bg-white lg:bg-transparent lg:py-0 lg:pr-16">
            <div className="w-full">
              {/* Badge */}
              <div data-aos="fade-up" className="mb-8 flex items-center gap-2">
                <div
                  aria-hidden="true"
                  className="size-4 shrink-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(125deg, #6453D1 0%, #0071E3 60%, #1ACBDC 100%)",
                  }}
                />
                <span className="text-xs font-bold uppercase tracking-widest text-greyPrimary">
                  Para quem oferecemos
                </span>
              </div>

              {/* Title */}
              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-5xl max-sm:text-4xl text-greyPrimary"
              >
                Conheça nossas <br className="max-md:hidden" />
                <span className="font-bold">soluções</span>
              </h2>
            </div>
          </div>

          {/* Right: image cards */}
          <div
            data-aos="fade-left"
            className="flex w-full max-w-3xl flex-col gap-3 items-center sm:flex-row sm:gap-4"
            onMouseLeave={() => setActive(null)}
          >
            {solutions.map((s, i) => {
              const isActive = active === i;
              return (
                <Link
                  key={i}
                  href={s.href}
                  onMouseEnter={() => setActive(i)}
                  className={`relative flex flex-col overflow-hidden rounded-xl h-100 max-sm:h-90 transition-all duration-500 ease-in-out ${
                    active === null
                      ? i === 0
                        ? "sm:w-100"
                        : "sm:w-75"
                      : isActive
                        ? "sm:w-100"
                        : "sm:w-75"
                  }`}
                >
                  {/* Image — visible by default, hidden on hover */}
                  <Image
                    src={s.image}
                    alt={s.label}
                    fill
                    className={`object-cover transition-opacity duration-500 ${isActive ? "opacity-0" : "opacity-100"}`}
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />

                  {/* Gradient — hidden by default, visible on hover */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}
                    style={{
                      backgroundImage:
                        "linear-gradient(125deg, #6453D1 0%, #0071E3 60%, #1ACBDC 100%)",
                    }}
                  />

                  {/* Content — full height flex, top vs bottom on hover */}
                  <div className="absolute inset-0 z-10 flex flex-col p-5">
                    {/* Top: title + description (hover only) */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isActive ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <span className="text-2xl font-bold text-white">
                        {s.label}
                      </span>
                      <p className="mt-3 text-base font-normal text-white/90">
                        {s.description}
                      </p>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Bottom: title + arrow (default only) */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isActive ? "max-h-0 opacity-0" : "max-h-20 opacity-100"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-white">
                          {s.label}
                        </span>
                        <div className="flex size-8 shrink-0 items-center justify-center rounded bg-white shadow-sm">
                          <ArrowIcon />
                        </div>
                      </div>
                    </div>

                    {/* Bottom: button (hover only) */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isActive ? "max-h-14 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="flex w-full items-center justify-between rounded bg-white px-4 py-2">
                        <span className="text-base font-bold bg-linear-to-r from-[#6453D1] via-[#0071E3] to-[#1ACBDC] bg-clip-text text-transparent">
                          Conheça mais
                        </span>
                        <ArrowIcon />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
