import type { Animation } from "../data/animations";

const scaleShadow: Animation = {
  slug: "scale-shadow",
  name: "Scale + Shadow",
  category: "hover",
  description: "Element grows with elevated shadow on hover. Customize scale and shadow intensity.",
  tags: ["hover", "scale", "shadow", "card", "lift"],
  css: `.scale-shadow {
  --ss-scale: 1.08;
  --ss-shadow: 20px;
  --ss-color: #10b981;
  --ss-speed: 0.3s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  background: var(--ss-color);
  border-radius: 16px;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  transition:
    transform var(--ss-speed) ease,
    box-shadow var(--ss-speed) ease;
  cursor: pointer;
}

.scale-shadow:hover {
  transform: scale(var(--ss-scale));
  box-shadow: 0 var(--ss-shadow) calc(var(--ss-shadow) * 2) rgba(0, 0, 0, 0.3);
}`,
  html: `<div class="scale-shadow">Hover</div>`,
  params: [
    { name: "--ss-color", label: "Color", type: "color", default: "#10b981" },
    { name: "--ss-scale", label: "Scale", type: "range", default: 1.08, min: 1.02, max: 1.3, step: 0.02 },
    { name: "--ss-shadow", label: "Shadow", type: "range", default: 20, min: 5, max: 40, step: 1, unit: "px" },
    { name: "--ss-speed", label: "Speed", type: "duration", default: 0.3, min: 0.1, max: 0.8, step: 0.05, unit: "s" },
  ],
  preview: { width: 300, height: 200, darkBg: true },
};

export default scaleShadow;
