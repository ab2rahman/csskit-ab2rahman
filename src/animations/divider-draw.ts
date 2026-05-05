import type { Animation } from "../data/animations";

const dividerDraw: Animation = {
  slug: "divider-draw",
  name: "Draw Line",
  category: "divider",
  description:
    "Horizontal line that draws itself from left to right. Clean, minimal divider animation for section separators.",
  tags: ["divider", "draw", "line", "horizontal", "section", "separator"],
  css: `.divider-draw {
  --dd-color: #3b82f6;
  --dd-thickness: 2px;
  --dd-speed: 1s;
  width: 240px;
  height: var(--dd-thickness);
  background: transparent;
  position: relative;
  overflow: hidden;
}

.divider-draw::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--dd-color);
  animation: dd-draw var(--dd-speed) ease-out forwards;
  transform-origin: left;
}

@keyframes dd-draw {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}`,
  html: '<div class="divider-draw"></div>',
  params: [
    { name: "--dd-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--dd-thickness", label: "Thickness", type: "range", default: 2, min: 1, max: 6, step: 1, unit: "px" },
    { name: "--dd-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 350, height: 100, darkBg: false },
};

export default dividerDraw;
