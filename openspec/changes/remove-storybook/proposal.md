## Why

Storybook is no longer required for this project. Its dependencies and CI steps cause the repository's CI to fail due to mandatory CodeQL scans and increase build time. Removing Storybook simplifies the workflow and eliminates unnecessary artifacts.

## What Changes

- Delete all `*.stories.*` files and the `.storybook/` configuration directory.
- Remove Storybook packages from `package.json` and update lockfile.
- Delete the generated `storybook-static/` directory.
- Clean CI workflows to exclude Storybook build steps.
- Update the `redesign‑homepage` OpenSpec change to remove Storybook tasks and dependencies.
- Adjust documentation and README to reflect the removal.

## Capabilities

### New Capabilities
- None.

### Modified Capabilities
- `ci-pipeline`: The continuous‑integration pipeline will no longer include Storybook build steps; the CI configuration is simplified.

## Impact

- Codebase: Deletion of several `.stories.tsx` source files.
- Build process: Faster CI runs; removal of mandatory CodeQL checks triggered by Storybook execution.
- Documentation: README updates required to remove Storybook references.
