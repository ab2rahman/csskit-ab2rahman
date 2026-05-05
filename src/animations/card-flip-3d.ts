import type { Animation } from "../data/animations";

const cardFlip3d: Animation = {
  slug: "card-flip-3d",
  name: "Card Flip 3D",
  category: "card",
  description:
    "Smooth 3D card flip reveal on hover. Front and back faces with perspective transform. Classic card interaction pattern.",
  tags: ["card", "flip", "3d", "hover", "reveal", "perspective"],
  css: `.card-flip-3d {
  --cf-radius: 14px;
  --cf-speed: 0.6s;
  perspective: 800px;
  width: 220px;
  height: 140px;
}

.card-flip-3d-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform var(--cf-speed) ease-in-out;
  transform-style: preserve-3d;
  border-radius: var(--cf-radius);
}

.card-flip-3d:hover .card-flip-3d-inner {
  transform: rotateY(180deg);
}

.card-flip-3d-front,
.card-flip-3d-back {
  position: absolute;
  inset: 0;
  border-radius: var(--cf-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.card-flip-3d-front {
  background: linear-gradient(135deg, #1e293b, #334155);
  color: #94a3b8;
  border: 1px solid #475569;
}

.card-flip-3d-back {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff;
  transform: rotateY(180deg);
}`,
  html: '<div class="card-flip-3d"><div class="card-flip-3d-inner"><div class="card-flip-3d-front">Hover me</div><div class="card-flip-3d-back">Flipped!</div></div></div>',
  params: [
    { name: "--cf-speed", label: "Speed", type: "duration", default: 0.6, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 200, darkBg: true },
};

export default cardFlip3d;
