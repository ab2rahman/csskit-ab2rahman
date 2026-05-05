import type { Animation } from "../data/animations";

const entranceRoll: Animation = {
  slug: "entrance-roll",
  name: "Roll In",
  category: "entrance",
  description:
    "Element rolls in from the side with rotation. Playful entrance animation with spinning motion.",
  tags: ["entrance", "roll", "rotate", "spin", "entrance", "playful"],
  css: `.entrance-roll {
  --er-color: #f59e0b;
  --er-speed: 0.8s;
  width: 80px;
  height: 80px;
  background: var(--er-color);
  border-radius: 12px;
  animation: er-roll var(--er-speed) cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  opacity: 0;
}

@keyframes er-roll {
  0% {
    opacity: 0;
    transform: translateX(-100px) rotate(-180deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0) rotate(0deg);
  }
}`,
  html: '<div class="entrance-roll"></div>',
  params: [
    { name: "--er-color", label: "Color", type: "color", default: "#f59e0b" },
    { name: "--er-speed", label: "Speed", type: "duration", default: 0.8, min: 0.3, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default entranceRoll;
