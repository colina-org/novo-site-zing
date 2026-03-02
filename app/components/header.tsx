"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const serviceItems = [
  { label: "Gestão de Hubs", href: "/gestao-de-hubs" },
  { label: "Programa de inovação aberta", href: "/programa-inovacao-aberta" },
  { label: "CPSI", href: "/cpsi" },
  {
    label: "Desafios do Intraempreendedorismo",
    href: "/desafios-intraempreendedorismo",
  },
];

const navItems = [
  { label: "Pra quem oferecemos", href: "#" },
  { label: "Programas", href: "/programas" },
  { label: "Eventos", href: "#" },
  { label: "Conteúdo", href: "#" },
];

function ChevronDown() {
  return (
    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" aria-hidden="true">
      <path
        d="M1 1L4 4L7 1"
        stroke="#464646"
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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

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
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Zing - Página inicial"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/zing-logo.png"
            alt="Zing"
            width={112}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 lg:flex">
          {/* Serviços dropdown */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 rounded-full px-3 py-2 text-base font-normal text-black transition-colors hover:bg-gray-100"
              onClick={() => setServicesOpen((prev) => !prev)}
            >
              Serviços
              <ChevronDown />
            </button>

            <div
              className={`absolute left-0 top-full min-w-64 rounded-lg border border-gray-100 bg-white py-2 shadow-lg transition-all duration-200 ${
                servicesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              }`}
            >
              {serviceItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2.5 text-base text-black transition-colors hover:bg-gray-50"
                  onClick={() => setServicesOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 rounded-full px-3 py-2 text-base font-normal text-black transition-colors hover:bg-gray-100"
            >
              {item.label}
              <ChevronDown />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="#"
            className="flex items-center justify-center whitespace-nowrap rounded border border-black px-4 py-2 text-base font-bold text-black transition-colors hover:bg-gray-50"
          >
            Entrar
          </Link>

          <Link
            href="/contato"
            className="flex items-center justify-center whitespace-nowrap rounded bg-linear-to-tr from-[#9500FF] to-[#35005B] px-4 py-2 text-base font-bold text-white transition-opacity hover:opacity-90"
          >
            Solicite uma demonstração
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex items-center justify-center lg:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "max-h-screen border-t border-gray-100 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto flex flex-col gap-1 px-6 py-4">
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

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-normal text-black transition-colors hover:bg-gray-50"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
              <ChevronDown />
            </Link>
          ))}

          <div className="my-2 border-t border-gray-100" />

          <Link
            href="#"
            className="flex items-center justify-center rounded border border-black py-3 text-base font-bold text-black transition-colors hover:bg-gray-50"
            onClick={() => setMenuOpen(false)}
          >
            Entrar
          </Link>

          <Link
            href="/contato"
            className="mt-2 flex items-center justify-center rounded bg-linear-to-tr from-[#9500FF] to-[#35005B] py-3 text-base font-bold text-white transition-opacity hover:opacity-90"
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
