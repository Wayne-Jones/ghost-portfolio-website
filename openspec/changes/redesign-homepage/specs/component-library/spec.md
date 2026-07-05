## ADDED Requirements

### Requirement: Component tree uses small reusable primitives
Every visual surface on the homepage and portfolio pages SHALL be composed from small primitives: `Container`, `Section`, `SectionDivider`, `SectionHeading`, `DisplaySolid`, `DisplayGhost`, `Intro`, `Anchor`, `FocusRing`, `VisuallyHidden`. Larger sections (`Hero`, `SelectedWork`, `PhotoMosaic`, `LatestWriting`, `AboutTeaser`, `SiteHeader`, `SiteFooter`) SHALL compose these primitives rather than inlining all JSX in one file. Section sub-components (`WorkTile`, `PhotoMosaicTile`, `WritingItem`, `AboutTeaserLink`) SHALL be reusable on multiple pages.

#### Scenario: Container is reused across sections
- **WHEN** `SiteHeader`, `Hero`, `SelectedWork`, `PhotoMosaic`, `LatestWriting`, `AboutTeaser`, `SiteFooter` are rendered
- **THEN** each uses the shared `<Container>` primitive for layout width and padding

#### Scenario: WorkTile is reused on homepage and portfolio index
- **WHEN** the homepage Selected Work section and the `/portfolio` index are both rendered
- **THEN** both use the same `<WorkTile>` primitive to render each post tile

### Requirement: Clear and concise component names
Component names SHALL be 1-3 English words revealing the component's goal (e.g. `WorkTile`, `DisplaySolid`, `PhotoMosaicTile`, `SectionHeading`). No abbreviations like `Btn` or `Hdr`. No suffix clutter like `HeroContainerWrapper`. File names SHALL mirror the default export component name. Function names SHALL read like English (e.g. `getLatestWork`, `getPostBySlug`). Props interfaces SHALL be named `<Component>Props`.

#### Scenario: Component file name matches default export
- **WHEN** the `WorkTile.tsx` file is inspected
- **THEN** its default export is a component named `WorkTile`

#### Scenario: No abbreviated component names
- **WHEN** the component tree is inspected
- **THEN** no component name contains abbreviations like `Btn`, `Hdr`, `Ftr`, or `Mnu`

### Requirement: Documentation and test cases per presentational component
Every presentational component (primitives, typography, layout, hero sub-components, section components, section sub-components, and shadcn UI blocks installed in this change) SHALL have co-located documentation and test cases. Each test suite shall define at minimum a default rendering test, and where applicable hover, focus, dark, and reduced‑motion scenarios. Tests shall use mock data, never live Ghost CMS fetches. Accessibility checks shall run on each test case and flag WCAG violations.

#### Scenario: Every presentational component has a story
- **WHEN** the Storybook story list is inspected
- **THEN** a story exists for `Container`, `Section`, `SectionDivider`, `SectionHeading`, `DisplaySolid`, `DisplayGhost`, `Intro`, `Anchor`, `FocusRing`, `VisuallyHidden`, `Hero`, `HeroIntro`, `HeroDisplay`, `HeroPhotoFrame`, `HeroCtaRow`, `HeroAnchor`, `SelectedWork`, `WorkTile`, `PhotoMosaic`, `PhotoMosaicTile`, `LatestWriting`, `WritingItem`, `AboutTeaser`, `AboutTeaserLink`, `SiteHeader`, `SiteFooter`, `ThemeToggle`, `SkipLink`, and each newly installed shadcn component

#### Scenario: Stories use mock data
- **WHEN** any section story (e.g. `SelectedWork.stories.tsx`) is rendered in Storybook
- **THEN** it receives mock `PostSummary[]` data via story args and does not call `getLatestWork`

#### Scenario: addon-a11y flags contrast violations
- **WHEN** a story is rendered in Storybook
- **THEN** the `addon-a11y` panel runs and reports any WCAG contrast or accessibility violations

### Requirement: Lint and format pass at every phase
At the end of every implementation phase, `pnpm lint` SHALL exit 0. No ESLint warnings (treated as errors). TypeScript strict mode SHALL pass.

#### Scenario: pnpm lint exits clean
- **WHEN** `pnpm lint` is run at the end of a phase
- **THEN** it exits with code 0 and produces no warnings



### Requirement: Tailwind-only styling; no custom component CSS classes
All components SHALL be styled via Tailwind utility classes in `className` strings or `cva` variants composed of Tailwind class strings. `globals.css` SHALL contain only `@theme` tokens, `@custom-variant dark`, registered `@utility` rules, and the `@media (prefers-reduced-motion: reduce)` guard. No custom component CSS classes (e.g. `.hero`, `.cta-row`, `.anchor`) SHALL be authored.

#### Scenario: No component CSS classes in globals.css
- **WHEN** `globals.css` is inspected
- **THEN** it contains only `@theme`, `@custom-variant`, `@utility`, and `@media` rules — no class selectors like `.hero` or `.cta-row`

#### Scenario: Variants use Tailwind class strings
- **WHEN** the `buttonVariants` `cva` definition is inspected
- **THEN** every variant value is a string of Tailwind utility classes (e.g. `bg-accent text-accent-foreground`), not a custom class name

### Requirement: Motion is gated by prefers-reduced-motion
Every component that applies `transition-*` or `animate-*` utilities SHALL also apply `motion-reduce:` variants (or rely on the global `@media (prefers-reduced-motion: reduce)` guard in `globals.css`) so that all motion is disabled for users who request reduced motion.

#### Scenario: Hover transitions respect reduced motion
- **WHEN** a `<WorkTile>` with `transition-transform group-hover:scale-[1.02]` is rendered and the user has `prefers-reduced-motion: reduce` enabled
- **THEN** no scale animation occurs on hover

(End of spec)
