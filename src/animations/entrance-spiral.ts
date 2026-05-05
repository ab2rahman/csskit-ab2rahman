import type { Animation } from "../data/animations";

const entranceSpiral: Animation = {
  slug: "entrance-spiral",
  name: "Spiral In",
  category: "entrance",
  description:
    "Element spirals into place with rotation and scaling. Dynamic entrance with corkscrew motion.",
  tags: ["entrance", "spiral", "rotate", "scale", "dynamic", "corkscrew"],
  css: `.entrance-spiral {
  --esp-color: #f97316;
  --esp-speed: 1s;
  width: 80px;
  height: 80px;
  background: var(--esp-color);
  border-radius: 16px;
  opacity: 0;
  animation: esp-spiral var(--esp-speed) cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes esp-spiral {
  0% {
    opacity: 0;
    transform: rotate(-540deg) scale(0) translate(50px, -50px);
  }
  60% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: rotate(0deg) scale(1) translate(0, 0);
  }
}`,
  html: '<div class="entrance-spiral"></div>',
  params: [
    { name: "--esp-color", label: "Color", type: "color", default: "#f97316" },
    { name: "--esp-speed", label: "Speed", type: "duration", default: 1, min: 0.4, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default entranceSpiral;
