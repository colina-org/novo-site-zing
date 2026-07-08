import Link from "next/link";
import RichText from "./RichText";
import { getGlobal } from "../lib/cms";

export default async function CommunitySection() {
  const data = await getGlobal("community-banner");
  const cta = (data as any)?.cta ?? {};
  return (
    <section className="bg-white py-10">
      <div className="container">
        <div
          data-aos="fade-up"
          className="flex flex-col items-start gap-6 rounded-[10px] bg-linear-to-r from-[#347dd5] to-[#c3e1fd] px-6 py-8 sm:flex-row sm:items-center sm:justify-between"
        >
          {/* Text */}
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-medium text-white">
              <RichText data={(data as any)?.title} />
            </p>
            <p className="text-base font-normal leading-relaxed text-white">
              <RichText data={(data as any)?.description} />
            </p>
          </div>

          {/* CTA Button */}
          <Link href={cta.href ?? "/contato"} className="btn-primary">
            {cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
