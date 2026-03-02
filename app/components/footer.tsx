import Image from "next/image";
import Link from "next/link";

function FacebookIcon() {
  return (
    <svg
      width="7"
      height="14"
      viewBox="0 0 7 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.5 5H6.5L6 7.5H4.5V14H2V7.5H0.5V5H2V3.5C2 1.567 3.067 0.5 5 0.5H6.5V3H5C4.724 3 4.5 3.224 4.5 3.5V5Z"
        fill="white"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0.5 1.5C0.5 0.948 0.948 0.5 1.5 0.5H2.5C3.052 3.5 0.948 3.5 2.5 3.5H1.5C0.948 3.5 0.5 3.052 0.5 2.5V1.5ZM0.5 5H3.5V14.5H0.5V5ZM5.5 5H8.5V6.5C9 5.5 10.5 4.5 12 4.5C14.5 4.5 15.5 6 15.5 8.5V14.5H12.5V9.5C12.5 8 12 7 10.5 7C9 7 8.5 8 8.5 9.5V14.5H5.5V5Z"
        fill="white"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        rx="4"
        stroke="white"
        strokeWidth="1.5"
      />
      <circle cx="8" cy="8" r="3" stroke="white" strokeWidth="1.5" />
      <circle cx="12" cy="3.5" r="1" fill="white" />
    </svg>
  );
}

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex size-8.5 shrink-0 items-center justify-center rounded bg-linear-to-br from-[#9500FF] to-[#35005A] transition-opacity hover:opacity-80"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#f9f2ff]">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col gap-10">
          {/* Footer Links Row */}
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
            {/* Left: Logos + Social */}
            <div className="flex flex-col gap-10">
              {/* Logos */}
              <div className="flex items-center gap-4">
                <Link href="/" aria-label="Zing - Página inicial">
                  <Image
                    src="/zing-logo.png"
                    alt="Zing"
                    width={112}
                    height={50}
                    priority
                  />
                </Link>

                <div className="w-px self-stretch bg-[rgba(196,197,198,0.6)]" />

                <Image
                  src="/iebt-logo.png"
                  alt="IEBT Innovation"
                  width={107}
                  height={50}
                />
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <SocialButton href="#" label="Facebook">
                  <FacebookIcon />
                </SocialButton>
                <SocialButton href="#" label="LinkedIn">
                  <LinkedInIcon />
                </SocialButton>
                <SocialButton href="#" label="Instagram">
                  <InstagramIcon />
                </SocialButton>
              </div>
            </div>

            {/* Right: Address */}
            <div className="w-full max-w-60">
              <p className="text-base font-medium text-black">
                IEBT Innovation
              </p>
              <p className="text-sm font-normal text-black">
                R. Professor José Vieira de Mendonça, 770 Belo Horizonte - MG
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[rgba(196,197,198,0.4)]" />

          {/* Copyright */}
          <p className="text-sm font-normal text-black/80">
            © 2025 ZING. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
