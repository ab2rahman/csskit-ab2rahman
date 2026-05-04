import type { Animation } from "../data/animations";

const bounceIn: Animation = {
  slug: "bounce-in",
  name: "Bounce In",
  category: "entrance",
  description: "Bouncy entrance with overshoot. Customize scale and bounce.",
  tags: ["entrance", "bounce", "overshoot", "spring", "fun"],
  css: `.bounce-in {
  --bi-scale: 1;
  --bi-speed: 0.8s;
  --bi-color: #fb923c;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  background: var(--bi-color);
  border-radius: 16px;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  animation: bi-enter var(--bi-speed) cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  transform: scale(0);
}

@keyframes bi-enter {
  0% { transform: scale(0); }
  60% { transform: scale(calc(var(--bi-scale) * 1.1)); }
  80% { transform: scale(calc(var(--bi-scale) * 0.95)); }
  100% { transform: scale(var(--bi-scale)); }
}`,
  html: `<div class="bounce-in">Bounce!</div>`,
  params: [
    { name: "--bi-color", label: "Color", type: "color", default: "#fb923c" },
    { name: "--bi-scale", label: "Scale", type: "range", default: 1, min: 0.5, max: 1.5, step: 0.1 },
    { name: "--bi-speed", label: "Speed", type: "duration", default: 0.8, min: 0.3, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 200, darkBg: true },
};

export default bounceIn;
