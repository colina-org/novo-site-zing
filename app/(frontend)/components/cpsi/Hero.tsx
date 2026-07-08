import Image from "next/image";
import Link from "next/link";
import RichText from "../RichText";
import { mediaUrl } from "../../lib/media";

export default function Hero({ hero }: { hero: any }) {
  const cta = hero?.cta ?? {};
  return (
    <section className="relative flex min-h-160 max-sm:pt-10 items-center max-sm:items-start overflow-hidden bg-white lg:min-h-160">
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
        className="object-cover sm:hidden w-full h-full"
      />

      <div className="container relative z-10">
        <div className="flex max-w-156 max-lg:max-w-full flex-col items-start gap-13.5 max-sm:gap-10 max-lg:text-center max-lg:items-center">
          <div className="flex flex-col gap-6">
            <h1
              data-aos="fade-up"
              className="text-[clamp(32px,4vw,48px)] font-normal leading-[120%] text-greyPrimary"
            >
              <RichText data={hero?.title} />
            </h1>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex flex-col items-start gap-1 text-lg max-sm:text-base font-normal leading-[140%] text-greyPrimary"
            >
              <p>
                <RichText data={hero?.description} />
              </p>
            </div>
          </div>

          <Link
            data-aos="fade-up"
            data-aos-delay="200"
            href={cta.href ?? "#cpsi-steps"}
            className="btn-primary"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
