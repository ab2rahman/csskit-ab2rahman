import type { Animation } from "../data/animations";

const attentionSwingBounce: Animation = {
  slug: "attention-swing-bounce",
  name: "Swing Bounce",
  category: "attention",
  description:
    "Element swings then bounces to settle. Combined pendulum and bounce attention animation.",
  tags: ["attention", "swing", "bounce", "pendulum", "settle", "wobble"],
  css: `.attention-swing-bounce {
  --asb-color: #14b8a6;
  --asb-speed: 1.5s;
  width: 60px;
  height: 60px;
  background: var(--asb-color);
  border-radius: 12px;
  transform-origin: top center;
  animation: asb-swing var(--asb-speed) ease-in-out infinite;
}

@keyframes asb-swing {
  0%, 100% { transform: rotate(0deg); }
  15% { transform: rotate(15deg); }
  30% { transform: rotate(-12deg); }
  45% { transform: rotate(8deg); }
  60% { transform: rotate(-5deg); }
  75% { transform: rotate(2deg); }
  90% { transform: rotate(-1deg); }
}`,
  html: '<div class="attention-swing-bounce"></div>',
  params: [
    { name: "--asb-color", label: "Color", type: "color", default: "#14b8a6" },
    { name: "--asb-speed", label: "Speed", type: "duration", default: 1.5, min: 0.5, max: 4, step: 0.25, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default attentionSwingBounce;
