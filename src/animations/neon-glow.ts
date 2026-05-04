import type { Animation } from "../data/animations";

const neonGlow: Animation = {
  slug: "neon-glow",
  name: "Neon Glow",
  category: "text",
  description: "Pulsing neon text glow effect. Customize color and intensity.",
  tags: ["text", "neon", "glow", "pulse", "light"],
  css: `.neon-glow {
  --neon-color: #0ff;
  --neon-speed: 2s;
  --neon-intensity: 20px;
  font-size: 3rem;
  font-weight: 900;
  color: var(--neon-color);
  text-shadow:
    0 0 7px var(--neon-color),
    0 0 10px var(--neon-color),
    0 0 calc(var(--neon-intensity)) var(--neon-color),
    0 0 calc(var(--neon-intensity) * 2) var(--neon-color),
    0 0 calc(var(--neon-intensity) * 3) var(--neon-color);
  animation: neon-pulse var(--neon-speed) ease-in-out infinite alternate;
}

@keyframes neon-pulse {
  from {
    text-shadow:
      0 0 4px var(--neon-color),
      0 0 8px var(--neon-color),
      0 0 calc(var(--neon-intensity) * 0.5) var(--neon-color);
    opacity: 0.8;
  }
  to {
    text-shadow:
      0 0 7px var(--neon-color),
      0 0 10px var(--neon-color),
      0 0 var(--neon-intensity) var(--neon-color),
      0 0 calc(var(--neon-intensity) * 2) var(--neon-color),
      0 0 calc(var(--neon-intensity) * 3) var(--neon-color);
    opacity: 1;
  }
}`,
  html: `<span class="neon-glow">NEON</span>`,
  params: [
    { name: "--neon-color", label: "Color", type: "color", default: "#0ff" },
    { name: "--neon-speed", label: "Speed", type: "duration", default: 2, min: 0.5, max: 5, step: 0.1, unit: "s" },
    { name: "--neon-intensity", label: "Intensity", type: "range", default: 20, min: 5, max: 40, step: 1, unit: "px" },
  ],
  preview: { width: 400, height: 180, darkBg: true },
};

export default neonGlow;
