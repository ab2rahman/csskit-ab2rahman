import type { Animation } from "../data/animations";

const hoverColorShift: Animation = {
  slug: "hover-color-shift",
  name: "Color Shift",
  category: "hover",
  description:
    "Background color shifts through the hue spectrum on hover. Smooth rainbow transition effect.",
  tags: ["hover", "color", "shift", "hue", "rainbow", "transition"],
  css: `.hover-color-shift {
  --hcs-speed: 0.6s;
  width: 140px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  background: #3b82f6;
  border-radius: 10px;
  cursor: pointer;
  transition: filter var(--hcs-speed) ease, background var(--hcs-speed) ease;
}

.hover-color-shift:hover {
  filter: hue-rotate(120deg);
  background: #3b82f6;
}`,
  html: '<div class="hover-color-shift">Shift</div>',
  params: [
    { name: "--hcs-speed", label: "Speed", type: "duration", default: 0.6, min: 0.2, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: false },
};

export default hoverColorShift;
