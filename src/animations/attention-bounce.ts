import type { Animation } from "../data/animations";

const attentionBounce: Animation = {
  slug: "attention-bounce",
  name: "Bounce",
  category: "attention",
  description:
    "Vertical bounce with squash and stretch. Playful attention effect ideal for call-to-action elements and playful UIs.",
  tags: ["attention", "bounce", "squash", "stretch", "cta", "playful"],
  css: `.attention-bounce {
  --ab-color: #f59e0b;
  --ab-speed: 0.6s;
  --ab-height: 30px;
  display: inline-block;
  padding: 12px 28px;
  border-radius: 10px;
  background: var(--ab-color);
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  font-family: system-ui, sans-serif;
  animation: bounce-y var(--ab-speed) cubic-bezier(0.36, 0.07, 0.19, 0.97);
  transform-origin: center bottom;
}

@keyframes bounce-y {
  0% { transform: translateY(0); }
  15% { transform: translateY(calc(-1 * var(--ab-height))) scaleX(0.9) scaleY(1.1); }
  30% { transform: translateY(0) scaleX(1.1) scaleY(0.9); }
  45% { transform: translateY(calc(-1 * var(--ab-height) / 3)) scaleX(0.95) scaleY(1.05); }
  60% { transform: translateY(0) scaleX(1.05) scaleY(0.95); }
  75% { transform: translateY(calc(-1 * var(--ab-height) / 8)); }
  100% { transform: translateY(0); }
}`,
  html: '<div class="attention-bounce">Bounce!</div>',
  params: [
    { name: "--ab-color", label: "Color", type: "color", default: "#f59e0b" },
    { name: "--ab-speed", label: "Speed", type: "duration", default: 0.6, min: 0.3, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 280, height: 140, darkBg: true },
};

export default attentionBounce;
