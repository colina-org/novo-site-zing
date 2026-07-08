import Image from "next/image";
import RichText from "../RichText";
import { mediaUrl } from "../../lib/media";

export default function About({ about }: { about: any }) {
  return (
    <section className="relative overflow-hidden bg-gradientbg">
      <Image
        src={mediaUrl(about?.backgroundImage)}
        alt=""
        height={368}
        width={880}
        quality={100}
        className="object-cover object-right w-full max-w-220 absolute right-0 max-sm:hidden"
      />

      <div className="container relative z-10">
        <div
          data-aos="fade-right"
          className="flex max-w-xl flex-col gap-10 py-16 lg:py-20"
        >
          <h2 className="text-[clamp(32px,4vw,40px)] font-normal leading-[1.2] text-greyPrimary">
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
