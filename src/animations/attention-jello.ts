import type { Animation } from "../data/animations";

const attentionJello: Animation = {
  slug: "attention-jello",
  name: "Jello",
  category: "attention",
  description:
    "Wobbly gelatin effect with alternating skew. Fun, organic-feeling attention grabber for playful interfaces.",
  tags: ["attention", "jello", "wobble", "gelatin", "skew", "fun"],
  css: `.attention-jello {
  --aj-color: #06b6d4;
  --aj-speed: 0.9s;
  display: inline-block;
  padding: 14px 32px;
  border-radius: 12px;
  background: var(--aj-color);
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  font-family: system-ui, sans-serif;
  animation: jello var(--aj-speed) ease-in-out;
  transform-origin: center;
}

@keyframes jello {
  0% { transform: skewX(0deg) skewY(0deg); }
  15% { transform: skewX(-10deg) skewY(-5deg); }
  30% { transform: skewX(8deg) skewY(3deg); }
  45% { transform: skewX(-5deg) skewY(-2deg); }
  60% { transform: skewX(3deg) skewY(1deg); }
  75% { transform: skewX(-1deg) skewY(0deg); }
  100% { transform: skewX(0deg) skewY(0deg); }
}`,
  html: '<div class="attention-jello">Wobble</div>',
  params: [
    { name: "--aj-color", label: "Color", type: "color", default: "#06b6d4" },
    { name: "--aj-speed", label: "Speed", type: "duration", default: 0.9, min: 0.3, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 280, height: 120, darkBg: true },
};

export default attentionJello;
