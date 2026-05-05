import type { Animation } from "../data/animations";

const hoverSkew: Animation = {
  slug: "hover-skew",
  name: "Skew",
  category: "hover",
  description:
    "Element skews on hover with smooth transform. Dynamic tilted effect for interactive elements.",
  tags: ["hover", "skew", "tilt", "transform", "dynamic", "angular"],
  css: `.hover-skew {
  --hsk-color: #ec4899;
  --hsk-speed: 0.3s;
  width: 140px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  background: var(--hsk-color);
  border-radius: 8px;
  cursor: pointer;
  transition: transform var(--hsk-speed) ease;
}

.hover-skew:hover {
  transform: skewX(-8deg);
}`,
  html: '<div class="hover-skew">Skew Me</div>',
  params: [
    { name: "--hsk-color", label: "Color", type: "color", default: "#ec4899" },
    { name: "--hsk-speed", label: "Speed", type: "duration", default: 0.3, min: 0.1, max: 1, step: 0.05, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: false },
};

export default hoverSkew;
