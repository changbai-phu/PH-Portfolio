# Peiqi Hu's Portfolio

Scientific Notebook portfolio built with React, TypeScript, Vinext, and Tailwind CSS.

Website: https://changbai-phu.github.io/PH-Portfolio/

## Local development

Use Node.js 24 and pnpm 10.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Publishing

GitHub Actions builds and publishes each push to `main`. In repository Settings → Pages, the source is **GitHub Actions**.

```sh
GITHUB_PAGES=true pnpm build
```

The static site is exported to `dist/client`, with assets rooted at `/PH-Portfolio/`. Without `GITHUB_PAGES=true`, development uses `/`.

Edit `app/page.tsx` for the main copy, `app/globals.css` for styles, and `components/` for interactive sections. The résumé, favicon, and social image are in `public/`.
