"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import { enviarCpsi, type CpsiFormState } from "../../actions/cpsi";

type Step = {
  kind?: "quiz" | "contact";
  question: string;
  helper?: string;
  options?: string[];
  multiSelect?: boolean;
};

type ContactData = {
  nome: string;
  instituicao: string;
  email: string;
  telefone: string;
  newsletter: boolean;
};

const steps: Step[] = [
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
  const [answers, setAnswers] = useState<Record<number, number[]>>({});
  const [transitioning, setTransitioning] = useState(false);
  const [contactData, setContactData] = useState<ContactData>({
    nome: "",
    instituicao: "",
    email: "",
    telefone: "",
    newsletter: false,
  });
  const [feedback, setFeedback] = useState<CpsiFormState>({
    status: "idle",
    message: "",
  });
  const [isPending, startTransition] = useTransition();

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

  function handleBack() {
    if (currentStep === 0) return;
    setTransitioning(true);
    setTimeout(() => {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      setSelections(answers[prevStep] ?? []);
      setTransitioning(false);
    }, 250);
  }

  function handleAdvance() {
    if (selections.length === 0) return;
    if (currentStep < steps.length - 1) {
      const savedSelections = selections;
      const savedStep = currentStep;
      setTransitioning(true);
      setTimeout(() => {
        setAnswers((prev) => ({ ...prev, [savedStep]: savedSelections }));
        const nextStep = savedStep + 1;
        setCurrentStep(nextStep);
        setSelections(answers[nextStep] ?? []);
        setTransitioning(false);
      }, 250);
    }
  }

  function handleSubmit() {
    if (!isContactValid) return;

    const quiz = steps
      .map((s, idx) => {
        if (s.kind === "contact" || !s.options) return null;
        const selected = answers[idx] ?? [];
        const answer = selected
          .map((i) => s.options?.[i])
          .filter(Boolean)
          .join("; ");
        return { question: s.question, answer: answer || "(sem resposta)" };
      })
      .filter((q): q is { question: string; answer: string } => q !== null);

    startTransition(async () => {
      const result = await enviarCpsi({
        nome: contactData.nome,
        instituicao: contactData.instituicao,
        email: contactData.email,
        telefone: contactData.telefone,
        newsletter: contactData.newsletter,
        quiz,
      });
      setFeedback(result);

      if (result.status === "success") {
        setContactData({
          nome: "",
          instituicao: "",
          email: "",
          telefone: "",
          newsletter: false,
        });
        setAnswers({});
      }
    });
  }

  const isContactValid =
    contactData.nome.trim() !== "" &&
    contactData.instituicao.trim() !== "" &&
    contactData.email.trim() !== "" &&
    contactData.telefone.trim() !== "";

  return (
    <section
      className="steps-section relative overflow-hidden bg-gradientbg max-lg:bg-bluePrimary py-16 max-sm:py-10"
      id="cpsi-steps"
    >
      <div className="absolute top-0 right-0 h-full w-[55%] max-lg:hidden">
        <Image
          src="/cpsi/steps-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          quality={100}
        />
      </div>
      <div className="container">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          {/* Left — text */}
          <div className="relative z-10 flex flex-col justify-center gap-6 lg:max-w-130">
            <h2 className="text-[clamp(28px,3.5vw,40px)] text-greyPrimary max-lg:text-white">
              <span className="font-medium">CPSI</span> é para mim?
            </h2>
            <p className="text-base leading-relaxed text-greyPrimary max-lg:text-white">
              Responda as perguntas para receber apoio na decisão sobre a
              modalidade ou instrumento mais adequado para contratação.
            </p>
          </div>

          {/* Right — Quiz card */}
          <div
            className={`relative z-10 flex-1 p-4 transition-all duration-300 ease-in-out lg:max-w-150 ${
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
              <div className="relative z-10 mb-4 flex flex-col gap-4">
                {/* Nome */}
                <div className="flex flex-col gap-2">
                  <label className="flex items-center text-base font-medium text-white">
                    Nome
                    <span className="text-sm text-[#DD1D1D]">*</span>
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
                    placeholder="Insira o seu nome completo"
                    className="h-9.5 border-b border-[#838383] bg-white px-2 text-base text-greyPrimary outline-none placeholder:text-[#838383] focus:border-[#0071E3]"
                  />
                </div>

                {/* Instituição */}
                <div className="flex flex-col gap-2">
                  <label className="flex items-center text-base font-medium text-white">
                    Instituição
                    <span className="text-sm text-[#DD1D1D]">*</span>
                  </label>
                  <input
                    type="text"
                    value={contactData.instituicao}
                    onChange={(e) =>
                      setContactData((prev) => ({
                        ...prev,
                        instituicao: e.target.value,
                      }))
                    }
                    placeholder="Insira o nome da sua instituição"
                    className="h-9.5 border-b border-[#838383] bg-white px-2 text-base text-greyPrimary outline-none placeholder:text-[#838383] focus:border-[#0071E3]"
                  />
                </div>

                {/* E-mail */}
                <div className="flex flex-col gap-2">
                  <label className="flex items-center text-base font-medium text-white">
                    E-mail
                    <span className="text-sm text-[#DD1D1D]">*</span>
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
                    className="h-9.5 border-b border-[#838383] bg-white px-2 text-base text-greyPrimary outline-none placeholder:text-[#838383] focus:border-[#0071E3]"
                  />
                </div>

                {/* Telefone */}
                <div className="flex flex-col gap-2">
                  <label className="flex items-center text-base font-medium text-white">
                    Telefone de contato
                    <span className="text-sm text-[#DD1D1D]">*</span>
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
                    placeholder="Insira seu telefone de contato"
                    className="h-9.5 border-b border-[#838383] bg-white px-2 text-base text-greyPrimary outline-none placeholder:text-[#838383] focus:border-[#0071E3]"
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
                  className={`flex w-full cursor-pointer items-start gap-4 rounded border border-white bg-white/50 p-4 text-left transition-opacity ${
                    contactData.newsletter
                      ? "ring-2 ring-white/60"
                      : "opacity-90 hover:opacity-100"
                  }`}
                >
                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm border-2 border-greyPrimary transition-colors ${
                      contactData.newsletter
                        ? "bg-[#0071E3] border-[#0071E3]"
                        : "bg-white"
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
                  <span className="text-base text-greyPrimary">
                    Quero receber materiais sobre CPSI
                  </span>
                </button>
              </div>
            ) : (
              /* Quiz options */
              <div className="relative z-10 mb-4 flex flex-col gap-4">
                {step.options?.map((opt, i) => {
                  const isSelected = selections.includes(i);
                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      className={`flex w-full cursor-pointer items-start gap-4 rounded-[10px] border border-white bg-white/50 p-4 text-left transition-opacity ${
                        isSelected
                          ? "ring-2 ring-white/60"
                          : "opacity-90 hover:opacity-100"
                      }`}
                    >
                      {step.multiSelect ? (
                        /* Checkbox indicator */
                        <span
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm border-2 border-[#0071E3] transition-colors ${
                            isSelected ? "bg-[#0071E3]" : "bg-white"
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
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#0071E3] transition-colors ${
                            isSelected ? "bg-[#0071E3]" : "bg-white"
                          }`}
                        >
                          {isSelected && (
                            <span className="h-2.5 w-2.5 rounded-full bg-white" />
                          )}
                        </span>
                      )}
                      <span className="text-base text-greyPrimary">{opt}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Feedback message (contact step) */}
            {isContact && feedback.status !== "idle" && (
              <p
                role="status"
                className={`mb-4 text-sm ${feedback.status === "success" ? "text-white" : "text-[#FFB4B4]"}`}
              >
                {feedback.message}
              </p>
            )}

            {/* Action button */}
            {isContact ? (
              <div className="relative z-10 flex items-center justify-between">
                <button
                  onClick={handleBack}
                  disabled={isPending}
                  className="w-26.5 cursor-pointer rounded-[10px] border border-white py-2 text-center text-lg font-bold text-white backdrop-blur-sm disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Voltar
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!isContactValid || isPending}
                  className="cursor-pointer rounded-[10px] bg-white px-4 py-2 text-center text-lg font-bold text-bluePrimary backdrop-blur-sm disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isPending ? "Enviando..." : "Enviar"}
                </button>
              </div>
            ) : (
              <div className="relative z-10 flex items-center justify-between">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className="w-26.5 cursor-pointer rounded-[10px] border border-white py-2 text-center text-lg font-bold text-white backdrop-blur-sm disabled:cursor-not-allowed disabled:opacity-0"
                >
                  Voltar
                </button>
                <button
                  onClick={handleAdvance}
                  disabled={selections.length === 0}
                  className="w-26.5 cursor-pointer rounded-[10px] border border-white py-2 text-center text-lg font-bold text-white backdrop-blur-sm disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Avançar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
