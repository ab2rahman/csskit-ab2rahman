import type { Animation } from "../data/animations";

const attentionColorFlash: Animation = {
  slug: "attention-color-flash",
  name: "Color Flash",
  category: "attention",
  description:
    "Background flashes between two colors rapidly. Bold attention animation with alternating color switch.",
  tags: ["attention", "color", "flash", "alternate", "blink", "bold"],
  css: `.attention-color-flash {
  --acf-color1: #3b82f6;
  --acf-color2: #f43f5e;
  --acf-speed: 1s;
  width: 100px;
  height: 60px;
  border-radius: 12px;
  animation: acf-flash var(--acf-speed) step-end infinite;
}

@keyframes acf-flash {
  0%, 100% { background: var(--acf-color1); }
  50% { background: var(--acf-color2); }
}`,
  html: '<div class="attention-color-flash"></div>',
  params: [
    { name: "--acf-color1", label: "Color 1", type: "color", default: "#3b82f6" },
    { name: "--acf-color2", label: "Color 2", type: "color", default: "#f43f5e" },
    { name: "--acf-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default attentionColorFlash;
