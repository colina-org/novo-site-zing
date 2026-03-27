"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "A ZING ajuda minha equipe a colaborar melhor?",
    answer:
      "Sim! A ZING oferece ferramentas e metodologias que facilitam a colaboração entre times, conectando diferentes atores do ecossistema de inovação para alcançar melhores resultados.",
  },
  {
    question:
      "A ZING é uma plataforma que pode agregar valor aos meus projetos?",
    answer:
      "Com certeza. A ZING conecta sua organização a startups, especialistas e programas de inovação, trazendo valor tangível aos seus projetos através de soluções inovadoras e parcerias estratégicas.",
  },
  {
    question: "A ZING me ajuda a lançar novos produtos?",
    answer:
      "Sim. Através dos nossos programas de inovação aberta e chamadas de CPSI, a ZING facilita o desenvolvimento e o lançamento de novos produtos, conectando demandas reais a soluções criativas.",
  },
  {
    question: "A ZING me ajuda a tirar ideias do papel?",
    answer:
      "Absolutamente. Nossa plataforma e metodologia são desenhadas para transformar ideias em projetos concretos, com suporte em todas as etapas: da concepção à execução.",
  },
  {
    question: "A ZING ajuda a encontrar investidores?",
    answer:
      "A ZING conecta startups e projetos inovadores a um amplo ecossistema de parceiros, que inclui investidores, setor público e grandes empresas interessados em apoiar soluções com impacto.",
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
