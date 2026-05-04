import type { Animation } from "../data/animations";

const borderDraw: Animation = {
  slug: "border-draw",
  name: "Border Draw",
  category: "hover",
  description: "Border draws itself on hover with customizable color and speed.",
  tags: ["hover", "border", "draw", "stroke", "outline"],
  css: `.border-draw {
  --bd-color: #ec4899;
  --bd-width: 3px;
  --bd-speed: 0.4s;
  position: relative;
  display: inline-block;
  padding: 14px 36px;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
}

.border-draw::before,
.border-draw::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: var(--bd-width) solid transparent;
  box-sizing: border-box;
}

.border-draw::before {
  top: 0;
  left: 0;
}

.border-draw::after {
  bottom: 0;
  right: 0;
}

.border-draw:hover::before,
.border-draw:hover::after {
  width: 100%;
  height: 100%;
}

.border-draw:hover::before {
  border-top-color: var(--bd-color);
  border-right-color: var(--bd-color);
  transition:
    width var(--bd-speed) ease,
    height var(--bd-speed) ease var(--bd-speed);
}

.border-draw:hover::after {
  border-bottom-color: var(--bd-color);
  border-left-color: var(--bd-color);
  transition:
    width var(--bd-speed) ease var(--bd-speed),
    height var(--bd-speed) ease;
}`,
  html: `<span class="border-draw">Hover Draw</span>`,
  params: [
    { name: "--bd-color", label: "Color", type: "color", default: "#ec4899" },
    { name: "--bd-width", label: "Width", type: "range", default: 3, min: 1, max: 6, step: 1, unit: "px" },
    { name: "--bd-speed", label: "Speed", type: "duration", default: 0.4, min: 0.1, max: 1, step: 0.05, unit: "s" },
  ],
  preview: { width: 300, height: 150, darkBg: true },
};

export default borderDraw;
