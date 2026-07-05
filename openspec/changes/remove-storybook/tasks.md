## 1. Cleanup

- [x] 1.1 Delete all `*.stories.*` source files throughout the `src/` directory
- [x] 1.2 Delete the `.storybook/` configuration directory
- [x] 1.3 Delete the generated `storybook-static/` directory

## 2. Dependency Removal

- [x] 2.1 Remove all Storybook packages from `package.json`
- [x] 2.2 Run `pnpm install` to update the lockfile and prune `node_modules`

## 3. CI Workflow Adjustments

- [x] 3.1 Edit `.github/workflows/` YAML files to remove Storybook build steps
- [x] 3.2 Verify CI runs without Storybook related steps

## 4. Documentation Updates

- [x] 4.1 Remove Storybook references from `README.md`
- [x] 4.2 Update any internal docs that mention Storybook usage

## 5. OpenSpec Update

- [x] 5.1 Remove Storybook tasks from the existing `redesign-homepage` change's `tasks.md`
