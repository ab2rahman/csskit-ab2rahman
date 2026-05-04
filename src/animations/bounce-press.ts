import type { Animation } from "../data/animations";

const bouncePress: Animation = {
  slug: "bounce-press",
  name: "Bounce Press",
  category: "button",
  description: "Button bounces down on press with satisfying spring effect.",
  tags: ["button", "bounce", "press", "spring", "interactive"],
  css: `.bounce-press {
  --bp-color: #f43f5e;
  --bp-scale: 0.92;
  --bp-speed: 0.15s;
  display: inline-block;
  padding: 14px 36px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: var(--bp-color);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform var(--bp-speed) cubic-bezier(0.34, 1.56, 0.64, 1);
}

.bounce-press:active {
  transform: scale(var(--bp-scale));
}`,
  html: `<button class="bounce-press">Press Me</button>`,
  params: [
    { name: "--bp-color", label: "Color", type: "color", default: "#f43f5e" },
    { name: "--bp-scale", label: "Press Scale", type: "range", default: 0.92, min: 0.8, max: 0.97, step: 0.01 },
    { name: "--bp-speed", label: "Speed", type: "duration", default: 0.15, min: 0.05, max: 0.3, step: 0.05, unit: "s" },
  ],
  preview: { width: 300, height: 150, darkBg: true },
};

export default bouncePress;
