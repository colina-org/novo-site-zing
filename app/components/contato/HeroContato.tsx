"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import { enviarContato, type ContatoFormState } from "../../actions/contato";

type ContactMethod = "whatsapp" | "email" | "ligacao";

export default function HeroContato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    cargo: "",
    organizacao: "",
    telefone: "",
    servico: "",
    assunto: "",
  });
  const [contatos, setContatos] = useState<ContactMethod[]>([]);
  const [feedback, setFeedback] = useState<ContatoFormState>({
    status: "idle",
    message: "",
  });
  const [isPending, startTransition] = useTransition();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function toggleContato(method: ContactMethod) {
    setContatos((prev) =>
      prev.includes(method)
        ? prev.filter((m) => m !== method)
        : [...prev, method],
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (contatos.length === 0) {
      setFeedback({
        status: "error",
        message: "Selecione ao menos uma forma de contato.",
      });
      return;
    }

    startTransition(async () => {
      const result = await enviarContato({ ...form, contatos });
      setFeedback(result);

      if (result.status === "success") {
        setForm({
          nome: "",
          email: "",
          cargo: "",
          organizacao: "",
          telefone: "",
          servico: "",
          assunto: "",
        });
        setContatos([]);
      }
    });
  }

  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#6453D1] via-[#0071E3] to-[#1ACBDC] pt-32 pb-16 max-sm:py-10">
      {/* Decorative cubes */}
      <Image
        src="/cube-hero-left-contact.png"
        alt=""
        width={329}
        height={331}
        className="pointer-events-none w-full max-w-83.25 h-82.75 object-contain absolute bottom-0 -left-6 hidden lg:block"
        aria-hidden="true"
      />
      <Image
        src="/cube-hero-right-contant.png"
        alt=""
        width={333}
        height={331}
        className="pointer-events-none absolute top-0 -right-10 hidden lg:block w-full max-w-83.25 h-82.75 object-contain"
        aria-hidden="true"
      />

      <div className="container relative z-10 flex items-start justify-between gap-20 max-lg:gap-10 max-lg:flex-col">
        <div className="w-full max-w-143 max-lg:max-w-full lg:pt-10">
          <h1 className="text-[clamp(28px,3.5vw,40px)] leading-[120%] text-white mb-6">
            Dê o próximo passo na sua{" "}
            <span className="font-medium">jornada de inovação</span>
          </h1>
          <p className="text-base leading-[140%] text-white">
            Nossa equipe entrará em contato para entender seus desafios e
            mostrar, na prática, como transformar ideias em impacto.
          </p>
        </div>

        {/* Right — form */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-8 rounded-[10px] bg-white p-4 lg:max-w-125"
        >
          {/* Nome do representante */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center text-base font-medium text-greyPrimary">
              Nome do representante
              <span className="ml-0.5 text-sm text-[#DD1D1D]">*</span>
            </label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              placeholder="Digite seu nome completo"
              required
              className="border-b border-[#838383] bg-transparent px-2 py-2 text-base text-greyPrimary placeholder:text-[#838383] focus:border-[#9500FF] focus:outline-none"
            />
          </div>

          {/* E-mail */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center text-base font-medium text-greyPrimary">
              E-mail
              <span className="ml-0.5 text-sm text-[#DD1D1D]">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Digite seu e-mail"
              required
              className="border-b border-[#838383] bg-transparent px-2 py-2 text-base text-greyPrimary placeholder:text-[#838383] focus:border-[#9500FF] focus:outline-none"
            />
          </div>

          {/* Cargo */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center text-base font-medium text-greyPrimary">
              Cargo
              <span className="ml-0.5 text-sm text-[#DD1D1D]">*</span>
            </label>
            <div className="relative">
              <select
                name="cargo"
                value={form.cargo}
                onChange={handleChange}
                required
                className="w-full appearance-none border-b border-[#838383] bg-transparent px-2 py-2 pr-8 text-base text-greyPrimary focus:border-[#9500FF] focus:outline-none"
              >
                <option value="" disabled>
                  Selecione
                </option>
                <option value="c-level">C-Level / Diretoria</option>
                <option value="gerencia">Gerência</option>
                <option value="coordenacao">Coordenação</option>
                <option value="analista">Analista</option>
                <option value="outro">Outro</option>
              </select>
              <svg
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#838383]"
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Nome da organização */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center text-base font-medium text-greyPrimary">
              Nome da organização
              <span className="ml-0.5 text-sm text-[#DD1D1D]">*</span>
            </label>
            <input
              type="text"
              name="organizacao"
              value={form.organizacao}
              onChange={handleChange}
              placeholder="Digite o nome da organização"
              required
              className="border-b border-[#838383] bg-transparent px-2 py-2 text-base text-greyPrimary placeholder:text-[#838383] focus:border-[#9500FF] focus:outline-none"
            />
          </div>

          {/* Telefone */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center text-base font-medium text-greyPrimary">
              Telefone
              <span className="ml-0.5 text-sm text-[#DD1D1D]">*</span>
            </label>
            <input
              type="tel"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              placeholder="Digite seu telefone"
              required
              className="border-b border-[#838383] bg-transparent px-2 py-2 text-base text-greyPrimary placeholder:text-[#838383] focus:border-[#9500FF] focus:outline-none"
            />
          </div>

          {/* Serviço de interesse */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center text-base font-medium text-greyPrimary">
              Serviço de interesse
              <span className="ml-0.5 text-sm text-[#DD1D1D]">*</span>
            </label>
            <div className="relative">
              <select
                name="servico"
                value={form.servico}
                onChange={handleChange}
                required
                className="w-full appearance-none border-b border-[#838383] bg-transparent px-2 py-2 pr-8 text-base text-greyPrimary focus:border-[#9500FF] focus:outline-none"
              >
                <option value="" disabled>
                  Selecione
                </option>
                <option value="cpsi">CPSI</option>
                <option value="inovacao-aberta">Inovação Aberta</option>
                <option value="intraempreendedorismo">
                  Intraempreendedorismo
                </option>
                <option value="hubs-de-inovacao">Hubs de Inovação</option>
                <option value="outro">Outro</option>
              </select>
              <svg
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#838383]"
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Assunto */}
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-greyPrimary">
              Assunto
            </label>
            <input
              type="text"
              name="assunto"
              value={form.assunto}
              onChange={handleChange}
              placeholder="Digite o assunto"
              className="border-b border-[#838383] bg-transparent px-2 py-2 text-base text-greyPrimary placeholder:text-[#838383] focus:border-[#9500FF] focus:outline-none"
            />
          </div>

          {/* Como prefere ser contactado? */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center text-base font-medium text-greyPrimary">
              Como prefere ser contactado?
              <span className="ml-0.5 text-sm text-[#DD1D1D]">*</span>
            </label>
            <div className="flex flex-wrap gap-6">
              {[
                { id: "whatsapp" as const, label: "WhatsApp" },
                { id: "email" as const, label: "E-mail" },
                { id: "ligacao" as const, label: "Ligação" },
              ].map((opt) => (
                <label
                  key={opt.id}
                  className="flex cursor-pointer items-center gap-2 text-base text-greyPrimary"
                >
                  <input
                    type="checkbox"
                    checked={contatos.includes(opt.id)}
                    onChange={() => toggleContato(opt.id)}
                    className="size-4 cursor-pointer accent-bluePrimary"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>

          {/* Feedback */}
          {feedback.status !== "idle" && (
            <p
              role="status"
              className={`text-sm ${feedback.status === "success" ? "text-[#0071E3]" : "text-[#DD1D1D]"}`}
            >
              {feedback.message}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isPending}
            className="mt-2 w-full cursor-pointer rounded-[10px] bg-[#0071E3] px-4 py-2 text-lg font-bold text-white transition-opacity duration-300 hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isPending ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </section>
  );
}
