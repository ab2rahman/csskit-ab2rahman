import type { Animation } from "../data/animations";

const loadingSquare: Animation = {
  slug: "loading-square",
  name: "Square Flip",
  category: "loading",
  description:
    "3D square flip rotation in space. Geometric loading spinner with perspective transform that feels solid and structured.",
  tags: ["loading", "square", "flip", "3d", "perspective", "geometric"],
  css: `.loading-square {
  --lsq-color: #3b82f6;
  --lsq-size: 36px;
  --lsq-speed: 1.2s;
  width: var(--lsq-size);
  height: var(--lsq-size);
  background: var(--lsq-color);
  border-radius: 4px;
  animation: lsq-flip var(--lsq-speed) ease-in-out infinite;
}

@keyframes lsq-flip {
  0% { transform: perspective(200px) rotateX(0) rotateY(0); }
  25% { transform: perspective(200px) rotateX(180deg) rotateY(0); }
  50% { transform: perspective(200px) rotateX(180deg) rotateY(180deg); }
  75% { transform: perspective(200px) rotateX(0) rotateY(180deg); }
  100% { transform: perspective(200px) rotateX(0) rotateY(360deg); }
}`,
  html: '<div class="loading-square"></div>',
  params: [
    { name: "--lsq-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--lsq-size", label: "Size", type: "range", default: 36, min: 20, max: 60, step: 4, unit: "px" },
    { name: "--lsq-speed", label: "Speed", type: "duration", default: 1.2, min: 0.5, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 200, height: 150, darkBg: true },
};

export default loadingSquare;
