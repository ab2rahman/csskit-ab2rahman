import type { Animation } from "../data/animations";

const loadingClock: Animation = {
  slug: "loading-clock",
  name: "Clock",
  category: "loading",
  description:
    "Animated clock with spinning hands. Time-based loading indicator with circular face.",
  tags: ["loading", "clock", "time", "hands", "spinner", "circle"],
  css: `.loading-clock {
  --lcl-color: #334155;
  --lcl-accent: #3b82f6;
  --lcl-speed: 2s;
  width: 50px;
  height: 50px;
  border: 3px solid var(--lcl-color);
  border-radius: 50%;
  position: relative;
}

.loading-clock::before,
.loading-clock::after {
  content: '';
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: 2px;
  background: var(--lcl-accent);
  transform-origin: bottom center;
  border-radius: 1px;
}

.loading-clock::before {
  height: 14px;
  animation: lcl-hour var(--lcl-speed) linear infinite;
}

.loading-clock::after {
  height: 20px;
  width: 1.5px;
  animation: lcl-minute calc(var(--lcl-speed) / 6) linear infinite;
}

@keyframes lcl-hour {
  0% { transform: translateX(-50%) rotate(0deg); }
  100% { transform: translateX(-50%) rotate(360deg); }
}

@keyframes lcl-minute {
  0% { transform: translateX(-50%) rotate(0deg); }
  100% { transform: translateX(-50%) rotate(360deg); }
}`,
  html: '<div class="loading-clock"></div>',
  params: [
    { name: "--lcl-accent", label: "Hand Color", type: "color", default: "#3b82f6" },
    { name: "--lcl-speed", label: "Speed", type: "duration", default: 2, min: 0.5, max: 8, step: 0.5, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default loadingClock;
