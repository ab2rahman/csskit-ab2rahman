import type { Animation } from "../data/animations";

const cardGlowHover: Animation = {
  slug: "card-glow-hover",
  name: "Glow Hover",
  category: "card",
  description:
    "Soft glow appears behind card on hover. Neon backlight card effect with animated spread.",
  tags: ["card", "glow", "hover", "neon", "backlight", "soft"],
  css: `.card-glow-hover {
  --cgh-color: #8b5cf6;
  --cgh-speed: 0.4s;
  width: 160px;
  height: 120px;
  background: #1e1b4b;
  border-radius: 12px;
  padding: 16px;
  border: 1px solid rgba(139, 92, 246, 0.2);
  transition: box-shadow var(--cgh-speed) ease, border-color var(--cgh-speed) ease;
}

.card-glow-hover strong {
  display: block;
  font-size: 0.95rem;
  color: #ffffff;
  margin-bottom: 4px;
}

.card-glow-hover span {
  font-size: 0.8rem;
  color: #a78bfa;
}

.card-glow-hover:hover {
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2);
  border-color: rgba(139, 92, 246, 0.5);
}`,
  html: '<div class="card-glow-hover"><strong>Glow Card</strong><span>Hover for neon glow</span></div>',
  params: [
    { name: "--cgh-speed", label: "Speed", type: "duration", default: 0.4, min: 0.1, max: 1.5, step: 0.05, unit: "s" },
  ],
  preview: { width: 300, height: 180, darkBg: true },
};

export default cardGlowHover;
