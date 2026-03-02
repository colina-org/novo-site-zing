"use client";

import Image from "next/image";
import { useState } from "react";

type Step = {
  kind?: "quiz" | "contact";
  question: string;
  helper?: string;
  options?: string[];
  multiSelect?: boolean;
};

type ContactData = {
  nome: string;
  email: string;
  telefone: string;
  newsletter: boolean;
};

const steps: Step[] = [
  {
    question:
      'Você já ouviu falar em "Contrato Público para Solução Inovadora (CPSI)"?',
    helper:
      "Os principais estudos sobre compras públicas para inovação indicam a necessidade de se dedicar tempo e atenção para descrever o desafio a ser enfrentado pela Administração Pública.",
    options: [
      "O desafio foi definido com clareza pela Administração Pública?",
      "O desafio foi definido com clareza pela Administração Pública?",
      "O desafio foi definido com clareza pela Administração Pública?",
    ],
  },
  {
    question:
      'Você já ouviu falar em "Contrato Público para Solução Inovadora (CPSI)"?',
    options: [
      "Nunca ouvi falar",
      "Já ouvi falar, mas não conheço em detalhes",
      "Tenho conhecimento básico sobre o tema",
      "Já participei ou conduzi algum processo CPSI",
    ],
  },
  {
    question:
      "O seu órgão público já realizou ou planeja realizar contratações voltadas à inovação?",
    options: [
      "Ainda não realizou",
      "Está em fase de estudo",
      "Já tem experiências pontuais",
      "Possui iniciativas estruturadas de fomento ou contratação de inovação",
    ],
  },
  {
    question:
      "Existe algum comitê, núcleo ou laboratório de inovação ativo no seu órgão?",
    options: [
      "Não existe",
      "Existe informalmente (sem ato normativo)",
      "Existe e possui ato formal de instituição",
      "Existe, atua ativamente e possui política/normativa própria",
    ],
  },
  {
    question:
      "O quanto você considera que sua equipe domina as normas aplicáveis ao Marco Legal de CT&I e ao Marco Legal das Startups?",
    options: [
      "Não dominamos",
      "Conhecemos superficialmente",
      "Temos algum domínio, mas ainda com dúvidas",
      "Dominamos bem e aplicamos na prática",
    ],
  },
  {
    question:
      "Quais são os principais desafios para estruturar CPSI no seu órgão? (pode marcar mais de uma).",
    multiSelect: true,
    options: [
      "Falta de conhecimento técnico",
      "Insegurança jurídica",
      "Ausência de estrutura interna (comitê, política, etc.)",
      "Falta de modelos prontos (minutas/templates)",
      "Dificuldade de escolher a modalidade de inovação adequada",
      "Dificuldade de identificar soluções inovadoras",
      "Limitações orçamentárias",
      "Falta de modelos prontos (minutas/templates)",
      "Outros",
    ],
  },
  {
    question:
      "Qual dessas opções representa melhor o interesse atual do seu órgão?",
    options: [
      "Entender o que é e como aplicar o CPSI",
      "Receber capacitação sobre o tema",
      "Estruturar um projeto piloto de contratação de inovação",
      "Escalar e institucionalizar o modelo de CPSI",
    ],
  },
  {
    kind: "contact",
    question: "Em breve alguém da nossa equipe entrará em contato",
    helper:
      "Os principais estudos sobre compras públicas para inovação indicam a necessidade de se dedicar tempo e atenção para descrever o desafio a ser enfrentado pela Administração Pública.",
  },
];

export default function Steps() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<number[]>([]);
  const [transitioning, setTransitioning] = useState(false);
  const [contactData, setContactData] = useState<ContactData>({
    nome: "",
    email: "",
    telefone: "",
    newsletter: false,
  });

  const step = steps[currentStep];
  const isContact = step.kind === "contact";

  function handleSelect(i: number) {
    if (step.multiSelect) {
      setSelections((prev) =>
        prev.includes(i) ? prev.filter((n) => n !== i) : [...prev, i],
      );
    } else {
      setSelections([i]);
    }
  }

  function handleAdvance() {
    if (selections.length === 0) return;
    if (currentStep < steps.length - 1) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setSelections([]);
        setTransitioning(false);
      }, 250);
    }
  }

  function handleSubmit() {
    const { nome, email, telefone } = contactData;
    if (!nome.trim() || !email.trim() || !telefone.trim()) return;
    // TODO: send data to API
    console.log("Form submitted:", contactData);
  }

  const isContactValid =
    contactData.nome.trim() !== "" &&
    contactData.email.trim() !== "" &&
    contactData.telefone.trim() !== "";

  return (
    <section className="relative overflow-hidden bg-[#f1e8fb] py-10">
      <Image
        src="/frame-steps-left.svg"
        height={333}
        width={331}
        alt={""}
        className="absolute bottom-0 left-0 max-lg:hidden"
      />

      <Image
        src="/frame-top-right-steps.svg"
        height={260}
        width={200}
        alt={""}
        className="absolute top-0 right-0 max-lg:hidden"
      />

      {/* Content */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          {/* Left — text */}
          <div className="flex flex-col gap-6 lg:max-w-130">
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-medium text-black">
              CPSI é para mim?
            </h2>
            <p className="text-lg leading-relaxed text-black">
              Responda as perguntas para receber apoio na decisão sobre a
              modalidade ou instrumento mais adequado para contratação.
              <br />
              <br />
              Respondendo a apenas seis perguntas, conseguimos sugerir as
              melhores opções de compra pública.
            </p>
          </div>

          {/* Right — Quiz card */}
          <div
            className={`flex-1 rounded bg-[#5F2AB2] p-4 transition-all duration-300 ease-in-out lg:max-w-150 ${
              transitioning
                ? "translate-y-2 opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            {/* Question + helper */}
            <div className="mb-6 flex flex-col gap-4">
              <p className="text-[22px] font-medium leading-snug text-white">
                {step.question}
              </p>
              {step.helper && (
                <p className="text-base text-white">{step.helper}</p>
              )}
            </div>

            {isContact ? (
              /* Contact form */
              <div className="mb-4 flex flex-col gap-4">
                {/* Nome */}
                <div className="flex flex-col gap-1.5">
                  <label className="flex items-center gap-1 text-base font-medium text-white">
                    Nome{" "}
                    <span className="text-sm text-[#DD1D1D]" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    value={contactData.nome}
                    onChange={(e) =>
                      setContactData((prev) => ({
                        ...prev,
                        nome: e.target.value,
                      }))
                    }
                    placeholder="Insira seu nome"
                    className="h-9.5 cursor-pointer rounded border border-[#828282] bg-white px-2 text-base outline-none placeholder:text-[#828282] focus:border-[#9500FF]"
                  />
                </div>

                {/* E-mail */}
                <div className="flex flex-col gap-1.5">
                  <label className="flex items-center gap-1 text-base font-medium text-white">
                    E-mail{" "}
                    <span className="text-sm text-[#DD1D1D]" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    type="email"
                    value={contactData.email}
                    onChange={(e) =>
                      setContactData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    placeholder="Insira seu e-mail"
                    className="h-9.5 cursor-pointer rounded border border-[#828282] bg-white px-2 text-base outline-none placeholder:text-[#828282] focus:border-[#9500FF]"
                  />
                </div>

                {/* Telefone */}
                <div className="flex flex-col gap-1.5">
                  <label className="flex items-center gap-1 text-base font-medium text-white">
                    Telefone de contato{" "}
                    <span className="text-sm text-[#DD1D1D]" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    type="tel"
                    value={contactData.telefone}
                    onChange={(e) =>
                      setContactData((prev) => ({
                        ...prev,
                        telefone: e.target.value,
                      }))
                    }
                    placeholder="Insira seu telefone"
                    className="h-9.5 cursor-pointer rounded border border-[#828282] bg-white px-2 text-base outline-none placeholder:text-[#828282] focus:border-[#9500FF]"
                  />
                </div>

                {/* Newsletter checkbox */}
                <button
                  onClick={() =>
                    setContactData((prev) => ({
                      ...prev,
                      newsletter: !prev.newsletter,
                    }))
                  }
                  className={`flex w-full cursor-pointer items-start gap-4 rounded border border-white bg-white p-4 text-left transition-opacity ${
                    contactData.newsletter
                      ? "ring-2 ring-white/60"
                      : "opacity-90 hover:opacity-100"
                  }`}
                >
                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm border-2 border-[#9500FF] transition-colors ${
                      contactData.newsletter ? "bg-[#9500FF]" : "bg-white"
                    }`}
                  >
                    {contactData.newsletter && (
                      <svg
                        viewBox="0 0 12 10"
                        fill="none"
                        className="h-3 w-3"
                        aria-hidden="true"
                      >
                        <path
                          d="M1 5l3.5 3.5L11 1"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  <span className="text-lg text-black">
                    Quero receber materiais e oportunidades de capacitação sobre
                    CPSI
                  </span>
                </button>
              </div>
            ) : (
              /* Quiz options */
              <div className="mb-4 flex flex-col gap-4">
                {step.options?.map((opt, i) => {
                  const isSelected = selections.includes(i);
                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      className={`flex w-full cursor-pointer items-start gap-4 rounded border border-white bg-white p-4 text-left transition-opacity ${
                        isSelected
                          ? "ring-2 ring-white/60"
                          : "opacity-90 hover:opacity-100"
                      }`}
                    >
                      {step.multiSelect ? (
                        /* Checkbox indicator */
                        <span
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm border-2 border-[#9500FF] transition-colors ${
                            isSelected ? "bg-[#9500FF]" : "bg-white"
                          }`}
                        >
                          {isSelected && (
                            <svg
                              viewBox="0 0 12 10"
                              fill="none"
                              className="h-3 w-3"
                              aria-hidden="true"
                            >
                              <path
                                d="M1 5l3.5 3.5L11 1"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </span>
                      ) : (
                        /* Radio indicator */
                        <span
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#9500FF] transition-colors ${
                            isSelected ? "bg-[#9500FF]" : "bg-white"
                          }`}
                        >
                          {isSelected && (
                            <span className="h-2.5 w-2.5 rounded-full bg-white" />
                          )}
                        </span>
                      )}
                      <span className="text-lg text-black">{opt}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Action button */}
            {isContact ? (
              <button
                onClick={handleSubmit}
                disabled={!isContactValid}
                className="w-full cursor-pointer rounded border border-black bg-white py-2 text-center disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span className="bg-linear-to-tr from-[#9500FF] to-[#35005A] bg-clip-text text-lg font-bold text-transparent">
                  Enviar
                </span>
              </button>
            ) : (
              <button
                onClick={handleAdvance}
                disabled={selections.length === 0}
                className="w-full cursor-pointer rounded border border-black bg-white py-2 text-center disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span className="bg-linear-to-tr from-[#9500FF] to-[#35005A] bg-clip-text text-lg font-bold text-transparent">
                  Avançar
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
