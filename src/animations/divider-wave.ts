import type { Animation } from "../data/animations";

const dividerWave: Animation = {
  slug: "divider-wave",
  name: "Wave Divider",
  category: "divider",
  description:
    "Animated wavy SVG divider that flows continuously. Organic section separator with smooth wave motion.",
  tags: ["divider", "wave", "svg", "flow", "organic", "animated"],
  css: `.divider-wave {
  --dw-color: #3b82f6;
  --dw-speed: 3s;
  width: 300px;
  overflow: hidden;
}

.divider-wave svg {
  width: 200%;
  height: 40px;
  display: block;
  animation: dw-flow var(--dw-speed) linear infinite;
}

.divider-wave path {
  fill: none;
  stroke: var(--dw-color);
  stroke-width: 2;
}

@keyframes dw-flow {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}`,
  html: '<div class="divider-wave"><svg viewBox="0 0 1200 40" preserveAspectRatio="none"><path d="M0,20 Q150,0 300,20 T600,20 T900,20 T1200,20"/></svg></div>',
  params: [
    { name: "--dw-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--dw-speed", label: "Speed", type: "duration", default: 3, min: 1, max: 8, step: 0.5, unit: "s" },
  ],
  preview: { width: 350, height: 100, darkBg: false },
};

export default dividerWave;
