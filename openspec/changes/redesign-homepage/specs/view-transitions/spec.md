## ADDED Requirements

### Requirement: Page-wide view transition crossfade
The root layout SHALL wrap its children in `<ViewTransition>` from `next/view-transition`. Every `<Link>` navigation SHALL produce a smooth crossfade between pages by default, with no additional configuration per link.

#### Scenario: Page navigation crossfades
- **WHEN** a user clicks a `<Link>` to navigate between pages
- **THEN** the outgoing page fades out and the incoming page fades in via the View Transitions API

#### Scenario: Older browsers fall back gracefully
- **WHEN** a browser does not support the View Transitions API (e.g. older Firefox)
- **THEN** navigation occurs instantly with no animation, and no error is thrown

### Requirement: Shared-element transition for portfolio tiles
`<WorkTile>` on the homepage and `/portfolio` index SHALL apply the Tailwind arbitrary utility `[view-transition-name:hero-<slug>]` where `<slug>` is the post's slug. The `/portfolio/[slug]` page hero `<Image>` SHALL apply the same `[view-transition-name:hero-<slug>]`. Activating a portfolio tile SHALL morph the tile image into the case study hero image.

#### Scenario: Tile morphs into case study hero
- **WHEN** a user clicks a `<WorkTile>` whose slug is `my-project`
- **THEN** the tile's `feature_image` smoothly morphs into the `/portfolio/my-project` hero image via the shared `view-transition-name: hero-my-project`

#### Scenario: Only one shared-element pair is active per transition
- **WHEN** a user navigates from the homepage to `/portfolio/my-project`
- **THEN** only the clicked tile and the destination hero share `view-transition-name: hero-my-project`; all other tiles and heroes have no `view-transition-name` set for that navigation

### Requirement: Reduced-motion gate for view transitions
`globals.css` SHALL include a `@media (prefers-reduced-motion: reduce)` rule that sets `::view-transition-*` pseudo-elements to `animation: none`, disabling all view transition animations for users who request reduced motion.

#### Scenario: Reduced-motion users get instant navigation
- **WHEN** the user has `prefers-reduced-motion: reduce` enabled
- **THEN** page navigation and shared-element transitions occur instantly with no animation

### Requirement: No view-transition-name on hero photo
The homepage `<HeroPhotoFrame>` SHALL NOT apply a `view-transition-name` because the hero photo has no shared-element counterpart on another route. View transitions are reserved for the portfolio tile ↔ case study hero pair only.

#### Scenario: Hero photo does not participate in shared-element transitions
- **WHEN** the homepage hero is rendered
- **THEN** the hero photo `<Image>` has no `view-transition-name` style applied

(End of spec)
