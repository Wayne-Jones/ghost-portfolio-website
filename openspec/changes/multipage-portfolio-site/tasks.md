## 1. About Page

- [x] 1.1 Create `src/app/about/page.tsx` as a server component rendering an "About" header and descriptive text.
- [x] 1.2 Add SEO metadata (`title: "About"`) using `metadata` export.

## 2. Photography Page

- [x] 2.1 Create `src/app/photography/page.tsx` as a server component.
- [x] 2.2 Implement data fetching: query Ghost CMS for posts tagged `photography`; if none, fallback to local images in `public/photography/`.
- [x] 2.3 Add `generateStaticParams` (if using Ghost data) to statically generate gallery routes.
- [x] 2.4 Style the gallery with Tailwind grid utilities, reusing existing UI components where possible.

## 3. Verification & Documentation

- [x] 3.1 Run the development server and verify `/about` and `/photography` routes render correctly.
- [x] 3.2 Update `README.md` to list the new pages and any required environment variables.
- [ ] 3.3 Commit the changes following the project's contribution guidelines.
