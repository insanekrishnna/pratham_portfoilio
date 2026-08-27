<<<<<<< HEAD
# pratham.dev

Personal portfolio of Pratham Yadav — Full Stack Developer.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **Tailwind CSS v4** with a two-anchor token system (`--base` / `--base-foreground`)
- **Motion** (framer-motion) for interaction and layout animation
- **Lenis** for smooth scrolling on pointer-fine devices
- **Nodemailer** for the contact form relay

## Structure

```
app/                  routes: / , /projects , /contact , /api/*
components/layout/    container, rails, rules, nav, footer — the design system
components/home/      one file per home-page section
components/projects/  project card, grid and searchable list
components/ui/        shadcn primitives actually in use
lib/content/          all site content as typed data (single source of truth)
hooks/                interaction feedback (sound + haptics)
```

Content lives in `lib/content/`. Editing a project, role or link there updates
every place it appears — the home page, `/projects`, the command menu and the
JSON-LD structured data.

## Design system

The whole theme derives from two colour anchors, so light and dark stay in step
without per-colour edits. Layout is one 715px column marked by full-height
rails, with sections separated by full-bleed hatch bands (`HatchRule`) and
hairlines (`.screen-line-top` / `.screen-line-bottom`).

## Local development

```bash
npm install
npm run dev
```

Environment variables (see `.env.local`):

| Variable | Purpose |
| --- | --- |
| `SMTP_HOST` `SMTP_PORT` `SMTP_USER` `SMTP_PASS` `SMTP_FROM` | Contact form relay |
| `CONTACT_TO` | Where contact messages are delivered |
| `NEXT_PUBLIC_GITHUB_TOKEN` | GitHub contributions graph (`read:user` scope) |

The Activity section removes itself if the GitHub feed is unavailable, so the
token is optional.

## Keyboard

| Key | Action |
| --- | --- |
| `⌘K` / `Ctrl+K` | Command menu |
| `D` | Toggle theme |

Interface sound is off by default and can be enabled from the command menu.
All motion respects `prefers-reduced-motion`.
=======
prathm.me
>>>>>>> bdc7251670ca238a7c0bdd888a367b69f8cf71dd
