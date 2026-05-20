# wshanshan.github.io

Personal blog at [wshanshan.github.io](https://wshanshan.github.io), built with [Astro](https://astro.build) and the [AstroPaper](https://github.com/satnaing/astro-paper) theme.

## Local development

```bash
npm install       # first time only
npm run dev       # start dev server at http://localhost:4321
npm run build     # production build → dist/ (includes pagefind search index)
npm run preview   # preview the production build locally
```

## Adding a post

Create a Markdown file in `src/content/posts/` with this frontmatter:

```markdown
---
title: "Your Post Title"
pubDatetime: 2026-01-01T00:00:00Z
description: "Short summary shown in listings and OG image."
tags: [Python, Tutorial]
featured: false
draft: false
---

Your content here.
```

## Site configuration

Edit [astro-paper.config.ts](astro-paper.config.ts) to update the site title, author, social links, and theme features.

## Deployment

Pushes to `master` automatically deploy to GitHub Pages via the GitHub Actions workflow in `.github/workflows/deploy.yml`. No manual build step needed.

> **GitHub Pages setup**: In repo Settings → Pages, set the source to **GitHub Actions** (not "Deploy from a branch").
