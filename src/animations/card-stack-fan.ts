import type { Animation } from "../data/animations";

const cardStackFan: Animation = {
  slug: "card-stack-fan",
  name: "Stack Fan",
  category: "card",
  description:
    "Stacked cards fan out on hover. Playing card spread effect with rotation and offset animation.",
  tags: ["card", "stack", "fan", "spread", "playing", "rotate"],
  css: `.card-stack-fan {
  --csf-speed: 0.5s;
  position: relative;
  width: 120px;
  height: 90px;
}

.card-stack-fan .csf-card {
  position: absolute;
  width: 120px;
  height: 90px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  color: #ffffff;
  transition: transform var(--csf-speed) ease, box-shadow var(--csf-speed) ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.card-stack-fan .csf-card:nth-child(1) {
  background: #ef4444;
  z-index: 3;
}

.card-stack-fan .csf-card:nth-child(2) {
  background: #3b82f6;
  z-index: 2;
  top: 4px;
  left: 4px;
}

.card-stack-fan .csf-card:nth-child(3) {
  background: #10b981;
  z-index: 1;
  top: 8px;
  left: 8px;
}

.card-stack-fan:hover .csf-card:nth-child(1) {
  transform: translateX(-20px) rotate(-8deg);
}

.card-stack-fan:hover .csf-card:nth-child(2) {
  transform: translateY(-4px);
}

.card-stack-fan:hover .csf-card:nth-child(3) {
  transform: translateX(20px) rotate(8deg);
}`,
  html: '<div class="card-stack-fan"><div class="csf-card">A</div><div class="csf-card">B</div><div class="csf-card">C</div></div>',
  params: [
    { name: "--csf-speed", label: "Speed", type: "duration", default: 0.5, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 180, darkBg: false },
};

export default cardStackFan;
