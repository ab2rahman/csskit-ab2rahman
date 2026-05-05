import type { Animation } from "../data/animations";

const attentionMagnet: Animation = {
  slug: "attention-magnet",
  name: "Magnet",
  category: "attention",
  description:
    "Element wobbles like attracted by a magnetic force. Jittery attention animation with magnetic pull feel.",
  tags: ["attention", "magnet", "wobble", "jitter", "pull", "attract"],
  css: `.attention-magnet {
  --am-color: #8b5cf6;
  --am-speed: 0.4s;
  width: 60px;
  height: 60px;
  background: var(--am-color);
  border-radius: 50%;
  animation: am-pull var(--am-speed) ease-in-out infinite alternate;
}

@keyframes am-pull {
  0% { transform: translate(0, 0); }
  25% { transform: translate(2px, -1px); }
  50% { transform: translate(-1px, 2px); }
  75% { transform: translate(1px, 1px); }
  100% { transform: translate(3px, 0); }
}`,
  html: '<div class="attention-magnet"></div>',
  params: [
    { name: "--am-color", label: "Color", type: "color", default: "#8b5cf6" },
    { name: "--am-speed", label: "Speed", type: "duration", default: 0.4, min: 0.1, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default attentionMagnet;
