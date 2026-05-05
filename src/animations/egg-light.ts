import type { Animation } from "../data/animations";

const EggLight: Animation = {
  slug: "egg-light",
  name: "Light Egg",
  category: "pixel",
  description:
    "Radiant light elemental egg with holy glow",
  tags: ["pixel", "egg", "light", "monster-taming", "pixel-art", "box-shadow", "element"],
  css: `.EggLight {
  --lig-speed: 1.5s;
  --lig-scale: 3;
  --lig-glow: #fbbf24;
  width: 1px;
  height: 1px;
  position: relative;
  left: -28px;
  top: -20px;
  transform: scale(var(--lig-scale));
  filter: drop-shadow(0 0 4px var(--lig-glow));
  animation: lig-hatch var(--lig-speed) ease-in-out infinite;
}

@keyframes lig-hatch {
  0%, 70%, 100% {
    box-shadow: 4px 0px #fef9c3, 5px 0px #fef9c3, 6px 0px #fef9c3, 7px 0px #fef9c3, 3px 1px #fef9c3, 4px 1px #fef9c3, 5px 1px #fef9c3, 6px 1px #fef9c3, 7px 1px #fef9c3, 8px 1px #fef9c3, 2px 2px #fbbf24, 3px 2px #fbbf24, 4px 2px #fbbf24, 5px 2px #fbbf24, 6px 2px #fbbf24, 7px 2px #fbbf24, 8px 2px #fbbf24, 9px 2px #fbbf24, 1px 3px #fbbf24, 2px 3px #fbbf24, 3px 3px #fbbf24, 4px 3px #fbbf24, 5px 3px #fbbf24, 6px 3px #fbbf24, 7px 3px #fbbf24, 8px 3px #fbbf24, 9px 3px #fbbf24, 10px 3px #fbbf24, 1px 4px #fbbf24, 2px 4px #fbbf24, 3px 4px #fbbf24, 4px 4px #fbbf24, 5px 4px #fbbf24, 6px 4px #fbbf24, 7px 4px #fbbf24, 8px 4px #fbbf24, 9px 4px #fbbf24, 10px 4px #fbbf24, 1px 5px #fbbf24, 2px 5px #fbbf24, 3px 5px #fbbf24, 4px 5px #fbbf24, 5px 5px #fbbf24, 6px 5px #fbbf24, 7px 5px #fbbf24, 8px 5px #fbbf24, 9px 5px #fbbf24, 10px 5px #fbbf24, 2px 6px #f59e0b, 3px 6px #f59e0b, 4px 6px #f59e0b, 5px 6px #f59e0b, 6px 6px #f59e0b, 7px 6px #f59e0b, 8px 6px #f59e0b, 9px 6px #f59e0b, 3px 7px #f59e0b, 4px 7px #f59e0b, 5px 7px #f59e0b, 6px 7px #f59e0b, 7px 7px #f59e0b, 8px 7px #f59e0b;
  }
  10% {
    transform: scale(var(--lig-scale)) rotate(5deg);
  }
  20% {
    transform: scale(var(--lig-scale)) rotate(-5deg);
  }
  30% {
    transform: scale(var(--lig-scale)) rotate(3deg);
  }
  40% {
    transform: scale(var(--lig-scale)) rotate(-3deg);
  }
  50% {
    box-shadow: 4px 0px #ffffff, 6px 0px #ffffff, 7px 0px #fef9c3, 3px 1px #ffffff, 4px 1px #ffffff, 6px 1px #ffffff, 7px 1px #fef9c3, 8px 1px #fef9c3, 9px 1px #fef9c3, 2px 2px #fbbf24, 4px 2px #fbbf24, 5px 2px #fbbf24, 6px 2px #fbbf24, 7px 2px #fbbf24, 8px 2px #fbbf24, 9px 2px #fbbf24, 1px 3px #fbbf24, 2px 3px #fbbf24, 3px 3px #fbbf24, 4px 3px #fbbf24, 5px 3px #fbbf24, 6px 3px #fbbf24, 7px 3px #fbbf24, 8px 3px #fbbf24, 9px 3px #fbbf24, 10px 3px #fbbf24, 1px 4px #fbbf24, 2px 4px #fbbf24, 3px 4px #fbbf24, 4px 4px #fbbf24, 5px 4px #fbbf24, 6px 4px #fbbf24, 7px 4px #fbbf24, 8px 4px #fbbf24, 9px 4px #fbbf24, 10px 4px #fbbf24, 1px 5px #fbbf24, 2px 5px #fbbf24, 3px 5px #fbbf24, 4px 5px #fbbf24, 5px 5px #fbbf24, 6px 5px #fbbf24, 7px 5px #fbbf24, 8px 5px #fbbf24, 9px 5px #fbbf24, 10px 5px #fbbf24, 2px 6px #f59e0b, 3px 6px #f59e0b, 4px 6px #f59e0b, 5px 6px #f59e0b, 6px 6px #f59e0b, 7px 6px #f59e0b, 8px 6px #f59e0b, 9px 6px #f59e0b, 3px 7px #f59e0b, 4px 7px #f59e0b, 5px 7px #f59e0b, 6px 7px #f59e0b, 7px 7px #f59e0b, 8px 7px #f59e0b;
    filter: drop-shadow(0 0 12px var(--lig-glow));
    transform: scale(var(--lig-scale)) rotate(0deg) scale(1.05);
  }
  60% {
    box-shadow: 4px 0px #fef9c3, 5px 0px #fef9c3, 6px 0px #fef9c3, 7px 0px #fef9c3, 3px 1px #fef9c3, 4px 1px #fef9c3, 5px 1px #fef9c3, 6px 1px #fef9c3, 7px 1px #fef9c3, 8px 1px #fef9c3, 2px 2px #fbbf24, 3px 2px #fbbf24, 4px 2px #fbbf24, 5px 2px #fbbf24, 6px 2px #fbbf24, 7px 2px #fbbf24, 8px 2px #fbbf24, 9px 2px #fbbf24, 1px 3px #fbbf24, 2px 3px #fbbf24, 3px 3px #fbbf24, 4px 3px #fbbf24, 5px 3px #fbbf24, 6px 3px #fbbf24, 7px 3px #fbbf24, 8px 3px #fbbf24, 9px 3px #fbbf24, 10px 3px #fbbf24, 1px 4px #fbbf24, 2px 4px #fbbf24, 3px 4px #fbbf24, 4px 4px #fbbf24, 5px 4px #fbbf24, 6px 4px #fbbf24, 7px 4px #fbbf24, 8px 4px #fbbf24, 9px 4px #fbbf24, 10px 4px #fbbf24, 1px 5px #fbbf24, 2px 5px #fbbf24, 3px 5px #fbbf24, 4px 5px #fbbf24, 5px 5px #fbbf24, 6px 5px #fbbf24, 7px 5px #fbbf24, 8px 5px #fbbf24, 9px 5px #fbbf24, 10px 5px #fbbf24, 2px 6px #f59e0b, 3px 6px #f59e0b, 4px 6px #f59e0b, 5px 6px #f59e0b, 6px 6px #f59e0b, 7px 6px #f59e0b, 8px 6px #f59e0b, 9px 6px #f59e0b, 3px 7px #f59e0b, 4px 7px #f59e0b, 5px 7px #f59e0b, 6px 7px #f59e0b, 7px 7px #f59e0b, 8px 7px #f59e0b;
  }
}`,
  html: '<div class="EggLight"></div>',
  params: [
    { name: "--lig-speed", label: "Speed", type: "duration", default: 1.5, min: 0.5, max: 5, step: 0.25, unit: "s" },
    { name: "--lig-scale", label: "Scale", type: "range", default: 3, min: 2, max: 5, step: 0.5, unit: "x" },
    { name: "--lig-glow", label: "Glow", type: "color", default: "#fbbf24" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};

export default EggLight;
