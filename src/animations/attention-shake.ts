import type { Animation } from "../data/animations";

const attentionShake: Animation = {
  slug: "attention-shake",
  name: "Shake",
  category: "attention",
  description:
    "Horizontal shake wiggle effect that grabs attention. Great for error states, validation feedback, or drawing focus to an element.",
  tags: ["attention", "shake", "wiggle", "error", "feedback", "no"],
  css: `.attention-shake {
  --sh-color: #ef4444;
  --sh-duration: 0.6s;
  display: inline-block;
  padding: 12px 28px;
  border-radius: 10px;
  background: var(--sh-color);
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  font-family: system-ui, sans-serif;
  border: none;
  animation: shake var(--sh-duration) ease-in-out;
  transform-origin: center center;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10% { transform: translateX(-8px) rotate(-1deg); }
  20% { transform: translateX(8px) rotate(1deg); }
  30% { transform: translateX(-6px) rotate(-0.5deg); }
  40% { transform: translateX(6px) rotate(0.5deg); }
  50% { transform: translateX(-4px); }
  60% { transform: translateX(4px); }
  70% { transform: translateX(-2px); }
  80% { transform: translateX(2px); }
  90% { transform: translateX(-1px); }
}`,
  html: '<div class="attention-shake">Action Required</div>',
  params: [
    { name: "--sh-color", label: "Color", type: "color", default: "#ef4444" },
    { name: "--sh-duration", label: "Speed", type: "duration", default: 0.6, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: true },
};

export default attentionShake;
