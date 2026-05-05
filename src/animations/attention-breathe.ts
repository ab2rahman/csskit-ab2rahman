import type { Animation } from "../data/animations";

const attentionBreathe: Animation = {
  slug: "attention-breathe",
  name: "Breathe",
  category: "attention",
  description:
    "Smooth scale up and down like breathing. Calming attention animation with gentle pulsing.",
  tags: ["attention", "breathe", "pulse", "scale", "calm", "gentle"],
  css: `.attention-breathe {
  --abr-color: #10b981;
  --abr-speed: 3s;
  width: 80px;
  height: 80px;
  background: var(--abr-color);
  border-radius: 50%;
  animation: abr-breathe var(--abr-speed) ease-in-out infinite;
}

@keyframes abr-breathe {
  0%, 100% {
    transform: scale(0.85);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
  }
  50% {
    transform: scale(1);
    box-shadow: 0 0 20px 8px rgba(16, 185, 129, 0.1);
  }
}`,
  html: '<div class="attention-breathe"></div>',
  params: [
    { name: "--abr-color", label: "Color", type: "color", default: "#10b981" },
    { name: "--abr-speed", label: "Speed", type: "duration", default: 3, min: 1, max: 6, step: 0.5, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default attentionBreathe;
