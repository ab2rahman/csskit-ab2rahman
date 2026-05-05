import type { Animation } from "../data/animations";

const textPop: Animation = {
  slug: "text-pop",
  name: "Pop In",
  category: "text",
  description:
    "Letters pop in one by one with scale overshoot. Fun entrance animation with bouncy character reveals.",
  tags: ["text", "pop", "scale", "stagger", "entrance", "bouncy"],
  css: `.text-pop {
  --tp-color: #f97316;
  --tp-speed: 0.5s;
  color: var(--tp-color);
  font-size: 2rem;
  font-weight: 800;
  display: flex;
  gap: 2px;
}

.text-pop span {
  display: inline-block;
  opacity: 0;
  transform: scale(0);
  animation: tp-pop var(--tp-speed) cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.text-pop span:nth-child(1) { animation-delay: 0s; }
.text-pop span:nth-child(2) { animation-delay: 0.1s; }
.text-pop span:nth-child(3) { animation-delay: 0.2s; }
.text-pop span:nth-child(4) { animation-delay: 0.3s; }

@keyframes tp-pop {
  0% {
    opacity: 0;
    transform: scale(0) rotate(-15deg);
  }
  70% {
    transform: scale(1.15) rotate(3deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}`,
  html: '<div class="text-pop"><span>P</span><span>O</span><span>P</span><span>!</span></div>',
  params: [
    { name: "--tp-color", label: "Color", type: "color", default: "#f97316" },
    { name: "--tp-speed", label: "Speed", type: "duration", default: 0.5, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: false },
};

export default textPop;
