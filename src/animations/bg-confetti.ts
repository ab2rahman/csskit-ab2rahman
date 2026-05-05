import type { Animation } from "../data/animations";

const bgConfetti: Animation = {
  slug: "bg-confetti",
  name: "Confetti",
  category: "background",
  description:
    "Falling colorful confetti pieces with gentle rotation. Celebration and festive background effect.",
  tags: ["background", "confetti", "celebration", "party", "festive", "colorful"],
  css: `.bg-confetti {
  --bcf-speed: 3s;
  position: relative;
  width: 280px;
  height: 200px;
  overflow: hidden;
  background: #050b18;
  border-radius: 12px;
}

.bg-confetti-piece {
  position: absolute;
  top: -10px;
  width: 8px;
  height: 12px;
  border-radius: 2px;
  animation: bcf-fall var(--bcf-speed) ease-in infinite;
}

.bg-confetti-piece:nth-child(1) { left: 8%; background: #ef4444; animation-delay: 0s; animation-duration: calc(var(--bcf-speed) * 0.9); }
.bg-confetti-piece:nth-child(2) { left: 22%; background: #3b82f6; animation-delay: 0.3s; width: 6px; height: 6px; border-radius: 50%; }
.bg-confetti-piece:nth-child(3) { left: 38%; background: #fbbf24; animation-delay: 0.6s; animation-duration: calc(var(--bcf-speed) * 1.1); }
.bg-confetti-piece:nth-child(4) { left: 52%; background: #22c55e; animation-delay: 0.1s; width: 10px; height: 8px; }
.bg-confetti-piece:nth-child(5) { left: 68%; background: #a855f7; animation-delay: 0.8s; animation-duration: calc(var(--bcf-speed) * 0.8); }
.bg-confetti-piece:nth-child(6) { left: 82%; background: #f97316; animation-delay: 0.5s; width: 5px; height: 10px; }
.bg-confetti-piece:nth-child(7) { left: 15%; background: #06b6d4; animation-delay: 1.1s; animation-duration: calc(var(--bcf-speed) * 1.2); width: 7px; height: 7px; border-radius: 50%; }
.bg-confetti-piece:nth-child(8) { left: 92%; background: #ec4899; animation-delay: 0.4s; }
.bg-confetti-piece:nth-child(9) { left: 45%; background: #eab308; animation-delay: 0.9s; animation-duration: calc(var(--bcf-speed) * 0.7); width: 6px; height: 14px; }
.bg-confetti-piece:nth-child(10) { left: 75%; background: #14b8a6; animation-delay: 0.2s; width: 9px; height: 9px; border-radius: 50%; }

@keyframes bcf-fall {
  0% { top: -10px; transform: rotate(0deg) translateX(0); opacity: 1; }
  25% { transform: rotate(90deg) translateX(15px); }
  50% { transform: rotate(180deg) translateX(-10px); }
  75% { transform: rotate(270deg) translateX(8px); opacity: 0.7; }
  100% { top: 110%; transform: rotate(360deg) translateX(0); opacity: 0; }
}`,
  html: '<div class="bg-confetti"><div class="bg-confetti-piece"></div><div class="bg-confetti-piece"></div><div class="bg-confetti-piece"></div><div class="bg-confetti-piece"></div><div class="bg-confetti-piece"></div><div class="bg-confetti-piece"></div><div class="bg-confetti-piece"></div><div class="bg-confetti-piece"></div><div class="bg-confetti-piece"></div><div class="bg-confetti-piece"></div></div>',
  params: [
    { name: "--bcf-speed", label: "Speed", type: "duration", default: 3, min: 1, max: 8, step: 0.5, unit: "s" },
  ],
  preview: { width: 350, height: 220, darkBg: true },
};

export default bgConfetti;
