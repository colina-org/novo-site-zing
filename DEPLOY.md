# Deploy na Vercel — Zing (Next.js + Payload CMS)

## Variáveis de ambiente (Vercel → Project → Settings → Environment Variables)

Adicione em **Production** (e Preview, se usar):

| Variável | Observação |
|---|---|
| `DATABASE_URI` | Supabase **Transaction pooler (porta 6543)** — recomendado p/ serverless. Senha com `/` deve ser URL-encoded (`%2F`). |
| `PAYLOAD_SECRET` | Mesma secret usada localmente. |
| `S3_BUCKET` | `iebt-zing` |
| `S3_ENDPOINT` | `https://<ACCOUNT_ID>.r2.cloudflarestorage.com` |
| `S3_ACCESS_KEY_ID` | Token R2 (Object Read & Write). |
| `S3_SECRET_ACCESS_KEY` | Token R2. |
| `S3_REGION` | `auto` |
| `NEXT_PUBLIC_R2_PUBLIC_URL` | URL pública do bucket (r2.dev ou domínio). **Precisa existir no build** (usada no `next.config` p/ `images.remotePatterns`). |
| `NEXT_PUBLIC_SITE_URL` | URL final do site (ex.: `https://zing.vercel.app` ou domínio próprio) — usada em `metadataBase`/canonical. |
| `SMTP_HOST` `SMTP_PORT` `SMTP_USER` `SMTP_PASSWORD` `SMTP_FROM` `CONTATO_TO` | Formulário de contato (Nodemailer). |

> Após adicionar/alterar variáveis, faça um **Redeploy** para elas valerem.

## Banco (Supabase) — pooler

- **Produção (Vercel/serverless):** use o **Transaction pooler (6543)**. O Supavisor multiplexa conexões e suporta prepared statements — funciona com o Payload/Drizzle.
- **Local (dev):** o `.env.local` usa o **Session pooler (5432)**, que permite o `push` de schema no `next dev`.

## Schema

O schema é sincronizado via **push** do Payload durante o `next dev` (mesmo banco Supabase de produção). Portanto:

> ⚠️ Sempre que mudar um Collection/Global, rode o `npm run dev` localmente **uma vez** (para o push atualizar o Supabase) **antes** de fazer deploy do código que depende do novo campo.

(Evolução futura: migrar para migrations do Payload — `payload migrate:create` / `migrate` — para não depender de push.)

## Revalidação

As páginas são estáticas e revalidadas **on-demand**: qualquer alteração salva no `/admin` dispara `revalidatePath("/", "layout")` (hook em `payload/hooks/revalidate.ts`), atualizando o site publicado.

## Seed (só 1x, já executado)

`npm run seed` — popula o conteúdo inicial e sobe as imagens para o R2. Não precisa rodar de novo (é idempotente, mas recria tudo).

## Comandos

```bash
npm run dev      # dev (push de schema + hot reload)
npm run build    # build de produção
npm run seed     # popular conteúdo inicial (tsx --env-file=.env.local)
npm run generate:types      # regenerar payload-types.ts
npm run generate:importmap  # regenerar import map do admin
```
