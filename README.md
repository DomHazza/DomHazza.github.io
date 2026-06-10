# domhazza.github.io

Personal portfolio + blog. Static [Astro](https://astro.build) site styled with Tailwind CSS,
content driven by markdown/MDX files, deployed to GitHub Pages by GitHub Actions.

## Running locally

Requires Node 22+ (Node 24 LTS recommended).

```sh
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Adding a project

Drop a file in `src/content/projects/`, e.g. `my-project.md` (or `.mdx` to embed components):

```yaml
---
title: My project
description: One line shown on the projects index and home page.
date: 2026-07-01
tags: [machine learning, Python]
repo: https://github.com/DomHazza/my-project   # optional
demo: https://example.com                      # optional
video: https://www.youtube.com/watch?v=...     # optional — YouTube/Vimeo, embedded on the page
featured: true                                 # optional — floats to the top of indexes
draft: true                                    # optional — visible in dev, excluded from deploys
---

Writeup in markdown below the frontmatter.
```

The page appears at `/projects/my-project/` (slug = filename).

## Adding a blog post

Same idea in `src/content/blog/`:

```yaml
---
title: A new post
description: One line for the blog index.
date: 2026-07-01
tags: [engineering]
relatedProject: my-project   # optional — links post and project both ways
draft: true                  # optional
---
```

To embed video or components in a post, rename it `.mdx` and import the component:

```mdx
import VideoEmbed from '../../components/VideoEmbed.astro';

<VideoEmbed url="https://www.youtube.com/watch?v=..." title="What this video is" />
```

## Updating the CV

- Replace `public/cv.pdf` to update the downloadable PDF.
- Edit the structured content (experience, education, skills) in `src/pages/cv.astro`.

## Site-wide settings

- `src/consts.ts` — name, description, external links (add your LinkedIn URL here).
- `src/styles/global.css` — palette (light + dark), fonts, prose styles.
- `astro.config.mjs` — site URL and integrations.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site with the
official Astro action and deploys it to GitHub Pages. The repository's Pages setting must be
**Settings → Pages → Source: GitHub Actions** (one-time setup).

## Maintenance notes

- `vite` is pinned in `devDependencies` on purpose: astro 6.4.x runs Vite 7, but
  `@tailwindcss/vite` would otherwise auto-install Vite 8 alongside it and the build fails.
  Remove the pin only once Astro itself depends on Vite 8 (`npm view astro dependencies.vite`).
