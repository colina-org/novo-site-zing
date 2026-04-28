"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const cards = [
  {
    src: "/cpsi/cases-main.png",
    badge: "CPSI",
    title:
      "CAIXA: A jornada da CAIXA na criação de chamadas de startups via contratação pública de solução inovadora (CPSI)",
  },
  {
    src: "/cpsi/cases-sm1.png",
    badge: "Inovação aberta",
    title: "Cemig: Conectando desafios e soluções",
  },
  {
    src: "/cpsi/cases-sm2.png",
    badge: "Inovação aberta",
    title: "PBH Inova: Um marco nacional em inovação pública",
  },
];

export default function Cases() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-10 lg:py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-6">
          {/* Left — text */}
          <div
            data-aos="fade-right"
            className="flex flex-col gap-6 lg:w-90 lg:shrink-0 max-sm:text-center"
          >
            <h2 className="text-[40px] font-normal leading-[120%] text-greyPrimary max-sm:text-3xl">
              Cases <span className="font-medium">de sucesso</span>
            </h2>
            <p className="text-lg text-greyPrimary">
              Onde a inovação pública já aconteceu, com segurança e impacto.
            </p>
            {/* <Link
              href={"#"}
              className="w-fit max-sm:hidden rounded-[10px] border border-black px-4 py-2 text-lg font-bold text-greyPrimary backdrop-blur-sm hover:bg-black hover:text-white duration-300 ease-linear"
            >
              Conheça mais
            </Link> */}
          </div>

          {/* Right — cards */}
          <div
            data-aos="fade-left"
            className="flex flex-1 gap-4 overflow-x-auto lg:overflow-x-visible"
            onMouseLeave={() => setActive(0)}
          >
            {cards.map((card, i) => {
              const isActive = active === i;
              return (
                <div
                  key={i}
                  onMouseEnter={() => setActive(i)}
                  className={`relative h-138.25 max-sm:h-96 shrink-0 cursor-pointer overflow-hidden rounded transition-[flex-grow] duration-300 ease-in-out ${
                    isActive
                      ? "flex-466 min-w-70 lg:min-w-0"
                      : "w-39.75 lg:w-auto lg:flex-159"
                  }`}
                >
                  <Image
                    src={card.src}
                    alt={card.badge}
                    quality={100}
                    height={553}
                    width={466}
                    className="object-cover w-full h-full"
                  />

                  {/* Gradient overlay — top to bottom */}
                  <div
                    className={`absolute inset-0 bg-linear-to-b from-black/80 to-transparent transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Content — top */}
                  <div
                    className={`absolute top-0 left-0 right-0 flex flex-col gap-4 p-4 transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span className="inline-block w-fit rounded bg-[#0071E3] px-4 py-2 text-2xl font-medium text-white">
                      {card.badge}
                    </span>
                    <p className="text-2xl font-medium leading-tight text-white drop-shadow-md">
                      {card.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* <Link
            href={"#"}
            className="w-fit hidden max-sm:table mx-auto rounded border border-black px-4 py-2 text-lg font-bold text-greyPrimary backdrop-blur-sm hover:bg-black hover:text-white duration-300 ease-linear"
          >
            Conheça mais
          </Link> */}
        </div>
      </div>
    </section>
  );
}
