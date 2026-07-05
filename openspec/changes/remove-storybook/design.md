## Context

The repository currently includes Storybook for UI component documentation and visual testing. However, Storybook adds a large set of dependencies, generates a static site (`storybook-static/`), and requires CI steps that run Storybook builds. The CI configuration enforces mandatory CodeQL checks which block merging until the Storybook build completes. Maintaining Storybook no longer provides sufficient value for this project, and its removal will simplify the build pipeline and reduce CI time.

## Goals / Non-Goals

**Goals:**
- Completely remove all Storybook configuration, dependencies, generated artifacts, and CI steps.
- Ensure the repository builds and passes CI without Storybook.
- Update any documentation (README, CI workflow notes) to reflect the removal.

**Non-Goals:**
- Adding alternative component documentation solutions (e.g., Styleguidist) – this change only removes Storybook.
- Refactoring component code solely for Storybook compatibility – the existing component code remains unchanged.

## Decisions

1. **Delete `.storybook/` directory** – eliminates Storybook config files.
2. **Remove `storybook-static/`** – prevents serving a stale static build.
3. **Delete all `*.stories.*` source files** – removes source files that Storybook consumes.
4. **Strip Storybook packages from `package.json`** – reduces node_modules size and eliminates CI install steps.
5. **Adjust CI workflow (`.github/workflows/*.yml`)** – remove steps that run `pnpm build-storybook` and any checks that depend on Storybook.
6. **Update OpenSpec `redesign‑homepage` change** – remove Storybook tasks that were previously part of that change to avoid duplicate effort.

These decisions were chosen for minimal disruption; no new runtime dependencies are introduced.

## Risks / Trade-offs

- **Risk:** Developers may miss visual regression testing previously provided by Storybook.
  - **Mitigation:** Rely on existing component tests and visual regression tools if needed in the future.
- **Risk:** CI workflow modifications could accidentally remove required steps.
  - **Mitigation:** Verify CI passes locally before pushing and keep a backup of the original workflow files.

## Migration Plan

1. Create a new branch `remove-storybook` (already done).
2. Delete the identified files and directories.
3. Update `package.json` and run `pnpm install` to refresh lockfile.
4. Modify CI workflow files to drop Storybook steps.
5. Run `pnpm lint` and the project's build script to confirm no breakages.
6. Push the branch and open a PR for review.

## Open Questions

- None at this time; the scope is well‑defined.
