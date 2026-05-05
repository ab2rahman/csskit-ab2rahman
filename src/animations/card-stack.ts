import type { Animation } from "../data/animations";

const cardStack: Animation = {
  slug: "card-stack",
  name: "Card Stack",
  category: "card",
  description:
    "Stacked cards that fan out on hover. Interactive card group with depth and layering. Great for galleries or feature showcases.",
  tags: ["card", "stack", "hover", "fan", "spread", "gallery"],
  css: `.card-stack {
  --cs-speed: 0.4s;
  position: relative;
  width: 200px;
  height: 130px;
}

.card-stack-card {
  position: absolute;
  width: 180px;
  height: 110px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 13px;
  transition: all var(--cs-speed) cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
  border: 1px solid rgba(255,255,255,0.1);
}

.card-stack-card:nth-child(1) {
  background: linear-gradient(135deg, #1e293b, #334155);
  color: #94a3b8;
  z-index: 1;
  top: 0;
  left: 0;
}

.card-stack-card:nth-child(2) {
  background: linear-gradient(135deg, #312e81, #4338ca);
  color: #c4b5fd;
  z-index: 2;
  top: 6px;
  left: 8px;
}

.card-stack-card:nth-child(3) {
  background: linear-gradient(135deg, #7c3aed, #6d28d9);
  color: #e9d5ff;
  z-index: 3;
  top: 12px;
  left: 16px;
}

.card-stack:hover .card-stack-card:nth-child(1) {
  transform: translateX(-40px) rotate(-8deg);
}

.card-stack:hover .card-stack-card:nth-child(2) {
  transform: translateY(-8px);
}

.card-stack:hover .card-stack-card:nth-child(3) {
  transform: translateX(40px) rotate(8deg);
}`,
  html: '<div class="card-stack"><div class="card-stack-card">Card 1</div><div class="card-stack-card">Card 2</div><div class="card-stack-card">Card 3</div></div>',
  params: [
    { name: "--cs-speed", label: "Speed", type: "duration", default: 0.4, min: 0.2, max: 1, step: 0.1, unit: "s" },
  ],
  preview: { width: 320, height: 200, darkBg: true },
};

export default cardStack;
