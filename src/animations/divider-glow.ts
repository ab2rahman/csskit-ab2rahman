import type { Animation } from "../data/animations";

const dividerGlow: Animation = {
  slug: "divider-glow",
  name: "Glow Line",
  category: "divider",
  description:
    "Pulsing glowing horizontal line with animated intensity. Neon-style animated divider for dark UIs.",
  tags: ["divider", "glow", "neon", "pulse", "animated", "dark"],
  css: `.divider-glow {
  --dg-color: #06b6d4;
  --dg-thickness: 2px;
  --dg-speed: 2s;
  width: 240px;
  height: var(--dg-thickness);
  background: var(--dg-color);
  border-radius: 2px;
  animation: dg-glow var(--dg-speed) ease-in-out infinite alternate;
}

@keyframes dg-glow {
  0% {
    opacity: 0.4;
    box-shadow: 0 0 4px var(--dg-color);
  }
  100% {
    opacity: 1;
    box-shadow: 0 0 10px var(--dg-color), 0 0 20px var(--dg-color), 0 0 40px rgba(6, 182, 212, 0.3);
  }
}`,
  html: '<div class="divider-glow"></div>',
  params: [
    { name: "--dg-color", label: "Color", type: "color", default: "#06b6d4" },
    { name: "--dg-thickness", label: "Thickness", type: "range", default: 2, min: 1, max: 6, step: 1, unit: "px" },
    { name: "--dg-speed", label: "Speed", type: "duration", default: 2, min: 0.5, max: 5, step: 0.25, unit: "s" },
  ],
  preview: { width: 350, height: 100, darkBg: true },
};

export default dividerGlow;
