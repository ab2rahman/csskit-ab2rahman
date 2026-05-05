import type { Animation } from "../data/animations";

const cardGlass: Animation = {
  slug: "card-glass",
  name: "Card Glass",
  category: "card",
  description:
    "Glassmorphism card with hover lift and glow. Frosted glass effect with border highlight and smooth elevation on hover.",
  tags: ["card", "glass", "glassmorphism", "hover", "frosted", "modern"],
  css: `.card-glass {
  --cg-accent: #06b6d4;
  --cg-speed: 0.35s;
  width: 240px;
  padding: 24px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-family: system-ui, sans-serif;
  color: #e2e8f0;
  transition: all var(--cg-speed) ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.card-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 1px;
  background: linear-gradient(135deg, transparent 40%, var(--cg-accent));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity var(--cg-speed) ease;
}

.card-glass:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px -8px rgba(6, 182, 212, 0.25);
  border-color: rgba(255, 255, 255, 0.18);
}

.card-glass:hover::before {
  opacity: 1;
}

.card-glass-title {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 6px;
}

.card-glass-desc {
  font-size: 12px;
  color: #94a3b8;
  line-height: 1.5;
}

.card-glass-tag {
  display: inline-block;
  margin-top: 12px;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 600;
  background: rgba(6, 182, 212, 0.15);
  color: var(--cg-accent);
}`,
  html: '<div class="card-glass"><div class="card-glass-title">Glass Card</div><div class="card-glass-desc">Hover to see the lift and glow border effect with smooth elevation.</div><span class="card-glass-tag">hover me</span></div>',
  params: [
    { name: "--cg-accent", label: "Accent Color", type: "color", default: "#06b6d4" },
    { name: "--cg-speed", label: "Speed", type: "duration", default: 0.35, min: 0.1, max: 1, step: 0.05, unit: "s" },
  ],
  preview: { width: 340, height: 220, darkBg: true },
};

export default cardGlass;
