import type { Animation } from "../data/animations";

const bgRain: Animation = {
  slug: "bg-rain",
  name: "Matrix Rain",
  category: "background",
  description:
    "Digital rain drops falling like the Matrix effect. Cyberpunk-themed background with cascading light streaks.",
  tags: ["background", "rain", "matrix", "digital", "cyberpunk", "code"],
  css: `.bg-rain {
  --br-color: #22c55e;
  --br-speed: 0.8s;
  position: relative;
  width: 280px;
  height: 200px;
  overflow: hidden;
  background: #020617;
  border-radius: 12px;
}

.bg-rain-drop {
  position: absolute;
  top: -30px;
  width: 2px;
  height: 20px;
  background: linear-gradient(to bottom, transparent, var(--br-color));
  border-radius: 1px;
  animation: br-fall var(--br-speed) linear infinite;
}

.bg-rain-drop:nth-child(1) { left: 10%; animation-duration: calc(var(--br-speed) * 1.0); animation-delay: 0s; height: 18px; }
.bg-rain-drop:nth-child(2) { left: 25%; animation-duration: calc(var(--br-speed) * 0.8); animation-delay: 0.3s; height: 25px; }
.bg-rain-drop:nth-child(3) { left: 40%; animation-duration: calc(var(--br-speed) * 1.1); animation-delay: 0.1s; }
.bg-rain-drop:nth-child(4) { left: 55%; animation-duration: calc(var(--br-speed) * 0.7); animation-delay: 0.5s; height: 30px; }
.bg-rain-drop:nth-child(5) { left: 70%; animation-duration: calc(var(--br-speed) * 0.9); animation-delay: 0.2s; }
.bg-rain-drop:nth-child(6) { left: 85%; animation-duration: calc(var(--br-speed) * 1.2); animation-delay: 0.4s; height: 22px; }
.bg-rain-drop:nth-child(7) { left: 15%; animation-duration: calc(var(--br-speed) * 0.6); animation-delay: 0.6s; height: 15px; }
.bg-rain-drop:nth-child(8) { left: 60%; animation-duration: calc(var(--br-speed) * 1.0); animation-delay: 0.15s; height: 28px; }
.bg-rain-drop:nth-child(9) { left: 35%; animation-duration: calc(var(--br-speed) * 0.75); animation-delay: 0.45s; }
.bg-rain-drop:nth-child(10) { left: 90%; animation-duration: calc(var(--br-speed) * 0.85); animation-delay: 0.25s; height: 20px; }

@keyframes br-fall {
  0% { top: -30px; opacity: 1; }
  80% { opacity: 0.5; }
  100% { top: 110%; opacity: 0; }
}`,
  html: '<div class="bg-rain"><div class="bg-rain-drop"></div><div class="bg-rain-drop"></div><div class="bg-rain-drop"></div><div class="bg-rain-drop"></div><div class="bg-rain-drop"></div><div class="bg-rain-drop"></div><div class="bg-rain-drop"></div><div class="bg-rain-drop"></div><div class="bg-rain-drop"></div><div class="bg-rain-drop"></div></div>',
  params: [
    { name: "--br-color", label: "Color", type: "color", default: "#22c55e" },
    { name: "--br-speed", label: "Speed", type: "duration", default: 0.8, min: 0.3, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 350, height: 220, darkBg: true },
};

export default bgRain;
