import type { Animation } from "../data/animations";

const btnRippleFill: Animation = {
  slug: "btn-ripple-fill",
  name: "Ripple Fill",
  category: "button",
  description:
    "Ripple expands from center to fill the button on hover. Material design inspired ripple effect.",
  tags: ["button", "ripple", "fill", "material", "expand", "circle"],
  css: `.btn-ripple-fill {
  --brf-color: #6366f1;
  --brf-speed: 0.5s;
  position: relative;
  width: 140px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--brf-color);
  background: transparent;
  border: 2px solid var(--brf-color);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;
  transition: color var(--brf-speed) ease;
}

.btn-ripple-fill::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: var(--brf-color);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width var(--brf-speed) ease, height var(--brf-speed) ease;
  z-index: -1;
}

.btn-ripple-fill:hover {
  color: #ffffff;
}

.btn-ripple-fill:hover::before {
  width: 300px;
  height: 300px;
}`,
  html: '<div class="btn-ripple-fill">Ripple</div>',
  params: [
    { name: "--brf-color", label: "Color", type: "color", default: "#6366f1" },
    { name: "--brf-speed", label: "Speed", type: "duration", default: 0.5, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: false },
};

export default btnRippleFill;
