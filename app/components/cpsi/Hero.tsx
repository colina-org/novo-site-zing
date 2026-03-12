import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white pt-20 pb-6 max-sm:py-10 lg:flex lg:items-center">
      <div className="container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Text content */}
          <div className="flex max-w-4xl flex-col gap-13.5">
            <div className="flex flex-col gap-6">
              <h1 className="text-[clamp(32px,4vw,48px)] font-normal leading-tight text-black">
                Plataforma líder na{" "}
                <span className="font-medium">
                  gestão de <br />
                  editais de CPSI
                </span>{" "}
                no Brasil
              </h1>
              <p className="text-lg font-normal leading-relaxed text-black">
                A Zing é a plataforma dos maiores editais de{" "}
                <strong>Contrato Público para Solução Inovadora (CPSI) </strong>
                do Brasil. Grandes intuições como CAIXA, CEMIG, Porto Suape e
                Prefeitura de Belo Horizonte confiam na ZING.
              </p>
            </div>

            <Link
              href="#"
              className="w-fit rounded bg-linear-to-tr from-[#9500FF] to-[#35005A] px-4 py-2 text-lg font-bold text-white transition-opacity hover:opacity-90"
            >
              Quero fazer CPSI
            </Link>
          </div>

          {/* Cubes decoration */}
          <div className="relative hidden h-82.5 w-82.5 shrink-0 lg:block">
            <Image
              src={"/all-cubes-hero-cpsi.svg"}
              alt=""
              width={331}
              height={329}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
