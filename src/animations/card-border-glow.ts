import type { Animation } from "../data/animations";

const cardBorderGlow: Animation = {
  slug: "card-border-glow",
  name: "Card Border Glow",
  category: "card",
  description:
    "Animated rotating border glow on card. Conic gradient border that spins continuously for a striking visual effect.",
  tags: ["card", "border", "glow", "rotate", "gradient", "animated"],
  css: `.card-border-glow {
  --cbg-color1: #3b82f6;
  --cbg-color2: #8b5cf6;
  --cbg-speed: 3s;
  position: relative;
  width: 260px;
  padding: 24px;
  border-radius: 16px;
  background: #111827;
  font-family: system-ui, sans-serif;
  color: #e2e8f0;
  overflow: hidden;
  cursor: pointer;
}

.card-border-glow::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 18px;
  background: conic-gradient(from 0deg, var(--cbg-color1), var(--cbg-color2), var(--cbg-color1));
  animation: border-spin var(--cbg-speed) linear infinite;
  z-index: -1;
}

.card-border-glow::after {
  content: '';
  position: absolute;
  inset: 1px;
  border-radius: 15px;
  background: #111827;
  z-index: -1;
}

@keyframes border-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.card-border-glow-title {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 8px;
}

.card-border-glow-desc {
  font-size: 12px;
  color: #9ca3af;
  line-height: 1.5;
}

.card-border-glow-tag {
  display: inline-block;
  margin-top: 12px;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 600;
  background: rgba(139, 92, 246, 0.15);
  color: var(--cbg-color2);
}`,
  html: '<div class="card-border-glow"><div class="card-border-glow-title">Glow Border</div><div class="card-border-glow-desc">Rotating conic gradient border animation that spins continuously.</div><span class="card-border-glow-tag">animated</span></div>',
  params: [
    { name: "--cbg-color1", label: "Color 1", type: "color", default: "#3b82f6" },
    { name: "--cbg-color2", label: "Color 2", type: "color", default: "#8b5cf6" },
    { name: "--cbg-speed", label: "Speed", type: "duration", default: 3, min: 1, max: 8, step: 0.5, unit: "s" },
  ],
  preview: { width: 340, height: 220, darkBg: true },
};

export default cardBorderGlow;
