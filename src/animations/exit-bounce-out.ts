import type { Animation } from "../data/animations";

const exitBounceOut: Animation = {
  slug: "exit-bounce-out",
  name: "Bounce Out",
  category: "exit",
  description:
    "Element bounces away then disappears. Energetic exit animation with elastic motion.",
  tags: ["exit", "bounce", "out", "disappear", "elastic", "energetic"],
  css: `.exit-bounce-out {
  --ebo-color: #ef4444;
  --ebo-speed: 0.8s;
  width: 80px;
  height: 80px;
  background: var(--ebo-color);
  border-radius: 16px;
  animation: ebo-bounce var(--ebo-speed) ease-in forwards;
}

@keyframes ebo-bounce {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  20% {
    transform: scale(1.1);
  }
  50% {
    opacity: 1;
    transform: scale(0.9);
  }
  100% {
    opacity: 0;
    transform: scale(0) translateY(-40px);
  }
}`,
  html: '<div class="exit-bounce-out"></div>',
  params: [
    { name: "--ebo-color", label: "Color", type: "color", default: "#ef4444" },
    { name: "--ebo-speed", label: "Speed", type: "duration", default: 0.8, min: 0.3, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default exitBounceOut;
