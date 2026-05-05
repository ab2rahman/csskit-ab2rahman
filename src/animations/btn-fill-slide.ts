import type { Animation } from "../data/animations";

const btnFillSlide: Animation = {
  slug: "btn-fill-slide",
  name: "Fill Slide",
  category: "button",
  description:
    "Background slides in from left on hover, filling the button with color. Clean CTA hover transition with directional fill.",
  tags: ["button", "fill", "slide", "background", "cta", "hover"],
  css: `.btn-fill-slide {
  --bfs-from: transparent;
  --bfs-to: #3b82f6;
  --bfs-text: #3b82f6;
  --bfs-speed: 0.3s;
  display: inline-block;
  padding: 12px 28px;
  border-radius: 8px;
  border: 2px solid #3b82f6;
  font-weight: 600;
  font-size: 14px;
  font-family: system-ui, sans-serif;
  color: var(--bfs-text);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color var(--bfs-speed) ease;
}

.btn-fill-slide::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--bfs-to);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--bfs-speed) ease;
  z-index: -1;
}

.btn-fill-slide:hover { color: #fff; }
.btn-fill-slide:hover::before { transform: scaleX(1); }`,
  html: '<div class="btn-fill-slide">Click me</div>',
  params: [
    { name: "--bfs-to", label: "Fill Color", type: "color", default: "#3b82f6" },
    { name: "--bfs-speed", label: "Speed", type: "duration", default: 0.3, min: 0.1, max: 1, step: 0.05, unit: "s" },
  ],
  preview: { width: 250, height: 120, darkBg: false },
};

export default btnFillSlide;
