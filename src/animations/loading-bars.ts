import type { Animation } from "../data/animations";

const loadingBars: Animation = {
  slug: "loading-bars",
  name: "Equalizer Bars",
  category: "loading",
  description:
    "Audio equalizer style bouncing bars. Classic loading indicator with rhythm-like movement for media or audio apps.",
  tags: ["loading", "bars", "equalizer", "audio", "music", "bouncing"],
  css: `.loading-bars {
  --lb-color: #3b82f6;
  --lb-speed: 1s;
  display: flex;
  align-items: flex-end;
  gap: 4px;
  height: 48px;
}

.loading-bars-bar {
  width: 6px;
  background: var(--lb-color);
  border-radius: 3px;
  animation: lb-bounce var(--lb-speed) ease-in-out infinite alternate;
}

.loading-bars-bar:nth-child(1) { height: 16px; animation-delay: 0s; }
.loading-bars-bar:nth-child(2) { height: 28px; animation-delay: 0.15s; }
.loading-bars-bar:nth-child(3) { height: 40px; animation-delay: 0.3s; }
.loading-bars-bar:nth-child(4) { height: 20px; animation-delay: 0.45s; }
.loading-bars-bar:nth-child(5) { height: 36px; animation-delay: 0.6s; }

@keyframes lb-bounce {
  0% { transform: scaleY(0.3); opacity: 0.5; }
  100% { transform: scaleY(1); opacity: 1; }
}`,
  html: '<div class="loading-bars"><div class="loading-bars-bar"></div><div class="loading-bars-bar"></div><div class="loading-bars-bar"></div><div class="loading-bars-bar"></div><div class="loading-bars-bar"></div></div>',
  params: [
    { name: "--lb-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--lb-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 200, height: 150, darkBg: true },
};

export default loadingBars;
