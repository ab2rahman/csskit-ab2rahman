import type { Animation } from "../data/animations";

const textStroke: Animation = {
  slug: "text-stroke",
  name: "Stroke Draw",
  category: "text",
  description:
    "SVG text with animated stroke drawing effect. The outline draws itself, creating an elegant handwritten reveal.",
  tags: ["text", "stroke", "draw", "svg", "outline", "handwritten"],
  css: `.text-stroke {
  --tk-color: #3b82f6;
  --tk-speed: 3s;
  --tk-thickness: 2px;
  display: inline-block;
}

.text-stroke svg {
  width: 280px;
  height: 80px;
  overflow: visible;
}

.text-stroke text {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: 52px;
  font-weight: 700;
  fill: none;
  stroke: var(--tk-color);
  stroke-width: var(--tk-thickness);
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation: stroke-draw var(--tk-speed) ease forwards;
}

@keyframes stroke-draw {
  to { stroke-dashoffset: 0; }
}`,
  html: '<div class="text-stroke"><svg viewBox="0 0 280 70"><text x="10" y="55">STROKE</text></svg></div>',
  params: [
    { name: "--tk-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--tk-speed", label: "Speed", type: "duration", default: 3, min: 1, max: 6, step: 0.5, unit: "s" },
    { name: "--tk-thickness", label: "Thickness", type: "range", default: 2, min: 0.5, max: 4, step: 0.5, unit: "px" },
  ],
  preview: { width: 350, height: 150, darkBg: true },
};

export default textStroke;
