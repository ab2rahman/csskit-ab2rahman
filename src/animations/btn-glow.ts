import type { Animation } from "../data/animations";

const btnGlow: Animation = {
  slug: "btn-glow",
  name: "Button Glow",
  category: "button",
  description:
    "Pulsing outer glow on hover. Neon-style button effect with animated box-shadow for a striking interactive feel.",
  tags: ["button", "glow", "neon", "pulse", "hover", "shadow"],
  css: `.btn-glow {
  --bg-color: #3b82f6;
  --bg-speed: 1.5s;
  display: inline-block;
  padding: 12px 28px;
  border-radius: 8px;
  background: var(--bg-color);
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  font-family: system-ui, sans-serif;
  cursor: pointer;
  border: none;
  transition: box-shadow 0.2s ease;
}

.btn-glow:hover {
  animation: bg-glow var(--bg-speed) ease-in-out infinite alternate;
}

@keyframes bg-glow {
  from { box-shadow: 0 0 5px var(--bg-color), 0 0 15px rgba(59, 130, 246, 0.3); }
  to { box-shadow: 0 0 15px var(--bg-color), 0 0 40px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.2); }
}`,
  html: '<div class="btn-glow">Glow</div>',
  params: [
    { name: "--bg-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--bg-speed", label: "Speed", type: "duration", default: 1.5, min: 0.5, max: 4, step: 0.25, unit: "s" },
  ],
  preview: { width: 250, height: 120, darkBg: true },
};

export default btnGlow;
