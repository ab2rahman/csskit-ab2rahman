import type { Animation } from "../data/animations";

const exitRoll: Animation = {
  slug: "exit-roll",
  name: "Roll Out",
  category: "exit",
  description:
    "Element rolls out to the side with rotation. Playful exit animation with spinning departure.",
  tags: ["exit", "roll", "rotate", "spin", "departure", "playful"],
  css: `.exit-roll {
  --ero-color: #f59e0b;
  --ero-speed: 0.8s;
  width: 80px;
  height: 80px;
  background: var(--ero-color);
  border-radius: 12px;
  animation: ero-roll var(--ero-speed) ease-in forwards;
}

@keyframes ero-roll {
  0% {
    opacity: 1;
    transform: translateX(0) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: translateX(200px) rotate(360deg);
  }
}`,
  html: '<div class="exit-roll"></div>',
  params: [
    { name: "--ero-color", label: "Color", type: "color", default: "#f59e0b" },
    { name: "--ero-speed", label: "Speed", type: "duration", default: 0.8, min: 0.3, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default exitRoll;
