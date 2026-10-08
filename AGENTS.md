# web

This repository is the open[flow] marketing site, deployed to GitHub Pages.

- Keep it static and dependency-free unless a requested capability needs more.
- Authored public files live in `dist/`; only that directory is deployed.
- Keep local asset links relative for the `/web/` Pages path.
- Keep the user-selected "Signal" design (it replaced the amber "After dark" one): near-black and cool greys, lime `#c8ff3e` used sparingly (main button, the `[flow]` of a name, the available dot, focus), self-hosted Space Grotesk with `[flow]` in JetBrains Mono, one channel colour per app (visual lime, set `#3ee8ff`, mix `#ff4fd8`). No amber, no wide-tracked all-caps labels.
- Copy follows the user-selected "Second Life" voice: the story from MilkDrop in 2001 to the stage. Story wins; propose a better story as options rather than drifting the voice. Headlines in Title Case, no stray commas.
- The first screen leads with the app that's out (visual[flow]) and its teaser; the whole teaser must be in view without scrolling at 1080p (about 1920×930 inside the browser). The other apps are teased below as Coming soon. Check both after any hero change.
- Ground product claims in current project documentation. Do not invent availability or testimonials. The supplied mockup panels are explicitly labelled Concept preview, never real screenshots.
- Keep content changes and README documentation together where relevant.
- Run `npm run check` before committing. This does not replace browser QA when requested.
- Every agent commit includes a blank line followed by a GitHub-compatible co-author trailer naming the agent that actually made it, e.g. `Co-authored-by: Codex <noreply@openai.com>` or `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`. Never name an agent that didn't write the commit.
