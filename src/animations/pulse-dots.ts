import type { Animation } from "../data/animations";

const pulseDots: Animation = {
  slug: "pulse-dots",
  name: "Pulse Dots",
  category: "loading",
  description: "Three dots pulsing in sequence. Customize color, size, and count.",
  tags: ["loading", "dots", "pulse", "typing", "indicator"],
  css: `.pulse-dots {
  --dot-color: #60a5fa;
  --dot-size: 14px;
  --dot-speed: 1.4s;
  display: inline-flex;
  gap: 8px;
  align-items: center;
}

.pulse-dots span {
  width: var(--dot-size);
  height: var(--dot-size);
  background: var(--dot-color);
  border-radius: 50%;
  animation: dot-pulse var(--dot-speed) ease-in-out infinite;
}

.pulse-dots span:nth-child(1) { animation-delay: 0s; }
.pulse-dots span:nth-child(2) { animation-delay: 0.2s; }
.pulse-dots span:nth-child(3) { animation-delay: 0.4s; }

@keyframes dot-pulse {
  0%, 80%, 100% {
    transform: scale(0.6);
    opacity: 0.4;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}`,
  html: `<div class="pulse-dots">
  <span></span><span></span><span></span>
</div>`,
  params: [
    { name: "--dot-color", label: "Color", type: "color", default: "#60a5fa" },
    { name: "--dot-size", label: "Size", type: "range", default: 14, min: 6, max: 24, step: 1, unit: "px" },
    { name: "--dot-speed", label: "Speed", type: "duration", default: 1.4, min: 0.5, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 200, height: 120, darkBg: true },
};

export default pulseDots;
