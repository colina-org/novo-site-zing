import { getPayload } from "payload";
import config from "@payload-config";
import { mediaUrl, mediaAlt } from "./media";
import type {
  ProgramView,
  ClientView,
  TestimonialView,
  FaqView,
  CaseView,
} from "./media";

// Re-exporta os helpers/tipos client-safe para conveniência server-side.
export { mediaUrl, mediaAlt };
export type {
  ProgramView,
  ClientView,
  TestimonialView,
  FaqView,
  CaseView,
};

// Instância única do Payload (Local API) reutilizada entre requisições.
let cached: ReturnType<typeof getPayload> | null = null;
export const getCms = () => (cached ??= getPayload({ config }));

const mapProgram = (p: Record<string, any>): ProgramView => ({
  slug: p.slug,
  category: p.category ?? "",
  title: p.title ?? "",
  description: p.description ?? "",
  badge: p.badge ?? "",
  image: mediaUrl(p.image),
  href: `/programas/${p.slug}`,
  content: (p.content ?? []).map((c: { text?: string }) => c.text ?? ""),
  inscricoes: p.inscricoes ?? undefined,
  inscricoesLink: p.inscricoesLink ?? undefined,
  avaliacoes: (p.avaliacoes ?? []).map((a: any) => ({
    label: a.label ?? "",
    period: a.period ?? "",
  })),
  videos: (p.videos ?? []).map((v: any) => ({ title: v.title ?? "", url: v.url })),
  anexos: (p.anexos ?? []).map((a: any) => ({ title: a.title ?? "", url: a.url })),
});

export const getPrograms = async (): Promise<ProgramView[]> => {
  const payload = await getCms();
  const res = await payload.find({
    collection: "programs",
    depth: 1,
    limit: 100,
    sort: "createdAt",
  });
  return res.docs.map(mapProgram);
};

export const getProgramBySlug = async (
  slug: string,
): Promise<ProgramView | null> => {
  const payload = await getCms();
  const res = await payload.find({
    collection: "programs",
    where: { slug: { equals: slug } },
    depth: 1,
    limit: 1,
  });
  return res.docs[0] ? mapProgram(res.docs[0] as Record<string, any>) : null;
};

export const getProgramSlugs = async (): Promise<string[]> => {
  const payload = await getCms();
  const res = await payload.find({
    collection: "programs",
    depth: 0,
    limit: 100,
    pagination: false,
  });
  return res.docs.map((d: Record<string, any>) => d.slug as string);
};

export const mapClient = (c: Record<string, any>): ClientView => ({
  src: mediaUrl(c.logo),
  alt: c.alt ?? mediaAlt(c.logo),
  invert: !!c.invert,
});
export const getClients = async (): Promise<ClientView[]> => {
  const payload = await getCms();
  const res = await payload.find({
    collection: "clients",
    depth: 1,
    limit: 200,
    sort: "order",
    pagination: false,
  });
  return res.docs.map((c) => mapClient(c as Record<string, any>));
};

export const getTestimonials = async (): Promise<TestimonialView[]> => {
  const payload = await getCms();
  const res = await payload.find({
    collection: "testimonials",
    depth: 1,
    limit: 100,
    sort: "order",
    pagination: false,
  });
  return res.docs.map((t: Record<string, any>) => ({
    name: t.name ?? "",
    role: t.role ?? "",
    company: t.company ?? "",
    quote: t.quote ?? "",
    image: mediaUrl(t.image),
    rating: t.rating ?? 5,
  }));
};

export const getFaqs = async (group: string): Promise<FaqView[]> => {
  const payload = await getCms();
  const res = await payload.find({
    collection: "faqs",
    where: { group: { equals: group } },
    depth: 0,
    limit: 100,
    sort: "order",
    pagination: false,
  });
  return res.docs.map((f: Record<string, any>) => ({
    question: f.question ?? "",
    answer: f.answer ?? "",
  }));
};

export const getCaseStudies = async (group: string): Promise<CaseView[]> => {
  const payload = await getCms();
  const res = await payload.find({
    collection: "case-studies",
    where: { group: { equals: group } },
    depth: 1,
    limit: 100,
    sort: "order",
    pagination: false,
  });
  return res.docs.map((c: Record<string, any>) => ({
    title: c.title ?? "",
    badge: c.badge ?? undefined,
    description: c.description ?? undefined,
    image: mediaUrl(c.image),
  }));
};

/** Busca um global por slug (depth 2 resolve media e relationships). */
export const getGlobal = async <T = Record<string, any>>(
  slug: Parameters<Awaited<ReturnType<typeof getPayload>>["findGlobal"]>[0]["slug"],
): Promise<T> => {
  const payload = await getCms();
  return (await payload.findGlobal({ slug, depth: 2 })) as T;
};
