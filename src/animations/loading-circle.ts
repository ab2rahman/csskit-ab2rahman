import type { Animation } from "../data/animations";

const loadingCircle: Animation = {
  slug: "loading-circle",
  name: "Circle Spinner",
  category: "loading",
  description:
    "Circular spinner with rotating arc segment. Clean, minimal loading indicator with configurable size and thickness.",
  tags: ["loading", "circle", "spinner", "arc", "minimal", "clean"],
  css: `.loading-circle {
  --lc-color: #3b82f6;
  --lc-size: 48px;
  --lc-thickness: 4px;
  --lc-speed: 1s;
  width: var(--lc-size);
  height: var(--lc-size);
  border-radius: 50%;
  border: var(--lc-thickness) solid rgba(59, 130, 246, 0.15);
  border-top-color: var(--lc-color);
  animation: lc-spin var(--lc-speed) linear infinite;
}

@keyframes lc-spin {
  to { transform: rotate(360deg); }
}`,
  html: '<div class="loading-circle"></div>',
  params: [
    { name: "--lc-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--lc-size", label: "Size", type: "range", default: 48, min: 20, max: 80, step: 4, unit: "px" },
    { name: "--lc-thickness", label: "Thickness", type: "range", default: 4, min: 2, max: 10, step: 1, unit: "px" },
    { name: "--lc-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 200, height: 150, darkBg: true },
};

export default loadingCircle;
