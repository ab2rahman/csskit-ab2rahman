import type { Animation } from "../data/animations";

const entranceFlip: Animation = {
  slug: "entrance-flip",
  name: "Flip In",
  category: "entrance",
  description:
    "3D flip from back to front. Card-like entrance animation with perspective transform for dramatic reveals.",
  tags: ["entrance", "flip", "3d", "perspective", "card", "reveal"],
  css: `.entrance-flip {
  --ef-color: #3b82f6;
  --ef-speed: 0.6s;
  display: inline-block;
  padding: 14px 32px;
  border-radius: 10px;
  background: var(--ef-color);
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  font-family: system-ui, sans-serif;
  animation: ef-flip var(--ef-speed) ease-out both;
  transform-origin: center bottom;
  perspective: 400px;
}

@keyframes ef-flip {
  0% { transform: rotateX(90deg); opacity: 0; }
  40% { transform: rotateX(-10deg); }
  70% { transform: rotateX(5deg); }
  100% { transform: rotateX(0); opacity: 1; }
}`,
  html: '<div class="entrance-flip">Flip In</div>',
  params: [
    { name: "--ef-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--ef-speed", label: "Speed", type: "duration", default: 0.6, min: 0.3, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 280, height: 120, darkBg: true },
};

export default entranceFlip;
