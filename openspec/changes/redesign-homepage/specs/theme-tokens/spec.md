## ADDED Requirements

### Requirement: WCAG 2.2 AAA color contrast in both themes
The site SHALL meet WCAG 2.2 AAA contrast ratios in both light and dark themes: body text 7:1, large text 4.5:1, non-text (borders, focus rings) 3:1. The light theme SHALL use `--color-bg: #ffffff`, `--color-fg: #0a0a0b`, `--color-muted-fg: #404046`, `--color-accent: #2b1bb5`. The dark theme SHALL use `--color-bg: #050507`, `--color-fg: #f2f2f5`, `--color-muted-fg: #c2c2c8`, `--color-accent: #b9a3ff`.

#### Scenario: Light theme body text meets AAA
- **WHEN** the light theme is active
- **THEN** body text (`--color-fg` on `--color-bg`) has a contrast ratio of at least 7:1

#### Scenario: Dark theme body text meets AAA
- **WHEN** the dark theme is active
- **THEN** body text (`--color-fg` on `--color-bg`) has a contrast ratio of at least 7:1

#### Scenario: Light theme accent on background meets AAA
- **WHEN** the light theme is active
- **THEN** accent text (`--color-accent` on `--color-bg`) has a contrast ratio of at least 7:1

#### Scenario: Dark theme accent on background meets AAA
- **WHEN** the dark theme is active
- **THEN** accent text (`--color-accent` on `--color-bg`) has a contrast ratio of at least 7:1

#### Scenario: Muted foreground meets AAA in both themes
- **WHEN** either theme is active
- **THEN** muted foreground text on the background has a contrast ratio of at least 7:1

### Requirement: Semantic token aliases in @theme
`globals.css` SHALL define semantic tokens via `@theme` that map to the adjusted palette: `--color-fg`, `--color-bg`, `--color-muted-fg`, `--color-border-subtle`, `--color-accent`, `--color-accent-foreground`. These tokens SHALL flip automatically with the `.dark` class via the existing `next-themes` setup.

#### Scenario: Tokens flip with theme
- **WHEN** the `.dark` class is present on `<html>`
- **THEN** `--color-bg` resolves to `#050507`, `--color-fg` resolves to `#f2f2f5`, and `--color-accent` resolves to `#b9a3ff`
- **WHEN** the `.dark` class is absent
- **THEN** `--color-bg` resolves to `#ffffff`, `--color-fg` resolves to `#0a0a0b`, and `--color-accent` resolves to `#2b1bb5`

### Requirement: Custom easing token
`globals.css` SHALL register a single site-wide easing via `@utility ease-studio` with the value `cubic-bezier(0.22, 1, 0.36, 1)`. All transitions and animations across the site SHALL use this easing via the `ease-studio` utility or the arbitrary value `ease-[var(--ease-studio)]`.

#### Scenario: Single easing is used consistently
- **WHEN** any component applies a transition
- **THEN** the easing is `cubic-bezier(0.22, 1, 0.36, 1)` via the `ease-studio` utility

### Requirement: Ghost text utility
`globals.css` SHALL register an `@utility text-ghost` applying `-webkit-text-stroke: 2px currentColor` and `color: transparent`. The `<DisplayGhost>` primitive SHALL use this utility so the stroke color flips with theme.

#### Scenario: Ghost text stroke follows theme
- **WHEN** the light theme is active and `<DisplayGhost>` is rendered
- **THEN** the text stroke is near-black (`currentColor` resolves to `--color-fg`)
- **WHEN** the dark theme is active
- **THEN** the text stroke is near-white (`currentColor` resolves to `--color-fg`)

### Requirement: Focus ring utility
`globals.css` SHALL register an `@utility focus-ring` applying `outline: 2px solid var(--color-accent)` and `outline-offset: 2px`. Interactive elements SHALL apply this utility on `focus-visible` so the focus ring has at least 3:1 contrast against adjacent colors in both themes.

#### Scenario: Focus ring meets non-text contrast
- **WHEN** an interactive element receives keyboard focus in either theme
- **THEN** a 2px outline in `--color-accent` appears with 2px offset, meeting 3:1 non-text contrast

### Requirement: Reduced-motion guard for view transitions
`globals.css` SHALL include a `@media (prefers-reduced-motion: reduce)` rule that disables View Transitions API effects by setting `::view-transition-group`, `::view-transition-old`, and `::view-transition-new` to `animation: none`.

#### Scenario: Reduced motion disables view transitions
- **WHEN** the user has `prefers-reduced-motion: reduce` enabled at the OS level
- **THEN** page navigation occurs instantly with no view transition animation

(End of spec)
