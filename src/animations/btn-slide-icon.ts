import type { Animation } from "../data/animations";

const btnSlideIcon: Animation = {
  slug: "btn-slide-icon",
  name: "Slide Icon",
  category: "button",
  description:
    "Icon slides in from the side on hover. Button with animated icon entrance effect.",
  tags: ["button", "slide", "icon", "arrow", "hover", "entrance"],
  css: `.btn-slide-icon {
  --bsi-color: #1e293b;
  --bsi-accent: #3b82f6;
  --bsi-speed: 0.3s;
  width: 140px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  background: var(--bsi-color);
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  transition: gap var(--bsi-speed) ease, padding var(--bsi-speed) ease;
}

.btn-slide-icon .bsi-arrow {
  display: inline-block;
  transform: translateX(-20px);
  opacity: 0;
  transition: transform var(--bsi-speed) ease, opacity var(--bsi-speed) ease;
  color: var(--bsi-accent);
  font-weight: bold;
}

.btn-slide-icon:hover .bsi-arrow {
  transform: translateX(0);
  opacity: 1;
}

.btn-slide-icon:hover {
  gap: 8px;
}`,
  html: '<div class="btn-slide-icon">Explore <span class="bsi-arrow">→</span></div>',
  params: [
    { name: "--bsi-color", label: "Bg Color", type: "color", default: "#1e293b" },
    { name: "--bsi-accent", label: "Icon Color", type: "color", default: "#3b82f6" },
    { name: "--bsi-speed", label: "Speed", type: "duration", default: 0.3, min: 0.1, max: 1, step: 0.05, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: false },
};

export default btnSlideIcon;
