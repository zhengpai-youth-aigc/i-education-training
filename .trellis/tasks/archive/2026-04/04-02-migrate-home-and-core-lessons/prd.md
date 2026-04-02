# Migrate homepage and core lesson pages

## Goal

Migrate the homepage and the main numbered lesson pages into the Eleventy template system so they stop depending on hand-maintained duplicated HTML in `public/`, while preserving the current flat URLs, design, inline interactions, and GitHub Pages static output.

## Scope

- `index.html`
- `lesson-01.html` through `lesson-06.html`
- Shared sidebar, search overlay, bottom navigation, homepage catalog/update sections, and progress behavior used by those pages

## Out of Scope

- `lesson-07.html`
- `rtk-install-guide.html`
- `student-guide.html`
- `codex-first-lesson.html`
- Deploy workflow cleanup after migration

## Requirements

- Migrate homepage content into Eleventy source under `site/`.
- Migrate lesson pages `lesson-01.html` through `lesson-06.html` into Eleventy source under `site/`.
- Preserve current final flat output paths in `docs/`.
- Preserve shared styling via `styles.css` and reuse existing classes/markup patterns.
- Preserve sidebar navigation, search overlay behavior, and progress tracking behavior.
- Reuse centralized Eleventy data from `site/_data/` instead of reintroducing duplicated page-local metadata.
- Keep page-specific content mostly HTML-first; avoid over-abstracting lesson body content.
- Keep homepage latest updates and course catalog driven from centralized data/includes.
- Ensure migrated pages do not require manual mirrored edits in both `public/` and `docs/`.

## Acceptance Criteria

- [ ] `site/` contains Eleventy source pages for homepage and lessons 01-06.
- [ ] `docs/index.html` and `docs/lesson-01.html` through `docs/lesson-06.html` are generated from Eleventy.
- [ ] Sidebar active state works correctly on homepage and each migrated lesson page.
- [ ] Search overlay works on homepage and each migrated lesson page using centralized search data.
- [ ] Progress UI still renders correct totals from centralized progress data and lesson completion still updates `ai-course-progress`.
- [ ] Homepage latest updates and course catalog render from shared Eleventy partials/data instead of duplicated inline arrays/markup.
- [ ] Existing URLs and asset references remain valid.

## Technical Notes

- True source for migrated pages must be `site/`, not hand-edited `docs/`.
- Follow existing static-site patterns from `public/index.html`, `public/lesson-01.html`, and `public/lesson-06.html`.
- Use existing shared Eleventy layout and partials where possible:
  - `site/_includes/layouts/base.njk`
  - `site/_includes/layouts/course-shell.njk`
  - `site/_includes/partials/sidebar.njk`
  - `site/_includes/partials/search-overlay.njk`
  - `site/_includes/partials/home-latest-updates.njk`
  - `site/_includes/partials/home-course-catalog.njk`
  - `site/_includes/partials/scripts/search.njk`
  - `site/_includes/partials/scripts/progress.njk`
- Keep page-local inline `<style>` blocks only where a page already needs unique presentation.
- The homepage currently has custom hero/layout styling and should likely remain a dedicated page template while still using shared data/partials.
