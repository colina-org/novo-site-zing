import Link from "next/link";

export default function CommunitySection() {
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
              Faça parte da nossa comunidade
            </p>
            <p className="text-base font-normal leading-relaxed text-white">
              A Zing é uma plataforma que impulsiona a inovação
            </p>
          </div>

          {/* CTA Button */}
          <Link href="/contato" className="btn-primary">
            Falar com especialista
          </Link>
        </div>
      </div>
    </section>
  );
}
