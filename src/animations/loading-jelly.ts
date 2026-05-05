import type { Animation } from "../data/animations";

const loadingJelly: Animation = {
  slug: "loading-jelly",
  name: "Jelly",
  category: "loading",
  description:
    "Squishy jelly blob bouncing animation. Fun, organic loading indicator with elastic deformation.",
  tags: ["loading", "jelly", "squish", "bounce", "elastic", "blob"],
  css: `.loading-jelly {
  --lj-color: #f43f5e;
  --lj-speed: 1s;
  width: 40px;
  height: 40px;
  background: var(--lj-color);
  border-radius: 50%;
  animation: lj-squish var(--lj-speed) ease-in-out infinite;
}

@keyframes lj-squish {
  0%, 100% {
    transform: scaleX(1) scaleY(1) translateY(0);
  }
  20% {
    transform: scaleX(1.2) scaleY(0.8) translateY(10px);
  }
  40% {
    transform: scaleX(0.85) scaleY(1.15) translateY(-20px);
  }
  60% {
    transform: scaleX(1.05) scaleY(0.95) translateY(0);
  }
  80% {
    transform: scaleX(0.95) scaleY(1.05) translateY(-5px);
  }
}`,
  html: '<div class="loading-jelly"></div>',
  params: [
    { name: "--lj-color", label: "Color", type: "color", default: "#f43f5e" },
    { name: "--lj-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 4, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default loadingJelly;
