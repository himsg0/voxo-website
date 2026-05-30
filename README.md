# Voxo Media — Website

Marketing website for **Voxo Media**, a creative agency. Built as a modern React
application and shipped as a **fully static, prerendered site** so it can be
hosted on any static host (e.g. Hostinger shared hosting) with **no Node.js or
server-side runtime required**.

---

## Table of contents

- [Overview](#overview)
- [Tech stack](#tech-stack)
- [Pages](#pages)
- [How it works (static prerendering)](#how-it-works-static-prerendering)
- [Project structure](#project-structure)
- [Local development](#local-development)
- [Building for production](#building-for-production)
- [Deployment to Hostinger](#deployment-to-hostinger)
- [Configuration notes](#configuration-notes)
- [Known limitations](#known-limitations)

---

## Overview

The site is a content-only brochure website: all copy, imagery, and layout are
static. There is no database, no authentication, and no per-request server
logic. Because of that, it is built once into plain HTML/CSS/JS files and served
as static assets.

Although the project is built on **TanStack Start** (a framework that supports
server-side rendering), SSR is **not** used in production. Instead, every page is
**prerendered to static HTML at build time**, giving the SEO and direct-link
benefits of SSR without needing a running server.

## Tech stack

| Concern            | Technology                                   |
| ------------------ | -------------------------------------------- |
| Framework          | TanStack Start + TanStack Router             |
| UI library         | React 19                                     |
| Build tool         | Vite 7                                        |
| Styling            | Tailwind CSS v4                              |
| Animation          | Framer Motion                                |
| Data/state         | TanStack Query                               |
| Icons              | lucide-react                                 |
| Fonts              | Fontsource (Inter, Archivo Black, Caveat)    |
| Language           | TypeScript                                   |
| Output             | Static HTML + assets (prerendered)           |

## Pages

All routes are prerendered to their own `index.html`:

| Route        | Description            |
| ------------ | ---------------------- |
| `/`          | Home                   |
| `/about`     | About                  |
| `/work`      | Work / portfolio       |
| `/services`  | Services               |
| `/culture`   | Culture                |
| `/insights`  | Insights               |
| `/contact`   | Contact                |

## How it works (static prerendering)

The static build is configured in [`vite.config.ts`](./vite.config.ts):

- **Nitro is disabled** (`nitro: false`) so the build produces a plain
  Vite + TanStack Start output instead of a Cloudflare/Node deploy bundle.
- **Prerendering is enabled** via the TanStack Start plugin:
  - `crawlLinks` discovers routes by following links.
  - An explicit `pages` list guarantees every route is rendered even if a link
    is missed.
  - `autoSubfolderIndex` writes each route as `route/index.html`, so clean URLs
    (e.g. `/about`) work on Apache without rewrite rules.

The production output is written to **`dist/client/`** — this folder is the
entire deployable website. The `dist/server/` folder is only used internally at
build time to render the pages and is **not deployed**.

## Project structure

```
.
├── public/
│   └── .htaccess          # Apache config (copied into the build output)
├── src/
│   ├── assets/            # Images (hero, team, work, cards, logo)
│   ├── components/        # Nav, Footer, CustomCursor, Magnetic, etc.
│   ├── hooks/             # use-mobile
│   ├── lib/               # utilities
│   ├── routes/            # one file per page + __root.tsx
│   ├── router.tsx         # router setup
│   └── styles.css         # Tailwind entry + global styles
├── vite.config.ts         # build + prerender configuration
├── package.json
└── README.md
```

## Local development

Requires **Node.js 20+**. You can use npm or bun.

```bash
# install dependencies
npm install        # or: bun install

# start the dev server (hot reload)
npm run dev        # or: bun run dev
```

The dev server runs on the port Vite prints in the terminal (default
`http://localhost:5173` / `:3000`).

## Building for production

```bash
npm run build      # or: bun run build
```

This prerenders all pages and outputs the static site to **`dist/client/`**.

To preview the exact static output locally with a plain file server (no app
server), serve that folder directly:

```bash
cd dist/client
python3 -m http.server 8099
# open http://localhost:8099
```

Direct links such as `http://localhost:8099/about/` should load from
prerendered HTML.

## Deployment to Hostinger

The site is static, so deploy it to Hostinger shared hosting like any static
website. **Deploy at the domain root** (`public_html`) — assets are referenced
with absolute paths (`/assets/...`), so a subfolder deploy would break them.

### Option A — Upload via hPanel File Manager

1. Run `npm run build`.
2. Zip the **contents** of `dist/client/` (including the hidden `.htaccess`).
3. In Hostinger **hPanel → Files → File Manager**, open `public_html` and
   remove any default parked page.
4. Upload the zip into `public_html` and **Extract** it there. Files must sit
   directly in `public_html` (so `public_html/index.html` exists).
5. Enable **Show hidden files** and confirm `.htaccess` is present.
6. Delete the zip from the server and visit your domain.

### Option B — Upload via FTP

1. Run `npm run build`.
2. Connect to your Hostinger FTP account (hPanel → Files → FTP Accounts).
3. Upload the **contents** of `dist/client/` into `public_html`, including the
   hidden `.htaccess`.

### What `.htaccess` does

The bundled [`public/.htaccess`](./public/.htaccess) (copied into every build) adds:

- **Gzip compression** for text assets.
- **Long-term caching** (1 year, immutable) for hashed JS/CSS/image assets.
- **No-cache for HTML** so visitors always get the latest deploy.
- A **fallback** that serves the app shell for unknown URLs, so visitors see the
  site's styled 404 page instead of Apache's default error page.

## Configuration notes

- **Domain root only.** Because assets use absolute `/assets/...` paths, the site
  must be served from the domain root. Hosting under a subpath requires setting a
  router/base path and rebuilding.
- **Adding a page.** Create a new file in `src/routes/`, then add its path to the
  `pages` list in `vite.config.ts` so it is prerendered.

## Known limitations

- **Contact form is not wired up.** The form on `/contact` currently prevents its
  default submit and does not send anything. On a static host there is no
  backend, so to receive submissions, connect it to a third-party form service
  (e.g. Formspree, Web3Forms) or a serverless function.
