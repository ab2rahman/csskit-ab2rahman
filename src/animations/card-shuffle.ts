import type { Animation } from "../data/animations";

const cardShuffle: Animation = {
  slug: "card-shuffle",
  name: "Card Shuffle",
  category: "card",
  description:
    "Stacked cards that shuffle and swap positions on hover. Dynamic card group with depth-based movement.",
  tags: ["card", "shuffle", "swap", "hover", "stack", "dynamic"],
  css: `.card-shuffle {
  --csh-speed: 0.5s;
  position: relative;
  width: 220px;
  height: 140px;
}

.card-shuffle-card {
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
  transition: all var(--csh-speed) cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
  border: 1px solid rgba(255,255,255,0.1);
}

.card-shuffle-card:nth-child(1) {
  background: linear-gradient(135deg, #1e293b, #334155);
  color: #94a3b8;
  z-index: 3;
  top: 12px;
  left: 16px;
}

.card-shuffle-card:nth-child(2) {
  background: linear-gradient(135deg, #0f766e, #14b8a6);
  color: #ccfbf1;
  z-index: 2;
  top: 6px;
  left: 8px;
}

.card-shuffle-card:nth-child(3) {
  background: linear-gradient(135deg, #7c3aed, #a78bfa);
  color: #ede9fe;
  z-index: 1;
  top: 0;
  left: 0;
}

.card-shuffle:hover .card-shuffle-card:nth-child(1) {
  transform: translateX(-50px) rotate(-6deg);
  z-index: 1;
}

.card-shuffle:hover .card-shuffle-card:nth-child(2) {
  transform: translateY(-12px) scale(1.05);
  z-index: 3;
}

.card-shuffle:hover .card-shuffle-card:nth-child(3) {
  transform: translateX(50px) rotate(6deg);
  z-index: 2;
}`,
  html: '<div class="card-shuffle"><div class="card-shuffle-card">Card A</div><div class="card-shuffle-card">Card B</div><div class="card-shuffle-card">Card C</div></div>',
  params: [
    { name: "--csh-speed", label: "Speed", type: "duration", default: 0.5, min: 0.2, max: 1.5, step: 0.1, unit: "s" },
  ],
  preview: { width: 320, height: 200, darkBg: true },
};

export default cardShuffle;
