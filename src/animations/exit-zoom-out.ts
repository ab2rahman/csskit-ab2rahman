import type { Animation } from "../data/animations";

const exitZoomOut: Animation = {
  slug: "exit-zoom-out",
  name: "Zoom Out",
  category: "exit",
  description:
    "Scale up and fade out. Reverse zoom effect that creates an expanding, dissolving departure.",
  tags: ["exit", "zoom", "scale", "expand", "dissolve", "fade"],
  css: `.exit-zoom-out {
  --ezo-color: #10b981;
  --ezo-speed: 0.4s;
  display: inline-block;
  padding: 14px 32px;
  border-radius: 10px;
  background: var(--ezo-color);
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  font-family: system-ui, sans-serif;
  animation: ezo-out var(--ezo-speed) ease-in forwards;
}

@keyframes ezo-out {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
}`,
  html: '<div class="exit-zoom-out">Zooming...</div>',
  params: [
    { name: "--ezo-color", label: "Color", type: "color", default: "#10b981" },
    { name: "--ezo-speed", label: "Speed", type: "duration", default: 0.4, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 280, height: 120, darkBg: true },
};

export default exitZoomOut;
