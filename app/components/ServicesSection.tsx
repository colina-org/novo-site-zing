"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const services = [
  {
    title: "Gestão de CPSI",
    description:
      "A Zing utiliza Inteligência Artificial para automatizar e otimizar cada etapa da gestão de CPSIs, desde a publicação do edital até a seleção e avaliação das startups.",
    image: "/services/service-cpsi.png",
  },
  {
    title: "Programa de inovação aberta",
    description:
      "A Zing estrutura e executa programas de inovação aberta, utilizando Inteligência Artificial para realizar a captação, seleção e avaliação das startups mais aderentes para participação em diferentes iniciativas de aceleração.",
    image: "/services/service-inovacao-aberta.png",
  },
  {
    title: "Desafios de intraempreendedorismo",
    description:
      "Utilizamos IA para criar e gerenciar desafios que incentivam colaboradores a propor soluções inovadoras para problemas reais da empresa.",
    image: "/services/service-desafios.png",
  },
  {
    title: "Gestão de Hubs",
    description:
      "A Zing estrutura e gerencia hubs de inovação com o suporte da Inteligência Artificial, incluindo o espaço físico, conectando startups, setor público, empresas e academia para impulsionar a colaboração, o desenvolvimento de soluções e a geração de impacto.",
    image: "/services/service-hubs.png",
  },
];

function ArrowRightIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const [imgVisible, setImgVisible] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const activeRef = useRef(0);

  const switchTo = useCallback((index: number) => {
    setImgVisible(false);
    setTimeout(() => {
      setActive(index);
      activeRef.current = index;
      setImgVisible(true);
    }, 250);
  }, []);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const next = (activeRef.current + 1) % services.length;
      switchTo(next);
    }, 10000);
  }, [switchTo]);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startInterval]);

  const handleTabClick = (index: number) => {
    if (index === active) return;
    switchTo(index);
    startInterval();
  };

  return (
    <section className="bg-white py-20 max-lg:py-12">
      <div className="container flex flex-col gap-4">
        <div data-aos="fade-up" className="flex items-center gap-2.5 px-2 py-1">
          <div
            aria-hidden="true"
            className="size-4 shrink-0"
            style={{
              backgroundImage:
                "linear-gradient(125deg, #6453D1 0%, #0071E3 60%, #1ACBDC 100%)",
            }}
          />
          <span className="text-greyPrimary text-xs font-bold tracking-[0.48em] uppercase">
            Serviços
          </span>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <h2
              data-aos="fade-right"
              className="text-greyPrimary text-[clamp(28px,3.5vw,40px)] leading-[120%]"
            >
              <span className="font-normal">Transforme ideias em</span>{" "}
              <span className="font-bold">soluções concretas</span>,
              <span className="font-normal"> com o apoio da</span>{" "}
              <span className="font-bold">IA</span>
            </h2>
            <p
              data-aos="fade-left"
              className="text-greyPrimary text-base leading-[1.4] font-normal lg:max-w-140"
            >
              Conectamos setores, estimulamos a colaboração e promovemos
              capacitação para criar um ecossistema público-privado mais
              eficiente, inovador e impactante.
            </p>
          </div>

          <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch">
            <div data-aos="fade-up" className="flex flex-col gap-4 lg:flex-1">
              {services.map((service, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={i}
                    onClick={() => handleTabClick(i)}
                    className={`w-full cursor-pointer rounded-[10px] p-4 text-left transition-all duration-300 ${
                      isActive
                        ? "bg-[#0071E3]"
                        : "bg-[#0071E30D] hover:bg-[#0071E31A]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        aria-hidden="true"
                        className={`size-4 shrink-0 ${
                          isActive ? "bg-white" : "bg-[#0071E3]"
                        }`}
                      />
                      <span
                        className={`flex-1 text-lg leading-[1.4] font-bold ${
                          isActive ? "text-white" : "text-greyPrimary"
                        }`}
                      >
                        {service.title}
                      </span>
                      {isActive && <ArrowRightIcon />}
                    </div>

                    <div
                      className={`grid overflow-hidden transition-all duration-300 ${
                        isActive
                          ? "mt-2 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <p className="ml-6.5 min-h-0 text-base leading-[1.4] font-normal text-white/95">
                        {service.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div data-aos="fade-left" className="lg:flex-1">
              <div
                className={`duration-250 relative h-80 max-sm:h-60 w-full overflow-hidden rounded-[10px] transition-opacity lg:h-full lg:min-h-100 ${
                  imgVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={services[active].image}
                  alt={services[active].title}
                  fill
                  className="object-cover max-sm:object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
