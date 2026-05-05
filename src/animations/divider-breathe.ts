import type { Animation } from "../data/animations";

const dividerBreathe: Animation = {
  slug: "divider-breathe",
  name: "Breathe Line",
  category: "divider",
  description:
    "Line that breathes with pulsing width. Living divider that expands and contracts smoothly.",
  tags: ["divider", "breathe", "pulse", "width", "living", "expand"],
  css: `.divider-breathe {
  --dbl-color: #10b981;
  --dbl-speed: 3s;
  height: 2px;
  background: var(--dbl-color);
  border-radius: 1px;
  animation: dbl-breathe var(--dbl-speed) ease-in-out infinite;
  margin: 0 auto;
}

@keyframes dbl-breathe {
  0%, 100% {
    width: 80px;
    opacity: 0.5;
  }
  50% {
    width: 200px;
    opacity: 1;
  }
}`,
  html: '<div class="divider-breathe"></div>',
  params: [
    { name: "--dbl-color", label: "Color", type: "color", default: "#10b981" },
    { name: "--dbl-speed", label: "Speed", type: "duration", default: 3, min: 1, max: 8, step: 0.5, unit: "s" },
  ],
  preview: { width: 350, height: 100, darkBg: false },
};

export default dividerBreathe;
