"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "O que é um hub de inovação?",
    answer:
      "É um ambiente que conecta pessoas, organizações e conhecimento para gerar inovação, podendo ser físico, digital ou híbrido.",
  },
  {
    question: "A Zing gerencia apenas o espaço físico do hub?",
    answer:
      "Não. A gestão é completa: inclui operação do espaço, programas, eventos e articulação do ecossistema.",
  },
  {
    question: "Como a plataforma ajuda na organização do hub?",
    answer:
      "Centraliza reservas, eventos, conexões entre atores e indicadores em um único sistema, garantindo eficiência e transparência.",
  },
  {
    question: "É possível integrar diferentes atores do ecossistema?",
    answer:
      "Sim. A plataforma conecta startups, empresas, e especialistas em um mesmo ambiente colaborativo.",
  },
  {
    question: "Consigo acompanhar o uso e resultados do hub?",
    answer:
      "Sim. Há dashboards com métricas de uso, participação e impacto das iniciativas.",
  },
];

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
    >
      <path
        d="M10 4V16M4 10H16"
        stroke="#0071E3"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-white py-16 max-md:py-10">
      <div className="container mx-auto ">
        {/* Header */}
        <div data-aos="fade-up" className="mb-10">
          <h2 className="text-[clamp(32px,3.5vw,48px)] font-normal text-greyPrimary">
            Tire suas <span className="font-medium">dúvidas</span>
          </h2>
        </div>

        {/* FAQ list */}
        <div data-aos="fade-up" data-aos-delay="100">
          {faqs.map((faq, i) => (
            <div key={i}>
              <hr className="border-[#E5E7EB]" />
              <button
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                className="flex w-full items-center justify-between gap-4 py-6 text-left cursor-pointer"
              >
                <span className="text-lg font-medium text-greyPrimary">
                  {faq.question}
                </span>
                <div className="flex shrink-0 items-center justify-center">
                  <PlusIcon open={openIndex === i} />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i
                    ? "max-h-40 pb-6 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-base font-normal leading-relaxed text-[#454545]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
          <hr className="border-[#E5E7EB]" />
        </div>
      </div>
    </section>
  );
}
