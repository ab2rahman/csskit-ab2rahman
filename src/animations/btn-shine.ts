import type { Animation } from "../data/animations";

const btnShine: Animation = {
  slug: "btn-shine",
  name: "Button Shine",
  category: "button",
  description:
    "Light streak sweeps across the button on hover. Premium gloss effect that adds a polished feel to CTAs.",
  tags: ["button", "shine", "sweep", "light", "gloss", "premium"],
  css: `.btn-shine {
  --bsh-color: #3b82f6;
  --bsh-shine: rgba(255,255,255,0.3);
  --bsh-speed: 0.6s;
  position: relative;
  display: inline-block;
  padding: 12px 28px;
  border-radius: 8px;
  background: var(--bsh-color);
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  font-family: system-ui, sans-serif;
  cursor: pointer;
  border: none;
  overflow: hidden;
}

.btn-shine::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -75%;
  width: 50%;
  height: 200%;
  background: linear-gradient(90deg, transparent, var(--bsh-shine), transparent);
  transform: skewX(-20deg);
  transition: none;
}

.btn-shine:hover::after {
  animation: bsh-sweep var(--bsh-speed) ease;
}

@keyframes bsh-sweep {
  0% { left: -75%; }
  100% { left: 125%; }
}`,
  html: '<div class="btn-shine">Shine</div>',
  params: [
    { name: "--bsh-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--bsh-speed", label: "Speed", type: "duration", default: 0.6, min: 0.2, max: 1.5, step: 0.1, unit: "s" },
  ],
  preview: { width: 250, height: 120, darkBg: true },
};

export default btnShine;
