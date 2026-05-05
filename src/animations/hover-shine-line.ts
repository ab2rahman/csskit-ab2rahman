import type { Animation } from "../data/animations";

const hoverShineLine: Animation = {
  slug: "hover-shine-line",
  name: "Shine Line",
  category: "hover",
  description:
    "Diagonal shine line sweep on hover. Glossy reflection effect passing across the element.",
  tags: ["hover", "shine", "line", "sweep", "glossy", "reflection"],
  css: `.hover-shine-line {
  --hsl-color: #1e293b;
  --hsl-shine: rgba(255,255,255,0.3);
  --hsl-speed: 0.6s;
  position: relative;
  width: 140px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  background: var(--hsl-color);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
}

.hover-shine-line::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -75%;
  width: 50%;
  height: 200%;
  background: linear-gradient(90deg, transparent, var(--hsl-shine), transparent);
  transform: skewX(-25deg);
  transition: left var(--hsl-speed) ease;
}

.hover-shine-line:hover::after {
  left: 125%;
}`,
  html: '<div class="hover-shine-line">Shine</div>',
  params: [
    { name: "--hsl-speed", label: "Speed", type: "duration", default: 0.6, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: false },
};

export default hoverShineLine;
