import Image from "next/image";

const hubs = [
  { src: "/hubs/hub-estacao-futuro.png", alt: "Estação Futuro" },
  { src: "/hubs/hub-teia.png", alt: "Espaço Teia Caixa" },
];

export default function HubsBar() {
  return (
    <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-10">
      <p className="text-xl tracking-wide text-greyPrimary">
        Hubs que a <span className="font-bold text-bluePrimary">ZING</span>{" "}
        atende
      </p>

      <div className="w-full max-w-fit flex items-center gap-8">
        {hubs.map((hub) => (
          <div
            key={hub.alt}
            className="flex h-30 w-full  max-w-42 items-center justify-center"
          >
            <Image
              src={hub.src}
              alt={hub.alt}
              width={144}
              height={84}
              className="object-contain grayscale w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
