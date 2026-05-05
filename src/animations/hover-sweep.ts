import type { Animation } from "../data/animations";

const hoverSweep: Animation = {
  slug: "hover-sweep",
  name: "Sweep",
  category: "hover",
  description:
    "Diagonal light sweep across element on hover. Shiny highlight effect like a reflection passing over.",
  tags: ["hover", "sweep", "shine", "light", "diagonal", "reflection"],
  css: `.hover-sweep {
  --hsw-color: #ffffff;
  --hsw-speed: 0.6s;
  position: relative;
  width: 140px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  background: #1e293b;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
}

.hover-sweep::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -100%;
  width: 60%;
  height: 200%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
  transform: skewX(-20deg);
  transition: left var(--hsw-speed) ease;
}

.hover-sweep:hover::after {
  left: 130%;
}`,
  html: '<div class="hover-sweep">Sweep</div>',
  params: [
    { name: "--hsw-speed", label: "Speed", type: "duration", default: 0.6, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: true },
};

export default hoverSweep;
