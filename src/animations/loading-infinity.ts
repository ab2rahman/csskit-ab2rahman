import type { Animation } from "../data/animations";

const loadingInfinity: Animation = {
  slug: "loading-infinity",
  name: "Infinity",
  category: "loading",
  description:
    "Figure-8 infinity loop animation. Smooth continuous loop loading indicator with orbital motion.",
  tags: ["loading", "infinity", "loop", "figure-8", "orbital", "continuous"],
  css: `.loading-infinity {
  --li-color: #8b5cf6;
  --li-speed: 2s;
  width: 50px;
  height: 30px;
  position: relative;
}

.loading-infinity span {
  position: absolute;
  width: 10px;
  height: 10px;
  background: var(--li-color);
  border-radius: 50%;
  animation: li-loop var(--li-speed) linear infinite;
  offset-path: path('M 5 15 C 5 0 20 0 25 15 C 30 30 45 30 45 15 C 45 0 30 0 25 15 C 20 30 5 30 5 15');
}

@keyframes li-loop {
  0% { offset-distance: 0%; }
  100% { offset-distance: 100%; }
}`,
  html: '<div class="loading-infinity"><span></span></div>',
  params: [
    { name: "--li-color", label: "Color", type: "color", default: "#8b5cf6" },
    { name: "--li-speed", label: "Speed", type: "duration", default: 2, min: 0.5, max: 6, step: 0.25, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default loadingInfinity;
