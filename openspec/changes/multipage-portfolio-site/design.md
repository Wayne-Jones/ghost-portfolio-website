## Context

The existing site is a Next.js App Router application that currently provides Home, Blog, and Portfolio routes. Navigation includes links to "About" and "Photography", but those pages do not exist, resulting in 404 errors. The site uses Tailwind CSS for styling, shadcn/ui components, and fetches content from a Ghost CMS via `@tryghost/content-api`. All pages are statically generated at build time using `generateStaticParams`.

## Goals / Non-Goals

**Goals:**
- Add functional `/about` and `/photography` pages so navigation resolves correctly.
- Keep the existing architectural patterns: App Router, Tailwind styling, and static generation.
- Leverage the existing Ghost CMS for the Photography gallery if appropriate, otherwise serve local images.
- Maintain dark‑mode support via `next-themes`.

**Non-Goals:**
- Introduce a new CMS or data source beyond the current Ghost setup.
- Implement authentication or user accounts.
- Refactor the entire routing or component architecture.

## Decisions

1. **File‑system routing** – Create `src/app/about/page.tsx` and `src/app/photography/page.tsx` as server components following the same pattern as existing pages.
2. **Content source for Photography** – Use Ghost CMS tags (`photography`) if present; fallback to a static local image grid if not. This avoids adding new dependencies.
3. **Styling** – Reuse existing Tailwind utility classes and the `Hero` component style for consistency.
4. **Static generation** – Add `generateStaticParams` for the photography page only if pulling dynamic image data; otherwise, the page remains static.
5. **Navigation** – No changes needed to `Header.tsx` because the links already exist; ensuring the routes exist resolves the issue.

## Risks / Trade-offs

- **Risk:** Photography page may depend on Ghost tags that are not configured, leading to empty galleries.
  - **Mitigation:** Implement a graceful fallback that displays a placeholder message or local images.
- **Risk:** Adding new pages increases bundle size marginally.
  - **Mitigation:** Keep components lightweight and reuse existing UI primitives.
- **Risk:** Future changes to navigation may re‑introduce mismatched routes.
  - **Mitigation:** Document the required pages in the project README.
