## Why

The current homepage renders a single `<Hero>` component with the rest of the page commented out. Inner pages (`/portfolio`, `/photography`, `/blog`) are placeholder lists with no visual identity. The site needs a homepage that establishes a studio-craft portfolio aesthetic, surfaces featured work / photography / writing, and uses modern platform features (View Transitions API) for fluid navigation — while meeting WCAG 2.2 AAA contrast in both light and dark themes.

## What Changes

- Replace the placeholder homepage with a composed, image-rich landing page: hero, selected work grid, photography mosaic, latest writing list, about teaser, and footer
- Adopt an adjusted color palette (dark-purple `#2b1bb5` for light theme, light-purple `#b9a3ff` for dark theme) that meets WCAG 2.2 AAA contrast ratios for body text, muted text, and accent-on-background in both themes
- Rebuild the header with `Portfolio / Photography / Blog / About` navigation (removing the redundant "Home" link since the wordmark links home), removing the top-right mailto pill, and keeping the theme toggle as the sole right-side affordance
- Build the hero as a Bazil-style asymmetric split: small intro line ("my name is Wayne and I'm a"), two-line display type (solid "Web Developer" + ghost-outlined "& Photographer"), a 3:2 portrait photo, and two centered CTAs ("See my work" / "See my photography") overlaid on the bottom of the photo, with "based in New York, NY." anchored below
- Install shadcn/ui components on Base UI primitives (replacing Radix defaults) and add only the blocks needed: `separator`, `navigation-menu`, `aspect-ratio`, `badge`, `skeleton`, `hover-card`, `tooltip`, `sonner` (skip carousel, chart, command, accordion, sidebar)
- Add a new `Button` variant (`imageGhost`) for the Bazil-style transparent-idle / accent-fill CTA used over photographs
- Establish a reusable component tree (Container, Section, DisplaySolid, DisplayGhost, Intro, Anchor, WorkTile, PhotoMosaicTile, WritingItem, etc.) instead of monolithic page components; every component composes smaller primitives
- Style with Tailwind utilities only (no custom component CSS classes); `globals.css` holds only `@theme` tokens, `@custom-variant dark`, and registered `@utility` rules
- Wire Next.js's built-in View Transitions API via `<ViewTransition>` from `next/view-transition` for page-wide crossfades, with shared-element transitions between portfolio tiles and `/portfolio/[slug]` hero images
- Add Storybook stories (`.stories.tsx`) for every presentational component, leveraging the existing `@storybook/nextjs-vite` + `addon-a11y` + `@chromatic-com/storybook` setup
- Refactor the Ghost CMS data helpers in `src/helper/util.tsx` into typed, reusable functions (`getLatestWork`, `getLatestPhotography`, `getLatestWriting`, `getPostBySlug`)
- **BREAKING**: Remove dead code from the codebase: `src/components/Layout.tsx` (uses Pages Router APIs), `src/components/aside.tsx`, `src/components/about.tsx`, and `tailwind.config.ts` (Tailwind v4 reads tokens from `@theme` in CSS)
- Surface the contact email via `AboutTeaser` and `SiteFooter` instead of the removed header pill
- Use placeholder images under `/public/placeholders/` during development; swapping in real Ghost CMS data later is a one-source-attribute change per `<Image>`

## Capabilities

### New Capabilities
- `homepage-composition`: The section structure, ordering, and density of the homepage — hero, selected work, photography mosaic, latest writing, about teaser, footer
- `theme-tokens`: The semantic color tokens (fg, bg, muted, accent, border), easing variable, ghost-text utility, and AAA-contrast palette for light/dark themes
- `header-navigation`: Header structure, navigation labels, logo/home affordance, theme toggle placement, mobile sheet behavior, and the removed mailto pill
- `hero`: The Bazil-style asymmetric hero layout — intro line, dual-weight display type, photo frame, centered CTA overlay, anchor copy
- `view-transitions`: Next.js built-in View Transitions API integration for page-wide crossfade and shared-element portfolio-tile ↔ case-study transitions, gated by `prefers-reduced-motion`
- `portfolio-case-study`: The `/portfolio` index (card grid reusing `WorkTile`) and `/portfolio/[slug]` case study page (hero with shared `view-transition-name`, meta line, Ghost HTML body, prev/next nav)
- `component-library`: The reusable component tree (Container, Section, typography primitives, layout primitives, section components) with co-located Storybook stories for every presentational component

### Modified Capabilities
<!-- No existing specs to modify -->

## Impact

- **Code**: Delete `Layout.tsx`, `aside.tsx`, `about.tsx`, `tailwind.config.ts`; rebuild `Hero.tsx`, `Header.tsx`, `DarkModeTrigger.tsx` as composed primitives; refactor `src/helper/util.tsx`; rewrite `src/app/page.tsx`, `src/app/portfolio/page.tsx`, add `src/app/portfolio/[slug]/page.tsx`
- **Dependencies**: Add `@tailwindcss/typography` for Ghost HTML body rendering; verify `tailwindcss-animate` v4 compatibility (keep if compatible, drop otherwise); update `components.json` to point shadcn at Base UI primitives
- **Globals**: Extend `src/styles/globals.css` with semantic `@theme` tokens, `@custom-variant dark`, `@utility text-ghost`, `@utility ease-studio`, `@utility focus-ring`, and a `@media (prefers-reduced-motion: reduce)` guard for view transitions
- **Compatibility**: View Transitions API gracefully degrades to instant navigation on older browsers (Firefox, older Safari); `pnpm lint` and `pnpm run build-storybook` must pass at the end of every phase
- **Accessibility**: All new components must satisfy WCAG 2.2 AAA contrast (7:1 body / 4.5:1 large / 3:1 non-text), be keyboard navigable with visible focus rings, and gate motion via `motion-reduce:` utilities

(End of proposal)
