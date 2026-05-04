import type { Animation } from "../data/animations";

const fadeSlideUp: Animation = {
  slug: "fade-slide-up",
  name: "Fade Slide Up",
  category: "entrance",
  description: "Classic fade in + slide up. Customize distance and duration.",
  tags: ["entrance", "fade", "slide", "up", "smooth"],
  css: `.fade-slide-up {
  --fsu-distance: 30px;
  --fsu-speed: 0.8s;
  --fsu-color: #f8fafc;
  font-size: 2rem;
  font-weight: 800;
  color: var(--fsu-color);
  animation: fsu-in var(--fsu-speed) ease-out forwards;
}

@keyframes fsu-in {
  from {
    opacity: 0;
    transform: translateY(var(--fsu-distance));
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`,
  html: `<div class="fade-slide-up">Fade Slide Up</div>`,
  params: [
    { name: "--fsu-color", label: "Color", type: "color", default: "#f8fafc" },
    { name: "--fsu-distance", label: "Distance", type: "range", default: 30, min: 10, max: 80, step: 5, unit: "px" },
    { name: "--fsu-speed", label: "Speed", type: "duration", default: 0.8, min: 0.3, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 400, height: 150, darkBg: true },
};

export default fadeSlideUp;
