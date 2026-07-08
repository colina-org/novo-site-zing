import Image from "next/image";
import Link from "next/link";
import RichText from "../RichText";
import { mediaUrl } from "../../lib/media";

export default function HeroGestao({ hero }: { hero: any }) {
  const cta = hero?.cta ?? {};
  return (
    <section className="relative flex min-h-160 items-center max-sm:items-start max-sm:pt-10 overflow-hidden bg-white lg:min-h-160">
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

      <div className="container relative z-10">
        <div className="flex max-w-154.5 flex-col items-start gap-13.5 max-sm:gap-10 max-lg:text-center max-lg:items-center">
          <div className="flex flex-col gap-6">
            <h1
              data-aos="fade-up"
              className="text-[clamp(32px,4vw,48px)] font-normal leading-[1.2] text-greyPrimary"
            >
              <RichText data={hero?.title} />
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-base font-normal leading-[1.4] text-greyPrimary"
            >
              <RichText data={hero?.description} />
            </p>
          </div>

          <Link
            data-aos="fade-up"
            data-aos-delay="200"
            href={cta.href ?? "/contato"}
            className="btn-primary"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
