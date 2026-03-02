"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroContato() {
  const [form, setForm] = useState({
    nome: "",
    interesse: "",
    email: "",
    telefone: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section className="relative overflow-hidden bg-[#f9f2ff] pt-32 pb-16 max-sm:py-10">
      {/* Decorative cubes */}
      <Image
        src="/herocubescontact.svg"
        alt=""
        width={329}
        height={331}
        className="pointer-events-none w-full max-w-83.25 h-82.75 object-contain absolute bottom-0 -left-6 hidden lg:block"
        aria-hidden="true"
      />
      <Image
        src="/topcubescontact.svg"
        alt=""
        width={333}
        height={331}
        className="pointer-events-none absolute top-0 -right-28 hidden lg:block w-full max-w-83.25 h-82.75 object-contain"
        aria-hidden="true"
      />

      <div className="container relative z-10 flex items-start justify-between gap-4 max-lg:gap-10 max-lg:flex-col">
        <div className="w-full max-w-143 max-lg:max-w-full">
          <h1 className="text-[clamp(28px,3.5vw,40px)] leading-[120%] text-black mb-6">
            Dê o próximo passo na sua{" "}
            <span className="font-medium">jornada de inovação</span>
          </h1>
          <p className="text-lg leading-[140%] text-black">
            Nossa equipe entrará em contato para entender seus desafios e
            mostrar, na prática, como transformar ideias em impacto.
          </p>
        </div>

        {/* Right — form */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col justify-between gap-4 rounded bg-white p-4 lg:max-w-125"
        >
          {/* Nome */}
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-greyPrimary">
              Nome da startup/projeto
              <span className="ml-0.5 text-sm text-[#DD1D1D]">*</span>
            </label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              placeholder="Insira o nome da startup/projeto"
              required
              className="border-b border-[#828282] bg-transparent px-0 py-2 text-base text-black placeholder:text-[#828282] focus:border-[#9500FF] focus:outline-none"
            />
          </div>

          {/* Interesse */}
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-greyPrimary">
              Área de interesse
              <span className="ml-0.5 text-sm text-[#DD1D1D]">*</span>
            </label>
            <div className="relative">
              <select
                name="interesse"
                value={form.interesse}
                onChange={handleChange}
                required
                className="w-full appearance-none border-b border-[#828282] bg-transparent px-0 py-2 pr-8 text-base text-black focus:border-[#9500FF] focus:outline-none"
              >
                <option value="" disabled>
                  Selecione
                </option>
                <option value="cpsi">CPSI</option>
                <option value="inovacao-aberta">Inovação Aberta</option>
                <option value="intraempreendedorismo">
                  Intraempreendedorismo
                </option>
                <option value="outro">Outro</option>
              </select>
              <svg
                className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#C4C5C6]"
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

          {/* E-mail */}
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-greyPrimary">
              E-mail
              <span className="ml-0.5 text-sm text-[#DD1D1D]">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Insira seu e-mail"
              required
              className="border-b border-[#828282] bg-transparent px-0 py-2 text-base text-black placeholder:text-[#828282] focus:border-[#9500FF] focus:outline-none"
            />
          </div>

          {/* Telefone */}
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-greyPrimary">
              Telefone
              <span className="ml-0.5 text-sm text-[#DD1D1D]">*</span>
            </label>
            <input
              type="tel"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              placeholder="Insira seu telefone"
              required
              className="border-b border-[#828282] bg-transparent px-0 py-2 text-base text-black placeholder:text-[#828282] focus:border-[#9500FF] focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 cursor-pointer rounded border border-white bg-linear-to-br from-[#9500FF] to-[#35005A] px-4 py-2 text-lg font-bold text-white transition-opacity duration-300 hover:opacity-80"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
