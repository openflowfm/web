# open[flow] web

The open[flow] marketing site: a small, static proof of concept based on the user-selected original A / After dark concept. Pure black, ivory typography, an amber filament wave and three product previews. No framework, build step, dependencies or remotely loaded fonts.

## Local preview

Requires Node.js 22 or newer.

```sh
npm run dev
```

Open http://127.0.0.1:5678. Set `PORT` to use another port. The local server binds to loopback only.

## Edit and check

- `dist/index.html` contains the page content and native About disclosure.
- `dist/styles.css` contains the responsive layout and theme.
- `dist/assets/openflow-mark.png` is the selected open[flow] logo.
- `dist/assets/amber-wave.png` is the standalone hero artwork.
- `dist/assets/homepage-concept.png` is the supplied concept used for labelled product preview panels.

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

The selected original A proposal uses bold typography, a flowing amber hero and three product columns. The wave is a standalone generated asset. Product panels use CSS viewports into the supplied concept image, with visible Concept preview labels; they are not actual app screenshots. Research included [Siteinspire](https://www.siteinspire.com/), [teenage engineering](https://teenage.engineering/products) and [Smörgåsbord](https://smorgasbord.studio/). Their product focus and quiet navigation informed the direction; no layouts or assets were copied.
