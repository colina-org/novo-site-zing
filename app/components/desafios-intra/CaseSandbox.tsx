import Image from "next/image";
import Link from "next/link";

export default function CaseSandbox() {
  return (
    <section className="bg-linear-to-br from-[#9500FF] to-[#35005A] py-16 max-sm:py-10">
      <div className="container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-10">
          {/* Image */}
          <div className="relative aspect-580/353 w-full overflow-hidden rounded-[10px] lg:w-1/2 lg:shrink-0">
            <Image
              src="/cpsi/case-sandbox.png"
              alt="Case Sandbox CAIXA"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-10">
            <h2 className="text-[clamp(28px,3.5vw,48px)] leading-[120%] text-white">
              Case de sucesso —{" "}
              <span className="font-bold">Sandbox CAIXA</span>
            </h2>
            <p className="text-lg leading-[140%] text-white">
              A ZING foi utilizada no Sandbox CAIXA, um edital interno que
              mobilizou mais de 80 mil colaboradores da Caixa Econômica Federal
              para propor ideias voltadas à solução de desafios reais da
              organização, consolidando o intraempreendedorismo como motor de
              inovação em larga escala.
            </p>
            <Link
              href="#"
              className="group flex w-fit items-center gap-2.5 rounded bg-white px-4 py-1 text-base font-bold transition-opacity duration-300 hover:opacity-80"
            >
              <span className="bg-linear-to-br from-[#9500FF] to-[#35005A] bg-clip-text text-transparent">
                Leia case completo
              </span>
              <svg
                width="21"
                height="11"
                viewBox="0 0 21 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 0.5L20.5 5.5M20.5 5.5L15.5 10.5M20.5 5.5H0.5"
                  stroke="url(#arrow-gradient)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="arrow-gradient"
                    x1="0.5"
                    y1="5.5"
                    x2="20.5"
                    y2="5.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9500FF" />
                    <stop offset="1" stopColor="#35005A" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
