import Image from "next/image";
import Link from "next/link";
import RichText from "./RichText";
import { mediaUrl } from "../lib/media";

export default function HeroSection({ hero }: { hero: any }) {
  const cta = hero?.cta ?? {};
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <Image
        src={mediaUrl(hero?.imageDesktop)}
        alt=""
        priority
        quality={100}
        height={1080}
        width={1920}
        aria-hidden="true"
        className="object-cover object-right max-lg:hidden absolute top-0 left-0 w-full h-full"
      />
      <Image
        src={mediaUrl(hero?.imageTablet)}
        alt=""
        fill
        priority
        sizes="100vw"
        quality={100}
        aria-hidden="true"
        className="object-cover max-sm:hidden max-lg:block lg:hidden object-bottom w-full h-full"
      />
      <Image
        src={mediaUrl(hero?.imageMobile)}
        alt=""
        fill
        priority
        sizes="100vw"
        quality={100}
        aria-hidden="true"
        className="object-cover sm:hidden lg:hidden w-full h-full"
      />

      <div className="container relative z-10 flex min-h-140  flex-col justify-start py-16 lg:min-h-180 lg:pt-20 pb-32">
        <div className="w-full max-w-209.25">
          <h1
            data-aos="fade-up"
            className="text-greyPrimary text-[clamp(32px,5vw,58px)] font-normal leading-[1.2]"
          >
            <RichText data={hero?.title} />
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-greyPrimary mt-10 text-[clamp(16px,1.5vw,18px)] font-medium leading-[1.4] max-lg:mt-8"
          >
            <RichText data={hero?.description} />
          </p>

          <Link
            data-aos="fade-up"
            data-aos-delay="200"
            href={cta.href ?? "/contato"}
            className="bg-bluePrimary mt-10 inline-flex items-center justify-center rounded-[10px] px-4 py-2 text-base font-bold text-white transition-opacity hover:opacity-90 max-lg:mt-8"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
