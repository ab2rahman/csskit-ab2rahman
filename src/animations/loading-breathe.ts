import type { Animation } from "../data/animations";

const loadingBreathe: Animation = {
  slug: "loading-breathe",
  name: "Breathe",
  category: "loading",
  description:
    "Element breathes in and out with smooth scale and opacity transitions. Calming, zen-style loading animation.",
  tags: ["loading", "breathe", "scale", "opacity", "calm", "zen"],
  css: `.loading-breathe {
  --lb-color: #10b981;
  --lb-size: 40px;
  --lb-speed: 3s;
  width: var(--lb-size);
  height: var(--lb-size);
  background: var(--lb-color);
  border-radius: 50%;
  animation: lb-breathe var(--lb-speed) ease-in-out infinite;
}

@keyframes lb-breathe {
  0%, 100% {
    transform: scale(0.6);
    opacity: 0.4;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
}`,
  html: '<div class="loading-breathe"></div>',
  params: [
    { name: "--lb-color", label: "Color", type: "color", default: "#10b981" },
    { name: "--lb-speed", label: "Speed", type: "duration", default: 3, min: 1, max: 6, step: 0.5, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default loadingBreathe;
