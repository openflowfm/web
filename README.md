# open[flow] web

The open[flow] marketing site: small and static, in the "Signal" design, which wears the visual[flow] teaser's identity. visual[flow] and its teaser on the first screen, the three apps below it. No framework, build step, dependencies or remotely loaded fonts.

## Local preview

Requires Node.js 22 or newer.

```sh
npm run dev
```

It listens on `PORT` when set (a launcher such as `.claude/launch.json` with `autoPort` sets it), otherwise on a free port from the OS, and prints the URL. The local server binds to loopback only.

## Edit and check

- `dist/index.html` contains the page content and native About disclosure.
- `dist/styles.css` contains the responsive layout and theme.
- `dist/assets/openflow-mark.svg` is the open[flow] mark (ink brackets, lime wave), used in the header and as the favicon.
- `dist/assets/fonts/` holds Space Grotesk (400, 500, 700) and JetBrains Mono (400, 500), Latin woff2 from Fontsource, with their SIL Open Font Licence texts.
- `dist/assets/homepage-concept.png` is the supplied concept used for labelled product preview panels.
- `dist/assets/video/` holds the visual[flow] teaser as served on the page: 1080p (~15 MB) and a 720×1280 vertical cut (~12 MB), two-pass H.264 with `+faststart`, a poster frame, and `visual-flow-still.jpg` (a frame from the drop) for the visual[flow] card.
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

Capabilities come from each app's own repository, and each app card links there: [openflowfm/set](https://github.com/openflowfm/set), [openflowfm/visuals](https://github.com/openflowfm/visuals) and [openflowfm/mix](https://github.com/openflowfm/mix). The About section links to the visual[flow] engine notes. visual[flow] is marked "Source on GitHub" because its source is public and builds, and its button reads "Explore the Source"; set[flow] and mix[flow] are marked "Coming Soon". The site makes no release or download claims beyond that.

The copy tells one story, the "Second Life" voice: the visualizer that lit up 2001, rebuilt 25 years later for the stage. The first screen leads with what's out: a status line, visual[flow] as the headline, the pitch, a lime "Explore the Source" pill and a "Meet the Suite" link, with the teaser beside it, playing muted (started from script, and not at all for visitors who ask for reduced motion). The teaser is sized to the viewport's height, so the whole film is in view without scrolling at 1080p (1920×930 inside the browser: 1040×585, ending 734 px down, with the suite heading peeking at 882) and on a 1366×680 laptop (755×425); below 960 px wide the film comes first, full width. The suite row below, "The Whole Flow", shows the three apps as panels, each with its channel colour on its `[flow]`; the two to come carry a hatch over their concept preview that lifts on hover.

The "Signal" design came from a design review that moved the site off amber and onto the teaser's identity; the copy from a copy review that picked the heritage story. Product panels use CSS viewports into the supplied concept image, with visible Concept preview labels; they are not actual app screenshots. Research included [Siteinspire](https://www.siteinspire.com/), [teenage engineering](https://teenage.engineering/products) and [Smörgåsbord](https://smorgasbord.studio/). Their product focus and quiet navigation informed the direction; no layouts or assets were copied.

The visual[flow] teaser is real footage, not a concept: every frame is drawn by the visual[flow] engine from the music, and the edit is made in Remotion. Its source, cut lists and how to re-render it are in [openflowfm/visuals `teaser/`](https://github.com/openflowfm/visuals/tree/main/teaser). The presets it shows are from the Cream of the Crop MilkDrop pack, by their authors. The music is a placeholder beat until there is a real track.

## Licence

MIT; see [LICENSE](LICENSE).
