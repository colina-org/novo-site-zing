import Image from "next/image";
import Link from "next/link";

export default function HeroGestao() {
  return (
    <section className="bg-white py-20 max-sm:py-10">
      <div className="container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Text content */}
          <div className="flex max-w-2xl flex-col gap-13.5">
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl max-sm:text-3xl font-normal leading-tight text-black">
                Gestão completa de <br className="max-sm:hidden" />
                <span className="font-medium">hubs de inovação</span>
              </h1>
              <p className="text-lg font-normal leading-relaxed text-black">
                Da operação do espaço físico à articulação do ecossistema, a
                Zing oferece gestão integrada para hubs orientados a resultados.
              </p>
            </div>

            <Link
              href="/contato"
              className="w-fit rounded bg-linear-to-tr from-[#9500FF] to-[#35005A] px-4 py-2 text-lg font-bold text-white transition-opacity hover:opacity-90"
            >
              Falar com especialista
            </Link>
          </div>

          {/* Cubes decoration */}
          <div className="relative hidden h-82.5 w-82.5 shrink-0 lg:block">
            <div className="absolute top-0 left-0 animate-fade-in-up [animation-delay:0s]">
              <Image
                src="/cube-icon.svg"
                alt=""
                width={131}
                height={131}
                aria-hidden="true"
              />
            </div>
            <div className="absolute top-0 left-50 animate-fade-in-up [animation-delay:0.15s]">
              <Image
                src="/cube-icon.svg"
                alt=""
                width={131}
                height={131}
                aria-hidden="true"
              />
            </div>
            <div className="absolute top-24.75 left-25 animate-fade-in-up [animation-delay:0.3s]">
              <Image
                src="/cube-icon.svg"
                alt=""
                width={131}
                height={131}
                aria-hidden="true"
              />
            </div>
            <div className="absolute top-49.5 left-50 animate-fade-in-up [animation-delay:0.45s]">
              <Image
                src="/cube-icon.svg"
                alt=""
                width={131}
                height={131}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
