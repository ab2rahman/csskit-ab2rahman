import type { Animation } from "../data/animations";

const exitShrink: Animation = {
  slug: "exit-shrink",
  name: "Shrink",
  category: "exit",
  description:
    "Element shrinks into a single point and disappears. Clean disappearing exit with scale-down animation.",
  tags: ["exit", "shrink", "point", "scale", "disappear", "clean"],
  css: `.exit-shrink {
  --esh-color: #8b5cf6;
  --esh-speed: 0.6s;
  width: 100px;
  height: 60px;
  background: var(--esh-color);
  border-radius: 12px;
  animation: esh-out var(--esh-speed) ease-in forwards;
}

@keyframes esh-out {
  0% {
    transform: scale(1);
    opacity: 1;
    border-radius: 12px;
  }
  100% {
    transform: scale(0);
    opacity: 0;
    border-radius: 50%;
  }
}`,
  html: '<div class="exit-shrink"></div>',
  params: [
    { name: "--esh-color", label: "Color", type: "color", default: "#8b5cf6" },
    { name: "--esh-speed", label: "Speed", type: "duration", default: 0.6, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default exitShrink;
