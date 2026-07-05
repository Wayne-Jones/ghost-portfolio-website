## MODIFIED Requirements

### Requirement: CI pipeline excludes Storybook
The CI pipeline SHALL no longer execute Storybook build steps. All CI jobs must complete without running `pnpm build-storybook` or related Storybook commands.

#### Scenario: CI runs without Storybook
- **WHEN** a push is made to any branch
- **THEN** the CI workflow runs lint, tests, and build steps, but does NOT invoke Storybook.
