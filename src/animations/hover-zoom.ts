import type { Animation } from "../data/animations";

const hoverZoom: Animation = {
  slug: "hover-zoom",
  name: "Zoom Rotate",
  category: "hover",
  description:
    "Smooth zoom with a slight rotation on hover. Dynamic hover effect that adds energy and movement to any element.",
  tags: ["hover", "zoom", "rotate", "scale", "dynamic", "energy"],
  css: `.hover-zoom {
  --hz-color: #1e293b;
  --hz-scale: 1.12;
  --hz-rotate: 3deg;
  --hz-speed: 0.3s;
  width: 200px;
  height: 140px;
  border-radius: 14px;
  background: var(--hz-color);
  border: 1px solid #374151;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #94a3b8;
  cursor: pointer;
  transition: transform var(--hz-speed) ease, box-shadow var(--hz-speed) ease, border-color var(--hz-speed) ease;
}

.hover-zoom:hover {
  transform: scale(var(--hz-scale)) rotate(var(--hz-rotate));
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  border-color: #3b82f6;
}`,
  html: '<div class="hover-zoom">Hover me</div>',
  params: [
    { name: "--hz-color", label: "BG Color", type: "color", default: "#1e293b" },
    { name: "--hz-scale", label: "Scale", type: "range", default: 1.12, min: 1.05, max: 1.3, step: 0.01 },
    { name: "--hz-speed", label: "Speed", type: "duration", default: 0.3, min: 0.1, max: 1, step: 0.05, unit: "s" },
  ],
  preview: { width: 300, height: 200, darkBg: true },
};

export default hoverZoom;
