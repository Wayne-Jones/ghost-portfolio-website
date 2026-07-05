## 1. Cleanup

- [ ] 1.1 Delete all `*.stories.*` source files throughout the `src/` directory
- [ ] 1.2 Delete the `.storybook/` configuration directory
- [ ] 1.3 Delete the generated `storybook-static/` directory

## 2. Dependency Removal

- [ ] 2.1 Remove all Storybook packages from `package.json`
- [ ] 2.2 Run `pnpm install` to update the lockfile and prune `node_modules`

## 3. CI Workflow Adjustments

- [ ] 3.1 Edit `.github/workflows/` YAML files to remove Storybook build steps
- [ ] 3.2 Verify CI runs without Storybook related steps

## 4. Documentation Updates

- [ ] 4.1 Remove Storybook references from `README.md`
- [ ] 4.2 Update any internal docs that mention Storybook usage

## 5. OpenSpec Update

- [ ] 5.1 Remove Storybook tasks from the existing `redesign-homepage` change's `tasks.md`
