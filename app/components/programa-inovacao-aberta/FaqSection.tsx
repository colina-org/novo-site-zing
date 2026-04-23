"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "O que é um programa de inovação aberta?",
    answer:
      "É uma iniciativa que conecta organizações a startups, pesquisadores e parceiros para resolver desafios reais de negócio.",
  },
  {
    question: "Como a Zing apoia esses programas?",
    answer:
      "Centraliza inscrições, propostas e avaliações em um único ambiente, tornando o processo mais ágil e confiável.",
  },
  {
    question: "A plataforma ajuda na seleção de startups?",
    answer:
      "Sim. Permite divulgar desafios, receber propostas e avaliar startups com critérios estruturados.",
  },
  {
    question: "É possível lançar múltiplos desafios ao mesmo tempo?",
    answer:
      "Sim. A plataforma permite gerenciar vários desafios e programas simultaneamente.",
  },
  {
    question: "Como garantir decisões justas e transparentes?",
    answer:
      "O sistema registra todas as etapas e avaliações, garantindo rastreabilidade e critérios claros de seleção.",
  },

  {
    question:
      "A Zing ajuda a conectar organizações a startups com soluções em IA?",
    answer:
      "Sim. A plataforma foi desenvolvida para operar programas de inovação aberta com gestão de inscrições, recebimento de propostas e avaliação das soluções. Isso permite que organizações lancem desafios relacionados a temas estratégicos, inclusive IA, com critérios claros, agilidade e rastreabilidade em todo o processo. ",
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
