import type { Animation } from "../data/animations";

const entranceSlideFade: Animation = {
  slug: "entrance-slide-fade",
  name: "Slide Fade",
  category: "entrance",
  description:
    "Combined slide and fade entrance animation. Smooth entry with both directional and opacity transition.",
  tags: ["entrance", "slide", "fade", "combined", "smooth", "directional"],
  css: `.entrance-slide-fade {
  --esf-color: #8b5cf6;
  --esf-speed: 0.6s;
  width: 120px;
  height: 60px;
  background: var(--esf-color);
  border-radius: 12px;
  opacity: 0;
  animation: esf-enter var(--esf-speed) ease-out forwards;
}

@keyframes esf-enter {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}`,
  html: '<div class="entrance-slide-fade"></div>',
  params: [
    { name: "--esf-color", label: "Color", type: "color", default: "#8b5cf6" },
    { name: "--esf-speed", label: "Speed", type: "duration", default: 0.6, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default entranceSlideFade;
