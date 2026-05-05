import type { Animation } from "../data/animations";

const dividerZigzag: Animation = {
  slug: "divider-zigzag",
  name: "Zigzag",
  category: "divider",
  description:
    "Animated zigzag line divider. Dynamic section separator with sharp angular motion.",
  tags: ["divider", "zigzag", "line", "animated", "angular", "sharp"],
  css: `.divider-zigzag {
  --dz-color: #3b82f6;
  --dz-speed: 2s;
  width: 240px;
  height: 30px;
  overflow: hidden;
}

.divider-zigzag svg {
  width: 200%;
  height: 30px;
  display: block;
  animation: dz-slide var(--dz-speed) linear infinite;
}

.divider-zigzag path {
  fill: none;
  stroke: var(--dz-color);
  stroke-width: 2;
  stroke-linejoin: round;
}

@keyframes dz-slide {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}`,
  html: '<div class="divider-zigzag"><svg viewBox="0 0 600 30" preserveAspectRatio="none"><path d="M0,15 L15,5 L30,15 L45,5 L60,15 L75,5 L90,15 L105,5 L120,15 L135,5 L150,15 L165,5 L180,15 L195,5 L210,15 L225,5 L240,15 L255,5 L270,15 L285,5 L300,15 L315,5 L330,15 L345,5 L360,15 L375,5 L390,15 L405,5 L420,15 L435,5 L450,15 L465,5 L480,15 L495,5 L510,15 L525,5 L540,15 L555,5 L570,15 L585,5 L600,15"/></svg></div>',
  params: [
    { name: "--dz-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--dz-speed", label: "Speed", type: "duration", default: 2, min: 0.5, max: 8, step: 0.5, unit: "s" },
  ],
  preview: { width: 350, height: 100, darkBg: false },
};

export default dividerZigzag;
