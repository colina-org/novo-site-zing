"use client";

import Image from "next/image";
import { useState } from "react";

export default function AssistenteWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
      {/* Painel expandido */}
      <div
        className={`mb-3 flex w-[min(320px,calc(100vw-48px))] flex-col overflow-hidden rounded-2xl border border-white/20 shadow-[0px_2px_10px_0px_rgba(0,0,0,0.16)] transition-all duration-300 ease-out origin-bottom-right ${
          open
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-75 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex h-14.5 items-center gap-2.5 border-b border-b-[#e0e0e0]/30 bg-white px-3.5">
          <div className="relative shrink-0 size-9">
            <Image
              src="/sobre/assistente-avatar.svg"
              alt="Assistente da Zing"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <p className="text-base font-medium text-greyPrimary">
              Assistente da Zing
            </p>
            <p className="text-[12px] text-[#008631]">● Online agora</p>
          </div>
          <div className="flex-1" />
          <button
            onClick={() => setOpen(false)}
            aria-label="Fechar assistente"
            className="flex size-5 cursor-pointer items-center justify-center rounded-lg bg-[rgba(0,102,179,0.1)] transition-opacity hover:opacity-70"
          >
            <div className="relative size-2.5">
              <Image
                src="/sobre/assistente-close.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </button>
        </div>

        {/* Body */}
        <div className="bg-white px-4 pb-5 pt-4.5">
          <p className="mb-1 text-[22px] font-bold text-greyPrimary">Olá!</p>
          <p className="mb-2 text-base text-[#0066b3]">
            Eu sou a assistente da Zing.
          </p>
          <p className="mb-3.5 text-[14px] leading-4.25 text-greyPrimary">
            Posso te ajudar a entender o e-book, a metodologia CPSI e como a
            Zing transforma negócios.
          </p>

          {/* CTA */}
          <a
            href="https://zingassistente.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-full items-center justify-center rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{
              background:
                "linear-gradient(35deg, #6453D1 8%, #0071E3 58%, #1ACBDC 91%)",
            }}
          >
            Consultar assistente →
          </a>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center bg-[#f5f5f5] px-3 py-2">
          <p className="text-center text-[12px] text-[#838383]">
            Powered by RAG · TEIA CAIXA · IEBT Innovation · Zing
          </p>
        </div>
      </div>

      {/* Botão flutuante quando fechado */}
      <div
        className={`group flex items-center justify-end gap-3 transition-all duration-300 ease-out ${
          open
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
      >
        {/* Tooltip — aparece ao passar o mouse */}
        <button
          onClick={() => setOpen(true)}
          className="cursor-pointer rounded-[10px] bg-white px-4 py-2 text-base text-bluePrimary opacity-0 shadow-[0px_2px_5px_0px_rgba(0,0,0,0.16)] transition-opacity duration-200 group-hover:opacity-100 max-sm:hidden"
        >
          Conheça nossa assistente!
        </button>
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir assistente da Zing"
          className="flex size-16 cursor-pointer items-center justify-center rounded-full shadow-[0px_2px_10px_0px_rgba(0,0,0,0.16)] transition-transform hover:scale-105"
          style={{
            background:
              "linear-gradient(78deg, #6453D1 8%, #0071E3 58%, #1ACBDC 91%)",
          }}
        >
          <div className="relative size-9">
            <Image
              src="/sobre/assistente-avatar.svg"
              alt=""
              fill
              className="object-contain brightness-0 invert"
            />
          </div>
        </button>
      </div>
    </div>
  );
}
