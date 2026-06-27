## Why

The current site lacks dedicated pages for "About" and "Photography" despite navigation links pointing to them. Users navigating to these routes encounter 404 errors, reducing credibility and user experience. Adding these pages will complete the intended portfolio showcase and allow consistent branding across all sections.

## What Changes

- Add `src/app/about/page.tsx` for an About page.
- Add `src/app/photography/page.tsx` for a Photography gallery page.
- Update navigation in `src/components/Header.tsx` to correctly link to the new pages (no code change needed for links, they already exist).
- Create associated Tailwind‑styled components for page content.
- Update any related metadata (page titles, SEO).
- Ensure static generation and Ghost CMS integration where needed (Photography may pull images from a CMS or local assets).

## Capabilities

### New Capabilities
- `about-page`: Provides a static “About” page describing the creator and project.
- `photography-page`: Displays a gallery of photography projects, optionally sourced from Ghost CMS tags or a local image folder.

### Modified Capabilities
- None (no existing spec requirements are altered).

## Impact

- Adds new routes (`/about`, `/photography`).
- Slight increase in bundle size due to new components and images.
- No changes to existing APIs or data fetching logic.
- Navigation will now resolve correctly, improving SEO and user flow.