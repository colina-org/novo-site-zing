import Image from "next/image";

const hubs = [
  { src: "/hubs/hub-estacao-futuro.png", alt: "Estação Futuro" },
  { src: "/hubs/hub-teia.png", alt: "Espaço Teia Caixa" },
];

export default function HubsBar() {
  return (
    <section className="bg-white pb-10">
      <div className="container">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-10">
          <p className="shrink-0 text-xl tracking-wide text-greyPrimary">
            Hubs que a{" "}
            <span className="font-bold text-bluePrimary">ZING</span> atende
          </p>

          <div className="flex items-center gap-8 overflow-x-auto">
            {hubs.map((hub) => (
              <div
                key={hub.alt}
                className="flex h-21 w-36 shrink-0 items-center rounded-md bg-white p-3"
              >
                <Image
                  src={hub.src}
                  alt={hub.alt}
                  width={120}
                  height={60}
                  className="object-contain grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
