# Lillian Navales Rivera — Portfolio

A 2D free-roaming portfolio website with an infinite canvas concept, built for designer Lillian Navales Rivera.

## What it is

Instead of a traditional scrolling page, visitors pan and zoom around a spatial canvas to discover content nodes: a biography, project case study cards, and an embedded PDF portfolio viewer. The experience is analogous to a moodboard or whiteboard — exploratory and non-linear.

## Key technologies

- **[TanStack Start](https://tanstack.com/start)** — full-stack React framework
- **[react-zoom-pan-pinch](https://github.com/BetterTyped/react-zoom-pan-pinch)** — infinite canvas pan/zoom with inertia and touch support
- **[content-collections](https://content-collections.dev/)** — Markdown-based project content
- **Tailwind CSS v4** — utility-first styling
- **Netlify** — hosting and deployment

## Running locally

```bash
npm install
npm run dev
```

The dev server starts on `http://localhost:3000`.

To run with Netlify's local emulation (forms, functions, etc.):

```bash
netlify dev --port 8889
```

## Adding projects

Drop a Markdown file in `content/projects/` with this frontmatter:

```md
---
title: "Project Name"
description: "One-sentence summary"
tags: ["Tag 1", "Tag 2"]
year: "2024"
role: "Lead Designer"
image: "/optional-cover.jpg"
github: "https://github.com/..."
liveUrl: "https://..."
---

Longer description / case study content here.
```

## Updating the PDF

Replace `public/portfolio.pdf` with a new file and it will be served immediately.
