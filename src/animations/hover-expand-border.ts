import type { Animation } from "../data/animations";

const hoverExpandBorder: Animation = {
  slug: "hover-expand-border",
  name: "Expand Border",
  category: "hover",
  description:
    "Border expands from center outward on hover. Animated border reveal that grows from the middle.",
  tags: ["hover", "border", "expand", "grow", "center", "outline"],
  css: `.hover-expand-border {
  --heb-color: #8b5cf6;
  --heb-speed: 0.4s;
  position: relative;
  width: 120px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--heb-color);
  cursor: pointer;
}

.hover-expand-border::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px solid var(--heb-color);
  border-radius: 10px;
  transform: scaleX(0);
  transition: transform var(--heb-speed) ease;
}

.hover-expand-border:hover::before {
  transform: scaleX(1);
}`,
  html: '<div class="hover-expand-border">Expand</div>',
  params: [
    { name: "--heb-color", label: "Color", type: "color", default: "#8b5cf6" },
    { name: "--heb-speed", label: "Speed", type: "duration", default: 0.4, min: 0.1, max: 1.5, step: 0.05, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: false },
};

export default hoverExpandBorder;
