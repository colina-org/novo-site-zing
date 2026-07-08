import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

import { getPayload } from "payload";
import config from "@payload-config";

import { homeData } from "./homeData";
import { seedData } from "./data";
import { mdToLexical } from "./lexical";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(dirname, "../../public");

const run = async () => {
  const payload = await getPayload({ config });

  // ── Helpers ────────────────────────────────────────────────
  const rt = (md?: string) => (md ? mdToLexical(md) : undefined);

  const mediaCache = new Map<string, number>();
  const uploadMedia = async (
    publicPath?: string,
    alt = "",
  ): Promise<number | undefined> => {
    if (!publicPath) return undefined;
    if (mediaCache.has(publicPath)) return mediaCache.get(publicPath);
    const filePath = path.join(PUBLIC_DIR, publicPath);
    if (!fs.existsSync(filePath)) {
      payload.logger.warn(`Arquivo não encontrado, ignorando: ${publicPath}`);
      return undefined;
    }
    const doc = await payload.create({
      collection: "media",
      data: { alt: alt || path.basename(publicPath) },
      filePath,
    });
    mediaCache.set(publicPath, doc.id as number);
    return doc.id as number;
  };

  const buildHero = async (h: any) => ({
    title: rt(h.title),
    description: rt(h.description),
    cta: h.cta,
    imageDesktop: await uploadMedia(h.imageDesktop, "Hero"),
    imageTablet: await uploadMedia(h.imageTablet),
    imageMobile: await uploadMedia(h.imageMobile),
  });

  const buildCards = async (cards: any[]) =>
    Promise.all(
      cards.map(async (c) => ({
        image: await uploadMedia(c.image, c.title),
        title: c.title,
        description: c.description,
      })),
    );

  // clients catalog resolvido por src (único)
  const clientIdBySrc = new Map<string, number>();
  const ensureClient = async (
    src: string,
    alt: string,
    invert = false,
    order = 999,
  ): Promise<number | undefined> => {
    if (clientIdBySrc.has(src)) return clientIdBySrc.get(src);
    const logo = await uploadMedia(src, alt);
    const doc = await payload.create({
      collection: "clients",
      data: { alt, logo, invert, order },
    });
    clientIdBySrc.set(src, doc.id as number);
    return doc.id as number;
  };
  const clientRefs = async (list: any[]) => {
    const ids: number[] = [];
    for (const c of list) {
      const id = await ensureClient(c.src, c.alt);
      if (id) ids.push(id);
    }
    return ids;
  };

  // ── Limpeza (idempotência) ─────────────────────────────────
  const whereAll = { id: { exists: true } } as const;
  for (const col of [
    "programs",
    "testimonials",
    "faqs",
    "case-studies",
    "clients",
    "media",
  ] as const) {
    await payload.delete({ collection: col, where: whereAll });
  }
  payload.logger.info("Coleções limpas. Iniciando seed…");

  // ── Clients (catálogo: home 21 + logos próprios das páginas) ─
  let ci = 0;
  for (const c of homeData.clients) {
    await ensureClient(c.src, c.alt, (c as any).invert ?? false, ci++);
  }

  // ── Testimonials ───────────────────────────────────────────
  let ti = 0;
  for (const t of homeData.testimonials) {
    await payload.create({
      collection: "testimonials",
      data: {
        name: t.name,
        role: t.role,
        company: t.company,
        quote: t.quote,
        image: await uploadMedia(t.image, t.name),
        rating: t.rating ?? 5,
        order: ti++,
      },
    });
  }

  // ── FAQs (por grupo) ───────────────────────────────────────
  const seedFaqs = async (group: string, faqs: any[]) => {
    let o = 0;
    for (const f of faqs) {
      await payload.create({
        collection: "faqs",
        data: { group, question: f.question, answer: f.answer, order: o++ },
      });
    }
  };
  await seedFaqs("home", homeData.faqs);
  await seedFaqs("cpsi", (seedData.cpsi as any).faqs);
  await seedFaqs("inovacao", seedData.inovacao.faqs);
  await seedFaqs("hubs", seedData.hubs.faqs);
  await seedFaqs("desafios", seedData.desafios.faqs);

  // ── Case studies (por grupo) ───────────────────────────────
  const seedCases = async (group: string, cases: any[]) => {
    let o = 0;
    for (const c of cases) {
      await payload.create({
        collection: "case-studies",
        data: {
          group,
          title: c.title,
          badge: c.badge,
          description: c.description,
          image: await uploadMedia(c.image, ""),
          order: o++,
        },
      });
    }
  };
  await seedCases("cpsi", seedData.caseStudies.cpsi);
  await seedCases("programas", seedData.caseStudies.programas);
  await seedCases("sobre", seedData.caseStudies.sobre);

  // ── Programs ───────────────────────────────────────────────
  for (const p of seedData.programs as any[]) {
    await payload.create({
      collection: "programs",
      data: {
        slug: p.slug,
        category: p.category,
        title: p.title,
        description: p.description,
        badge: p.badge,
        image: await uploadMedia(p.image, p.title),
        content: (p.content ?? []).map((text: string) => ({ text })),
        inscricoes: p.inscricoes,
        inscricoesLink: p.inscricoesLink,
        avaliacoes: p.avaliacoes ?? [],
        videos: p.videos ?? [],
        anexos: p.anexos ?? [],
      },
    });
  }

  // ── Globals: layout/compartilhados ─────────────────────────
  await payload.updateGlobal({
    slug: "site-settings",
    data: {
      defaultTitle:
        "Zing Innovation by IEBT — Plataforma de inovação para o setor público",
      titleTemplate: "%s | Zing Innovation",
      description:
        "Plataforma completa de inovação para os setores público e privado. Gestão de editais CPSI, inovação aberta, hubs e desafios de intraempreendedorismo.",
      keywords: [
        "Zing",
        "IEBT",
        "inovação",
        "CPSI",
        "inovação aberta",
        "hubs de inovação",
        "intraempreendedorismo",
        "setor público",
        "startups",
      ].map((value) => ({ value })),
    },
  });

  await payload.updateGlobal({
    slug: "header",
    data: {
      logo: await uploadMedia(seedData.header.logo, "Zing"),
      serviceItems: seedData.header.serviceItems,
      sectorItems: seedData.header.sectorItems,
      contentItems: seedData.header.contentItems,
      navItems: seedData.header.navItems,
      loginCta: seedData.header.loginCta,
      demoCta: seedData.header.demoCta,
      assistantCta: seedData.header.assistantCta,
    },
  });

  await payload.updateGlobal({
    slug: "footer",
    data: {
      logoZing: await uploadMedia(seedData.footer.logoZing, "Zing"),
      logoIebt: await uploadMedia(seedData.footer.logoIebt, "IEBT"),
      address: seedData.footer.address,
      copyright: seedData.footer.copyright,
      socials: seedData.footer.socials.map((s) => ({
        network: s.network.toLowerCase(),
        url: s.url,
      })),
    },
  });

  await payload.updateGlobal({
    slug: "community-banner",
    data: {
      title: rt(homeData.community.title),
      description: rt(homeData.community.description),
      cta: homeData.community.cta,
    },
  });

  // ── Global: Home ───────────────────────────────────────────
  await payload.updateGlobal({
    slug: "home-page",
    data: {
      hero: await buildHero(homeData.hero),
      clientsTitle: rt(homeData.clientsTitle),
      servicesSection: {
        label: homeData.servicesSection.label,
        title: rt(homeData.servicesSection.title),
        description: rt(homeData.servicesSection.description),
        services: await Promise.all(
          homeData.servicesSection.services.map(async (s) => ({
            title: s.title,
            description: s.description,
            image: await uploadMedia(s.image, s.title),
          })),
        ),
      },
      solutionsSection: {
        label: homeData.solutionsSection.label,
        title: rt(homeData.solutionsSection.title),
        solutions: await Promise.all(
          homeData.solutionsSection.solutions.map(async (s) => ({
            label: s.label,
            description: s.description,
            image: await uploadMedia(s.image, s.label),
            href: s.href,
          })),
        ),
      },
      programsTitle: rt(homeData.programsTitle),
      testimonialsTitle: rt(homeData.testimonialsTitle),
      faqTitle: rt(homeData.faqTitle),
    },
  });

  // ── Global: Sobre ──────────────────────────────────────────
  const sobre = seedData.sobre as any;
  await payload.updateGlobal({
    slug: "about-page",
    data: {
      historia: {
        title: rt(sobre.historia.title),
        description: rt(sobre.historia.description),
        bottomBadge: sobre.historia.bottomBadge,
        video: await uploadMedia(sobre.historia.video, "Vídeo"),
        timeline: sobre.historia.timeline,
        sectors: sobre.historia.sectors.map((name: string) => ({ name })),
      },
      oQueFazemos: {
        title: rt(sobre.oQueFazemos.title),
        description: rt(sobre.oQueFazemos.description),
        items: await buildCards(sobre.oQueFazemos.items),
      },
      casesDestaque: {
        label: sobre.casesDestaque.label,
        title: rt(sobre.casesDestaque.title),
        description: rt(sobre.casesDestaque.description),
      },
      proximoPasso: {
        title: rt(sobre.proximoPasso.title),
        cta: sobre.proximoPasso.cta,
        stats: sobre.proximoPasso.stats,
      },
      iebt: {
        label: sobre.iebt.label,
        title: rt(sobre.iebt.title),
        description: rt(sobre.iebt.description),
        backgroundImage: await uploadMedia(sobre.iebt.backgroundImage, "IEBT"),
        cta: sobre.iebt.cta,
        stats: sobre.iebt.stats,
      },
    },
  });

  // ── Global: CPSI ───────────────────────────────────────────
  const cpsi = seedData.cpsi as any;
  await payload.updateGlobal({
    slug: "cpsi-page",
    data: {
      hero: await buildHero(cpsi.hero),
      clientsTitle: rt(cpsi.clientsTitle),
      clients: await clientRefs(cpsi.clients),
      about: {
        title: rt(cpsi.about.title),
        description: rt(cpsi.about.description),
        backgroundImage: await uploadMedia(cpsi.about.backgroundImage),
      },
      callsSection: {
        title: rt(cpsi.calls.title),
        description: rt(cpsi.calls.description),
        steps: await buildCards(cpsi.calls.steps),
      },
      quizSection: {
        title: rt(cpsi.quiz.title),
        description: rt(cpsi.quiz.description),
        backgroundImage: await uploadMedia(
          "/cpsi/bg-container-steps-teste.svg",
        ),
        steps: cpsi.quiz.steps.map((s: any) => ({
          kind: s.kind,
          question: s.question,
          helper: s.helper,
          options: (s.options ?? []).map((value: string) => ({ value })),
        })),
      },
      whenCpsi: {
        title: rt(cpsi.whenCpsi.title),
        bullets: cpsi.whenCpsi.bullets.map((text: string) => ({ text })),
        image: await uploadMedia(cpsi.whenCpsi.image),
        ebookCta: cpsi.whenCpsi.ebookCta,
      },
      whyUse: {
        title: rt(cpsi.whyUse.title),
        cards: await buildCards(cpsi.whyUse.cards),
      },
      casesSection: {
        title: rt(cpsi.casesHeader.title),
        description: rt(cpsi.casesHeader.description),
      },
      faqTitle: rt(cpsi.faqTitle),
    },
  });

  // ── Global: Programas ──────────────────────────────────────
  await payload.updateGlobal({
    slug: "programas-page",
    data: {
      searchTitle: rt(seedData.programas.searchTitle),
      casesSection: {
        title: rt(seedData.programas.casesHeader.title),
        description: rt(seedData.programas.casesHeader.description),
      },
    },
  });

  // ── Globals: páginas temáticas ─────────────────────────────
  const seedThematic = async (slug: string, d: any) => {
    await payload.updateGlobal({
      slug,
      data: {
        hero: await buildHero(d.hero),
        clientsTitle: rt(d.clientsTitle),
        clients: await clientRefs(d.clients),
        about: {
          title: rt(d.about.title),
          description: rt(d.about.description),
          backgroundImage: await uploadMedia(d.about.backgroundImage),
        },
        whyZing: {
          title: rt(d.whyZing.title),
          description: rt(d.whyZing.description),
          cards: await buildCards(d.whyZing.cards),
        },
        ...(d.caseSandbox
          ? {
              caseSandbox: {
                title: rt(d.caseSandbox.title),
                description: rt(d.caseSandbox.description),
                image: await uploadMedia(d.caseSandbox.image),
                cta: d.caseSandbox.cta,
              },
            }
          : {}),
        faqTitle: rt(d.faqTitle),
      },
    });
  };
  await seedThematic("inovacao-aberta-page", seedData.inovacao);
  await seedThematic("gestao-hubs-page", seedData.hubs);
  await seedThematic("desafios-page", seedData.desafios);

  // ── Global: Contato ────────────────────────────────────────
  await payload.updateGlobal({
    slug: "contato-page",
    data: {
      title: rt(seedData.contato.title),
      description: rt(seedData.contato.description),
      cargoOptions: seedData.contato.cargoOptions,
      servicoOptions: seedData.contato.servicoOptions,
      contatoOptions: seedData.contato.contatoOptions,
    },
  });

  process.stdout.write("\n✅ Seed concluído com sucesso.\n");
  await new Promise((r) => setTimeout(r, 200));
  process.exit(0);
};

run().catch((err) => {
  console.error("❌ Erro no seed:", err);
  process.exit(1);
});
