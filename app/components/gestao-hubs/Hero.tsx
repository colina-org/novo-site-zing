import Link from "next/link";

export default function HeroGestao() {
  return (
    <section className="bg-white py-20 max-sm:py-10">
      <div className="container">
        <div className="flex max-w-4xl flex-col gap-13.5">
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl max-sm:text-3xl font-normal leading-tight text-greyPrimary">
              Gestão completa de <br className="max-sm:hidden" />
              <span className="font-medium">Hubs de inovação</span>
            </h1>
            <p className="text-base font-normal leading-relaxed text-greyPrimary">
              Da operação do espaço físico à articulação do ecossistema, a Zing
              oferece <br className="max-sm:hidden" />
              gestão integrada para hubs orientados a resultados.
            </p>
          </div>

          <Link
            href="/contato"
            className="gradient-blue-primary-zing w-fit rounded px-4 py-2 text-lg font-bold text-white transition-opacity hover:opacity-90"
          >
            Fale com especialista
          </Link>
        </div>
      </div>
    </section>
  );
}
