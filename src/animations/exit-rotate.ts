import type { Animation } from "../data/animations";

const exitRotate: Animation = {
  slug: "exit-rotate",
  name: "Rotate Out",
  category: "exit",
  description:
    "Element rotates while disappearing. Spinning exit animation with fade and scale.",
  tags: ["exit", "rotate", "spin", "fade", "disappear", "twirl"],
  css: `.exit-rotate {
  --ert-color: #ec4899;
  --ert-speed: 0.8s;
  width: 80px;
  height: 80px;
  background: var(--ert-color);
  border-radius: 16px;
  animation: ert-out var(--ert-speed) ease-in forwards;
}

@keyframes ert-out {
  0% {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
  100% {
    opacity: 0;
    transform: rotate(200deg) scale(0.5);
  }
}`,
  html: '<div class="exit-rotate"></div>',
  params: [
    { name: "--ert-color", label: "Color", type: "color", default: "#ec4899" },
    { name: "--ert-speed", label: "Speed", type: "duration", default: 0.8, min: 0.3, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default exitRotate;
