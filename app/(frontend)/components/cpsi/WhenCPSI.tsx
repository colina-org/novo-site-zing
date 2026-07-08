import Image from "next/image";
import Link from "next/link";
import RichText from "../RichText";
import { mediaUrl } from "../../lib/media";

type Bullet = { text?: string };

export default function WhenCPSI({
  title,
  bullets = [],
  image,
  ebookCta,
}: {
  title?: unknown;
  bullets?: Bullet[];
  image?: unknown;
  ebookCta?: { label?: string; href?: string };
}) {
  const cta = ebookCta ?? {};
  return (
    <section className="bg-white py-16 max-sm:py-10">
      <div className="container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-10">
          {/* Image */}
          <div
            data-aos="fade-right"
            className="relative w-full max-w-145 h-105.75 overflow-hidden rounded-[10px]"
          >
            <Image
              src={mediaUrl(image)}
              alt="E-book CPSI — Contrato Público para Soluções Inovadoras"
              width={500}
              height={500}
              quality={100}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content */}
          <div data-aos="fade-left" className="flex flex-col gap-10">
            <h2 className="text-[clamp(28px,3.5vw,48px)] leading-[1.2] text-greyPrimary">
              <RichText data={title} />
            </h2>

            <ul className="flex flex-col">
              {bullets.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 px-4 py-4">
                  <span className="mt-0.75 shrink-0 size-4 bg-bluePrimary rounded-sm" />
                  <p className="text-base leading-[1.4] text-greyPrimary">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>

            {cta.href && (
              <Link
                href={cta.href}
                target="_blank"
                className="flex h-10 w-fit items-center gap-2 rounded px-4 bg-bluePrimary text-base font-bold text-white transition-colors hover:opacity-90"
              >
                {cta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
