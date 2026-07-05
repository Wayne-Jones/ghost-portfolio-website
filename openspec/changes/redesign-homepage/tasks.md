## 1. Cleanup

- [x] 1.1 Delete `src/components/Layout.tsx` (uses Pages Router APIs incompatible with App Router)
- [x] 1.2 Delete `src/components/aside.tsx` (only used by the deleted `about.tsx` and never wired to a page)
- [x] 1.3 Delete `src/components/about.tsx` (unused — homepage references commented out)
- [x] 1.4 Delete `tailwind.config.ts` (Tailwind v4 reads tokens from `@theme` in `globals.css`)
- [x] 1.5 Verify no broken imports across the project after deletions
- [x] 1.6 Run `pnpm lint` and confirm it exits 0
- [x] 1.7 Commit "Cleanup: remove dead code ahead of homepage redesign"

## 2. Theme tokens and registered utilities

- [x] 2.1 Extend `src/styles/globals.css` `@theme` with the adjusted palette: light `#ffffff` / `#0a0a0b` / `#404046` / `#2b1bb5`, dark `#050507` / `#f2f2f5` / `#c2c2c8` / `#b9a3ff`; alias as `--color-fg`, `--color-bg`, `--color-muted-fg`, `--color-border-subtle`, `--color-accent`, `--color-accent-foreground`
- [x] 2.2 Confirm `@custom-variant dark (&:is(.dark *))` is present (already in file)
- [x] 2.3 Register `@utility text-ghost` with `-webkit-text-stroke: 2px currentColor; color: transparent;`
- [x] 2.4 Register `@utility ease-studio` with `transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);`
- [x] 2.5 Register `@utility focus-ring` with `outline: 2px solid var(--color-accent); outline-offset: 2px;`
- [x] 2.6 Add `@media (prefers-reduced-motion: reduce)` rule disabling `::view-transition-*` animations
- [x] 2.7 Verify both themes render existing routes without regressions; sample AAA contrast on body, muted, and accent text
- [x] 2.8 Run `pnpm lint` and confirm it exits 0
- [x] 2.9 Commit "Theme tokens adjusted for WCAG AAA; register text-ghost, ease-studio, focus-ring utilities"

## 3. Shadcn on Base UI and Button variants

- [x] 3.1 Update `components.json` to point shadcn at Base UI primitives and drop the `tailwind.config.ts` reference
- [x] 3.2 Install shadcn components on Base UI: `separator`, `navigation-menu`, `aspect-ratio`, `badge`, `skeleton`, `hover-card`, `tooltip`, `sonner`
- [x] 3.3 Verify `tailwindcss-animate` compatibility with Tailwind v4; keep if compatible, drop and register keyframes via `@utility` if not
- [x] 3.4 Add the `imageGhost` variant to `buttonVariants` in `src/components/ui/button.tsx`: transparent idle, `border-current/50`, accent fill on hover, `px-5 py-2.5`, `rounded-md`, `transition-colors duration-300 ease-studio`
- [x] 3.5 Verify all variant strings are pure Tailwind utility classes via `cva`
- [x] 3.6 Add `@tailwindcss/typography` dependency for Ghost HTML body rendering on case study pages
- [x] 3.7 Verify existing `sheet` still renders correctly after the Base UI switch
- [x] 3.8 Run `pnpm lint` and confirm it exits 0
- [x] 3.9 Commit "Shadcn on Base UI; add imageGhost Button variant; install needed shadcn components"

## 4. Layout and structural primitives

- [x] 4.1 Create `src/components/primitives/VisuallyHidden.tsx` — `sr-only` span wrapper
- [x] 4.2 Create `src/components/primitives/FocusRing.tsx` — shared `focus-visible` styling applying the `focus-ring` utility
- [x] 4.3 Create `src/components/layout/Container.tsx` — shared `max-w-7xl px-4 sm:px-6 lg:px-8` wrapper accepting `className` and `children`
- [x] 4.4 Create `src/components/layout/Section.tsx` — `<section aria-labelledby>` with vertical rhythm (accepts `id`, `ariaLabelledby`, `className`, `children`, `divider` flag)
- [x] 4.5 Create `src/components/layout/SectionDivider.tsx` — 1px hairline in `border-current/[0.08]`
- [x] 4.6 Create `src/components/layout/SkipLink.tsx` — first focusable element, visually hidden until focused, links to `#main`
- [x] 4.7 Co-locate `.stories.tsx` for each primitive and layout component with Default, Dark, Focused, and ReducedMotion stories where applicable

- [x] 4.8 Commit "Layout primitives: Container, Section, SectionDivider, SkipLink, VisuallyHidden, FocusRing + stories"

## 5. Typography primitives

- [ ] 5.1 Create `src/components/typography/DisplaySolid.tsx` — big solid display type (`text-[clamp(3.5rem,9vw,8rem)] font-black leading-[0.9] -tracking-tight text-foreground`)
- [ ] 5.2 Create `src/components/typography/DisplayGhost.tsx` — same scale with `text-ghost` utility applied
- [ ] 5.3 Create `src/components/typography/Intro.tsx` — small lowercase intro line (`text-base sm:text-lg lowercase font-medium`)
- [ ] 5.4 Create `src/components/typography/Anchor.tsx` — muted anchor copy (`text-base text-muted-fg`)
- [ ] 5.5 Co-locate `.stories.tsx` for each typography component with Default and Dark stories

- [ ] 5.6 Commit "Typography primitives: DisplaySolid, DisplayGhost, Intro, Anchor + stories"

## 6. ThemeToggle and SiteHeader

- [ ] 6.1 Create `src/components/layout/ThemeToggle.tsx` — extracted from `DarkModeTrigger.tsx`; uses `next-themes` `useTheme`; `aria-pressed`, `aria-label`, `motion-reduce` gated; AAA contrast in both themes
- [ ] 6.2 Create `src/components/layout/SiteHeader.tsx` — replaces `Header.tsx`; logo `Link` with `aria-label="Home"` to `/`, `<NavigationMenu>` with Portfolio / Photography / Blog / About, `<ThemeToggle>` on the right (no mailto pill), `border-b border-current/[0.08]` hairline
- [ ] 6.3 Mobile (`<md`): sheet drawer with stacked nav, focus trap (Base UI default), close on Escape, restore focus to trigger
- [ ] 6.4 Refactor `src/app/layout.tsx` to wire `<SkipLink>`, `<SiteHeader>`, and `<main id="main">` region
- [ ] 6.5 Delete `src/components/Header.tsx` and `src/components/DarkModeTrigger.tsx` after confirming `SiteHeader` and `ThemeToggle` cover their responsibilities
- [ ] 6.6 Co-locate `.stories.tsx` for `ThemeToggle` and `SiteHeader` (Default, Focused, Dark, Mobile viewport)

- [ ] 6.7 Commit "SiteHeader v2 + ThemeToggle + SkipLink; remove old Header and DarkModeTrigger"

## 7. Placeholder assets

- [ ] 7.1 Create `/public/placeholders/` directory
- [ ] 7.2 Add `hero-portrait.jpg` (3:2, 2400×1350)
- [ ] 7.3 Add `portfolio-1.jpg` through `portfolio-4.jpg` (4:3, 1600×1200)
- [ ] 7.4 Add `photography-1.jpg` through `photography-6.jpg` with mixed aspect ratios: 4:3, 3:4, 3:2, 1:1, 3:4, 3:2
- [ ] 7.5 Verify all placeholders load via `next/image` without 404s
- [ ] 7.6 Commit "Placeholder assets for hero, portfolio tiles, and photography mosaic"

## 8. Hero composition

- [ ] 8.1 Create `src/components/hero/HeroIntro.tsx` — renders `<Intro>` with the trailing text "my name is Wayne and I'm a"
- [ ] 8.2 Create `src/components/hero/HeroDisplay.tsx` — composes `<DisplaySolid>` ("Web Developer") and `<DisplayGhost>` ("& Photographer") centered
- [ ] 8.3 Create `src/components/hero/HeroPhotoFrame.tsx` — `<Image>` in a `relative` container with `aspect-[16/9] md:aspect-[3/2] max-w-4xl overflow-hidden`; no `view-transition-name`
- [ ] 8.4 Create `src/components/hero/HeroCtaRow.tsx` — absolute `bottom-6 md:bottom-10 inset-x-0 flex justify-center` containing two `<Button variant="imageGhost">` ("See my work" → `/portfolio`, "See my photography" → `/photography`) with no arrow icons
- [ ] 8.5 Create `src/components/hero/HeroAnchor.tsx` — renders `<Anchor>` with "based in New York, NY." (period kept); centered on mobile, left-aligned on `md+`
- [ ] 8.6 Create `src/components/hero/Hero.tsx` — composes `HeroIntro`, `HeroDisplay`, `HeroPhotoFrame` (with `HeroCtaRow` inside), `HeroAnchor` inside a `<section aria-labelledby="hero-intro">` with `min-h-[85vh]` vertical centering
- [ ] 8.7 Verify AAA contrast on all hero text and CTAs in both themes; verify keyboard focus on CTAs shows `focus-ring`
- [ ] 8.8 Co-locate `.stories.tsx` for each hero sub-component and `Hero.tsx` itself (Default, Dark, Focused, ReducedMotion)

- [ ] 8.9 Commit "Hero composition: Intro, Display (solid+ghost), PhotoFrame, CtaRow, Anchor + stories"

## 9. SiteFooter

- [ ] 9.1 Create `src/components/layout/SiteFooter.tsx` — `<footer>` with `border-t border-current/[0.08] py-12 mt-24`, copyright year, owner name, mailto link, social links
- [ ] 9.2 Verify all footer links meet AAA contrast in both themes
- [ ] 9.3 Co-locate `.stories.tsx` with Default and Dark stories

- [ ] 9.4 Commit "SiteFooter with copyright, mailto, socials + story"

## 10. Home section components

- [ ] 10.1 Create `src/components/sections/SectionHeading.tsx` — uppercase tracked label for "Selected Work", "Photography", "Latest Writing"
- [ ] 10.2 Create `src/components/sections/WorkTile.tsx` — `<li>` wrapping a `<Link>`, 4:3 `aspect-ratio` image with `group-hover:scale-[1.02] transition-transform duration-500 ease-studio motion-reduce:transition-none`, title, and `<Badge>` tags; `[view-transition-name:hero-<slug>]` applied to the `<Image>`
- [ ] 10.3 Create `src/components/sections/SelectedWork.tsx` — `<Section aria-labelledby>` with `<SectionHeading>` "Selected Work" and `<ul role="list">` rendering 4 `<WorkTile>` from props
- [ ] 10.4 Create `src/components/sections/PhotoMosaicTile.tsx` — `<li>` with computed `row-span`/`col-span` utilities based on aspect ratio; `<Image>` with descriptive `alt`
- [ ] 10.5 Create `src/components/sections/PhotoMosaic.tsx` — `<Section>` with `<SectionHeading>` "Photography" and `<ul role="list">` in `grid grid-cols-2 md:grid-cols-6 auto-rows-[100px] gap-3` rendering 6 `<PhotoMosaicTile>` from props
- [ ] 10.6 Create `src/components/sections/WritingItem.tsx` — `<li>` with `<Link>`, `<time datetime>` date, reading time; hit target ≥ 44×44
- [ ] 10.7 Create `src/components/sections/LatestWriting.tsx` — `<Section>` with `<SectionHeading>` "Latest Writing" and `<ul role="list">` with `divide-y divide-current/10` rendering 3 `<WritingItem>` from props
- [ ] 10.8 Create `src/components/sections/AboutTeaserLink.tsx` — mailto link styled as a text link with AAA contrast
- [ ] 10.9 Create `src/components/sections/AboutTeaser.tsx` — `<Section>` with short inline bio and `<AboutTeaserLink>`
- [ ] 10.10 Co-locate `.stories.tsx` for every section component using mock `PostSummary[]` data

- [ ] 10.11 Commit "Home sections: SelectedWork, WorkTile, PhotoMosaic, PhotoMosaicTile, LatestWriting, WritingItem, AboutTeaser, AboutTeaserLink, SectionHeading + stories"

## 11. Ghost CMS data helpers

- [ ] 11.1 Refactor `src/helper/util.tsx` to export typed functions: `getLatestWork(limit: number): Promise<PostSummary[]>`, `getLatestPhotography(limit: number): Promise<PostSummary[]>`, `getLatestWriting(limit: number): Promise<PostSummary[]>`, `getPostBySlug(slug: string): Promise<PostDetail | null>`, and `getAllWork(): Promise<PostSummary[]>`
- [ ] 11.2 Define `PostSummary` and `PostDetail` types covering `slug`, `title`, `feature_image`, `published_at`, `tags`, `html`, `plaintext`, `excerpt`
- [ ] 11.3 Keep existing `getAllPostsByTag` for backwards compatibility or remove it after confirming no other callers
- [ ] 11.4 Run `pnpm lint` and confirm it exits 0
- [ ] 11.5 Commit "Refactor Ghost CMS helpers into typed reusable functions"

## 12. Home page wiring

- [ ] 12.1 Rewrite `src/app/page.tsx` as a server component that fetches via `getLatestWork(4)`, `getLatestPhotography(6)`, `getLatestWriting(3)` and passes data to `Hero`, `SelectedWork`, `PhotoMosaic`, `LatestWriting`, `AboutTeaser`, `SiteFooter`
- [ ] 12.2 Wrap the page content in `<main id="main">` (or confirm the layout wraps it) so `<SkipLink>` targets it
- [ ] 12.3 Verify the page renders all six sections in order with placeholder data when Ghost returns nothing
- [ ] 12.4 Verify keyboard tab order: SkipLink → SiteHeader nav → Hero CTAs → Selected Work tiles → Photo Mosaic → Latest Writing → About Teaser → SiteFooter
- [ ] 12.5 Run `pnpm lint` and confirm it exits 0
- [ ] 12.6 Commit "Home page composes new sections with Ghost CMS data helpers"

## 13. Portfolio index page

- [ ] 13.1 Refactor `src/app/portfolio/page.tsx` to render a `<ul role="list">` of `<WorkTile>` via `getAllWork()` inside a `<Section>` with `<SectionHeading>` "Portfolio"
- [ ] 13.2 Apply `[view-transition-name:hero-<slug>]` on each `<WorkTile>` `<Image>`
- [ ] 13.3 Verify the index reuses the same `WorkTile` primitive as the homepage
- [ ] 13.4 Run `pnpm lint` and confirm it exits 0
- [ ] 13.5 Commit "Portfolio index reuses WorkTile in a card grid with view-transition names"

## 14. Portfolio case study page

- [ ] 14.1 Create `src/app/portfolio/[slug]/page.tsx` as a server component
- [ ] 14.2 Implement `generateStaticParams` returning `{ slug }` for every portfolio post
- [ ] 14.3 Render hero `<Image>` with `[view-transition-name:hero-<slug>]` matching the source tile
- [ ] 14.4 Render a meta line: year from `published_at`, role/category from tags as `<Badge>` components
- [ ] 14.5 Render the Ghost HTML body inside a `prose` container (via `@tailwindcss/typography`)
- [ ] 14.6 Add Previous/Next navigation between sibling portfolio posts by `published_at` order
- [ ] 14.7 Export `generateMetadata` setting title, OG title/description/image, and Twitter card from post data
- [ ] 14.8 Verify keyboard nav reaches prev/next links; verify AAA contrast on meta and body text in both themes
- [ ] 14.9 Run `pnpm lint` and confirm it exits 0
- [ ] 14.10 Commit "Portfolio case study page with shared view-transition hero, meta line, prose body, prev/next nav"

## 15. View Transitions wiring

- [ ] 15.1 Wrap `src/app/layout.tsx` children in `<ViewTransition>` from `next/view-transition`
- [ ] 15.2 Verify page-wide crossfade occurs on `<Link>` navigation between all pages
- [ ] 15.3 Verify shared-element morph between `<WorkTile>` and `/portfolio/[slug]` hero for a sample slug
- [ ] 15.4 Verify `@media (prefers-reduced-motion: reduce)` disables view transitions (instant navigation)
- [ ] 15.5 Test in Chrome (full support), Safari 18 (partial), Firefox (fallback to instant)
- [ ] 15.6 Run `pnpm lint` and confirm it exits 0
- [ ] 15.7 Commit "View Transitions via next/view-transition; shared-element on portfolio tiles; reduced-motion gate"

## 16. Final verification and documentation

- [ ] 16.1 Run `pnpm lint` and confirm it exits 0 with no warnings

- [ ] 16.2 Manual keyboard-only flow through every page (no mouse); verify focus order and visible focus rings
- [ ] 16.3 Manual screen reader pass (VoiceOver or NVDA) on home, portfolio index, and portfolio case study
- [ ] 16.4 Toggle OS dark mode and verify AAA contrast on every page
- [ ] 16.5 Toggle OS reduced-motion and verify all animations (including view transitions) are disabled
- [ ] 16.6 Sample AAA contrast ratios with a tool (Lighthouse a11y, or browser devtools) on body, muted, and accent text in both themes
- [ ] 16.7 Update `README.md` with: adjusted palette hex values, component tree overview, documentation policy, WCAG 2.2 AAA accessibility statement, View Transitions caveats and fallback, placeholder asset policy and Ghost CMS swap path, lint and build commands
- [ ] 16.9 Commit "Verification and documentation for homepage redesign"

(End of tasks)
