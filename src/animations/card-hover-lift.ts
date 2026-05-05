import type { Animation } from "../data/animations";

const cardHoverLift: Animation = {
  slug: "card-hover-lift",
  name: "Hover Lift",
  category: "card",
  description:
    "Card lifts up with enhanced shadow on hover. Classic 3D lift effect with smooth elevation transition.",
  tags: ["card", "hover", "lift", "shadow", "3d", "elevation"],
  css: `.card-hover-lift {
  --chl-color: #6366f1;
  --chl-speed: 0.3s;
  width: 160px;
  height: 120px;
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  cursor: pointer;
  transition: transform var(--chl-speed) ease, box-shadow var(--chl-speed) ease;
  border-top: 3px solid var(--chl-color);
}

.card-hover-lift::after {
  content: 'Hover to lift';
  display: block;
  font-size: 0.8rem;
  color: #94a3b8;
  margin-top: 8px;
}

.card-hover-lift strong {
  display: block;
  font-size: 0.95rem;
  color: #1e293b;
}

.card-hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}`,
  html: '<div class="card-hover-lift"><strong>Lift Card</strong></div>',
  params: [
    { name: "--chl-color", label: "Accent", type: "color", default: "#6366f1" },
    { name: "--chl-speed", label: "Speed", type: "duration", default: 0.3, min: 0.1, max: 1, step: 0.05, unit: "s" },
  ],
  preview: { width: 300, height: 180, darkBg: false },
};

export default cardHoverLift;
