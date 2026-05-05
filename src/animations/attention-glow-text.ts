import type { Animation } from "../data/animations";

const attentionGlowText: Animation = {
  slug: "attention-glow-text",
  name: "Glow Text",
  category: "attention",
  description:
    "Text glows with pulsing intensity. Neon-style attention animation with soft light emanation.",
  tags: ["attention", "glow", "text", "neon", "pulse", "light"],
  css: `.attention-glow-text {
  --agt-color: #f43f5e;
  --agt-speed: 2s;
  font-size: 2rem;
  font-weight: 800;
  color: var(--agt-color);
  animation: agt-glow var(--agt-speed) ease-in-out infinite alternate;
}

@keyframes agt-glow {
  0% {
    text-shadow: 0 0 4px var(--agt-color);
    opacity: 0.8;
  }
  100% {
    text-shadow: 0 0 10px var(--agt-color), 0 0 20px var(--agt-color), 0 0 40px var(--agt-color);
    opacity: 1;
  }
}`,
  html: '<div class="attention-glow-text">GLOW</div>',
  params: [
    { name: "--agt-color", label: "Color", type: "color", default: "#f43f5e" },
    { name: "--agt-speed", label: "Speed", type: "duration", default: 2, min: 0.5, max: 5, step: 0.25, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: true },
};

export default attentionGlowText;
