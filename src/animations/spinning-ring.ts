import type { Animation } from "../data/animations";

const spinningRing: Animation = {
  slug: "spinning-ring",
  name: "Spinning Ring",
  category: "loading",
  description: "Spinning ring with gradient color. Customize size and speed.",
  tags: ["loading", "spinner", "ring", "gradient", "rotate"],
  css: `.spinning-ring {
  --ring-size: 48px;
  --ring-thickness: 4px;
  --ring-speed: 1s;
  --ring-color: #f472b6;
  width: var(--ring-size);
  height: var(--ring-size);
  border-radius: 50%;
  border: var(--ring-thickness) solid rgba(255,255,255,0.1);
  border-top-color: var(--ring-color);
  animation: ring-spin var(--ring-speed) linear infinite;
}

@keyframes ring-spin {
  to { transform: rotate(360deg); }
}`,
  html: `<div class="spinning-ring"></div>`,
  params: [
    { name: "--ring-color", label: "Color", type: "color", default: "#f472b6" },
    { name: "--ring-size", label: "Size", type: "range", default: 48, min: 24, max: 80, step: 2, unit: "px" },
    { name: "--ring-thickness", label: "Thickness", type: "range", default: 4, min: 2, max: 8, step: 1, unit: "px" },
    { name: "--ring-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 200, height: 150, darkBg: true },
};

export default spinningRing;
