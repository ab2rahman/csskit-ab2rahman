import type { Animation } from "../data/animations";

const cardTilt: Animation = {
  slug: "card-tilt",
  name: "Card Tilt",
  category: "card",
  description:
    "3D perspective tilt on hover with subtle scale. Modern card interaction that adds depth and polish to any card layout.",
  tags: ["card", "tilt", "3d", "perspective", "hover", "modern"],
  css: `.card-tilt {
  --ct-accent: #06b6d4;
  --ct-max-tilt: 12deg;
  --ct-speed: 0.4s;
  perspective: 600px;
  width: 260px;
}

.card-tilt-inner {
  padding: 28px 24px;
  border-radius: 16px;
  background: linear-gradient(135deg, #111827, #1f2937);
  border: 1px solid #374151;
  font-family: system-ui, sans-serif;
  color: #e2e8f0;
  transition: transform var(--ct-speed) ease, box-shadow var(--ct-speed) ease;
  transform-style: preserve-3d;
  cursor: pointer;
}

.card-tilt:hover .card-tilt-inner {
  transform: rotateY(calc(-1 * var(--ct-max-tilt))) rotateX(var(--ct-max-tilt)) scale(1.03);
  box-shadow: 12px 12px 30px rgba(0, 0, 0, 0.4), -2px -2px 20px rgba(6, 182, 212, 0.1);
}

.card-tilt-title {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 8px;
}

.card-tilt-desc {
  font-size: 12px;
  color: #9ca3af;
  line-height: 1.5;
}

.card-tilt-tag {
  display: inline-block;
  margin-top: 14px;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 600;
  background: rgba(6, 182, 212, 0.15);
  color: var(--ct-accent);
}`,
  html: '<div class="card-tilt"><div class="card-tilt-inner"><div class="card-tilt-title">Tilt Card</div><div class="card-tilt-desc">Hover to see the 3D perspective tilt with subtle scale and shadow effect.</div><span class="card-tilt-tag">hover me</span></div></div>',
  params: [
    { name: "--ct-accent", label: "Accent", type: "color", default: "#06b6d4" },
    { name: "--ct-speed", label: "Speed", type: "duration", default: 0.4, min: 0.1, max: 1, step: 0.05, unit: "s" },
  ],
  preview: { width: 340, height: 240, darkBg: true },
};

export default cardTilt;
