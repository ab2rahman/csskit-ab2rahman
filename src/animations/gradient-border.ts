import type { Animation } from "../data/animations";

const gradientBorder: Animation = {
  slug: "gradient-border",
  name: "Gradient Border",
  category: "button",
  description: "Animated gradient border that rotates on hover. Customize colors.",
  tags: ["button", "gradient", "border", "animated", "rainbow"],
  css: `.gradient-border {
  --gb-color-1: #ff6b6b;
  --gb-color-2: #feca57;
  --gb-color-3: #48dbfb;
  --gb-speed: 3s;
  position: relative;
  display: inline-block;
  padding: 14px 36px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: #1e293b;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  z-index: 1;
}

.gradient-border::before {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: 10px;
  background: linear-gradient(
    var(--gb-angle, 0deg),
    var(--gb-color-1),
    var(--gb-color-2),
    var(--gb-color-3),
    var(--gb-color-1)
  );
  z-index: -2;
  animation: gb-rotate var(--gb-speed) linear infinite;
}

.gradient-border::after {
  content: "";
  position: absolute;
  inset: 0;
  background: #1e293b;
  border-radius: 8px;
  z-index: -1;
}

@keyframes gb-rotate {
  to { --gb-angle: 360deg; }
}

@property --gb-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}`,
  html: `<button class="gradient-border">Gradient Border</button>`,
  params: [
    { name: "--gb-color-1", label: "Color 1", type: "color", default: "#ff6b6b" },
    { name: "--gb-color-2", label: "Color 2", type: "color", default: "#feca57" },
    { name: "--gb-color-3", label: "Color 3", type: "color", default: "#48dbfb" },
    { name: "--gb-speed", label: "Speed", type: "duration", default: 3, min: 1, max: 8, step: 0.5, unit: "s" },
  ],
  preview: { width: 300, height: 150, darkBg: true },
};

export default gradientBorder;
