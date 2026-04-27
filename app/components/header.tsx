"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const serviceItems = [
  { label: "Chamadas CPSI", href: "/cpsi" },
  { label: "Programa de inovação", href: "/programa-inovacao-aberta" },
  {
    label: "Desafios de Intraempreendedorismo",
    href: "/desafios-intraempreendedorismo",
  },
  { label: "Gestão de Hubs", href: "/gestao-de-hubs" },
];

const sectorItems = [
  { label: "Setor público" },
  { label: "Setor Privado" },
  { label: "Startups" },
];

const contentItems = [{ label: "Cases" }, { label: "Podcasts" }];

const navItems = [{ label: "Programas", href: "/programas" }];

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      width="8"
      height="5"
      viewBox="0 0 8 5"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M1 1L4 4L7 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-200"
    >
      {open ? (
        <>
          <line
            x1="4"
            y1="4"
            x2="20"
            y2="20"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="20"
            y1="4"
            x2="4"
            y2="20"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <line
            x1="3"
            y1="7"
            x2="21"
            y2="7"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="3"
            y1="12"
            x2="21"
            y2="12"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="3"
            y1="17"
            x2="21"
            y2="17"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [sectorOpen, setSectorOpen] = useState(false);
  const [contentOpen, setContentOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSectorOpen, setMobileSectorOpen] = useState(false);
  const [mobileContentOpen, setMobileContentOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const sectorRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [servicesRef]);

  useEffect(() => {
    function menuSectorSecvices(e: MouseEvent) {
      if (sectorRef.current && !sectorRef.current.contains(e.target as Node)) {
        setSectorOpen(false);
      }
    }
    document.addEventListener("mousedown", menuSectorSecvices);
    return () => document.removeEventListener("mousedown", menuSectorSecvices);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        contentRef.current &&
        !contentRef.current.contains(e.target as Node)
      ) {
        setContentOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Zing - Página inicial"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo-header.svg"
            alt="Zing"
            width={112}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 nav:flex">
          {/* Sobre */}
          <button className="group flex items-center gap-1 p-2 text-base font-normal transition-all duration-200 hover:rounded-[10px] hover:bg-[#0071E30D]">
            <span className="bg-linear-to-tr from-[#6453D1] via-[#0071E3] to-[#1ACBDC] bg-clip-text text-greyPrimary transition-colors duration-200 group-hover:text-transparent">
              Sobre
            </span>
          </button>

          {/* Serviços dropdown */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`group flex items-center gap-1 p-2 text-base font-normal transition-all duration-200 hover:rounded hover:bg-[#0071E30D] ${
                servicesOpen ? "rounded-[10px] bg-[#0071E30D]" : ""
              }`}
              onClick={() => setServicesOpen((prev) => !prev)}
            >
              <span
                className={`bg-linear-to-tr from-[#6453D1] via-[#0071E3] to-[#1ACBDC] bg-clip-text transition-colors duration-200 group-hover:text-transparent ${
                  servicesOpen ? "text-transparent" : "text-greyPrimary"
                }`}
              >
                Serviços
              </span>
              <ChevronDown
                className={`transition-colors duration-200 group-hover:text-[#0071E3] ${
                  servicesOpen ? "text-[#0071E3]" : "text-greyPrimary"
                }`}
              />
            </button>

            <div
              className={`absolute left-0 top-full flex min-w-80 flex-col gap-2 rounded-[10px] border border-gray-100 bg-white p-2 shadow-lg transition-all duration-200 ${
                servicesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              }`}
            >
              {serviceItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-[10px] bg-[#0071E30D] p-2 text-base"
                  onClick={() => setServicesOpen(false)}
                >
                  <span className="bg-linear-to-tr from-[#6453D1] via-[#0071E3] to-[#1ACBDC] bg-clip-text text-transparent">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div
            ref={sectorRef}
            className="relative"
            onMouseEnter={() => setSectorOpen(true)}
            onMouseLeave={() => setSectorOpen(false)}
          >
            <button
              className={`group flex items-center gap-1 p-2 text-base font-normal transition-all duration-200 hover:rounded-[10px] hover:bg-[#0071E30D] ${
                sectorOpen ? "rounded bg-[#0071E30D]" : ""
              }`}
              onClick={() => setSectorOpen((prev) => !prev)}
            >
              <span
                className={`bg-linear-to-tr from-[#6453D1] via-[#0071E3] to-[#1ACBDC] bg-clip-text transition-colors duration-200 group-hover:text-transparent ${
                  sectorOpen ? "text-transparent" : "text-greyPrimary"
                }`}
              >
                Pra quem oferecemos
              </span>
              <ChevronDown
                className={`transition-colors duration-200 group-hover:text-[#0071E3] ${
                  sectorOpen ? "text-[#0071E3]" : "text-greyPrimary"
                }`}
              />
            </button>

            <div
              className={`absolute left-0 top-full flex min-w-44 flex-col gap-2 rounded-[10px] border border-gray-100 bg-white p-2 shadow-lg transition-all duration-200 ${
                sectorOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              }`}
            >
              {sectorItems.map((item) => (
                <button
                  key={item.label}
                  className="rounded-[10px] bg-[#0071E30D] p-2 text-base text-left"
                  onClick={() => setSectorOpen(false)}
                >
                  <span className="bg-linear-to-tr from-[#6453D1] via-[#0071E3] to-[#1ACBDC] bg-clip-text text-transparent">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex items-center gap-1 p-2 text-base font-normal transition-all duration-200 hover:rounded-[10px] hover:bg-[#0071E30D]"
            >
              <span className="bg-linear-to-tr from-[#6453D1] via-[#0071E3] to-[#1ACBDC] bg-clip-text text-greyPrimary transition-colors duration-200 group-hover:text-transparent">
                {item.label}
              </span>
            </Link>
          ))}

          {/* Eventos */}
          <button className="group flex items-center gap-1 p-2 text-base font-normal transition-all duration-200 hover:rounded-[10px] hover:bg-[#0071E30D]">
            <span className="bg-linear-to-tr from-[#6453D1] via-[#0071E3] to-[#1ACBDC] bg-clip-text text-greyPrimary transition-colors duration-200 group-hover:text-transparent">
              Eventos
            </span>
          </button>

          {/* Conteúdo dropdown */}
          <div
            ref={contentRef}
            className="relative"
            onMouseEnter={() => setContentOpen(true)}
            onMouseLeave={() => setContentOpen(false)}
          >
            <button
              className={`group flex items-center gap-1 p-2 text-base font-normal transition-all duration-200 hover:rounded hover:bg-[#0071E30D] ${
                contentOpen ? "rounded-[10px] bg-[#0071E30D]" : ""
              }`}
              onClick={() => setContentOpen((prev) => !prev)}
            >
              <span
                className={`bg-linear-to-tr from-[#6453D1] via-[#0071E3] to-[#1ACBDC] bg-clip-text transition-colors duration-200 group-hover:text-transparent ${
                  contentOpen ? "text-transparent" : "text-greyPrimary"
                }`}
              >
                Conteúdo
              </span>
              <ChevronDown
                className={`transition-colors duration-200 group-hover:text-[#0071E3] ${
                  contentOpen ? "text-[#0071E3]" : "text-greyPrimary"
                }`}
              />
            </button>

            <div
              className={`absolute left-0 top-full flex min-w-40 flex-col gap-2 rounded-[10px] border border-gray-100 bg-white p-2 shadow-lg transition-all duration-200 ${
                contentOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              }`}
            >
              {contentItems.map((item) => (
                <button
                  key={item.label}
                  className="rounded-[10px] bg-[#0071E30D] p-2 text-base text-left"
                  onClick={() => setContentOpen(false)}
                >
                  <span className="bg-linear-to-tr from-[#6453D1] via-[#0071E3] to-[#1ACBDC] bg-clip-text text-transparent">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 nav:flex">
          <Link
            href="https://zingassistente.lovable.app/"
            target="_blank"
            className="group"
          >
            <Image
              src={"/7fc7cfe1-abcb-4516-9b49-2c58df7aef35.jpg"}
              width={24}
              height={24}
              alt={"Zing Assistente IA"}
              className="group-hover:scale-105 duration-200 ease-linear"
            />
          </Link>
          <Link
            href={"https://www.zinginnovation.com/login"}
            target="_blank"
            className="flex items-center justify-center whitespace-nowrap rounded-[10px] border border-black px-4 py-2 text-base font-bold text-black transition-colors hover:bg-gray-50"
          >
            Entrar
          </Link>

          <Link href="/contato" className="btn-primary">
            Solicite uma demonstração
          </Link>
        </div>

        <div className="flex items-center gap-4 nav:hidden">
          <Link
            href="https://zingassistente.lovable.app/"
            target="_blank"
            className="group"
          >
            <Image
              src={"/7fc7cfe1-abcb-4516-9b49-2c58df7aef35.jpg"}
              width={24}
              height={24}
              alt={"Zing Assistente IA"}
              className="group-hover:scale-105 duration-200 ease-linear hidden max-nav:block"
            />
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="flex items-center justify-center nav:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 ease-in-out nav:hidden ${
          menuOpen
            ? "max-h-screen border-t border-gray-100 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto flex flex-col gap-1 px-6 py-4">
          {/* Sobre */}
          <button
            className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-normal text-black transition-colors hover:bg-gray-50"
            onClick={() => setMenuOpen(false)}
          >
            Sobre
          </button>

          {/* Serviços accordion */}
          <div>
            <button
              className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-normal text-black transition-colors hover:bg-gray-50"
              onClick={() => setMobileServicesOpen((prev) => !prev)}
            >
              Serviços
              <span
                className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
              >
                <ChevronDown />
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                mobileServicesOpen
                  ? "max-h-60 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {serviceItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-6 py-2.5 text-base text-black transition-colors hover:bg-gray-50"
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileServicesOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Pra quem oferecemos accordion */}
          <div>
            <button
              className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-normal text-black transition-colors hover:bg-gray-50"
              onClick={() => setMobileSectorOpen((prev) => !prev)}
            >
              Pra quem oferecemos
              <span
                className={`transition-transform duration-200 ${mobileSectorOpen ? "rotate-180" : ""}`}
              >
                <ChevronDown />
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                mobileSectorOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {sectorItems.map((item) => (
                <button
                  key={item.label}
                  className="block w-full rounded-lg px-6 py-2.5 text-left text-base text-black transition-colors hover:bg-gray-50"
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileSectorOpen(false);
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-normal text-black transition-colors hover:bg-gray-50"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* Eventos */}
          <button
            className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-normal text-black transition-colors hover:bg-gray-50"
            onClick={() => setMenuOpen(false)}
          >
            Eventos
          </button>

          {/* Conteúdo accordion */}
          <div>
            <button
              className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-normal text-black transition-colors hover:bg-gray-50"
              onClick={() => setMobileContentOpen((prev) => !prev)}
            >
              Conteúdo
              <span
                className={`transition-transform duration-200 ${mobileContentOpen ? "rotate-180" : ""}`}
              >
                <ChevronDown />
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                mobileContentOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {contentItems.map((item) => (
                <button
                  key={item.label}
                  className="block w-full rounded-lg px-6 py-2.5 text-left text-base text-black transition-colors hover:bg-gray-50"
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileContentOpen(false);
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="my-2 border-t border-gray-100" />

          <Link
            href={"https://www.zinginnovation.com/login"}
            target="_blank"
            className="flex items-center justify-center rounded border border-black py-3 text-base font-bold text-black transition-colors hover:bg-gray-50"
            onClick={() => setMenuOpen(false)}
          >
            Entrar
          </Link>

          <Link
            href="/contato"
            className="gradient-blue-primary-zing mt-2 flex items-center justify-center rounded py-3 text-base font-bold text-white transition-opacity hover:opacity-90"
            onClick={() => setMenuOpen(false)}
          >
            Solicite uma demonstração
          </Link>

          <div className="pb-2" />
        </div>
      </div>
    </header>
  );
}
