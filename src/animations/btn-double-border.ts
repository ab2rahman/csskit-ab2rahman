import type { Animation } from "../data/animations";

const btnDoubleBorder: Animation = {
  slug: "btn-double-border",
  name: "Double Border",
  category: "button",
  description:
    "Two borders animate independently on hover. Unique button effect with layered border animations.",
  tags: ["button", "border", "double", "layered", "animated", "unique"],
  css: `.btn-double-border {
  --bdb-color1: #3b82f6;
  --bdb-color2: #f43f5e;
  --bdb-speed: 0.4s;
  position: relative;
  width: 140px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: #334155;
  background: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid transparent;
}

.btn-double-border::before,
.btn-double-border::after {
  content: '';
  position: absolute;
  border-radius: 10px;
  transition: all var(--bdb-speed) ease;
}

.btn-double-border::before {
  inset: -4px;
  border: 2px solid var(--bdb-color1);
  opacity: 0;
  transform: scale(0.9);
}

.btn-double-border::after {
  inset: -8px;
  border: 2px solid var(--bdb-color2);
  opacity: 0;
  transform: scale(0.85);
}

.btn-double-border:hover::before {
  opacity: 1;
  transform: scale(1);
}

.btn-double-border:hover::after {
  opacity: 0.6;
  transform: scale(1);
}`,
  html: '<div class="btn-double-border">Hover Me</div>',
  params: [
    { name: "--bdb-color1", label: "Inner Color", type: "color", default: "#3b82f6" },
    { name: "--bdb-color2", label: "Outer Color", type: "color", default: "#f43f5e" },
    { name: "--bdb-speed", label: "Speed", type: "duration", default: 0.4, min: 0.1, max: 1.5, step: 0.05, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: false },
};

export default btnDoubleBorder;
