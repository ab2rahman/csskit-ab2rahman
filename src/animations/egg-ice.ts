import type { Animation } from "../data/animations";

const EggIce: Animation = {
  slug: "egg-ice",
  name: "Ice Egg",
  category: "pixel",
  description:
    "Frozen ice elemental egg with crystalline shimmer",
  tags: ["pixel", "egg", "ice", "monster-taming", "pixel-art", "box-shadow", "element"],
  css: `.EggIce {
  --ice-speed: 1.5s;
  --ice-scale: 3;
  --ice-glow: #06b6d4;
  width: 1px;
  height: 1px;
  position: relative;
  left: -28px;
  top: -20px;
  transform: scale(var(--ice-scale));
  filter: drop-shadow(0 0 4px var(--ice-glow));
  animation: ice-hatch var(--ice-speed) ease-in-out infinite;
}

@keyframes ice-hatch {
  0%, 70%, 100% {
    box-shadow: 4px 0px #a5f3fc, 5px 0px #a5f3fc, 6px 0px #a5f3fc, 7px 0px #a5f3fc, 3px 1px #a5f3fc, 4px 1px #a5f3fc, 5px 1px #a5f3fc, 6px 1px #a5f3fc, 7px 1px #a5f3fc, 8px 1px #a5f3fc, 2px 2px #06b6d4, 3px 2px #06b6d4, 4px 2px #06b6d4, 5px 2px #06b6d4, 6px 2px #06b6d4, 7px 2px #06b6d4, 8px 2px #06b6d4, 9px 2px #06b6d4, 1px 3px #06b6d4, 2px 3px #06b6d4, 3px 3px #06b6d4, 4px 3px #06b6d4, 5px 3px #06b6d4, 6px 3px #06b6d4, 7px 3px #06b6d4, 8px 3px #06b6d4, 9px 3px #06b6d4, 10px 3px #06b6d4, 1px 4px #06b6d4, 2px 4px #06b6d4, 3px 4px #06b6d4, 4px 4px #06b6d4, 5px 4px #06b6d4, 6px 4px #06b6d4, 7px 4px #06b6d4, 8px 4px #06b6d4, 9px 4px #06b6d4, 10px 4px #06b6d4, 1px 5px #06b6d4, 2px 5px #06b6d4, 3px 5px #06b6d4, 4px 5px #06b6d4, 5px 5px #06b6d4, 6px 5px #06b6d4, 7px 5px #06b6d4, 8px 5px #06b6d4, 9px 5px #06b6d4, 10px 5px #06b6d4, 2px 6px #0891b2, 3px 6px #0891b2, 4px 6px #0891b2, 5px 6px #0891b2, 6px 6px #0891b2, 7px 6px #0891b2, 8px 6px #0891b2, 9px 6px #0891b2, 3px 7px #0891b2, 4px 7px #0891b2, 5px 7px #0891b2, 6px 7px #0891b2, 7px 7px #0891b2, 8px 7px #0891b2;
  }
  10% {
    transform: scale(var(--ice-scale)) rotate(5deg);
  }
  20% {
    transform: scale(var(--ice-scale)) rotate(-5deg);
  }
  30% {
    transform: scale(var(--ice-scale)) rotate(3deg);
  }
  40% {
    transform: scale(var(--ice-scale)) rotate(-3deg);
  }
  50% {
    box-shadow: 4px 0px #ffffff, 6px 0px #ffffff, 7px 0px #a5f3fc, 3px 1px #ffffff, 4px 1px #ffffff, 6px 1px #ffffff, 7px 1px #a5f3fc, 8px 1px #a5f3fc, 9px 1px #a5f3fc, 2px 2px #06b6d4, 4px 2px #06b6d4, 5px 2px #06b6d4, 6px 2px #06b6d4, 7px 2px #06b6d4, 8px 2px #06b6d4, 9px 2px #06b6d4, 1px 3px #06b6d4, 2px 3px #06b6d4, 3px 3px #06b6d4, 4px 3px #06b6d4, 5px 3px #06b6d4, 6px 3px #06b6d4, 7px 3px #06b6d4, 8px 3px #06b6d4, 9px 3px #06b6d4, 10px 3px #06b6d4, 1px 4px #06b6d4, 2px 4px #06b6d4, 3px 4px #06b6d4, 4px 4px #06b6d4, 5px 4px #06b6d4, 6px 4px #06b6d4, 7px 4px #06b6d4, 8px 4px #06b6d4, 9px 4px #06b6d4, 10px 4px #06b6d4, 1px 5px #06b6d4, 2px 5px #06b6d4, 3px 5px #06b6d4, 4px 5px #06b6d4, 5px 5px #06b6d4, 6px 5px #06b6d4, 7px 5px #06b6d4, 8px 5px #06b6d4, 9px 5px #06b6d4, 10px 5px #06b6d4, 2px 6px #0891b2, 3px 6px #0891b2, 4px 6px #0891b2, 5px 6px #0891b2, 6px 6px #0891b2, 7px 6px #0891b2, 8px 6px #0891b2, 9px 6px #0891b2, 3px 7px #0891b2, 4px 7px #0891b2, 5px 7px #0891b2, 6px 7px #0891b2, 7px 7px #0891b2, 8px 7px #0891b2;
    filter: drop-shadow(0 0 12px var(--ice-glow));
    transform: scale(var(--ice-scale)) rotate(0deg) scale(1.05);
  }
  60% {
    box-shadow: 4px 0px #a5f3fc, 5px 0px #a5f3fc, 6px 0px #a5f3fc, 7px 0px #a5f3fc, 3px 1px #a5f3fc, 4px 1px #a5f3fc, 5px 1px #a5f3fc, 6px 1px #a5f3fc, 7px 1px #a5f3fc, 8px 1px #a5f3fc, 2px 2px #06b6d4, 3px 2px #06b6d4, 4px 2px #06b6d4, 5px 2px #06b6d4, 6px 2px #06b6d4, 7px 2px #06b6d4, 8px 2px #06b6d4, 9px 2px #06b6d4, 1px 3px #06b6d4, 2px 3px #06b6d4, 3px 3px #06b6d4, 4px 3px #06b6d4, 5px 3px #06b6d4, 6px 3px #06b6d4, 7px 3px #06b6d4, 8px 3px #06b6d4, 9px 3px #06b6d4, 10px 3px #06b6d4, 1px 4px #06b6d4, 2px 4px #06b6d4, 3px 4px #06b6d4, 4px 4px #06b6d4, 5px 4px #06b6d4, 6px 4px #06b6d4, 7px 4px #06b6d4, 8px 4px #06b6d4, 9px 4px #06b6d4, 10px 4px #06b6d4, 1px 5px #06b6d4, 2px 5px #06b6d4, 3px 5px #06b6d4, 4px 5px #06b6d4, 5px 5px #06b6d4, 6px 5px #06b6d4, 7px 5px #06b6d4, 8px 5px #06b6d4, 9px 5px #06b6d4, 10px 5px #06b6d4, 2px 6px #0891b2, 3px 6px #0891b2, 4px 6px #0891b2, 5px 6px #0891b2, 6px 6px #0891b2, 7px 6px #0891b2, 8px 6px #0891b2, 9px 6px #0891b2, 3px 7px #0891b2, 4px 7px #0891b2, 5px 7px #0891b2, 6px 7px #0891b2, 7px 7px #0891b2, 8px 7px #0891b2;
  }
}`,
  html: '<div class="EggIce"></div>',
  params: [
    { name: "--ice-speed", label: "Speed", type: "duration", default: 1.5, min: 0.5, max: 5, step: 0.25, unit: "s" },
    { name: "--ice-scale", label: "Scale", type: "range", default: 3, min: 2, max: 5, step: 0.5, unit: "x" },
    { name: "--ice-glow", label: "Glow", type: "color", default: "#06b6d4" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};

export default EggIce;
