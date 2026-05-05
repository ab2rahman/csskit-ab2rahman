import type { Animation } from "../data/animations";

const loadingPulseRing: Animation = {
  slug: "loading-pulse-ring",
  name: "Pulse Ring",
  category: "loading",
  description:
    "Expanding rings pulse outward from a center dot. Radio-wave style loading indicator.",
  tags: ["loading", "pulse", "ring", "expand", "radio", "wave"],
  css: `.loading-pulse-ring {
  --lpr-color: #3b82f6;
  --lpr-size: 40px;
  --lpr-speed: 1.5s;
  width: var(--lpr-size);
  height: var(--lpr-size);
  position: relative;
}

.loading-pulse-ring::before,
.loading-pulse-ring::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px solid var(--lpr-color);
  border-radius: 50%;
  animation: lpr-pulse var(--lpr-speed) ease-out infinite;
}

.loading-pulse-ring::after {
  animation-delay: calc(var(--lpr-speed) / 3);
}

.loading-pulse-ring span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background: var(--lpr-color);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

@keyframes lpr-pulse {
  0% {
    transform: scale(0.3);
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}`,
  html: '<div class="loading-pulse-ring"><span></span></div>',
  params: [
    { name: "--lpr-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--lpr-speed", label: "Speed", type: "duration", default: 1.5, min: 0.5, max: 4, step: 0.25, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default loadingPulseRing;
