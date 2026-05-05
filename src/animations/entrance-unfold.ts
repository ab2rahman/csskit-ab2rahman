import type { Animation } from "../data/animations";

const entranceUnfold: Animation = {
  slug: "entrance-unfold",
  name: "Unfold",
  category: "entrance",
  description:
    "Element unfolds like a piece of paper opening up. 3D flip reveal animation with perspective.",
  tags: ["entrance", "unfold", "paper", "flip", "3d", "reveal"],
  css: `.entrance-unfold {
  --eu-color: #0ea5e9;
  --eu-speed: 0.8s;
  width: 120px;
  height: 80px;
  background: var(--eu-color);
  border-radius: 12px;
  perspective: 600px;
  opacity: 0;
  animation: eu-open var(--eu-speed) ease-out forwards;
}

@keyframes eu-open {
  0% {
    opacity: 0;
    transform: perspective(600px) rotateY(-90deg);
    transform-origin: left center;
  }
  100% {
    opacity: 1;
    transform: perspective(600px) rotateY(0deg);
    transform-origin: left center;
  }
}`,
  html: '<div class="entrance-unfold"></div>',
  params: [
    { name: "--eu-color", label: "Color", type: "color", default: "#0ea5e9" },
    { name: "--eu-speed", label: "Speed", type: "duration", default: 0.8, min: 0.3, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default entranceUnfold;
