import Image from "next/image";
type HeroProps = {
  keyword: string;
  onKeywordChange: (value: string) => void;
  onSearch: () => void;
};

export default function Hero({
  keyword,
  onKeywordChange,
  onSearch,
}: HeroProps) {
  return (
    <section className="s-hero-blog bg-gradientbg relative overflow-hidden py-10 lg:py-32">
      <Image
        src={"/cube-left-hero-blog.png"}
        width={327}
        height={325}
        alt=""
        className="absolute -bottom-10 -left-10 opacity-40 max-lg:hidden pointer-events-none"
      />
      <Image
        src={"/hero-cube-blog-top-right.png"}
        width={376}
        height={368}
        alt=""
        className="absolute w-full max-w-94 h-92 -top-30 -right-30  max-lg:hidden pointer-events-none"
      />
      <Image
        src={"/hero-cube-blog-bottom-right.png"}
        width={376}
        height={368}
        alt=""
        className="absolute w-full max-w-86.25 h-81 -bottom-10 -right-10  max-lg:hidden pointer-events-none"
      />
      <div className="container">
        <div className="flex flex-col items-center gap-10 lg:gap-14">
          {/* Heading */}
          <h1 className="text-center text-[clamp(32px,4vw,48px)] max-sm:text-[28px] leading-tight text-greyPrimary">
            Suporte completo para resolver <br className="hidden sm:block" />
            <strong className="font-medium">desafios públicos</strong> com
            inovação.
          </h1>

          {/* Search bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSearch();
            }}
            className="flex w-full max-w-200 flex-col items-center gap-4 sm:flex-row"
          >
            <div className="flex max-sm:w-full py-3 flex-1 items-center rounded bg-white px-4 shadow-[0px_2px_10px_0px_rgba(0,0,0,0.16)]">
              <span className="font-light text-greyPrimary">Status</span>
            </div>

            <input
              type="text"
              value={keyword}
              onChange={(e) => onKeywordChange(e.target.value)}
              placeholder="Palavras-chaves"
              className="max-sm:w-full py-3 inline-block flex-1 rounded  bg-white px-4 font-light text-black placeholder:text-greyPrimary shadow-[0px_2px_10px_0px_rgba(0,0,0,0.16)] outline-none"
            />

            <button
              type="submit"
              className="flex h-12 w-12 shrink-0 items-center justify-center max-sm:self-start self-end rounded cursor-pointer transition-opacity hover:opacity-90 sm:self-auto"
              aria-label="Buscar"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
