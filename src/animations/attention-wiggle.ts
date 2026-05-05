import type { Animation } from "../data/animations";

const attentionWiggle: Animation = {
  slug: "attention-wiggle",
  name: "Wiggle",
  category: "attention",
  description:
    "Fast side-to-side wiggle animation. Quick attention grabber with oscillating motion.",
  tags: ["attention", "wiggle", "shake", "oscillate", "fast", "grab"],
  css: `.attention-wiggle {
  --aw-color: #f43f5e;
  --aw-speed: 0.5s;
  width: 80px;
  height: 80px;
  background: var(--aw-color);
  border-radius: 16px;
  animation: aw-wiggle var(--aw-speed) ease-in-out infinite;
}

@keyframes aw-wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-8deg); }
  75% { transform: rotate(8deg); }
}`,
  html: '<div class="attention-wiggle"></div>',
  params: [
    { name: "--aw-color", label: "Color", type: "color", default: "#f43f5e" },
    { name: "--aw-speed", label: "Speed", type: "duration", default: 0.5, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default attentionWiggle;
