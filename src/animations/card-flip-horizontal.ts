import type { Animation } from "../data/animations";

const cardFlipHorizontal: Animation = {
  slug: "card-flip-horizontal",
  name: "Horizontal Flip",
  category: "card",
  description:
    "Card flips horizontally to reveal back content. 3D card flip with perspective transform on hover.",
  tags: ["card", "flip", "horizontal", "3d", "perspective", "reveal"],
  css: `.card-flip-horizontal {
  --cfh-color: #3b82f6;
  --cfh-speed: 0.6s;
  width: 140px;
  height: 100px;
  perspective: 600px;
  cursor: pointer;
}

.card-flip-horizontal .cfh-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform var(--cfh-speed) ease;
}

.card-flip-horizontal:hover .cfh-inner {
  transform: rotateY(180deg);
}

.card-flip-horizontal .cfh-front,
.card-flip-horizontal .cfh-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
}

.card-flip-horizontal .cfh-front {
  background: var(--cfh-color);
  color: #ffffff;
}

.card-flip-horizontal .cfh-back {
  background: #1e293b;
  color: #ffffff;
  transform: rotateY(180deg);
}`,
  html: '<div class="card-flip-horizontal"><div class="cfh-inner"><div class="cfh-front">Front</div><div class="cfh-back">Back</div></div></div>',
  params: [
    { name: "--cfh-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--cfh-speed", label: "Speed", type: "duration", default: 0.6, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 180, darkBg: false },
};

export default cardFlipHorizontal;
