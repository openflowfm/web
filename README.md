# open[flow] web

The open[flow] marketing site: a small, static proof of concept based on the product-journal design. Ivory, ink, serif headings and a diagram that explains local stem separation. No framework, build step, dependencies or remotely loaded fonts.

## Local preview

Requires Node.js 22 or newer.

```sh
npm run dev
```

Open http://127.0.0.1:5678. Set `PORT` to use another port. The local server binds to loopback only.

## Edit and check

- `dist/index.html` contains the page content and accessible stem diagram.
- `dist/styles.css` contains the responsive layout and theme.
- `dist/assets/openflow-mark.png` is the selected open[flow] logo.

```sh
npm run check
```

The check validates local asset references, section links, unique IDs and basic metadata. It is not a browser or accessibility audit.

## Deployment

GitHub Pages publishes `dist/` through `.github/workflows/pages.yml`. Pull requests run checks; pushes to `main` run checks and deploy. Pages must use **GitHub Actions** as its publishing source. No build dependencies or secrets are required; deployment uses GitHub's scoped workflow token.

Expected URL: https://openflowfm.github.io/web/

All local asset URLs are relative, so the site works under the `/web/` project path or at a custom-domain root. No custom domain is configured.

## Content and design

Capabilities come from the set[flow], visual[flow] and mix[flow] module documentation in [better-session-view](https://github.com/ryangavin/better-session-view). Product links currently lead to those modules; the site makes no release or download claims.

The chosen B2 proposal uses a restrained editorial hierarchy. Research included [Siteinspire](https://www.siteinspire.com/), [teenage engineering](https://teenage.engineering/products) and [Smörgåsbord](https://smorgasbord.studio/). Their product focus and quiet navigation informed the direction; no layouts or assets were copied.
