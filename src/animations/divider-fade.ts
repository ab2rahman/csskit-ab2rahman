import type { Animation } from "../data/animations";

const dividerFade: Animation = {
  slug: "divider-fade",
  name: "Fade Edges",
  category: "divider",
  description:
    "Line fades in from center outward with gradient edges. Subtle, elegant section divider with soft appearance.",
  tags: ["divider", "fade", "center", "gradient", "soft", "elegant"],
  css: `.divider-fade {
  --df-color: #6366f1;
  --df-thickness: 1px;
  --df-speed: 0.8s;
  width: 240px;
  height: var(--df-thickness);
  background: transparent;
  position: relative;
  overflow: hidden;
}

.divider-fade::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, var(--df-color), transparent);
  animation: df-fade var(--df-speed) ease-out forwards;
  opacity: 0;
}

@keyframes df-fade {
  0% { opacity: 0; transform: scaleX(0); }
  100% { opacity: 1; transform: scaleX(1); }
}`,
  html: '<div class="divider-fade"></div>',
  params: [
    { name: "--df-color", label: "Color", type: "color", default: "#6366f1" },
    { name: "--df-speed", label: "Speed", type: "duration", default: 0.8, min: 0.3, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 350, height: 100, darkBg: false },
};

export default dividerFade;
