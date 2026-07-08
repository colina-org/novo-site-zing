import Image from "next/image";
import Link from "next/link";
import RichText from "../RichText";
import { mediaUrl } from "../../lib/media";

export default function CaseSandbox({ data }: { data?: any }) {
  const cta = data?.cta ?? {};
  return (
    <section className="bg-gradientbg py-16 max-sm:py-10">
      <div className="container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-10">
          {/* Image */}
          <div
            data-aos="fade-right"
            className="relative aspect-580/353 w-full overflow-hidden rounded-[10px] lg:w-1/2 lg:shrink-0"
          >
            <Image
              src={mediaUrl(data?.image)}
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div data-aos="fade-left" className="flex flex-col gap-10">
            <h2 className="text-[clamp(28px,3.5vw,48px)] leading-[1.2] text-greyPrimary">
              <RichText data={data?.title} />
            </h2>
            <p className="text-base leading-[1.4] text-greyPrimary">
              <RichText data={data?.description} />
            </p>
            <Link
              href={cta.href ?? "/contato"}
              className="flex h-8 w-fit items-center gap-2 rounded px-4 border bg-white border-bluePrimary text-base font-bold text-bluePrimary transition-colors hover:bg-bluePrimary hover:text-white"
            >
              {cta.label}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
