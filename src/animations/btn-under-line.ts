import type { Animation } from "../data/animations";

const btnUnderLine: Animation = {
  slug: "btn-under-line",
  name: "Under Line",
  category: "button",
  description:
    "Animated line draws under the button text on hover. Clean underline button effect with smooth animation.",
  tags: ["button", "underline", "line", "draw", "hover", "clean"],
  css: `.btn-under-line {
  --bul-color: #8b5cf6;
  --bul-speed: 0.3s;
  position: relative;
  padding: 12px 24px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--bul-color);
  background: transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;
}

.btn-under-line::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--bul-color);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform var(--bul-speed) ease;
}

.btn-under-line:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}`,
  html: '<div class="btn-under-line">Hover Me</div>',
  params: [
    { name: "--bul-color", label: "Color", type: "color", default: "#8b5cf6" },
    { name: "--bul-speed", label: "Speed", type: "duration", default: 0.3, min: 0.1, max: 1, step: 0.05, unit: "s" },
  ],
  preview: { width: 300, height: 100, darkBg: false },
};

export default btnUnderLine;
