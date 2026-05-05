import type { Animation } from "../data/animations";

const hoverUnderlineGrow: Animation = {
  slug: "hover-underline-grow",
  name: "Underline Grow",
  category: "hover",
  description:
    "Underline grows from center outward on hover. Clean, modern text link hover effect.",
  tags: ["hover", "underline", "grow", "center", "link", "text"],
  css: `.hover-underline-grow {
  --hug-color: #3b82f6;
  --hug-thickness: 2px;
  --hug-speed: 0.3s;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--hug-color);
  position: relative;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
}

.hover-underline-grow::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: var(--hug-thickness);
  background: var(--hug-color);
  transition: width var(--hug-speed) ease, left var(--hug-speed) ease;
}

.hover-underline-grow:hover::after {
  width: 100%;
  left: 0;
}`,
  html: '<div class="hover-underline-grow">Hover this link</div>',
  params: [
    { name: "--hug-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--hug-thickness", label: "Thickness", type: "range", default: 2, min: 1, max: 6, step: 1, unit: "px" },
    { name: "--hug-speed", label: "Speed", type: "duration", default: 0.3, min: 0.1, max: 1, step: 0.05, unit: "s" },
  ],
  preview: { width: 300, height: 100, darkBg: false },
};

export default hoverUnderlineGrow;
