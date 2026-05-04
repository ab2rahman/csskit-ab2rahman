import type { Animation } from "../data/animations";

const fillUp: Animation = {
  slug: "fill-up",
  name: "Fill Up",
  category: "hover",
  description: "Background fills from bottom on hover. Customize color and direction.",
  tags: ["hover", "fill", "background", "button", "transition"],
  css: `.fill-up {
  --fill-color: #6366f1;
  --fill-speed: 0.4s;
  position: relative;
  display: inline-block;
  padding: 12px 32px;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--fill-color);
  border: 2px solid var(--fill-color);
  background: transparent;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;
  transition: color var(--fill-speed) ease;
}

.fill-up::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: var(--fill-color);
  z-index: -1;
  transition: height var(--fill-speed) ease;
}

.fill-up:hover {
  color: white;
}

.fill-up:hover::before {
  height: 100%;
}`,
  html: `<button class="fill-up">Hover Me</button>`,
  params: [
    { name: "--fill-color", label: "Color", type: "color", default: "#6366f1" },
    { name: "--fill-speed", label: "Speed", type: "duration", default: 0.4, min: 0.1, max: 1, step: 0.05, unit: "s" },
  ],
  preview: { width: 300, height: 150, darkBg: true },
};

export default fillUp;
