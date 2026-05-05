import type { Animation } from "../data/animations";

const hoverBackdrop: Animation = {
  slug: "hover-backdrop",
  name: "Backdrop",
  category: "hover",
  description:
    "Background fades in behind the element on hover. Soft overlay effect with smooth color transition.",
  tags: ["hover", "backdrop", "background", "overlay", "fade", "soft"],
  css: `.hover-backdrop {
  --hbd-color: rgba(59, 130, 246, 0.15);
  --hbd-speed: 0.3s;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #334155;
  cursor: pointer;
  transition: background var(--hbd-speed) ease, color var(--hbd-speed) ease;
}

.hover-backdrop:hover {
  background: var(--hbd-color);
  color: #3b82f6;
}`,
  html: '<div class="hover-backdrop">Hover for backdrop</div>',
  params: [
    { name: "--hbd-speed", label: "Speed", type: "duration", default: 0.3, min: 0.1, max: 1, step: 0.05, unit: "s" },
  ],
  preview: { width: 300, height: 100, darkBg: false },
};

export default hoverBackdrop;
