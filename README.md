# CSSKit

Free CSS animation library. Browse, preview, and copy-paste pure CSS animations.

Built with Astro, React, and Tailwind CSS.

## Quick Start

```bash
nvm use 22
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321)

## Features

- **30+ animations** across 7 categories: Text, Hover, Loading, Background, Entrance, Button, Pixel
- **Live preview** — see animations in real-time on the library grid
- **Copy & paste** — one-click copy CSS and HTML code
- **Search & filter** — find animations by name, tag, or category
- **Dark mode** — dark backgrounds for animations that need it
- **Static site** — pre-rendered pages for fast loading

## Adding Animations

1. Create `src/animations/your-name.ts` with an `Animation` object
2. Import and add it to the array in `src/animations/index.ts`

See [CLAUDE.md](./CLAUDE.md) for the full `Animation` interface and architecture details.

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |

## Requirements

- Node.js >= 22.12.0

## License

MIT
