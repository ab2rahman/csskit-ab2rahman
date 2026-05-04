import type { Animation } from "../data/animations";

const rotateIn: Animation = {
  slug: "rotate-in",
  name: "Rotate In",
  category: "entrance",
  description: "Spins in while fading. Customize rotation degrees and speed.",
  tags: ["entrance", "rotate", "spin", "fade", "turn"],
  css: `.rotate-in {
  --ri-degrees: 360deg;
  --ri-speed: 0.8s;
  --ri-color: #a78bfa;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background: var(--ri-color);
  border-radius: 16px;
  color: white;
  font-weight: 700;
  animation: ri-enter var(--ri-speed) ease-out forwards;
}

@keyframes ri-enter {
  from {
    opacity: 0;
    transform: rotate(var(--ri-degrees)) scale(0);
  }
  to {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
}`,
  html: `<div class="rotate-in">Spin</div>`,
  params: [
    { name: "--ri-color", label: "Color", type: "color", default: "#a78bfa" },
    { name: "--ri-degrees", label: "Rotation", type: "range", default: 360, min: 90, max: 720, step: 90, unit: "deg" },
    { name: "--ri-speed", label: "Speed", type: "duration", default: 0.8, min: 0.3, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 200, darkBg: true },
};

export default rotateIn;
