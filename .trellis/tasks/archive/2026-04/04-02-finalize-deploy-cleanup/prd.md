# Finalize deploy workflow and cleanup

## Goal

Finalize the Eleventy-based deployment workflow so the repository consistently treats `site/` as the source for migrated pages and `docs/` as generated GitHub Pages output, while removing obsolete references to the old hand-maintained `public/` -> `docs/` mirror workflow.

## Requirements

- Validate that the current Eleventy build generates the deployable static site into `docs/`.
- Update local preview/runtime behavior so it matches the generated deployment output instead of the old manual mirror model.
- Remove or revise stale documentation and command guidance that still instructs manual `public/` and `docs/` synchronization for migrated pages.
- Keep the static server simple and safe; do not weaken path normalization or prefix checks.
- Preserve existing flat output URLs and asset paths.
- Keep `public/` as the legacy asset/source area used by Eleventy passthrough where applicable, but not as a hand-maintained deploy mirror source for migrated pages.

## Acceptance Criteria

- [ ] `npm run build` succeeds and generates the current site into `docs/`.
- [ ] Local preview instructions and/or scripts clearly reflect the generated-output workflow.
- [ ] No key project docs still describe migrated pages as requiring manual `public/` -> `docs/` mirroring.
- [ ] Deployment-related docs/scripts reflect `docs/` as generated GitHub Pages output.
- [ ] Backend/static serving guidance matches the actual directory served in local preview.
- [ ] Existing output paths and shared asset references remain intact.

## Technical Notes

- This task is cleanup/finalization, not another page migration.
- Focus on deploy workflow, scripts, docs, and spec alignment.
- Update only the docs/commands/specs that are clearly stale because of the Eleventy migration.
- Verify generated output rather than editing `docs/` by hand.
