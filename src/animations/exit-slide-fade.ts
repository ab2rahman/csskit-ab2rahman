import type { Animation } from "../data/animations";

const exitSlideFade: Animation = {
  slug: "exit-slide-fade",
  name: "Slide Fade Out",
  category: "exit",
  description:
    "Combined slide and fade exit animation. Smooth departure with directional and opacity transition.",
  tags: ["exit", "slide", "fade", "combined", "smooth", "departure"],
  css: `.exit-slide-fade {
  --esfo-color: #0ea5e9;
  --esfo-speed: 0.6s;
  width: 120px;
  height: 60px;
  background: var(--esfo-color);
  border-radius: 12px;
  animation: esfo-out var(--esfo-speed) ease-in forwards;
}

@keyframes esfo-out {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(40px);
  }
}`,
  html: '<div class="exit-slide-fade"></div>',
  params: [
    { name: "--esfo-color", label: "Color", type: "color", default: "#0ea5e9" },
    { name: "--esfo-speed", label: "Speed", type: "duration", default: 0.6, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default exitSlideFade;
