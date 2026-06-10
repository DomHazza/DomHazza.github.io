---
title: Notes on building this site
description: What's under the hood — and how adding a post is just dropping a markdown file in a folder.
date: 2026-06-10
tags: [meta, web]
relatedProject: building-this-site
---

This is the first post — partly a hello, partly living documentation for future me.

The site is an Astro static build deployed to GitHub Pages. Posts live in
`src/content/blog/`, one markdown file each. To publish, a file just needs frontmatter like:

```yaml
---
title: A new post
description: One line for the index page.
date: 2026-07-01
tags: [engineering]
draft: true
---
```

A post marked `draft: true` shows up locally but is excluded from the deployed site, so
half-written things can sit in the repo safely. Posts can also point at a project with
`relatedProject: <project-id>` — this post does exactly that, which is why a link to the project
writeup appears below. The link goes both ways: the project page lists this post under
"related writing".

Posts can embed images, code blocks, and — by renaming the file from `.md` to `.mdx` — components
like video embeds. That's the whole workflow: write a file, commit, push.
