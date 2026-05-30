
## Voxo Media Website — Build Plan

A 5-page marketing site for Voxo Media matching the uploaded references: bold black display type, vibrant pink → orange → purple → blue gradients, vaporwave/Greek-statue collage aesthetic, and lots of generated hero imagery.

### Pages (TanStack Start routes)
1. `/` — Home (`A NEW ATTITUDE` hero, We Build Iconic services grid, stats bar, Featured Work carousel, Let's Build CTA + newsletter, footer)
2. `/services` — `We Don't Sell Services` hero, 6 numbered service cards, How We Work 5-step timeline, Industries strip, Brands marquee, CTA
3. `/about` — `Built To Move Culture` hero, Manifesto with collage, "People Don't Remember Ads" section, What Builds a Voxo Brand (5 cards), Brands strip, CTA
4. `/work` (Culture page in mockup) — `Culture Looks Different` hero, 8 industry case-study cards, Featured Work Across Industries carousel, Iconic Impact + CTA
5. `/culture` (Work/team page in mockup) — `The People Who Make It Iconic` hero, Management cards, Department Leads, The Team grid, Frooti CHO card, Culture Snapshots + Join CTA

Shared: sticky top nav with Voxo Media logo + WORK / SERVICES / ABOUT / CULTURE / INSIGHTS / CONTACT + LET'S CREATE button, and shared footer.

### Design system (src/styles.css)
- Fonts: Archivo Black (display) + Inter (body) + Caveat (handwritten accents)
- Tokens (oklch): pink `#ff2d87`, orange, purple, cyan accents; `--gradient-rainbow` for headline text; `--background` warm off-white `#fcfbf8`; dark band `#0a0a0a`
- Reusable utilities: `.text-gradient-rainbow`, `.btn-pink`, scribble underline SVG, ticker/marquee, glitch card

### Imagery (generated via imagegen, saved to src/assets/)
Roughly 25 images — statue-with-sunglasses collages, bubblegum hero, megaphone statue, team portraits, case-study thumbnails, etc. Generated in parallel batches with `standard` quality. Real PNGs, no placeholders.

### Components
`Nav`, `Footer`, `LetsCreateCTA`, `ServiceCard`, `StatBar`, `WorkCard`, `TeamCard`, `IndustryCard`, `BrandsMarquee`, `ProcessTimeline`.

### Technical notes
- File-based routes in `src/routes/` (flat naming)
- Each route sets unique `head()` meta
- Framer Motion for hero/scroll reveal animations
- Per-route loaders not required (static content)

### Out of scope
Insights and Contact pages aren't in the mockups — nav links will route to anchors / placeholder routes (or `/insights`, `/contact` minimal stubs) unless you say otherwise.

### Open question
The mockups are visually dense with custom collage art. Generating all ~25 hero/card images at `standard` quality is the right move for fidelity but takes a few minutes. Confirm you want full image generation (vs. CSS-only placeholders) before I start.
