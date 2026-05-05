import type { Animation } from "../data/animations";

const hoverSlideBg: Animation = {
  slug: "hover-slide-bg",
  name: "Slide Background",
  category: "hover",
  description:
    "Background color slides in from one side, pushing the old color out. Clean hover transition with directional fill effect.",
  tags: ["hover", "background", "slide", "fill", "direction", "transition"],
  css: `.hover-slide-bg {
  --hsb-from: #1e293b;
  --hsb-to: #3b82f6;
  --hsb-speed: 0.3s;
  position: relative;
  display: inline-block;
  padding: 14px 32px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 15px;
  font-family: system-ui, sans-serif;
  color: #e2e8f0;
  cursor: pointer;
  z-index: 1;
  overflow: hidden;
  border: 1px solid #374151;
  background: var(--hsb-from);
  transition: color var(--hsb-speed) ease, border-color var(--hsb-speed) ease;
}

.hover-slide-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--hsb-to);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--hsb-speed) ease;
  z-index: -1;
}

.hover-slide-bg:hover {
  color: #fff;
  border-color: var(--hsb-to);
}

.hover-slide-bg:hover::before {
  transform: scaleX(1);
}`,
  html: '<div class="hover-slide-bg">Slide In</div>',
  params: [
    { name: "--hsb-from", label: "From Color", type: "color", default: "#1e293b" },
    { name: "--hsb-to", label: "To Color", type: "color", default: "#3b82f6" },
    { name: "--hsb-speed", label: "Speed", type: "duration", default: 0.3, min: 0.1, max: 1, step: 0.05, unit: "s" },
  ],
  preview: { width: 280, height: 120, darkBg: true },
};

export default hoverSlideBg;
