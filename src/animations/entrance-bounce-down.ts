import type { Animation } from "../data/animations";

const entranceBounceDown: Animation = {
  slug: "entrance-bounce-down",
  name: "Bounce Down",
  category: "entrance",
  description:
    "Element drops from above with multiple bounces. Gravity-inspired entrance with realistic bounce physics.",
  tags: ["entrance", "bounce", "drop", "gravity", "fall", "physics"],
  css: `.entrance-bounce-down {
  --ebd-color: #ef4444;
  --ebd-speed: 1s;
  width: 80px;
  height: 80px;
  background: var(--ebd-color);
  border-radius: 16px;
  animation: ebd-drop var(--ebd-speed) cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
  opacity: 0;
}

@keyframes ebd-drop {
  0% {
    opacity: 0;
    transform: translateY(-200px);
  }
  30% {
    opacity: 1;
    transform: translateY(0);
  }
  45% {
    transform: translateY(-40px);
  }
  60% {
    transform: translateY(0);
  }
  72% {
    transform: translateY(-15px);
  }
  84% {
    transform: translateY(0);
  }
  92% {
    transform: translateY(-5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}`,
  html: '<div class="entrance-bounce-down"></div>',
  params: [
    { name: "--ebd-color", label: "Color", type: "color", default: "#ef4444" },
    { name: "--ebd-speed", label: "Speed", type: "duration", default: 1, min: 0.5, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 180, darkBg: false },
};

export default entranceBounceDown;
