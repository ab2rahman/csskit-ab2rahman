import type { Animation } from "../data/animations";

const exitDissolve: Animation = {
  slug: "exit-dissolve",
  name: "Dissolve",
  category: "exit",
  description:
    "Element dissolves away with blur and scale. Ethereal disappearing effect with soft dissolution.",
  tags: ["exit", "dissolve", "blur", "ethereal", "soft", "vanish"],
  css: `.exit-dissolve {
  --eds-color: #10b981;
  --eds-speed: 0.8s;
  width: 100px;
  height: 60px;
  background: var(--eds-color);
  border-radius: 12px;
  animation: eds-dissolve var(--eds-speed) ease-in forwards;
}

@keyframes eds-dissolve {
  0% {
    opacity: 1;
    filter: blur(0px);
    transform: scale(1);
  }
  100% {
    opacity: 0;
    filter: blur(16px);
    transform: scale(1.2);
  }
}`,
  html: '<div class="exit-dissolve"></div>',
  params: [
    { name: "--eds-color", label: "Color", type: "color", default: "#10b981" },
    { name: "--eds-speed", label: "Speed", type: "duration", default: 0.8, min: 0.2, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default exitDissolve;
