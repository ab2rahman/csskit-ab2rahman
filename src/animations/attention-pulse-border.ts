import type { Animation } from "../data/animations";

const attentionPulseBorder: Animation = {
  slug: "attention-pulse-border",
  name: "Pulse Border",
  category: "attention",
  description:
    "Border pulses with an expanding ring effect. Attention-grabbing outline animation for important elements.",
  tags: ["attention", "pulse", "border", "outline", "ring", "expand"],
  css: `.attention-pulse-border {
  --apb-color: #3b82f6;
  --apb-speed: 2s;
  width: 80px;
  height: 80px;
  border: 2px solid var(--apb-color);
  border-radius: 12px;
  position: relative;
}

.attention-pulse-border::after {
  content: '';
  position: absolute;
  inset: -4px;
  border: 2px solid var(--apb-color);
  border-radius: 14px;
  animation: apb-ring var(--apb-speed) ease-out infinite;
}

@keyframes apb-ring {
  0% {
    inset: -2px;
    opacity: 1;
  }
  100% {
    inset: -16px;
    opacity: 0;
  }
}`,
  html: '<div class="attention-pulse-border"></div>',
  params: [
    { name: "--apb-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--apb-speed", label: "Speed", type: "duration", default: 2, min: 0.5, max: 5, step: 0.25, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default attentionPulseBorder;
