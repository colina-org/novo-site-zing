"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const services = [
  {
    title: "Chamada CPSI",
    description:
      "A Zing gerencia chamadas de CPSI do início ao fim, preparando a instituição, conduzindo as inscrições das propostas e acompanhando a execução dos projetos.",
    image: "/services/service-01.png",
  },
  {
    title: "Programa de inovação aberta",
    description:
      "A Zing estrutura e executa programas de inovação aberta, realizando a captação, seleção e avaliação de startups para participação em diferentes iniciativas de aceleração.",
    image: "/services/service-01.png",
  },
  {
    title: "Desafios de intraempreendedorismo",
    description:
      "Criamos desafios para que colaboradores proponham soluções inovadoras para problemas reais da empresa.",
    image: "/services/service-01.png",
  },
  {
    title: "Gestão de Hubs",
    description:
      "A Zing gerencia o espaço físico de hubs de inovação, conectando startups, setor público, empresas e academia para impulsionar soluções e impacto.",
    image: "/services/service-01.png",
  },
];

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="8"
      viewBox="0 0 16 8"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M15 4H1M15 4L11 1M15 4L11 7"
        stroke="white"
        strokeWidth="1.5"
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
    <section className="bg-white py-16 max-lg:py-10">
      <div className="container">
        {/* Badge */}
        <div data-aos="fade-up" className="mb-8 flex items-center gap-2">
          <div
            aria-hidden="true"
            className="size-4 shrink-0"
            style={{ backgroundImage: "linear-gradient(125deg, #6453D1 0%, #0071E3 60%, #1ACBDC 100%)" }}
          />
          <span className="text-xs font-bold uppercase tracking-widest text-greyPrimary">
            Serviços
          </span>
        </div>

        {/* Header row: Title + Description */}
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-16">
          <h2 data-aos="fade-right" className="text-[40px] max-sm:text-3xl leading-tight font-bold text-greyPrimary lg:w-1/2">
            Transforme{" "}
            <span className="font-normal">
              ideias <br />
              em
            </span>{" "}
            soluções concretas.
          </h2>
          <p data-aos="fade-left" className="text-lg font-normal leading-relaxed text-greyPrimary lg:w-1/2 lg:pt-3">
            Conectamos setores, estimulamos a colaboração e promovemos
            capacitação para criar um ecossistema público-privado mais
            eficiente, inovador e impactante.
          </p>
        </div>

        {/* Content: Tabs + Image */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          {/* Tab list */}
          <div data-aos="fade-up" className="flex flex-col gap-3 lg:w-1/2">
            {services.map((service, i) => {
              const isActive = active === i;
              return (
                <button
                  key={i}
                  onClick={() => handleTabClick(i)}
                  className={`cursor-pointer w-full rounded-lg px-6 py-4 text-left transition-all duration-300 ${
                    isActive
                      ? "gradient-blue-primary-zing"
                      : "bg-[#0071E30D] hover:bg-[#0071E31A]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        aria-hidden="true"
                        className={`size-4 shrink-0 ${isActive ? "bg-white" : ""}`}
                        style={!isActive ? { backgroundImage: "linear-gradient(125deg, #6453D1 0%, #0071E3 60%, #1ACBDC 100%)" } : undefined}
                      />
                      <span
                        className={`text-lg font-bold leading-tight ${
                          isActive ? "text-white" : "text-greyPrimary"
                        }`}
                      >
                        {service.title}
                      </span>
                    </div>
                    {isActive && <ArrowRightIcon />}
                  </div>

                  {/* Description — expands when active */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isActive
                        ? "mt-3 max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-base font-normal leading-relaxed text-white/90">
                      {service.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Image */}
          <div data-aos="fade-left" className="lg:w-1/2">
            <div
              className={`relative h-72 w-full overflow-hidden rounded-xl lg:h-87.5 transition-opacity duration-250 ${
                imgVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={services[active].image}
                alt={services[active].title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
