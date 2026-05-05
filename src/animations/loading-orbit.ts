import type { Animation } from "../data/animations";

const loadingOrbit: Animation = {
  slug: "loading-orbit",
  name: "Orbit Dots",
  category: "loading",
  description:
    "Dots orbiting around a center point. Elegant, atomic-style loading spinner with smooth circular motion.",
  tags: ["loading", "orbit", "dots", "atomic", "circular", "elegant"],
  css: `.loading-orbit {
  --lo-color: #3b82f6;
  --lo-size: 48px;
  --lo-speed: 1.2s;
  position: relative;
  width: var(--lo-size);
  height: var(--lo-size);
  animation: lo-spin var(--lo-speed) linear infinite;
}

.loading-orbit-dot {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--lo-color);
}

.loading-orbit-dot:nth-child(1) { top: 0; left: 50%; transform: translateX(-50%); }
.loading-orbit-dot:nth-child(2) { bottom: 0; left: 50%; transform: translateX(-50%); opacity: 0.5; }
.loading-orbit-dot:nth-child(3) { top: 50%; right: 0; transform: translateY(-50%); opacity: 0.75; }

@keyframes lo-spin {
  to { transform: rotate(360deg); }
}`,
  html: '<div class="loading-orbit"><div class="loading-orbit-dot"></div><div class="loading-orbit-dot"></div><div class="loading-orbit-dot"></div></div>',
  params: [
    { name: "--lo-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--lo-size", label: "Size", type: "range", default: 48, min: 30, max: 80, step: 2, unit: "px" },
    { name: "--lo-speed", label: "Speed", type: "duration", default: 1.2, min: 0.3, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 200, height: 150, darkBg: true },
};

export default loadingOrbit;
