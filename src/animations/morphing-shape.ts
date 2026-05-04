import type { Animation } from "../data/animations";

const morphingShape: Animation = {
  slug: "morphing-shape",
  name: "Morphing Shape",
  category: "loading",
  description: "Shape morphs between circle, square, and rounded forms. Customize color and speed.",
  tags: ["loading", "morph", "shape", "transform", "organic"],
  css: `.morphing-shape {
  --morph-color: #34d399;
  --morph-size: 60px;
  --morph-speed: 3s;
  width: var(--morph-size);
  height: var(--morph-size);
  background: var(--morph-color);
  animation: morph var(--morph-speed) ease-in-out infinite;
}

@keyframes morph {
  0%, 100% {
    border-radius: 50%;
    transform: rotate(0deg) scale(1);
  }
  25% {
    border-radius: 10%;
    transform: rotate(90deg) scale(0.9);
  }
  50% {
    border-radius: 50% 10%;
    transform: rotate(180deg) scale(1.1);
  }
  75% {
    border-radius: 10% 50%;
    transform: rotate(270deg) scale(0.95);
  }
}`,
  html: `<div class="morphing-shape"></div>`,
  params: [
    { name: "--morph-color", label: "Color", type: "color", default: "#34d399" },
    { name: "--morph-size", label: "Size", type: "range", default: 60, min: 30, max: 100, step: 5, unit: "px" },
    { name: "--morph-speed", label: "Speed", type: "duration", default: 3, min: 1, max: 6, step: 0.5, unit: "s" },
  ],
  preview: { width: 200, height: 150, darkBg: true },
};

export default morphingShape;
