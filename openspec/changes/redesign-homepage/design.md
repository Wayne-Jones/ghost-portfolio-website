## Context

The GhostCMS-NextJS portfolio site currently renders a minimal placeholder homepage (`src/app/page.tsx` shows only `<Hero>` with the rest commented out), placeholder inner pages (`/portfolio`, `/photography`, `/blog` are bullet lists), and dead code (`src/components/Layout.tsx` uses Pages Router APIs incompatible with the App Router). The stack is Next.js 16 (Turbopack), Tailwind CSS v4 (tokens in `@theme`, not `tailwind.config.ts`), shadcn/ui on Radix with only `button` and `sheet` installed, and Ghost CMS as the content source via `@tryghost/content-api`. Storybook 10 is set up with `@storybook/nextjs-vite`, `addon-a11y`, `@chromatic/com/storybook`, and `@vueless/storybook-dark-mode`. The user wants a studio-craft portfolio aesthetic that avoids the "default shadcn / SaaS gradient" look, supports dark and light themes at WCAG 2.2 AAA contrast, and uses the View Transitions API for fluid navigation without adding framer-motion or splidejs.

## Goals / Non-Goals

**Goals:**
- Establish a composed, reusable component tree (Container, Section, DisplaySolid, DisplayGhost, WorkTile, PhotoMosaicTile, etc.) styled with Tailwind utilities only
- Adopt an adjusted color palette that meets WCAG 2.2 AAA contrast for body, muted, and accent text in both light and dark themes
- Build a Bazil-style asymmetric hero with trailing intro line, dual-weight display type (solid + ghost-outlined), 3:2 portrait photo, centered CTA overlay, and "based in New York, NY." anchor
- Install only the shadcn components needed (separator, navigation-menu, aspect-ratio, badge, skeleton, hover-card, tooltip, sonner) on Base UI primitives, and add an `imageGhost` Button variant
- Wire Next.js built-in View Transitions API (page-wide crossfade + shared-element transitions on portfolio tiles ↔ case study hero)
- Co-locate a Storybook story for every presentational component
- Refactor Ghost CMS helpers into typed, reusable functions
- Use placeholder images under `/public/placeholders/` during build; swap to real Ghost data with a one-attribute change per `<Image>` later

**Non-Goals:**
- Build a contact form (mailto link suffices for this change)
- Add framer-motion, splidejs, or other animation libraries
- Author custom component CSS classes (only `@theme` tokens, `@custom-variant dark`, and registered `@utility` rules in `globals.css`)
- Implement the full `/about`, `/photography`, and `/blog` page redesigns (those are future changes); only the portfolio case study page is in scope because it shares the `WorkTile` composition and View Transitions shared-element
- Migrate existing content to Ghost CMS (placeholder data only for now)

## Decisions

### Decision 1: Adjusted color palette for AAA contrast
The existing `--color-dark-purple: #4c20fe` and `--color-light-purple: #a994ff` fail WCAG 2.2 AAA contrast for body text in their respective themes. We adopt slightly adjusted values:

- Light theme: `bg #ffffff`, `fg #0a0a0b` (19.5:1), `muted #404046` (7.4:1), `accent #2b1bb5` (9.0:1)
- Dark theme: `bg #050507`, `fg #f2f2f5` (18.0:1), `muted #c2c2c8` (11:1), `accent #b9a3ff` (7.5:1)

**Alternatives considered:**
- Keep existing tokens, restrict accent to large display text only — limits design usage, defeats the "accent is the LED" principle
- Shift tint family (e.g. toward indigo) — unnecessary; the adjustment stays within the purple brand identity

### Decision 2: Tailwind-only styling; no custom component CSS classes
All components are styled via Tailwind utility classes in `className` strings. `globals.css` holds only `@theme` tokens, `@custom-variant dark`, registered `@utility` rules (`text-ghost`, `ease-studio`, `focus-ring`), and the `@media (prefers-reduced-motion: reduce)` guard. No `.hero`, `.cta-row`, or `.anchor` classes. Variants in `button.tsx` use Tailwind class strings via `cva`.

**Alternatives considered:**
- CSS Modules per component — adds file overhead, breaks the "read it in one place" principle, unnecessary on Tailwind v4
- Custom semantic class names (`.btn-primary`) — naming overhead, no benefit over utility composition

### Decision 3: Composition-first, small reusable components
Every visual surface builds from small primitives (`Container`, `Section`, `SectionDivider`, `DisplaySolid`, `DisplayGhost`, `Intro`, `Anchor`, `FocusRing`, `VisuallyHidden`) composed into larger sections (`Hero`, `SelectedWork`, `PhotoMosaic`, `LatestWriting`, `AboutTeaser`, `SiteHeader`, `SiteFooter`). Section sub-components (`WorkTile`, `PhotoMosaicTile`, `WritingItem`) are reusable on both the homepage and the portfolio index page.

**Alternatives considered:**
- Single monolithic `Hero.tsx` / `page.tsx` with all JSX inline — rejected because it blocks reuse and Storybook per-component stories

### Decision 4: Shadcn on Base UI primitives
Update `components.json` to point shadcn at Base UI primitives instead of Radix. Base UI is shadcn's recommended primitive layer as of the 2026-07 changelog. Install only the components needed for the homepage and portfolio case study; skip carousel, chart, command, accordion, sidebar.

**Alternatives considered:**
- Migrate to Park UI or Origin UI — rip-and-replace cost outweighs the benefit since shadcn is already set up and Base UI primitives are the same headless behaviors
- Stay on Radix defaults — the Base UI path is officially recommended and aligns with the "studio craft, not default shadcn" goal

### Decision 5: Next.js built-in View Transitions API
Wrap the root layout's children in `<ViewTransition>` from `next/view-transition`. Page-wide crossfade is free on every `<Link>` navigation. Shared-element transitions apply only between portfolio tiles and `/portfolio/[slug]` hero images via the Tailwind arbitrary value `[view-transition-name:hero-<slug>]`. A `@media (prefers-reduced-motion: reduce)` rule in `globals.css` disables view transitions for users who request reduced motion.

**Alternatives considered:**
- Manual `document.startViewTransition()` with route handler hijacking — rejected; bypasses Next.js's built-in progress and Suspense handling
- framer-motion page transitions — rejected per the user's no-extra-library constraint

### Decision 6: New `imageGhost` Button variant
Add a third variant to `buttonVariants` in `src/components/ui/button.tsx`: transparent idle background, `current/50` border, accent fill on hover, smaller padding (`px-5 py-2.5`), `rounded-md`, `transition-colors duration-300 ease-studio`. This matches the Bazil reference's CTA treatment over photographs.

**Alternatives considered:**
- Reuse the existing `outline` variant — its padding and hover behavior don't match the Bazil reference precisely

### Decision 7: `@utility` rules for cross-cutting tokens
Register three utilities in `globals.css`:
- `text-ghost` — `-webkit-text-stroke: 2px currentColor; color: transparent;` (used by `DisplayGhost`)
- `ease-studio` — `transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);` (the single site easing)
- `focus-ring` — `outline: 2px solid var(--color-accent); outline-offset: 2px;` (consistent AAA-compliant focus ring)

**Alternatives considered:**
- Inline arbitrary values everywhere (`[-webkit-text-stroke:2px_currentColor]`) — verbose, easy to mistype, hard to keep consistent

### Decision 8: Ghost CMS helper refactor
Refactor `src/helper/util.tsx` into typed functions:
- `getLatestWork(limit: number): Promise<PostSummary[]>` — `tag:portfolio` latest N
- `getLatestPhotography(limit: number): Promise<PostSummary[]>` — `tag:photography` latest N
- `getLatestWriting(limit: number): Promise<PostSummary[]>` — `tag:blog` latest N
- `getPostBySlug(slug: string): Promise<PostDetail | null>` — existing, types refined

Homepage sections accept `PostSummary[]` props; Storybook stories pass mock arrays; `page.tsx` server components fetch via the helpers and pass data down.

### Decision 9: Storybook story per presentational component
Every leaf and composition presentational component gets a co-located `.stories.tsx` file with `Default`, `Hovered`, `Focused`, `Dark`, and `ReducedMotion` stories where applicable. Stories use mock data, never live Ghost fetches. `addon-a11y` flags contrast violations; `@chromatic-com/storybook` snapshots every story on commit.

## Risks / Trade-offs

- [Adjusted palette slightly shifts brand visual] → Mitigation: the shift is small (within the purple family) and required for AAA; document the exact hex values in the README and Storybook globals
- [35+ Storybook stories is a lot to author] → Mitigation: use a shared CSF template; each story is ~20 LOC; commit early and often so Chromatic baselines build incrementally
- [View Transitions API support is partial in Safari and absent in older browsers] → Mitigation: Next.js's `<ViewTransition>` degrades gracefully to instant navigation; document the fallback in the README; test in Chrome (full), Safari 18 (partial), and Firefox (fallback)
- [`tailwindcss-animate` v4 compatibility is uncertain] → Mitigation: verify in Phase 2; if it conflicts with Tailwind v4's `@theme` animation system, drop it and register keyframes via `@utility` instead
- [Placeholder images may not reflect final photography aspect ratios] → Mitigation: choose placeholder dimensions that match the mosaic grid algorithm (4:3, 3:2, 3:4, 1:1) so swapping real images is a no-op for layout
- [Shared-element `view-transition-name` must be unique per page] → Mitigation: use the post slug as the name key (`hero-<slug>`); only one tile ↔ detail pair is ever active during a single transition
- [`components.json` references `tailwind.config.ts` which is being deleted] → Mitigation: update `components.json` to omit the config path or point at the globals.css `@theme` system in Phase 2

## Open Questions

- None remaining. All outstanding questions were resolved during the explore-mode conversation: hero style (asymmetric split), trailing intro line, 3:2 photo crop, placeholder assets, CTA wording, removed pill, kept period, removed flourish, nav labels, Bazil-exact CTA position, Tailwind-only styling, Tailwind-native transitions, composition-first components, AAA accessibility, Next.js built-in View Transitions, clear component names, adjusted palette, Storybook per component, lint passes per phase.

(End of design)
