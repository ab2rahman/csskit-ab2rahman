import type { Animation } from "../data/animations";

const entranceSwingDrop: Animation = {
  slug: "entrance-swing-drop",
  name: "Swing Drop",
  category: "entrance",
  description:
    "Element swings then drops into place like a pendulum release. Physics-inspired entrance with settling motion.",
  tags: ["entrance", "swing", "drop", "pendulum", "physics", "settle"],
  css: `.entrance-swing-drop {
  --esd-color: #f59e0b;
  --esd-speed: 1s;
  width: 80px;
  height: 80px;
  background: var(--esd-color);
  border-radius: 16px;
  opacity: 0;
  animation: esd-swing var(--esd-speed) cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  transform-origin: top center;
}

@keyframes esd-swing {
  0% {
    opacity: 0;
    transform: rotate(-45deg) translateY(-60px);
  }
  40% {
    opacity: 1;
    transform: rotate(15deg) translateY(0);
  }
  60% {
    transform: rotate(-8deg) translateY(0);
  }
  80% {
    transform: rotate(3deg) translateY(0);
  }
  100% {
    opacity: 1;
    transform: rotate(0deg) translateY(0);
  }
}`,
  html: '<div class="entrance-swing-drop"></div>',
  params: [
    { name: "--esd-color", label: "Color", type: "color", default: "#f59e0b" },
    { name: "--esd-speed", label: "Speed", type: "duration", default: 1, min: 0.5, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default entranceSwingDrop;
