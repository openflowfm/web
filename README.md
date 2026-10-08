# open[flow] web

The open[flow] marketing site: a small, static proof of concept based on the user-selected original A / After dark concept. Pure black, ivory typography, an amber filament wave and three product previews. No framework, build step, dependencies or remotely loaded fonts.

## Local preview

Requires Node.js 22 or newer.

```sh
npm run dev
```

It listens on `PORT` when set (a launcher such as `.claude/launch.json` with `autoPort` sets it), otherwise on a free port from the OS, and prints the URL. The local server binds to loopback only.

## Edit and check

- `dist/index.html` contains the page content and native About disclosure.
- `dist/styles.css` contains the responsive layout and theme.
- `dist/assets/openflow-mark.png` is the selected open[flow] logo.
- `dist/assets/amber-wave.png` is the standalone hero artwork.
- `dist/assets/homepage-concept.png` is the supplied concept used for labelled product preview panels.
- `dist/assets/video/` holds the visual[flow] teaser as served on the page: 1080p (~15 MB) and a 720×1280 vertical cut (~12 MB), two-pass H.264 with `+faststart`, and a poster frame.
- `media/` holds the 1080p masters of the teaser (landscape and 1080×1920 vertical), in Git LFS. They aren't deployed.

```sh
npm run check
```

The check validates local asset references, section links, unique IDs and basic metadata. It is not a browser or accessibility audit.

## Deployment

GitHub Pages publishes `dist/` through `.github/workflows/pages.yml`. Pull requests run checks; pushes to `main` run checks and deploy. Pages must use **GitHub Actions** as its publishing source. No build dependencies or secrets are required; deployment uses GitHub's scoped workflow token.

URL: https://openflow.fm/ (the custom domain, set in the repo's Pages settings; with an
Actions-published site there is no `CNAME` file). https://openflowfm.github.io/web/
redirects there.

All local asset URLs are relative, so the site works at the domain root and under the
`/web/` project path alike.

DNS for `openflow.fm` (at Namecheap) points at GitHub Pages:

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (one record each) |
| AAAA | `@` | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` (one record each) |
| CNAME | `www` | `openflowfm.github.io.` |
| TXT | `_github-pages-challenge-openflowfm` | the value from the org's Pages settings, which verifies the domain for the openflowfm organisation |

Once the records resolve, GitHub issues the certificate and "Enforce HTTPS" can be turned
on in the repo's Pages settings.

## Content and design

Capabilities come from the set[flow], visual[flow] and mix[flow] module documentation in [better-session-view](https://github.com/ryangavin/better-session-view). The set[flow] and mix[flow] links currently lead to those modules; visual[flow] links to its own repository, [openflowfm/visuals](https://github.com/openflowfm/visuals). The site makes no release or download claims.

The selected original A proposal uses bold typography, a flowing amber hero and three product columns. The wave is a standalone generated asset. Product panels use CSS viewports into the supplied concept image, with visible Concept preview labels; they are not actual app screenshots. Research included [Siteinspire](https://www.siteinspire.com/), [teenage engineering](https://teenage.engineering/products) and [Smörgåsbord](https://smorgasbord.studio/). Their product focus and quiet navigation informed the direction; no layouts or assets were copied.

The visual[flow] teaser is real footage, not a concept: every frame is drawn by the visual[flow] engine from the music, and the edit is made in Remotion. Its source, cut lists and how to re-render it are in [openflowfm/visuals `teaser/`](https://github.com/openflowfm/visuals/tree/main/teaser). The presets it shows are from the Cream of the Crop MilkDrop pack, by their authors. The music is a placeholder beat until there is a real track, and the page says so.

## Licence

MIT; see [LICENSE](LICENSE).
