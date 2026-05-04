import type { Animation } from "../data/animations";

const progressBar: Animation = {
  slug: "progress-bar",
  name: "Progress Bar",
  category: "loading",
  description: "Animated progress bar with shimmer effect. Customize color and width.",
  tags: ["loading", "progress", "bar", "shimmer", "fill"],
  css: `.progress-bar {
  --pb-color: #3b82f6;
  --pb-width: 280px;
  --pb-height: 8px;
  --pb-speed: 2s;
  width: var(--pb-width);
  height: var(--pb-height);
  background: rgba(255,255,255,0.1);
  border-radius: 100px;
  overflow: hidden;
  position: relative;
}

.progress-bar::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background: var(--pb-color);
  border-radius: 100px;
  animation: pb-fill var(--pb-speed) ease-out forwards;
}

.progress-bar::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 60%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,255,255,0.3),
    transparent
  );
  animation: pb-shimmer 1.5s ease infinite;
}

@keyframes pb-fill {
  to { width: 100%; }
}

@keyframes pb-shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(300%); }
}`,
  html: `<div class="progress-bar"></div>`,
  params: [
    { name: "--pb-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--pb-width", label: "Width", type: "range", default: 280, min: 150, max: 400, step: 10, unit: "px" },
    { name: "--pb-height", label: "Height", type: "range", default: 8, min: 4, max: 16, step: 2, unit: "px" },
    { name: "--pb-speed", label: "Speed", type: "duration", default: 2, min: 0.5, max: 5, step: 0.5, unit: "s" },
  ],
  preview: { width: 350, height: 120, darkBg: true },
};

export default progressBar;
