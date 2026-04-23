import Image from "next/image";

const logos = [
  { src: "/clients/client-01.png", alt: "Caixa" },
  {
    src: "/clients/client-10.png",
    alt: "UBQ - União Brasileira para a Qualidade",
  },
];

export default function Clients() {
  return (
    <section className="bg-white py-10">
      <div className="container">
        <div className="flex flex-col items-center gap-10">
          <p
            data-aos="fade-up"
            className="text-center text-xl text-greyPrimary"
          >
            Clientes que inovam com a{" "}
            <span className="font-bold text-bluePrimary">ZING</span>
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex items-center justify-center gap-8"
          >
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="flex h-21 w-36 items-center justify-center rounded-md bg-white"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={144}
                  height={84}
                  className="h-full w-full object-contain grayscale transition-[filter] duration-300 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
