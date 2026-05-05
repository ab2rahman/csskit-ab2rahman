import type { Animation } from "../data/animations";

const attentionRubber: Animation = {
  slug: "attention-rubber",
  name: "Rubber Band",
  category: "attention",
  description:
    "Elastic rubber band stretch effect. Fun, bouncy attention grabber for playful UIs, alerts, or micro-interactions.",
  tags: ["attention", "rubber", "elastic", "stretch", "bounce", "fun"],
  css: `.attention-rubber {
  --rb-color: #8b5cf6;
  --rb-duration: 0.8s;
  display: inline-block;
  padding: 14px 32px;
  border-radius: 12px;
  background: var(--rb-color);
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  font-family: system-ui, sans-serif;
  animation: rubber var(--rb-duration) cubic-bezier(0.36, 0.07, 0.19, 0.97);
  transform-origin: center center;
}

@keyframes rubber {
  0% { transform: scale(1, 1); }
  15% { transform: scale(1.15, 0.85); }
  25% { transform: scale(0.9, 1.1); }
  35% { transform: scale(1.08, 0.92); }
  45% { transform: scale(0.96, 1.04); }
  55% { transform: scale(1.03, 0.97); }
  65% { transform: scale(0.99, 1.01); }
  75% { transform: scale(1.01, 0.99); }
  100% { transform: scale(1, 1); }
}`,
  html: '<div class="attention-rubber">Boing!</div>',
  params: [
    { name: "--rb-color", label: "Color", type: "color", default: "#8b5cf6" },
    { name: "--rb-duration", label: "Speed", type: "duration", default: 0.8, min: 0.3, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 280, height: 120, darkBg: true },
};

export default attentionRubber;
