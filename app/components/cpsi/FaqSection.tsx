"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "O que é o CPSI e quando devo utilizar?",
    answer:
      "O CPSI é um instrumento jurídico que permite ao setor público contratar soluções inovadoras para desafios reais. Ele é ideal quando há incerteza tecnológica e necessidade de testar soluções antes da contratação em larga escala.",
  },
  {
    question: "Minha instituição pode executar um CPSI mesmo sem experiência?",
    answer:
      "Sim. A Zing prepara sua instituição desde a primeira execução, estruturando o processo legal, operacional e metodológico.",
  },
  {
    question: "Como a Zing apoia na execução do CPSI?",
    answer:
      "Apoiamos desde a estruturação do edital até a seleção, contratação e acompanhamento das startups, em um ambiente único e rastreável.",
  },
  {
    question: "A plataforma garante transparência e segurança jurídica?",
    answer:
      "Sim. Todo o processo é estruturado com critérios claros, registros e rastreabilidade das decisões, garantindo conformidade e transparência.",
  },
  {
    question: "É possível acompanhar os resultados dos projetos?",
    answer:
      "Sim. A plataforma oferece dashboards, relatórios e acompanhamento contínuo dos projetos contratados.",
  },

  {
    question:
      "Como a Zing prepara o CPSI para o uso de Inteligência Artificial?",
    answer:
      "A Zing centraliza todas as etapas do CPSI — inscrições, avaliações, contratos e acompanhamento — em um único ambiente estruturado. Isso cria uma base de dados organizada e rastreável, essencial para evoluções com Inteligência Artificial e análises mais avançadas no futuro.",
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
