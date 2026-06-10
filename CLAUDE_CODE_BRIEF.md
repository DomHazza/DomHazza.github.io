# Personal Portfolio Site — Build Brief

This is a spec for building a personal portfolio + blog site. Read the whole brief before starting, then scaffold the project and confirm the structure with me before writing content components.

## Goal

A personal website to showcase a CV, technical/creative projects, and short blog posts (with embedded video). Elegant, serif-forward, editorial aesthetic. Static site, hosted on GitHub Pages.

## Stack

- **Astro** (latest) — static output.
- **Tailwind CSS** via `@astrojs/tailwind`.
- **Astro content collections** for `projects` and `blog` (markdown/MDX driven).
- **MDX** (`@astrojs/mdx`) so posts can embed components (e.g. video embeds, interactive widgets).
- Deploy via **GitHub Actions** to **GitHub Pages**.

No CMS, no database, no client-side framework beyond the occasional island. Ship minimal JS.

## Site structure

Five top-level sections:

1. **Home (`/`)** — one-screen landing: name, one-line description, short intro paragraph, links to CV/projects/blog and external links (GitHub, LinkedIn, email). No long scroll required to get the gist.
2. **CV (`/cv`)** — readable web version of the CV, plus a prominent "Download PDF" button linking to a PDF in `/public`. Render the CV content as structured page sections (experience, education, skills), not just an embedded PDF.
3. **Projects (`/projects`)** — index of project cards, each linking to a detail page (`/projects/[slug]`). Detail pages support a writeup, figures/images, links to code/repo, and embedded video.
4. **Blog (`/blog`)** — reverse-chronological list of posts, each at `/blog/[slug]`. Markdown/MDX driven — adding a post = dropping a file in the content folder. Support embedded video and images.
5. **About (`/about`)** — short personal section (interests outside work).

Projects and blog should be cross-linkable (a project page can link to a related blog post and vice versa).

## Content collections schema

Define two collections in `src/content/config.ts`:

**`projects`** frontmatter:
- `title` (string)
- `description` (string, short — for cards)
- `date` (date)
- `tags` (string array)
- `cover` (optional image)
- `repo` (optional url)
- `demo` (optional url)
- `video` (optional url — YouTube/Vimeo embed)
- `featured` (boolean, default false) — for ordering on home/projects index
- `draft` (boolean, default false)

**`blog`** frontmatter:
- `title` (string)
- `description` (string)
- `date` (date)
- `tags` (string array)
- `relatedProject` (optional slug string)
- `draft` (boolean, default false)

Drafts must be excluded from production builds.

## Visual design

Serif-forward, editorial, elegant. Restraint is the priority — the site should read as deliberately designed, not templated.

**Typography**
- Headings/display: **Fraunces** (use optical sizing / a higher optical-size axis at large sizes for character).
- Body: **Inter**.
- Load via Fontsource (`@fontsource-variable/fraunces`, `@fontsource-variable/inter`) rather than a Google Fonts CDN link, so fonts are self-hosted and the site stays fast/offline-capable.
- (If a single-serif look is preferred, Newsreader throughout is the fallback option — but default to Fraunces + Inter.)

**Palette** (define as Tailwind theme tokens / CSS custom properties):
- Text: `#1a1a1a` (near-black, not pure black)
- Background: `#faf8f4` (warm off-white)
- Accent: a deep ink blue (`#1d3a5f` or similar) — used sparingly for links and small accents only
- Muted/secondary text: a warm grey
- Include a tasteful dark mode (warm dark background, not pure black) if straightforward — otherwise skip and note it.

**Layout & spacing**
- Body text measure ~65–70ch (`max-w-[680px]` for prose).
- Body line-height 1.6–1.7.
- Generous whitespace; consistent spacing scale.
- Thin hairline rules between sections rather than heavy borders/cards-with-shadows.
- Larger-than-default heading scale.
- Restrained hover states (subtle underline / color shift, no big animations).

Read the project's frontend-design skill/guidance if available before finalizing styling, and avoid default-looking component patterns.

## Deployment

- Set `site` and `base` correctly in `astro.config.mjs` for GitHub Pages (ask me whether this will be a user/org page at `username.github.io` or a project page at `username.github.io/repo` — the `base` differs).
- Add a GitHub Actions workflow (`.github/workflows/deploy.yml`) using the official Astro GitHub Pages action that builds on push to `main` and deploys to Pages.
- Add a `README.md` documenting: how to run locally (`npm install`, `npm run dev`), how to add a project, how to add a blog post, and how deployment works.

## Build order

1. Scaffold the Astro project, install dependencies (Tailwind, MDX, Fontsource fonts), wire up config. **Pause and show me the structure.**
2. Set up content collections + schema.
3. Build the base layout, typography, palette, and a shared header/footer.
4. Build the five pages/sections with 1–2 pieces of placeholder content each (one sample project, one sample blog post) so I can see it working.
5. Add the GitHub Actions deploy workflow and README.
6. Run a local build (`npm run build`) to confirm it compiles cleanly.

## Notes

- Prefer clarity and editability over cleverness — I'll be maintaining this myself.
- Ask before introducing any additional dependency beyond those listed above.
- Placeholder content is fine for the first pass; I'll supply real CV/project/blog content after.
