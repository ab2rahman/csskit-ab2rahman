# CSSKit — Project Context

> Free CSS animation library. Browse, preview, customize, and copy-paste pure CSS animations.

## Tech Stack

- **Framework:** Astro 6 (SSG — static site generation)
- **UI:** React 19 (hydrated islands) + Astro components
- **Styling:** Tailwind CSS 4
- **Runtime:** Node.js >= 22.12.0
- **Repo:** https://github.com/ab2rahman/csskit-ab2rahman

## Commands

```bash
nvm use 22              # Switch to required Node version
npm run dev             # Dev server at http://localhost:4321
npm run build           # Production build to ./dist/
npm run preview         # Preview production build locally
```

## Project Structure

```
src/
  animations/
    index.ts            # Central registry — imports all animations, exports array + helpers
    *.ts                # Individual animation files (one per animation)
  components/
    HomePage.tsx         # Main library grid (React, client:only)
    Sidebar.astro        # Fixed left sidebar with category navigation
    Header.astro         # Sticky top header
    AnimationPreview.tsx # Interactive preview with param controls (unused)
    AnimationCard.astro  # Astro card component (unused)
  data/
    animations.ts        # Types (Animation, Param, Category) + categories list
  layouts/
    BaseLayout.astro     # HTML shell with sidebar + header + max-w-6xl main
  pages/
    index.astro          # Home page (/)
    animations/
      [slug].astro       # Detail page (/animations/:slug) — static generation
  styles/
    global.css           # Global styles + Tailwind
```

## Adding a New Animation

1. Create `src/animations/your-name.ts` exporting a default `Animation` object
2. Import it in `src/animations/index.ts`
3. Add it to the `animations` array (group by category comment)
4. The category must match one of the `Category` union types in `src/data/animations.ts`

### Animation Object Shape

```typescript
{
  slug: "your-name",           // URL-safe identifier
  name: "Your Name",           // Display name
  category: "text",            // text|hover|loading|background|entrance|button|pixel
  description: "...",          // Short description
  tags: ["tag1", "tag2"],      // Searchable tags
  css: ".your-class { ... }",  // Raw CSS string (keyframes + classes)
  html: '<div class="your-class"></div>',  // HTML snippet
  params: [],                  // Customizable parameters (or empty array)
  preview: { width: 400, height: 200, darkBg: false },
}
```

## Key Architecture Decisions

- **Static generation** — all animation pages are pre-rendered at build time via `getStaticPaths`
- **React island** — only `HomePage.tsx` uses React (`client:only="react"`), everything else is Astro
- **CSS injection** — animations inject CSS via `<style is:inline set:html={css} />` (Astro) or `<style dangerouslySetInnerHTML>` (React)
- **Large CSS handling** — animations with CSS > 10KB get truncated code preview with a hidden `<textarea>` for full copy
- **Max-width layout** — main content capped at `max-w-6xl` (1152px), centered

## Gotchas

- **Astro + set:html on `<code>`** — Astro dev mode adds `data-astro-source-loc` attributes that break nested `<code>` inside `<pre>`. Use `<pre set:html={...} />` directly without inner `<code>` tags.
- **CSS variables in keyframes** — Avoid using `var()` inside `@keyframes` for animation properties. Use hardcoded values for reliability across browsers.
- **Pixel art animations** — Box-shadow pixel art can be very large (200KB+). Always use hardcoded color values (no CSS variables) and keep scale reasonable for card previews (~160px height).
- **Node version** — Requires Node >= 22.12.0. Use `nvm use 22` before running.

## Categories

| Slug | Label | Icon |
|------|-------|------|
| text | Text | T |
| hover | Hover | ↗ |
| loading | Loading | ◌ |
| background | Background | ▦ |
| entrance | Entrance | ↓ |
| button | Button | ☐ |
| pixel | Pixel | ▪ |
