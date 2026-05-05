import type { Animation } from "../data/animations";

const EggFire: Animation = {
  slug: "egg-fire",
  name: "Fire Egg",
  category: "pixel",
  description:
    "Blazing fire elemental egg with pulsing heat",
  tags: ["pixel", "egg", "fire", "monster-taming", "pixel-art", "box-shadow", "element"],
  css: `.EggFire {
  --fir-speed: 1.5s;
  --fir-scale: 3;
  --fir-glow: #f97316;
  width: 1px;
  height: 1px;
  position: relative;
  left: -28px;
  top: -20px;
  transform: scale(var(--fir-scale));
  filter: drop-shadow(0 0 4px var(--fir-glow));
  animation: fir-hatch var(--fir-speed) ease-in-out infinite;
}

@keyframes fir-hatch {
  0%, 70%, 100% {
    box-shadow: 4px 0px #fbbf24, 5px 0px #fbbf24, 6px 0px #fbbf24, 7px 0px #fbbf24, 3px 1px #fbbf24, 4px 1px #fbbf24, 5px 1px #fbbf24, 6px 1px #fbbf24, 7px 1px #fbbf24, 8px 1px #fbbf24, 2px 2px #f97316, 3px 2px #f97316, 4px 2px #f97316, 5px 2px #f97316, 6px 2px #f97316, 7px 2px #f97316, 8px 2px #f97316, 9px 2px #f97316, 1px 3px #f97316, 2px 3px #f97316, 3px 3px #f97316, 4px 3px #f97316, 5px 3px #f97316, 6px 3px #f97316, 7px 3px #f97316, 8px 3px #f97316, 9px 3px #f97316, 10px 3px #f97316, 1px 4px #f97316, 2px 4px #f97316, 3px 4px #f97316, 4px 4px #f97316, 5px 4px #f97316, 6px 4px #f97316, 7px 4px #f97316, 8px 4px #f97316, 9px 4px #f97316, 10px 4px #f97316, 1px 5px #f97316, 2px 5px #f97316, 3px 5px #f97316, 4px 5px #f97316, 5px 5px #f97316, 6px 5px #f97316, 7px 5px #f97316, 8px 5px #f97316, 9px 5px #f97316, 10px 5px #f97316, 2px 6px #ef4444, 3px 6px #ef4444, 4px 6px #ef4444, 5px 6px #ef4444, 6px 6px #ef4444, 7px 6px #ef4444, 8px 6px #ef4444, 9px 6px #ef4444, 3px 7px #ef4444, 4px 7px #ef4444, 5px 7px #ef4444, 6px 7px #ef4444, 7px 7px #ef4444, 8px 7px #ef4444;
  }
  10% {
    transform: scale(var(--fir-scale)) rotate(5deg);
  }
  20% {
    transform: scale(var(--fir-scale)) rotate(-5deg);
  }
  30% {
    transform: scale(var(--fir-scale)) rotate(3deg);
  }
  40% {
    transform: scale(var(--fir-scale)) rotate(-3deg);
  }
  50% {
    box-shadow: 4px 0px #ffffff, 6px 0px #ffffff, 7px 0px #fbbf24, 3px 1px #ffffff, 4px 1px #ffffff, 6px 1px #ffffff, 7px 1px #fbbf24, 8px 1px #fbbf24, 9px 1px #fbbf24, 2px 2px #f97316, 4px 2px #f97316, 5px 2px #f97316, 6px 2px #f97316, 7px 2px #f97316, 8px 2px #f97316, 9px 2px #f97316, 1px 3px #f97316, 2px 3px #f97316, 3px 3px #f97316, 4px 3px #f97316, 5px 3px #f97316, 6px 3px #f97316, 7px 3px #f97316, 8px 3px #f97316, 9px 3px #f97316, 10px 3px #f97316, 1px 4px #f97316, 2px 4px #f97316, 3px 4px #f97316, 4px 4px #f97316, 5px 4px #f97316, 6px 4px #f97316, 7px 4px #f97316, 8px 4px #f97316, 9px 4px #f97316, 10px 4px #f97316, 1px 5px #f97316, 2px 5px #f97316, 3px 5px #f97316, 4px 5px #f97316, 5px 5px #f97316, 6px 5px #f97316, 7px 5px #f97316, 8px 5px #f97316, 9px 5px #f97316, 10px 5px #f97316, 2px 6px #ef4444, 3px 6px #ef4444, 4px 6px #ef4444, 5px 6px #ef4444, 6px 6px #ef4444, 7px 6px #ef4444, 8px 6px #ef4444, 9px 6px #ef4444, 3px 7px #ef4444, 4px 7px #ef4444, 5px 7px #ef4444, 6px 7px #ef4444, 7px 7px #ef4444, 8px 7px #ef4444;
    filter: drop-shadow(0 0 12px var(--fir-glow));
    transform: scale(var(--fir-scale)) rotate(0deg) scale(1.05);
  }
  60% {
    box-shadow: 4px 0px #fbbf24, 5px 0px #fbbf24, 6px 0px #fbbf24, 7px 0px #fbbf24, 3px 1px #fbbf24, 4px 1px #fbbf24, 5px 1px #fbbf24, 6px 1px #fbbf24, 7px 1px #fbbf24, 8px 1px #fbbf24, 2px 2px #f97316, 3px 2px #f97316, 4px 2px #f97316, 5px 2px #f97316, 6px 2px #f97316, 7px 2px #f97316, 8px 2px #f97316, 9px 2px #f97316, 1px 3px #f97316, 2px 3px #f97316, 3px 3px #f97316, 4px 3px #f97316, 5px 3px #f97316, 6px 3px #f97316, 7px 3px #f97316, 8px 3px #f97316, 9px 3px #f97316, 10px 3px #f97316, 1px 4px #f97316, 2px 4px #f97316, 3px 4px #f97316, 4px 4px #f97316, 5px 4px #f97316, 6px 4px #f97316, 7px 4px #f97316, 8px 4px #f97316, 9px 4px #f97316, 10px 4px #f97316, 1px 5px #f97316, 2px 5px #f97316, 3px 5px #f97316, 4px 5px #f97316, 5px 5px #f97316, 6px 5px #f97316, 7px 5px #f97316, 8px 5px #f97316, 9px 5px #f97316, 10px 5px #f97316, 2px 6px #ef4444, 3px 6px #ef4444, 4px 6px #ef4444, 5px 6px #ef4444, 6px 6px #ef4444, 7px 6px #ef4444, 8px 6px #ef4444, 9px 6px #ef4444, 3px 7px #ef4444, 4px 7px #ef4444, 5px 7px #ef4444, 6px 7px #ef4444, 7px 7px #ef4444, 8px 7px #ef4444;
  }
}`,
  html: '<div class="EggFire"></div>',
  params: [
    { name: "--fir-speed", label: "Speed", type: "duration", default: 1.5, min: 0.5, max: 5, step: 0.25, unit: "s" },
    { name: "--fir-scale", label: "Scale", type: "range", default: 3, min: 2, max: 5, step: 0.5, unit: "x" },
    { name: "--fir-glow", label: "Glow", type: "color", default: "#f97316" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};

export default EggFire;
