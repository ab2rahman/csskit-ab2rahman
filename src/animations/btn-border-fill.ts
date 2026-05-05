import type { Animation } from "../data/animations";

const btnBorderFill: Animation = {
  slug: "btn-border-fill",
  name: "Border Fill",
  category: "button",
  description:
    "Border draws itself then fills with color on hover. Outline-to-solid button transition animation.",
  tags: ["button", "border", "fill", "outline", "draw", "transition"],
  css: `.btn-border-fill {
  --bbf-color: #3b82f6;
  --bbf-speed: 0.4s;
  position: relative;
  width: 140px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--bbf-color);
  background: transparent;
  border: 2px solid var(--bbf-color);
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  transition: color var(--bbf-speed) ease;
  z-index: 1;
}

.btn-border-fill::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: var(--bbf-color);
  z-index: -1;
  transition: width var(--bbf-speed) ease;
}

.btn-border-fill:hover {
  color: #ffffff;
}

.btn-border-fill:hover::before {
  width: 100%;
}`,
  html: '<div class="btn-border-fill">Hover Me</div>',
  params: [
    { name: "--bbf-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--bbf-speed", label: "Speed", type: "duration", default: 0.4, min: 0.1, max: 1.5, step: 0.05, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: false },
};

export default btnBorderFill;
