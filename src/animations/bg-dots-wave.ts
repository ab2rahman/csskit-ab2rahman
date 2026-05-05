import type { Animation } from "../data/animations";

const bgDotsWave: Animation = {
  slug: "bg-dots-wave",
  name: "Dot Grid Wave",
  category: "background",
  description:
    "Grid of dots with wave ripple effect. Pattern animation with dots responding to a traveling wave.",
  tags: ["background", "dots", "grid", "wave", "ripple", "pattern"],
  css: `.bg-dots-wave {
  --bdw-color: #6366f1;
  --bdw-speed: 2s;
  width: 300px;
  height: 150px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 4px;
  padding: 8px;
  background: #0f0f1a;
  border-radius: 8px;
  align-content: center;
  justify-items: center;
}

.bg-dots-wave span {
  width: 8px;
  height: 8px;
  background: var(--bdw-color);
  border-radius: 50%;
  animation: bdw-pulse var(--bdw-speed) ease-in-out infinite;
}

.bg-dots-wave span:nth-child(1) { animation-delay: 0.00s; }
.bg-dots-wave span:nth-child(2) { animation-delay: 0.04s; }
.bg-dots-wave span:nth-child(3) { animation-delay: 0.08s; }
.bg-dots-wave span:nth-child(4) { animation-delay: 0.12s; }
.bg-dots-wave span:nth-child(5) { animation-delay: 0.16s; }
.bg-dots-wave span:nth-child(6) { animation-delay: 0.10s; }
.bg-dots-wave span:nth-child(7) { animation-delay: 0.14s; }
.bg-dots-wave span:nth-child(8) { animation-delay: 0.18s; }
.bg-dots-wave span:nth-child(9) { animation-delay: 0.22s; }
.bg-dots-wave span:nth-child(10) { animation-delay: 0.26s; }
.bg-dots-wave span:nth-child(11) { animation-delay: 0.20s; }
.bg-dots-wave span:nth-child(12) { animation-delay: 0.24s; }
.bg-dots-wave span:nth-child(13) { animation-delay: 0.28s; }
.bg-dots-wave span:nth-child(14) { animation-delay: 0.32s; }
.bg-dots-wave span:nth-child(15) { animation-delay: 0.30s; }
.bg-dots-wave span:nth-child(16) { animation-delay: 0.34s; }
.bg-dots-wave span:nth-child(17) { animation-delay: 0.38s; }
.bg-dots-wave span:nth-child(18) { animation-delay: 0.40s; }
.bg-dots-wave span:nth-child(19) { animation-delay: 0.30s; }
.bg-dots-wave span:nth-child(20) { animation-delay: 0.34s; }
.bg-dots-wave span:nth-child(21) { animation-delay: 0.38s; }
.bg-dots-wave span:nth-child(22) { animation-delay: 0.42s; }
.bg-dots-wave span:nth-child(23) { animation-delay: 0.46s; }
.bg-dots-wave span:nth-child(24) { animation-delay: 0.40s; }
.bg-dots-wave span:nth-child(25) { animation-delay: 0.44s; }
.bg-dots-wave span:nth-child(26) { animation-delay: 0.48s; }
.bg-dots-wave span:nth-child(27) { animation-delay: 0.50s; }
.bg-dots-wave span:nth-child(28) { animation-delay: 0.52s; }
.bg-dots-wave span:nth-child(29) { animation-delay: 0.50s; }
.bg-dots-wave span:nth-child(30) { animation-delay: 0.54s; }

@keyframes bdw-pulse {
  0%, 100% { transform: scale(0.5); opacity: 0.3; }
  50% { transform: scale(1); opacity: 1; }
}`,
  html: '<div class="bg-dots-wave"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>',
  params: [
    { name: "--bdw-color", label: "Color", type: "color", default: "#6366f1" },
    { name: "--bdw-speed", label: "Speed", type: "duration", default: 2, min: 0.5, max: 6, step: 0.5, unit: "s" },
  ],
  preview: { width: 300, height: 180, darkBg: true },
};

export default bgDotsWave;
