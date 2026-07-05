## ADDED Requirements

### Requirement: Portfolio index renders card grid
The `/portfolio` page SHALL render a card grid reusing the `<WorkTile>` primitive (the same component used in the homepage Selected Work section). Each tile SHALL display the post `feature_image`, title, and tags as `<Badge>` components. The page SHALL fetch all posts tagged `portfolio` via `getAllWork()` and render one tile per post.

#### Scenario: Portfolio index reuses WorkTile
- **WHEN** the `/portfolio` page is rendered
- **THEN** each post is rendered via a `<WorkTile>` component (the same primitive used on the homepage)

#### Scenario: Portfolio index renders all portfolio posts
- **WHEN** the `/portfolio` page fetches data via `getAllWork()`
- **THEN** every post tagged `portfolio` in Ghost CMS is rendered as a tile

### Requirement: Portfolio case study page structure
The `/portfolio/[slug]` page SHALL render: a hero `<Image>` with `view-transition-name: hero-<slug>` (matching the source tile), a meta line (year derived from `published_at`, role/category from tags), the post body rendered as Ghost HTML via `@tailwindcss/typography` prose classes, and Previous/Next navigation between sibling portfolio posts.

#### Scenario: Case study renders hero with shared view-transition-name
- **WHEN** the `/portfolio/[slug]` page is rendered for a post with slug `my-project`
- **THEN** the hero image has `[view-transition-name: hero-my-project]` applied via Tailwind arbitrary value

#### Scenario: Case study renders Ghost HTML body
- **WHEN** the `/portfolio/[slug]` page is rendered
- **THEN** the post body is rendered as HTML inside a `prose` container (via `@tailwindcss/typography`)

#### Scenario: Case study provides prev/next navigation
- **WHEN** the `/portfolio/[slug]` page is rendered
- **THEN** Previous and Next links are present and navigate to the adjacent portfolio posts by `published_at` order

### Requirement: generateStaticParams for portfolio slugs
The `/portfolio/[slug]` page SHALL export a `generateStaticParams` function that returns all portfolio post slugs at build time, enabling static generation of each case study page.

#### Scenario: Static params cover all portfolio slugs
- **WHEN** `generateStaticParams` is called at build time
- **THEN** it returns an array of `{ slug: <post-slug> }` for every post tagged `portfolio`

### Requirement: Metadata export for case study
The `/portfolio/[slug]` page SHALL export a `metadata` object (or `generateMetadata` function) that sets the page `title`, Open Graph `title`/`description`/`image`, and Twitter card metadata from the Ghost post data.

#### Scenario: Case study metadata includes OG image
- **WHEN** the `/portfolio/[slug]` page is rendered for a post with a `feature_image`
- **THEN** the Open Graph `og:image` meta tag is set to the post's `feature_image` URL

(End of spec)
