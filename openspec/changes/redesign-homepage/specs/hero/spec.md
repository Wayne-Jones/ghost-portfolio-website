## ADDED Requirements

### Requirement: Hero trailing intro line
The hero SHALL render an `<Intro>` primitive with the lowercase text "my name is Wayne and I'm a" ending with no trailing noun. The visual answer to the trailing "a" SHALL be the two-line display type below.

#### Scenario: Intro line ends at "a"
- **WHEN** the hero is rendered
- **THEN** the intro line text is exactly "my name is Wayne and I'm a" with no noun after "a"

### Requirement: Hero dual-weight display type
The hero SHALL render two display lines centered on the page: a solid "Web Developer" via `<DisplaySolid>` and a ghost-outlined "& Photographer" via `<DisplayGhost>`. Both lines SHALL use `text-[clamp(3.5rem,9vw,8rem)]`, `font-black`, `leading-[0.9]`, and `-tracking-tight`. The ghost line SHALL apply the `text-ghost` utility so the stroke is `currentColor`.

#### Scenario: Display solid line renders
- **WHEN** the hero is rendered
- **THEN** the first display line renders "Web Developer" in solid `--color-fg` with `font-black` weight

#### Scenario: Display ghost line renders with stroke
- **WHEN** the hero is rendered
- **THEN** the second display line renders "& Photographer" with `color: transparent` and a 2px `currentColor` stroke via the `text-ghost` utility

### Requirement: Hero photo frame is 3:2 wide
The hero SHALL render a `<HeroPhotoFrame>` containing an `<Image>` from Next.js with a 3:2 aspect ratio (`aspect-[3/2]` on `md+`, `aspect-[16/9]` on mobile) and `max-w-4xl`. The photo SHALL be positioned so the ghost "& Photographer" text visually overlaps behind it. The photo source SHALL be a placeholder under `/public/placeholders/` during development.

#### Scenario: Hero photo uses 3:2 aspect on desktop
- **WHEN** the hero is rendered at `md` breakpoint or wider
- **THEN** the photo frame has `aspect-[3/2]` and `max-w-4xl`

#### Scenario: Hero photo source is a placeholder during development
- **WHEN** the hero is rendered before Ghost CMS assets are wired
- **THEN** the `<Image>` `src` points to a file under `/public/placeholders/`

### Requirement: Hero CTA row is centered on photo bottom
The hero SHALL render a `<HeroCtaRow>` absolutely positioned at the bottom-center of the `<HeroPhotoFrame>` (`absolute inset-x-0 bottom-6 md:bottom-10 flex justify-center`). The row SHALL contain exactly two `<Button>` components with the `imageGhost` variant: "See my work" linking to `/portfolio` and "See my photography" linking to `/photography`. No arrow icons SHALL appear inside the buttons.

#### Scenario: CTAs are centered horizontally on the photo
- **WHEN** the hero is rendered
- **THEN** the two CTA buttons appear centered as a pair at the bottom of the photo frame

#### Scenario: CTA labels match the spec
- **WHEN** the hero CTAs are rendered
- **THEN** the first button reads "See my work" and links to `/portfolio`, the second reads "See my photography" and links to `/photography`

#### Scenario: CTAs are keyboard focusable with visible rings
- **WHEN** a user tabs to a hero CTA
- **THEN** a visible focus ring (via `focus-ring` utility) appears with 3:1 contrast against the photo

### Requirement: Hero anchor copy
The hero SHALL render a `<HeroAnchor>` primitive below the photo with the text "based in New York, NY." (period included) in `--color-muted-fg`. The anchor SHALL be centered on mobile and left-aligned (offset from the photo's left edge) on `md+`.

#### Scenario: Anchor copy includes the period
- **WHEN** the hero anchor is rendered
- **THEN** the text reads "based in New York, NY." with the trailing period

#### Scenario: Anchor alignment is responsive
- **WHEN** the hero is rendered on a mobile viewport
- **THEN** the anchor text is centered
- **WHEN** the hero is rendered at `md` or wider
- **THEN** the anchor text is left-aligned

### Requirement: No decorative flourish in hero
The hero SHALL NOT render any arrow icon, ↗ badge, or decorative chip. The hero's visual interest comes solely from typography, the photograph, and the CTA overlay.

#### Scenario: No flourish element appears
- **WHEN** the hero is rendered
- **THEN** no arrow, badge, chip, or decorative icon appears in the hero section

(End of spec)
