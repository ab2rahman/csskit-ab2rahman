import type { Animation } from "../data/animations";

const textRetro: Animation = {
  slug: "text-retro",
  name: "Retro Flicker",
  category: "text",
  description:
    "Neon sign flicker with random opacity changes. Vintage neon sign effect that brings a retro feel to headings.",
  tags: ["text", "retro", "neon", "flicker", "vintage", "sign"],
  css: `.text-retro {
  --tr-color: #fbbf24;
  --tr-speed: 3s;
  font-family: 'Courier New', monospace;
  font-size: 36px;
  font-weight: 700;
  color: var(--tr-color);
  text-shadow: 0 0 10px var(--tr-color), 0 0 20px var(--tr-color), 0 0 40px var(--tr-color);
  animation: flicker var(--tr-speed) infinite;
  letter-spacing: 4px;
  text-transform: uppercase;
}

@keyframes flicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    opacity: 1;
    text-shadow: 0 0 10px var(--tr-color), 0 0 20px var(--tr-color), 0 0 40px var(--tr-color);
  }
  20%, 24%, 55% {
    opacity: 0.4;
    text-shadow: none;
  }
}`,
  html: '<div class="text-retro">Open</div>',
  params: [
    { name: "--tr-color", label: "Color", type: "color", default: "#fbbf24" },
    { name: "--tr-speed", label: "Speed", type: "duration", default: 3, min: 1, max: 8, step: 0.5, unit: "s" },
  ],
  preview: { width: 350, height: 150, darkBg: true },
};

export default textRetro;
