import type { Animation } from "../data/animations";

const loadingWave: Animation = {
  slug: "loading-wave",
  name: "Wave Bar",
  category: "loading",
  description:
    "Sine wave bar animation with cascading height changes. Smooth, flowing loading indicator with organic wave motion.",
  tags: ["loading", "wave", "sine", "bar", "flow", "organic"],
  css: `.loading-wave {
  --lw-color: #3b82f6;
  --lw-speed: 1.2s;
  display: flex;
  align-items: center;
  gap: 3px;
  height: 48px;
}

.loading-wave-bar {
  width: 5px;
  height: 12px;
  background: var(--lw-color);
  border-radius: 3px;
  animation: lw-wave var(--lw-speed) ease-in-out infinite;
}

.loading-wave-bar:nth-child(1) { animation-delay: 0s; }
.loading-wave-bar:nth-child(2) { animation-delay: 0.1s; }
.loading-wave-bar:nth-child(3) { animation-delay: 0.2s; }
.loading-wave-bar:nth-child(4) { animation-delay: 0.3s; }
.loading-wave-bar:nth-child(5) { animation-delay: 0.4s; }
.loading-wave-bar:nth-child(6) { animation-delay: 0.5s; }
.loading-wave-bar:nth-child(7) { animation-delay: 0.6s; }

@keyframes lw-wave {
  0%, 100% { height: 12px; opacity: 0.4; }
  50% { height: 40px; opacity: 1; }
}`,
  html: '<div class="loading-wave"><div class="loading-wave-bar"></div><div class="loading-wave-bar"></div><div class="loading-wave-bar"></div><div class="loading-wave-bar"></div><div class="loading-wave-bar"></div><div class="loading-wave-bar"></div><div class="loading-wave-bar"></div></div>',
  params: [
    { name: "--lw-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--lw-speed", label: "Speed", type: "duration", default: 1.2, min: 0.4, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 250, height: 150, darkBg: true },
};

export default loadingWave;
