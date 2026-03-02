"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const cards = [
  {
    src: "/cpsi/cases-main.png",
    badge: "Inovação",
    title:
      "GOV RD: Conheça o programa de capacitação de gestores públicos em Mariana",
  },
  {
    src: "/cpsi/cases-sm1.png",
    badge: "Inovação",
    title: "Segundo case de sucesso em contratação pública inovadora",
  },
  {
    src: "/cpsi/cases-sm2.png",
    badge: "Inovação",
    title: "Terceiro case de sucesso em contratação pública inovadora",
  },
];

export default function Cases() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#f1e8fb] py-10 lg:py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-6">
          {/* Left — text */}
          <div className="flex flex-col gap-6 lg:w-90 lg:shrink-0 max-sm:text-center">
            <h2 className="text-[40px] font-normal leading-[120%] text-black max-sm:text-3xl">
              Cases <span className="font-medium">de sucesso</span>
            </h2>
            <p className="text-lg text-black">
              Onde a inovação pública já aconteceu, com segurança e impacto.
            </p>
            <Link
              href={"#"}
              className="w-fit max-sm:hidden rounded border border-black px-4 py-2 text-lg font-bold text-black backdrop-blur-sm hover:bg-black hover:text-white duration-300 ease-linear"
            >
              Conheça mais
            </Link>
          </div>

          {/* Right — cards */}
          <div
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
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 280px, 466px"
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
                    <span className="inline-block w-fit rounded bg-linear-to-br from-[#9500FF] to-[#35005A] px-4 py-2 text-2xl font-medium text-white">
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

          <Link
            href={"#"}
            className="w-fit hidden max-sm:table mx-auto rounded border border-black px-4 py-2 text-lg font-bold text-black backdrop-blur-sm hover:bg-black hover:text-white duration-300 ease-linear"
          >
            Conheça mais
          </Link>
        </div>
      </div>
    </section>
  );
}
