import Image from "next/image";

export default function AboutGestao() {
  return (
    <section className="relative overflow-hidden py-28 max-sm:py-10 bg-gradientbg">
      <Image
        src="/hubs/abouthubsnew.png"
        alt=""
        height={368}
        width={880}
        className="object-cover object-top w-full max-w-220 absolute right-0 top-0 max-sm:hidden"
      />
      <div className="absolute inset-0 bg-linear-to-r from-gradientbg from-40% via-gradientbg/10 via-60% to-transparent" />

      <div className="container relative z-10">
        <div data-aos="fade-right" className="flex max-w-xl flex-col gap-4">
          <h2 className="text-[clamp(32px,4vw,40px)] font-normal leading-[1.2] text-greyPrimary">
            O que é{" "}
            <span className="font-bold text-bluePrimary">Hub de inovação</span>?
          </h2>
          <p className="text-lg font-normal leading-relaxed text-greyPrimary">
            Um <strong className="font-bold">hub de inovação</strong> é um
            ambiente — físico, digital ou híbrido — criado para{" "}
            <strong className="font-bold">
              conectar pessoas, organizações e conhecimentos
            </strong>{" "}
            em torno do desenvolvimento de soluções inovadoras.
          </p>
        </div>
      </div>
    </section>
  );
}
