import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    label: "Setor público",
    image: "/solutions/img-card-solution.png",
    href: "#",
  },
  {
    label: "Setor privado",
    image: "/solutions/img-card-solution.png",
    href: "#",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 5H15M15 5L10.5 1M15 5L10.5 9"
        stroke="url(#solutions-arrow-grad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="solutions-arrow-grad"
          x1="0"
          y1="5"
          x2="16"
          y2="5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9500FF" />
          <stop offset="1" stopColor="#35005A" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function SolutionsSection() {
  return (
    <section className="overflow-hidden bg-white max-lg:py-14">
      <div className="relative flex min-h-125 flex-col lg:min-h-150">
        {/* Full-bleed purple bg for the left half — desktop only */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-full max-w-[58%] bg-purpleSecondary/5 lg:block" />

        {/* Container aligns content with the rest of the page */}
        <div className="container mx-auto flex flex-1 flex-col px-6 lg:flex-row">
          {/* Left: text content */}
          <div className="flex items-center bg-purpleSecondary/5 py-14 max-sm:py-0 max-md:mb-10 w-full max-w-[50%] max-lg:max-w-full max-lg:bg-white lg:bg-transparent lg:py-0 lg:pr-16">
            <div className="w-full">
              {/* Badge */}
              <div className="mb-8 flex items-center gap-2">
                <Image
                  src="/cube-icon.svg"
                  alt=""
                  width={16}
                  height={16}
                  aria-hidden="true"
                />
                <span className="text-xs font-bold uppercase tracking-widest text-black">
                  Para quem oferecemos
                </span>
              </div>

              {/* Title */}
              <h2 className="text-5xl max-sm:text-4xl text-black">
                Conheça nossas <br className="max-md:hidden" />
                <span className="font-medium bg-linear-to-r from-[#9500FF] to-[#35005A] bg-clip-text text-transparent">
                  soluções
                </span>
              </h2>
            </div>
          </div>

          {/* Right: image cards */}
          <div className="flex w-full max-w-3xl flex-col gap-3 items-center  sm:flex-row sm:gap-4">
            {solutions.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className={`group w-full relative h-100 max-sm:h-64 overflow-hidden rounded-xl sm:min-h-0 ${
                  i === 0 ? "sm:flex-4" : "sm:flex-3"
                }`}
              >
                <Image
                  src={s.image}
                  alt={s.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 35vw"
                />

                {/* Bottom gradient for text readability */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />

                {/* Label + arrow */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-5">
                  <span className="text-2xl font-bold text-white">
                    {s.label}
                  </span>
                  <div className="flex size-8 shrink-0 items-center justify-center rounded bg-white shadow-sm">
                    <ArrowIcon />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
