import type { Animation } from "../data/animations";

const entranceSlide: Animation = {
  slug: "entrance-slide",
  name: "Slide In",
  category: "entrance",
  description:
    "Slides in from the left with slight overshoot. Smooth directional entrance animation with configurable origin.",
  tags: ["entrance", "slide", "direction", "smooth", "overshoot", "horizontal"],
  css: `.entrance-slide {
  --es-color: #8b5cf6;
  --es-speed: 0.5s;
  --es-distance: 40px;
  display: inline-block;
  padding: 14px 32px;
  border-radius: 10px;
  background: var(--es-color);
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  font-family: system-ui, sans-serif;
  animation: es-slide var(--es-speed) cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

@keyframes es-slide {
  0% { transform: translateX(calc(-1 * var(--es-distance))); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}`,
  html: '<div class="entrance-slide">Slide In</div>',
  params: [
    { name: "--es-color", label: "Color", type: "color", default: "#8b5cf6" },
    { name: "--es-speed", label: "Speed", type: "duration", default: 0.5, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 280, height: 120, darkBg: true },
};

export default entranceSlide;
