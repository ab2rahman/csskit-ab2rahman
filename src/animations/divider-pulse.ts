import type { Animation } from "../data/animations";

const dividerPulse: Animation = {
  slug: "divider-pulse",
  name: "Pulse Line",
  category: "divider",
  description:
    "Line with a pulsing center point that expands outward. Radio-wave style divider animation.",
  tags: ["divider", "pulse", "line", "center", "radio", "wave"],
  css: `.divider-pulse {
  --dp-color: #6366f1;
  --dp-speed: 2s;
  width: 240px;
  height: 2px;
  background: rgba(99, 102, 241, 0.2);
  position: relative;
  border-radius: 1px;
}

.divider-pulse::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  background: var(--dp-color);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0.15);
  animation: dp-pulse var(--dp-speed) ease-out infinite;
}

@keyframes dp-pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.15);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
}`,
  html: '<div class="divider-pulse"></div>',
  params: [
    { name: "--dp-color", label: "Color", type: "color", default: "#6366f1" },
    { name: "--dp-speed", label: "Speed", type: "duration", default: 2, min: 0.5, max: 5, step: 0.25, unit: "s" },
  ],
  preview: { width: 350, height: 100, darkBg: false },
};

export default dividerPulse;
