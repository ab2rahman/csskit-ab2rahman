import type { Animation } from "../data/animations";

const hoverPulse: Animation = {
  slug: "hover-pulse",
  name: "Hover Pulse",
  category: "hover",
  description:
    "Smooth scale pulse on hover with continuous gentle breathing effect. Subtle and elegant for cards and buttons.",
  tags: ["hover", "pulse", "scale", "breathing", "subtle", "gentle"],
  css: `.hover-pulse {
  --hp-color: #3b82f6;
  --hp-scale: 1.08;
  --hp-speed: 0.6s;
  display: inline-block;
  padding: 14px 32px;
  border-radius: 12px;
  background: var(--hp-color);
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  font-family: system-ui, sans-serif;
  cursor: pointer;
  transition: transform 0.15s ease;
}

.hover-pulse:hover {
  animation: hp-pulse var(--hp-speed) ease-in-out infinite alternate;
}

@keyframes hp-pulse {
  from { transform: scale(1); }
  to { transform: scale(var(--hp-scale)); }
}`,
  html: '<div class="hover-pulse">Pulse</div>',
  params: [
    { name: "--hp-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--hp-scale", label: "Scale", type: "range", default: 1.08, min: 1.02, max: 1.25, step: 0.01 },
    { name: "--hp-speed", label: "Speed", type: "duration", default: 0.6, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 280, height: 140, darkBg: true },
};

export default hoverPulse;
