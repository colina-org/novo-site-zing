// Revalida o cache do Next quando qualquer conteúdo muda no admin.
// Import dinâmico de next/cache para não quebrar comandos de CLI
// (generate:types / seed) que rodam fora do runtime do Next.

const revalidateSite = async () => {
  try {
    const { revalidatePath } = await import("next/cache");
    // Revalida todas as rotas sob o layout raiz do site.
    revalidatePath("/", "layout");
  } catch {
    // Fora do contexto do Next (CLI) — ignora.
  }
};

// Hook para collections (afterChange / afterDelete).
export const revalidateCollection = async ({ doc }: { doc: unknown }) => {
  await revalidateSite();
  return doc;
};

// Hook para globals (afterChange).
export const revalidateGlobal = async ({ doc }: { doc: unknown }) => {
  await revalidateSite();
  return doc;
};
