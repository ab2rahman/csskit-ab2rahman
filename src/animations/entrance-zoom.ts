import type { Animation } from "../data/animations";

const entranceZoom: Animation = {
  slug: "entrance-zoom",
  name: "Zoom In",
  category: "entrance",
  description:
    "Scale from zero to full size with overshoot bounce. Energetic entrance with spring-like bounce at the end.",
  tags: ["entrance", "zoom", "scale", "spring", "bounce", "energetic"],
  css: `.entrance-zoom {
  --ez-color: #f59e0b;
  --ez-speed: 0.5s;
  display: inline-block;
  padding: 14px 32px;
  border-radius: 10px;
  background: var(--ez-color);
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  font-family: system-ui, sans-serif;
  animation: ez-zoom var(--ez-speed) cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

@keyframes ez-zoom {
  0% { transform: scale(0); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}`,
  html: '<div class="entrance-zoom">Zoom!</div>',
  params: [
    { name: "--ez-color", label: "Color", type: "color", default: "#f59e0b" },
    { name: "--ez-speed", label: "Speed", type: "duration", default: 0.5, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 280, height: 120, darkBg: true },
};

export default entranceZoom;
