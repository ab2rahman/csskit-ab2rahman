import type { Animation } from "../data/animations";

const exitSlideOut: Animation = {
  slug: "exit-slide-out",
  name: "Slide Out",
  category: "exit",
  description:
    "Slides out to the right with fade. Directional exit for list items, notifications, or dismissed cards.",
  tags: ["exit", "slide", "right", "directional", "notification", "list"],
  css: `.exit-slide-out {
  --eso-color: #f59e0b;
  --eso-speed: 0.4s;
  display: inline-block;
  padding: 14px 32px;
  border-radius: 10px;
  background: var(--eso-color);
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  font-family: system-ui, sans-serif;
  animation: eso-out var(--eso-speed) ease-in forwards;
}

@keyframes eso-out {
  0% { transform: translateX(0); opacity: 1; }
  100% { transform: translateX(60px); opacity: 0; }
}`,
  html: '<div class="exit-slide-out">Sliding...</div>',
  params: [
    { name: "--eso-color", label: "Color", type: "color", default: "#f59e0b" },
    { name: "--eso-speed", label: "Speed", type: "duration", default: 0.4, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 280, height: 120, darkBg: true },
};

export default exitSlideOut;
