import type { Animation } from "../data/animations";

const entranceRotateIn: Animation = {
  slug: "entrance-rotate-in",
  name: "Rotate In",
  category: "entrance",
  description:
    "Element rotates while appearing from a tilted angle. Spinning entrance animation with perspective.",
  tags: ["entrance", "rotate", "spin", "perspective", "tilt", "appear"],
  css: `.entrance-rotate-in {
  --eri-color: #ec4899;
  --eri-speed: 0.8s;
  width: 80px;
  height: 80px;
  background: var(--eri-color);
  border-radius: 16px;
  animation: eri-spin var(--eri-speed) cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  opacity: 0;
}

@keyframes eri-spin {
  0% {
    opacity: 0;
    transform: rotate(-200deg) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
}`,
  html: '<div class="entrance-rotate-in"></div>',
  params: [
    { name: "--eri-color", label: "Color", type: "color", default: "#ec4899" },
    { name: "--eri-speed", label: "Speed", type: "duration", default: 0.8, min: 0.3, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default entranceRotateIn;
