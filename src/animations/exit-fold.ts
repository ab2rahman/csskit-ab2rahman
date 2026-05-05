import type { Animation } from "../data/animations";

const exitFold: Animation = {
  slug: "exit-fold",
  name: "Fold",
  category: "exit",
  description:
    "Element folds away like paper in 3D. Creative exit with perspective fold transform.",
  tags: ["exit", "fold", "paper", "3d", "perspective", "creative"],
  css: `.exit-fold {
  --ef-color: #f97316;
  --ef-speed: 0.8s;
  width: 120px;
  height: 80px;
  background: var(--ef-color);
  border-radius: 12px;
  perspective: 600px;
  animation: ef-fold var(--ef-speed) ease-in forwards;
}

@keyframes ef-fold {
  0% {
    opacity: 1;
    transform: perspective(600px) rotateY(0deg);
    transform-origin: right center;
  }
  100% {
    opacity: 0;
    transform: perspective(600px) rotateY(90deg);
    transform-origin: right center;
  }
}`,
  html: '<div class="exit-fold"></div>',
  params: [
    { name: "--ef-color", label: "Color", type: "color", default: "#f97316" },
    { name: "--ef-speed", label: "Speed", type: "duration", default: 0.8, min: 0.3, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default exitFold;
