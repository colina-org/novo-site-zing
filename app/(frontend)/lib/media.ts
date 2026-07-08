// Módulo client-safe: helpers e tipos de view SEM imports do Payload
// (não pode importar "payload"/"@payload-config", senão vaza para o bundle do cliente).

/** Extrai a URL pública (R2) de um campo de upload (media). */
export const mediaUrl = (m: unknown): string =>
  m && typeof m === "object" && "url" in m
    ? ((m as { url?: string }).url ?? "")
    : "";

/** Alt de um campo de upload (media). */
export const mediaAlt = (m: unknown): string =>
  m && typeof m === "object" && "alt" in m
    ? ((m as { alt?: string }).alt ?? "")
    : "";

export type ProgramView = {
  slug: string;
  category: string;
  title: string;
  description: string;
  badge: string;
  image: string;
  href: string;
  content: string[];
  inscricoes?: string;
  inscricoesLink?: string;
  avaliacoes: { label: string; period: string }[];
  videos: { title: string; url?: string }[];
  anexos: { title: string; url?: string }[];
};

export type ClientView = { src: string; alt: string; invert: boolean };

export type TestimonialView = {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  rating: number;
};

export type FaqView = { question: string; answer: string };

export type CaseView = {
  title: string;
  badge?: string;
  description?: string;
  image: string;
};
