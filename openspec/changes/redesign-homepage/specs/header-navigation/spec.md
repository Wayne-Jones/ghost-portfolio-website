## ADDED Requirements

### Requirement: Header navigation labels
The header SHALL render four navigation links in source order: Portfolio, Photography, Blog, About. The header SHALL NOT render a "Home" link because the wordmark logo links to `/`. Each link SHALL be a `<Link>` from `next/link` with an accessible name matching its label.

#### Scenario: Header renders four nav links without Home
- **WHEN** the header is rendered on any page
- **THEN** the navigation contains exactly four links: Portfolio (`/portfolio`), Photography (`/photography`), Blog (`/blog`), About (`/about`), and no Home link

#### Scenario: Wordmark links to home
- **WHEN** a user activates the wordmark "WJ." in the header
- **THEN** navigation occurs to `/`

### Requirement: Header right-side affordance is theme toggle only
The header's right side SHALL render only the `<ThemeToggle>` component. No mailto pill or contact CTA SHALL appear in the header. The contact email is surfaced via the About Teaser section and Site Footer instead.

#### Scenario: No mailto pill in header
- **WHEN** the header is rendered
- **THEN** no mailto link or contact CTA is present in the header; only the theme toggle appears on the right

### Requirement: Header hairline divider
The header SHALL render a hairline bottom border via Tailwind utilities `border-b border-current/[0.08]`. No filled background band or shadow SHALL be used for the header divider.

#### Scenario: Header has subtle bottom border
- **WHEN** the header is rendered
- **THEN** a 1px border in `currentColor` at 8% opacity appears below the header, with no shadow or filled background

### Requirement: Mobile header sheet retains focus trap
The mobile header (`<md` breakpoint) SHALL open a `<Sheet>` drawer with stacked navigation links. The sheet SHALL trap focus while open, close on Escape, and restore focus to the trigger on close.

#### Scenario: Mobile sheet closes on Escape
- **WHEN** the mobile sheet is open and the user presses Escape
- **THEN** the sheet closes and focus returns to the hamburger trigger

#### Scenario: Mobile sheet traps focus
- **WHEN** the mobile sheet is open and the user tabs through it
- **THEN** focus cycles within the sheet content and does not escape to the page behind

### Requirement: Skip link is present
A `<SkipLink>` SHALL be the first focusable element in the DOM, visually hidden until focused, linking to the `#main` region. Activating it SHALL move focus to the main content area.

#### Scenario: Skip link is reachable first
- **WHEN** a user presses Tab on a fresh page load
- **THEN** the skip link is the first element to receive focus and becomes visually visible
- **WHEN** the user activates the skip link
- **THEN** focus moves to the `#main` content region

(End of spec)
