# Set up Eleventy build foundation

## Goal

Introduce Eleventy as the static site build foundation so the project can migrate away from hand-maintained duplicated HTML while still producing plain static output for GitHub Pages.

## Requirements

- Install and configure Eleventy in the existing repository.
- Define a dedicated Eleventy input directory separate from `public/`.
- Output built files to `docs/` for GitHub Pages publishing.
- Preserve flat output paths for existing page URLs and relative asset links.
- Establish the initial `_includes` and `_data` structure for later migration subtasks.
- Copy required shared assets into the output during build.
- Avoid large-scale page migration in this foundation-only step.

## Acceptance Criteria

- [ ] `package.json` includes Eleventy dependency and build scripts.
- [ ] The repository contains a working Eleventy config file.
- [ ] A dedicated template source directory exists with initial layout/include/data scaffolding.
- [ ] Running the build generates site output in `docs/`.
- [ ] Shared assets needed by future migrated pages are copied to `docs/`.
- [ ] The chosen structure does not require changing current page URLs.

## Technical Notes

- Keep `public/` as the reference/source during the migration period.
- Do not mix generated output into `public/`.
- Prefer CommonJS-compatible configuration to match the current repo setup.
- Keep the initial implementation small and focused on infrastructure only.
