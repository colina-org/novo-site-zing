import Link from "next/link";

export default function CommunitySection() {
  return (
    <section className="bg-white py-10">
      <div className="container">
        <div className="flex flex-col items-start gap-6 rounded bg-[#6453D1] px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Text */}
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-medium text-white">
              Faça parte da nossa comunidade
            </p>
            <p className="text-lg font-normal leading-relaxed text-white">
              A Zing é uma plataforma que impulsiona a inovação
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="/contato"
            className="shrink-0 rounded border border-white px-4 py-2 text-lg font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            Falar com especialista
          </Link>
        </div>
      </div>
    </section>
  );
}
