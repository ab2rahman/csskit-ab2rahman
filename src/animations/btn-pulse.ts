import type { Animation } from "../data/animations";

const btnPulse: Animation = {
  slug: "btn-pulse",
  name: "Pulse Button",
  category: "button",
  description:
    "Button pulses gently when idle to attract attention. CTA-style button with soft scale pulse animation.",
  tags: ["button", "pulse", "cta", "idle", "attract", "scale"],
  css: `.btn-pulse {
  --bp-color: #ef4444;
  --bp-speed: 2s;
  width: 140px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 700;
  color: #ffffff;
  background: var(--bp-color);
  border-radius: 25px;
  cursor: pointer;
  animation: bp-throb var(--bp-speed) ease-in-out infinite;
}

@keyframes bp-throb {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 12px rgba(239, 68, 68, 0);
  }
}`,
  html: '<div class="btn-pulse">Click Me</div>',
  params: [
    { name: "--bp-color", label: "Color", type: "color", default: "#ef4444" },
    { name: "--bp-speed", label: "Speed", type: "duration", default: 2, min: 0.5, max: 5, step: 0.25, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: false },
};

export default btnPulse;
