import type { Animation } from "../data/animations";

const exitFadeDown: Animation = {
  slug: "exit-fade-down",
  name: "Fade Down",
  category: "exit",
  description:
    "Fade out while sliding down. Smooth exit animation for notifications, modals, or dismissed elements.",
  tags: ["exit", "fade", "down", "slide", "dismiss", "notification"],
  css: `.exit-fade-down {
  --efd-color: #3b82f6;
  --efd-speed: 0.4s;
  display: inline-block;
  padding: 14px 32px;
  border-radius: 10px;
  background: var(--efd-color);
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  font-family: system-ui, sans-serif;
  animation: efd-out var(--efd-speed) ease-in forwards;
}

@keyframes efd-out {
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(20px); }
}`,
  html: '<div class="exit-fade-down">Dismissing...</div>',
  params: [
    { name: "--efd-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--efd-speed", label: "Speed", type: "duration", default: 0.4, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 280, height: 120, darkBg: true },
};

export default exitFadeDown;
