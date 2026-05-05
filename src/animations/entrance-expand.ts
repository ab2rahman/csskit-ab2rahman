import type { Animation } from "../data/animations";

const entranceExpand: Animation = {
  slug: "entrance-expand",
  name: "Expand",
  category: "entrance",
  description:
    "Element expands from a center point outward. Clean reveal animation with smooth scaling.",
  tags: ["entrance", "expand", "scale", "reveal", "center", "grow"],
  css: `.entrance-expand {
  --ee-color: #8b5cf6;
  --ee-speed: 0.6s;
  width: 100px;
  height: 60px;
  background: var(--ee-color);
  border-radius: 12px;
  animation: ee-expand var(--ee-speed) cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  transform: scale(0);
}

@keyframes ee-expand {
  0% {
    transform: scale(0);
    opacity: 0;
    border-radius: 50%;
  }
  70% {
    border-radius: 20%;
  }
  100% {
    transform: scale(1);
    opacity: 1;
    border-radius: 12px;
  }
}`,
  html: '<div class="entrance-expand"></div>',
  params: [
    { name: "--ee-color", label: "Color", type: "color", default: "#8b5cf6" },
    { name: "--ee-speed", label: "Speed", type: "duration", default: 0.6, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default entranceExpand;
