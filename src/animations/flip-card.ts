import type { Animation } from "../data/animations";

const flipCard: Animation = {
  slug: "flip-card",
  name: "Flip Card",
  category: "hover",
  description: "3D card flip on hover with customizable front and back content.",
  tags: ["hover", "3d", "flip", "card", "rotate"],
  css: `.flip-card {
  --flip-speed: 0.6s;
  --flip-bg-front: #6366f1;
  --flip-bg-back: #8b5cf6;
  perspective: 800px;
  width: 200px;
  height: 140px;
  cursor: pointer;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform var(--flip-speed);
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: white;
  font-size: 1.1rem;
}

.flip-card-front {
  background: var(--flip-bg-front);
}

.flip-card-back {
  background: var(--flip-bg-back);
  transform: rotateY(180deg);
}`,
  html: `<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">Front</div>
    <div class="flip-card-back">Back</div>
  </div>
</div>`,
  params: [
    { name: "--flip-speed", label: "Speed", type: "duration", default: 0.6, min: 0.2, max: 1.5, step: 0.1, unit: "s" },
    { name: "--flip-bg-front", label: "Front Color", type: "color", default: "#6366f1" },
    { name: "--flip-bg-back", label: "Back Color", type: "color", default: "#8b5cf6" },
  ],
  preview: { width: 300, height: 220, darkBg: true },
};

export default flipCard;
