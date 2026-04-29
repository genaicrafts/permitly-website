# Permitly — Product Website

Static product/marketing/legal site for the Permitly DMV permit prep app, served at [dmvpermitly.com](https://dmvpermitly.com).

Built with [Astro](https://astro.build/) + [Tailwind CSS v4](https://tailwindcss.com/). No client-side JavaScript framework, no analytics, no cookies. Hosted on Cloudflare Workers Static Assets.

Operated by [GEN AICRAFTS LLC](https://www.genaicrafts.com).

## Stack

- Astro 6 (static output)
- Tailwind CSS 4 via `@tailwindcss/vite`
- TypeScript strict
- Node 22+
- Deployed via `npx wrangler deploy` (config: `wrangler.jsonc`)

## Local development

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to ./dist
npm run preview   # preview the production build locally
```

## Where things live

| What | Where |
|------|-------|
| Pages (one file per route) | `src/pages/` |
| Shared layout | `src/layouts/BaseLayout.astro` |
| Header / Footer | `src/components/` |
| Company info (LLC) | `src/data/company.ts` |
| Product info (Permitly) | `src/data/product.ts` |
| Global styles (`@import "tailwindcss"`) | `src/styles/global.css` |
| Static assets | `public/` |
| Cloudflare deploy config | `wrangler.jsonc` |

**To change company info, edit `src/data/company.ts`. To change product info (states, languages, subscription, legal version), edit `src/data/product.ts`. Don't hard-code those anywhere else.**

## Legal docs

`src/pages/privacy.astro` and `src/pages/terms.astro` mirror the in-app v1.0 documents at `<DMV_app>/content/legal/`, bumped to v1.1 with company info and corrected contact details. When updating either:

1. Bump version in `src/data/product.ts` `legalDocsVersion`.
2. Update text in the page file.
3. Keep the in-app v1.0 HTML and this v1.1 web version in sync — divergence between what the app says and what the website says is a compliance risk.

## Deployment — Cloudflare

Push to GitHub → Cloudflare Workers & Pages auto-builds. See the unified Workers Static Assets flow with framework preset Astro. Custom domains: `dmvpermitly.com` + `www.dmvpermitly.com`.
