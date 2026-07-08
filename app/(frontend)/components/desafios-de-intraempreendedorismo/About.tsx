import Image from "next/image";
import RichText from "../RichText";
import { mediaUrl } from "../../lib/media";

export default function AboutGestao({ about }: { about: any }) {
  return (
    <section className="relative overflow-hidden py-28 max-sm:py-10 bg-gradientbg">
      <Image
        src={mediaUrl(about?.backgroundImage)}
        alt=""
        height={368}
        quality={100}
        width={880}
        className="object-cover object-top w-full max-w-220 absolute right-0 top-0 max-sm:hidden"
      />

      <div className="container relative z-10">
        <div data-aos="fade-right" className="flex max-w-xl flex-col gap-4">
          <h2 className="text-[clamp(32px,4vw,40px)] font-normal leading-[120%] max-sm:text-[28px] text-greyPrimary">
            <RichText data={about?.title} />
          </h2>
          <p className="text-lg font-normal leading-relaxed text-greyPrimary">
            <RichText data={about?.description} />
          </p>
        </div>
      </div>
    </section>
  );
}
