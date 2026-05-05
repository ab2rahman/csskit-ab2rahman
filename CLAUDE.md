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
    AnimationPreview.tsx # Interactive preview with param controls (React, client:only)
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
  category: "text",            // text|hover|loading|background|entrance|attention|button|card|pixel
  description: "...",          // Short description
  tags: ["tag1", "tag2"],      // Searchable tags
  css: ".your-class { ... }",  // Raw CSS string (keyframes + classes)
  html: '<div class="your-class"></div>',  // HTML snippet
  params: [                    // Interactive params (empty array = static mode)
    { name: "--your-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--your-speed", label: "Speed", type: "duration", default: 1, min: 0.2, max: 5, step: 0.1, unit: "s" },
    { name: "--your-size", label: "Size", type: "range", default: 40, min: 10, max: 100, step: 5, unit: "px" },
    { name: "--your-text", label: "Text", type: "text", default: "Hello" },
    { name: "--your-style", label: "Style", type: "select", default: "solid", options: [{ label: "Solid", value: "solid" }, { label: "Dashed", value: "dashed" }] },
  ],
  preview: { width: 400, height: 200, darkBg: false },
}
```

### Param Types

| Type | Control | CSS Variable Pattern |
|------|---------|---------------------|
| `color` | Color picker | `--your-color: #3b82f6` |
| `range` | Slider with unit | `--your-size: 40px` |
| `duration` | Slider in seconds | `--your-speed: 1s` |
| `text` | Text input | `--your-text: 'Hello'` |
| `select` | Dropdown | `--your-style: solid` |

**How params work:**
- CSS variables are defined in the animation class (e.g., `--sh-color: #ef4444`)
- The `name` field must match the CSS variable name (e.g., `--sh-color`)
- `AnimationPreview.tsx` regex-replaces variable values in the CSS string on change
- Params are auto-detected: if `params.length > 0` AND `css.length <= 10KB`, the detail page uses the interactive React component

**When NOT to add params:**
- Large CSS (>10KB) like pixel art — stays in static mode
- Complex animations with many hardcoded values — keep `params: []`

## Key Architecture Decisions

- **Static generation** — all animation pages are pre-rendered at build time via `getStaticPaths`
- **React islands** — `HomePage.tsx` (library grid + infinite scroll) and `AnimationPreview.tsx` (interactive params) use `client:only="react"`
- **Dual detail page mode** — animations with params ≤ 10KB get the interactive React preview; animations without params or large CSS get the static Astro template
- **CSS injection** — animations inject CSS via `<style is:inline set:html={css} />` (Astro) or `<style dangerouslySetInnerHTML>` (React)
- **Large CSS handling** — animations with CSS > 10KB get truncated code preview with a hidden `<textarea>` for full copy
- **Infinite scroll** — `HomePage.tsx` renders cards in batches of 24, loads more on scroll via `IntersectionObserver`
- **Lazy CSS injection** — cards only inject their `<style>` tag when they enter the viewport (200px margin)
- **Mobile responsive** — sidebar hidden on mobile (slides in with overlay), horizontal scroll tabs, `overflow-x-hidden` containment chain
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
| exit | Exit | ↑ |
| attention | Attention | ★ |
| button | Button | ☐ |
| card | Card | ▢ |
| divider | Divider | — |
| pixel | Pixel | ▪ |

## Expansion Plan

See [PLAN-more-animations.md](./PLAN-more-animations.md) for the full roadmap to grow from 37 → 91 animations.

Phases:
1. **Fill weak categories** — attention, card, pixel (13 new)
2. **Strengthen existing** — text, hover, loading, background, entrance, button (31 new)
3. **New categories** — exit, divider (9 new)
