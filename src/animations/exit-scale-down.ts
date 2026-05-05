import type { Animation } from "../data/animations";

const exitScaleDown: Animation = {
  slug: "exit-scale-down",
  name: "Scale Down",
  category: "exit",
  description:
    "Shrink to nothing with fade. Quick, clean exit animation for dismissed items or completed actions.",
  tags: ["exit", "scale", "shrink", "fade", "dismiss", "clean"],
  css: `.exit-scale-down {
  --esd-color: #ef4444;
  --esd-speed: 0.3s;
  display: inline-block;
  padding: 14px 32px;
  border-radius: 10px;
  background: var(--esd-color);
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  font-family: system-ui, sans-serif;
  animation: esd-down var(--esd-speed) ease-in forwards;
}

@keyframes esd-down {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0); opacity: 0; }
}`,
  html: '<div class="exit-scale-down">Removed</div>',
  params: [
    { name: "--esd-color", label: "Color", type: "color", default: "#ef4444" },
    { name: "--esd-speed", label: "Speed", type: "duration", default: 0.3, min: 0.1, max: 1.5, step: 0.1, unit: "s" },
  ],
  preview: { width: 280, height: 120, darkBg: true },
};

export default exitScaleDown;
