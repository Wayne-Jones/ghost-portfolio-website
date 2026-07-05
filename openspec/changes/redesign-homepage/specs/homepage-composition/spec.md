## ADDED Requirements

### Requirement: Homepage section ordering and density
The homepage SHALL render six sections in the following order: Hero, Selected Work, Photo Mosaic, Latest Writing, About Teaser, Site Footer. Each section SHALL be wrapped in a `<Section>` primitive that provides consistent vertical rhythm and an optional `<SectionDivider>` hairline. Section density (vertical padding) SHALL vary asymmetrically to avoid the uniform SaaS landing-page rhythm: Hero uses `min-h-[85vh]`, content sections use `py-16` to `py-24` with per-section variation.

#### Scenario: Homepage renders all six sections in order
- **WHEN** a user navigates to `/`
- **THEN** the page renders Hero, Selected Work, Photo Mosaic, Latest Writing, About Teaser, and Site Footer in that order

#### Scenario: Section vertical rhythm is non-uniform
- **WHEN** the homepage sections are inspected
- **THEN** each content section uses a different vertical padding value (e.g. `py-16`, `py-24`, `py-12`) rather than a single shared padding

#### Scenario: Section dividers are hairlines
- **WHEN** a `<SectionDivider>` is enabled between sections
- **THEN** it renders as a 1px border in `currentColor` at low opacity, not a filled background band

### Requirement: Selected Work section composition
The Selected Work section SHALL render exactly 4 `<WorkTile>` components sourced from the latest Ghost CMS posts tagged `portfolio`. The section SHALL use a `<SectionHeading>` primitive labeled "Selected Work" and a `<ul role="list">` container. Each tile SHALL display the post's `feature_image` at a 4:3 aspect ratio, the post title, and the post's tags as `<Badge>` components.

#### Scenario: Selected Work renders 4 tiles from the portfolio tag
- **WHEN** the homepage fetches data via `getLatestWork(4)`
- **THEN** the Selected Work section renders exactly 4 tiles, each showing the post feature image, title, and tag badges

#### Scenario: Selected Work tiles are keyboard navigable
- **WHEN** a user tabs through the Selected Work section
- **THEN** each tile receives a visible focus ring (3:1 contrast) and the tile link is reachable in source order

### Requirement: Photo Mosaic section composition
The Photo Mosaic section SHALL render 6 photographs sourced from the latest Ghost CMS posts tagged `photography`. The section SHALL use a CSS Grid masonry-mosaic layout (`grid-cols-2 md:grid-cols-6`, `auto-rows-[100px]`) with each `<PhotoMosaicTile>` specifying `row-span` and `col-span` utilities based on its image aspect ratio. The container SHALL be a `<ul role="list">` for accessibility.

#### Scenario: Photo Mosaic renders 6 tiles from the photography tag
- **WHEN** the homepage fetches data via `getLatestPhotography(6)`
- **THEN** the Photo Mosaic section renders exactly 6 tiles in a masonry grid layout

#### Scenario: Photo Mosaic tiles adapt span to aspect ratio
- **WHEN** a photo has a 3:2 landscape aspect ratio
- **THEN** its tile receives `col-span` and `row-span` utilities that fill a wider, shorter grid area
- **WHEN** a photo has a 3:4 portrait aspect ratio
- **THEN** its tile receives `col-span` and `row-span` utilities that fill a narrower, taller grid area

#### Scenario: Photo Mosaic provides an accessible text alternative
- **WHEN** a screen reader encounters the Photo Mosaic
- **THEN** each `<PhotoMosaicTile>` exposes its image `alt` attribute as an accessible name

### Requirement: Latest Writing section composition
The Latest Writing section SHALL render 3 writing entries sourced from the latest Ghost CMS posts tagged `blog`. The section SHALL use a `<ul role="list">` with `divide-y` utilities and each `<WritingItem>` SHALL display the post title, publication date (via `<time datetime>`), and reading time where available. No thumbnail images SHALL be rendered in this section.

#### Scenario: Latest Writing renders 3 list items
- **WHEN** the homepage fetches data via `getLatestWriting(3)`
- **THEN** the Latest Writing section renders exactly 3 items separated by hairline dividers

#### Scenario: Writing items expose semantic dates
- **WHEN** a writing item is rendered
- **THEN** it includes a `<time>` element with a machine-readable `datetime` attribute and a human-readable label

### Requirement: About Teaser section composition
The About Teaser section SHALL render a short inline bio (max 2 sentences) and a mailto link styled via the `<AboutTeaserLink>` primitive. No photograph or card frame SHALL be used; the section relies on whitespace and typography alone. The mailto link SHALL meet AAA contrast against the page background in both themes.

#### Scenario: About Teaser surfaces the contact email
- **WHEN** the About Teaser section is rendered
- **THEN** it contains a mailto link with AAA-compliant contrast in both light and dark themes

### Requirement: Site Footer composition
The Site Footer SHALL render the copyright year, the site owner's name, a mailto link, and social links. It SHALL use a `<footer>` semantic element with a top hairline border (`border-t border-current/[0.08]`). The footer SHALL NOT render a newsletter form or any interactive element beyond links.

#### Scenario: Site Footer renders required elements
- **WHEN** the Site Footer is rendered
- **THEN** it includes a copyright line, a mailto link, and at least one social link, each meeting AAA contrast

(End of spec)
