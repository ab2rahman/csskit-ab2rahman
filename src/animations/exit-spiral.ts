import type { Animation } from "../data/animations";

const exitSpiral: Animation = {
  slug: "exit-spiral",
  name: "Spiral Out",
  category: "exit",
  description:
    "Element spirals away with rotation and scaling. Dynamic exit with corkscrew departure.",
  tags: ["exit", "spiral", "rotate", "scale", "dynamic", "corkscrew"],
  css: `.exit-spiral {
  --esp-color: #f97316;
  --esp-speed: 0.8s;
  width: 80px;
  height: 80px;
  background: var(--esp-color);
  border-radius: 16px;
  animation: esp-out var(--esp-speed) ease-in forwards;
}

@keyframes esp-out {
  0% {
    opacity: 1;
    transform: rotate(0deg) scale(1) translate(0, 0);
  }
  100% {
    opacity: 0;
    transform: rotate(540deg) scale(0) translate(50px, -50px);
  }
}`,
  html: '<div class="exit-spiral"></div>',
  params: [
    { name: "--esp-color", label: "Color", type: "color", default: "#f97316" },
    { name: "--esp-speed", label: "Speed", type: "duration", default: 0.8, min: 0.3, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default exitSpiral;
