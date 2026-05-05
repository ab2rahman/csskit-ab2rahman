import type { Animation } from "../data/animations";

const attentionRadar: Animation = {
  slug: "attention-radar",
  name: "Radar Ping",
  category: "attention",
  description:
    "Expanding radar ping circle effect. Attention animation with concentric ring pulses.",
  tags: ["attention", "radar", "ping", "expand", "ring", "pulse"],
  css: `.attention-radar {
  --ar-color: #3b82f6;
  --ar-speed: 1.5s;
  width: 20px;
  height: 20px;
  background: var(--ar-color);
  border-radius: 50%;
  position: relative;
}

.attention-radar::before,
.attention-radar::after {
  content: '';
  position: absolute;
  inset: -10px;
  border: 2px solid var(--ar-color);
  border-radius: 50%;
  animation: ar-ping var(--ar-speed) ease-out infinite;
}

.attention-radar::after {
  animation-delay: calc(var(--ar-speed) / 2);
}

@keyframes ar-ping {
  0% {
    transform: scale(0.5);
    opacity: 1;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}`,
  html: '<div class="attention-radar"></div>',
  params: [
    { name: "--ar-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--ar-speed", label: "Speed", type: "duration", default: 1.5, min: 0.5, max: 4, step: 0.25, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default attentionRadar;
