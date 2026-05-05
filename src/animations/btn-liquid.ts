import type { Animation } from "../data/animations";

const btnLiquid: Animation = {
  slug: "btn-liquid",
  name: "Liquid Fill",
  category: "button",
  description:
    "Liquid-style fill effect on hover. Fluid wave animation filling the button from bottom up.",
  tags: ["button", "liquid", "fill", "wave", "fluid", "organic"],
  css: `.btn-liquid {
  --blq-color: #0ea5e9;
  --blq-speed: 0.6s;
  position: relative;
  width: 140px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--blq-color);
  background: transparent;
  border: 2px solid var(--blq-color);
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: color var(--blq-speed) ease;
}

.btn-liquid::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: var(--blq-color);
  z-index: -1;
  border-radius: 0 0 8px 8px;
  transition: height var(--blq-speed) ease;
}

.btn-liquid:hover {
  color: #ffffff;
}

.btn-liquid:hover::before {
  height: 100%;
  border-radius: 8px;
}`,
  html: '<div class="btn-liquid">Hover Me</div>',
  params: [
    { name: "--blq-color", label: "Color", type: "color", default: "#0ea5e9" },
    { name: "--blq-speed", label: "Speed", type: "duration", default: 0.6, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: false },
};

export default btnLiquid;
