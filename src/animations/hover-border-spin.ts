import type { Animation } from "../data/animations";

const hoverBorderSpin: Animation = {
  slug: "hover-border-spin",
  name: "Border Spin",
  category: "hover",
  description:
    "Animated rotating conic-gradient border spins around the element on hover. Modern gradient border effect.",
  tags: ["hover", "border", "spin", "gradient", "rotate", "conic"],
  css: `.hover-border-spin {
  --hbs-color1: #f43f5e;
  --hbs-color2: #3b82f6;
  --hbs-speed: 1.5s;
  position: relative;
  width: 120px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: #334155;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
}

.hover-border-spin::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: conic-gradient(from 0deg, var(--hbs-color1), var(--hbs-color2), var(--hbs-color1));
  border-radius: 10px;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s;
  animation: hbs-spin var(--hbs-speed) linear infinite;
}

.hover-border-spin:hover::before {
  opacity: 1;
}

.hover-border-spin::after {
  content: '';
  position: absolute;
  inset: 2px;
  background: #ffffff;
  border-radius: 6px;
  z-index: -1;
}

@keyframes hbs-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
  html: '<div class="hover-border-spin">Hover Me</div>',
  params: [
    { name: "--hbs-color1", label: "Color 1", type: "color", default: "#f43f5e" },
    { name: "--hbs-color2", label: "Color 2", type: "color", default: "#3b82f6" },
    { name: "--hbs-speed", label: "Speed", type: "duration", default: 1.5, min: 0.5, max: 5, step: 0.25, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: false },
};

export default hoverBorderSpin;
