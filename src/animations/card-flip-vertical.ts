import type { Animation } from "../data/animations";

const cardFlipVertical: Animation = {
  slug: "card-flip-vertical",
  name: "Vertical Flip",
  category: "card",
  description:
    "Card flips vertically to reveal back content. 3D vertical card flip with perspective on hover.",
  tags: ["card", "flip", "vertical", "3d", "perspective", "reveal"],
  css: `.card-flip-vertical {
  --cfv-color: #f97316;
  --cfv-speed: 0.6s;
  width: 140px;
  height: 100px;
  perspective: 600px;
  cursor: pointer;
}

.card-flip-vertical .cfv-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform var(--cfv-speed) ease;
}

.card-flip-vertical:hover .cfv-inner {
  transform: rotateX(180deg);
}

.card-flip-vertical .cfv-front,
.card-flip-vertical .cfv-back {
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

.card-flip-vertical .cfv-front {
  background: var(--cfv-color);
  color: #ffffff;
}

.card-flip-vertical .cfv-back {
  background: #1e293b;
  color: #ffffff;
  transform: rotateX(180deg);
}`,
  html: '<div class="card-flip-vertical"><div class="cfv-inner"><div class="cfv-front">Front</div><div class="cfv-back">Back</div></div></div>',
  params: [
    { name: "--cfv-color", label: "Color", type: "color", default: "#f97316" },
    { name: "--cfv-speed", label: "Speed", type: "duration", default: 0.6, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 180, darkBg: false },
};

export default cardFlipVertical;
