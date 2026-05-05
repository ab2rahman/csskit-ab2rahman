import type { Animation } from "../data/animations";

const bgGridPulse: Animation = {
  slug: "bg-grid-pulse",
  name: "Grid Pulse",
  category: "background",
  description:
    "Dot grid with ripple pulse effect. Tech-style background with expanding wave from center point.",
  tags: ["background", "grid", "pulse", "ripple", "dot", "tech"],
  css: `.bg-grid-pulse {
  --bgp-color: #3b82f6;
  --bgp-speed: 2s;
  position: relative;
  width: 280px;
  height: 180px;
  overflow: hidden;
  background: #050b18;
  border-radius: 12px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(7, 1fr);
  gap: 4px;
  padding: 12px;
}

.bg-grid-pulse-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.2);
  align-self: center;
  justify-self: center;
  animation: bgp-pulse var(--bgp-speed) ease-in-out infinite;
}

.bg-grid-pulse-dot:nth-child(1) { animation-delay: 0s; }
.bg-grid-pulse-dot:nth-child(2) { animation-delay: 0.03s; }
.bg-grid-pulse-dot:nth-child(3) { animation-delay: 0.06s; }
.bg-grid-pulse-dot:nth-child(4) { animation-delay: 0.09s; }
.bg-grid-pulse-dot:nth-child(5) { animation-delay: 0.12s; }
.bg-grid-pulse-dot:nth-child(6) { animation-delay: 0.15s; }
.bg-grid-pulse-dot:nth-child(7) { animation-delay: 0.18s; }
.bg-grid-pulse-dot:nth-child(8) { animation-delay: 0.21s; }
.bg-grid-pulse-dot:nth-child(9) { animation-delay: 0.24s; }
.bg-grid-pulse-dot:nth-child(10) { animation-delay: 0.27s; }
.bg-grid-pulse-dot:nth-child(35) { animation-delay: 0.3s; }
.bg-grid-pulse-dot:nth-child(36) { animation-delay: 0.33s; }
.bg-grid-pulse-dot:nth-child(37) { animation-delay: 0.36s; }
.bg-grid-pulse-dot:nth-child(38) { animation-delay: 0.39s; }
.bg-grid-pulse-dot:nth-child(39) { animation-delay: 0.42s; }
.bg-grid-pulse-dot:nth-child(40) { animation-delay: 0.45s; }
.bg-grid-pulse-dot:nth-child(41) { animation-delay: 0.48s; }
.bg-grid-pulse-dot:nth-child(42) { animation-delay: 0.51s; }
.bg-grid-pulse-dot:nth-child(43) { animation-delay: 0.54s; }
.bg-grid-pulse-dot:nth-child(44) { animation-delay: 0.57s; }
.bg-grid-pulse-dot:nth-child(45) { animation-delay: 0.6s; }
.bg-grid-pulse-dot:nth-child(46) { animation-delay: 0.63s; }
.bg-grid-pulse-dot:nth-child(47) { animation-delay: 0.66s; }
.bg-grid-pulse-dot:nth-child(48) { animation-delay: 0.69s; }
.bg-grid-pulse-dot:nth-child(49) { animation-delay: 0.72s; }
.bg-grid-pulse-dot:nth-child(50) { animation-delay: 0.75s; }
.bg-grid-pulse-dot:nth-child(51) { animation-delay: 0.78s; }
.bg-grid-pulse-dot:nth-child(52) { animation-delay: 0.81s; }
.bg-grid-pulse-dot:nth-child(53) { animation-delay: 0.84s; }
.bg-grid-pulse-dot:nth-child(54) { animation-delay: 0.87s; }
.bg-grid-pulse-dot:nth-child(55) { animation-delay: 0.9s; }
.bg-grid-pulse-dot:nth-child(56) { animation-delay: 0.93s; }
.bg-grid-pulse-dot:nth-child(57) { animation-delay: 0.96s; }
.bg-grid-pulse-dot:nth-child(58) { animation-delay: 0.99s; }
.bg-grid-pulse-dot:nth-child(59) { animation-delay: 1.02s; }
.bg-grid-pulse-dot:nth-child(60) { animation-delay: 1.05s; }
.bg-grid-pulse-dot:nth-child(61) { animation-delay: 1.08s; }
.bg-grid-pulse-dot:nth-child(62) { animation-delay: 1.11s; }
.bg-grid-pulse-dot:nth-child(63) { animation-delay: 1.14s; }
.bg-grid-pulse-dot:nth-child(64) { animation-delay: 1.17s; }
.bg-grid-pulse-dot:nth-child(65) { animation-delay: 1.2s; }
.bg-grid-pulse-dot:nth-child(66) { animation-delay: 1.23s; }
.bg-grid-pulse-dot:nth-child(67) { animation-delay: 1.26s; }
.bg-grid-pulse-dot:nth-child(68) { animation-delay: 1.29s; }
.bg-grid-pulse-dot:nth-child(69) { animation-delay: 1.32s; }
.bg-grid-pulse-dot:nth-child(70) { animation-delay: 1.35s; }

@keyframes bgp-pulse {
  0%, 100% { background: rgba(59, 130, 246, 0.15); transform: scale(1); }
  50% { background: var(--bgp-color); transform: scale(1.8); }
}`,
  html: '<div class="bg-grid-pulse"><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div><div class="bg-grid-pulse-dot"></div></div>',
  params: [
    { name: "--bgp-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--bgp-speed", label: "Speed", type: "duration", default: 2, min: 0.5, max: 5, step: 0.25, unit: "s" },
  ],
  preview: { width: 350, height: 220, darkBg: true },
};

export default bgGridPulse;
