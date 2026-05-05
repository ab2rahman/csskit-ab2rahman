import type { Animation } from "../data/animations";

const exitFlipOut: Animation = {
  slug: "exit-flip-out",
  name: "Flip Out",
  category: "exit",
  description:
    "3D flip to back then disappear. Card-like exit animation with perspective transform for dramatic departures.",
  tags: ["exit", "flip", "3d", "perspective", "card", "disappear"],
  css: `.exit-flip-out {
  --efo-color: #8b5cf6;
  --efo-speed: 0.5s;
  display: inline-block;
  padding: 14px 32px;
  border-radius: 10px;
  background: var(--efo-color);
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  font-family: system-ui, sans-serif;
  animation: efo-flip var(--efo-speed) ease-in forwards;
  transform-origin: center top;
  perspective: 400px;
}

@keyframes efo-flip {
  0% { transform: rotateX(0); opacity: 1; }
  100% { transform: rotateX(90deg); opacity: 0; }
}`,
  html: '<div class="exit-flip-out">Flipping...</div>',
  params: [
    { name: "--efo-color", label: "Color", type: "color", default: "#8b5cf6" },
    { name: "--efo-speed", label: "Speed", type: "duration", default: 0.5, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 280, height: 120, darkBg: true },
};

export default exitFlipOut;
