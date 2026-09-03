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

## Security checks

Gitleaks scans pushes, pull requests, and manually requested runs, including all fetched Git history. The Pages workflow requires the scan to pass before building and deploying. Findings are redacted in logs; automatic PR comments and report uploads are disabled. The Gitleaks action is free for personal repositories; moving this repository to an organization requires reviewing its licensing setup.

External workflow actions are pinned to verified commit hashes. Review upstream changes before updating these pins. Checkouts do not retain GitHub credentials for subsequent steps.

Local environment files and common private-key/credential files are ignored. Ignore rules do not protect already tracked files. If a real secret is detected, revoke or rotate it immediately; deleting it from the latest file does not remove it from Git history. Only `dist/client` should be published: generated `dist/server` files may contain prerender secrets.

These checks run after a push; they do not prevent a secret from reaching GitHub. Requiring the secret-scan status before merging and enabling GitHub push protection are separate repository settings.
