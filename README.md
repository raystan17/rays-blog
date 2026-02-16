# Ray's Blog & Portfolio

A dark-themed, modern personal blog and portfolio built with React and Vite.

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Adding content

- **Blog posts:** Edit `src/data/posts.js`. Add objects with `id`, `title`, `date`, `excerpt`, `image`, and `body` (HTML string).
- **Projects:** Edit `src/data/projects.js`. Add objects with `id`, `title`, `tagline`, `description`, `image`, `tech` (array), `link`, and `year`.
- **Photos:** Edit `src/data/photos.js`. Add objects with `id`, `src`, and `alt`.
- **Belt levels:** Edit `src/data/belt.js` to change the progression structure.

## Structure

- **Home** — Hero, featured projects, featured blog posts
- **Blog** — List and individual post pages with rich content and links
- **Projects** — Portfolio grid and project detail pages
- **Photos** — Gallery with click-to-expand lightbox
- **About** — Personal overview and focus areas
- **Contact** — Form and contact details
- **Belt** — Structured progression / hierarchy page

Design: dark theme (deep tones), Syne + DM Sans typography, accent blue links, smooth hover and scroll behavior.
