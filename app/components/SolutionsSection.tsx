"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    label: "Setor público",
    description:
      "Lance chamadas de CPSI e desafios de inovação para resolver problemas reais da gestão pública, testando e validando soluções com startups de forma segura, transparente e orientada a resultados.",
    image: "/img-card-setor-publico-v2.png",
    href: "#",
  },
  {
    label: "Setor privado",
    description:
      "A Zing apoia empresas na criação e execução de programas de inovação aberta, conectando startups a desafios reais do negócio. Também desenvolve desafios de intraempreendedorismo para engajar colaboradores na criação de soluções inovadoras.",
    image: "/img-card-setor-privado-v2.png",
    href: "#",
  },
];

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <path
        d="M1 5H15M15 5L10.5 1M15 5L10.5 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SolutionsSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="overflow-hidden bg-white max-lg:py-14 max-sm:py-10">
      <div className="relative flex min-h-125 flex-col lg:min-h-150">
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-full max-w-[58%] bg-[#0071E30D] lg:block" />

        <div className="container mx-auto flex flex-1 flex-col px-6 lg:flex-row">
          <div className="flex w-full max-w-[50%] items-center bg-[#0071E30D] py-14 max-sm:py-0 max-md:mb-10 max-lg:max-w-full max-lg:bg-white lg:bg-transparent lg:py-0 lg:pr-16">
            <div className="w-full">
              <div
                data-aos="fade-up"
                className="mb-8 flex items-center gap-2.5"
              >
                <div
                  aria-hidden="true"
                  className="size-4 shrink-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(125deg, #6453D1 0%, #0071E3 60%, #1ACBDC 100%)",
                  }}
                />
                <span className="text-greyPrimary text-xs font-bold tracking-[0.48em] uppercase">
                  Para quem oferecemos
                </span>
              </div>

              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-greyPrimary text-[clamp(28px,3.5vw,40px)] leading-[1.2]"
              >
                <span className="font-normal">Conheça nossas</span>
                <br />
                <span className="font-bold">soluções</span>
              </h2>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="flex w-full max-w-3xl flex-col items-center gap-3 sm:flex-row sm:gap-4"
            onMouseLeave={() => setActive(null)}
          >
            {solutions.map((s, i) => {
              const isActive = active === i;
              return (
                <Link
                  key={i}
                  href={s.href}
                  onMouseEnter={() => setActive(i)}
                  className={`group relative flex h-100 flex-col overflow-hidden rounded-2xl transition-all duration-500 ease-in-out max-sm:h-90 ${
                    active === null
                      ? i === 0
                        ? "sm:w-100"
                        : "sm:w-75"
                      : isActive
                        ? "sm:w-100"
                        : "sm:w-75"
                  }`}
                >
                  <Image
                    src={s.image}
                    alt={s.label}
                    fill
                    className={`object-cover transition-opacity duration-500 object-center ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
                    sizes="(max-width: 640px) 100vw, 400px"
                  />

                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, rgba(0,113,227,0) 40%, #0071E3 100%)",
                    }}
                  />

                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-0 bg-[#0071E3] transition-opacity duration-500 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <div className="relative z-10 flex h-full flex-col p-4">
                    <div
                      className={`grid overflow-hidden transition-all duration-500 ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0">
                        <span className="text-2xl leading-[1.2] font-bold text-white">
                          {s.label}
                        </span>
                        <p className="mt-4 text-base leading-[1.4] font-normal text-white/95">
                          {s.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex-1" />

                    <div
                      className={`flex items-end gap-6 transition-all duration-500 ${
                        isActive ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      <span className="flex-1 text-2xl leading-[1.2] font-bold text-white">
                        {s.label}
                      </span>
                      <div className="flex size-8 shrink-0 items-center justify-center rounded bg-white text-bluePrimary">
                        <ArrowIcon />
                      </div>
                    </div>

                    <div
                      className={`absolute inset-x-4 bottom-4 transition-all duration-500 ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "pointer-events-none translate-y-2 opacity-0"
                      }`}
                    >
                      <div className="flex w-full items-center justify-between rounded bg-white px-4 py-2">
                        <span className="bg-linear-to-r from-[#6453D1] via-[#0071E3] to-[#1ACBDC] bg-clip-text text-base font-bold text-transparent">
                          Conheça mais
                        </span>
                        <ArrowIcon className="text-bluePrimary" />
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
