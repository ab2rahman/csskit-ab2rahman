import type { Animation } from "../data/animations";

const EggWind: Animation = {
  slug: "egg-wind",
  name: "Wind Egg",
  category: "pixel",
  description:
    "Swift wind elemental egg with flowing patterns",
  tags: ["pixel", "egg", "wind", "monster-taming", "pixel-art", "box-shadow", "element"],
  css: `.EggWind {
  --win-speed: 1.5s;
  --win-scale: 3;
  --win-glow: #94a3b8;
  width: 1px;
  height: 1px;
  position: relative;
  left: -28px;
  top: -20px;
  transform: scale(var(--win-scale));
  filter: drop-shadow(0 0 4px var(--win-glow));
  animation: win-hatch var(--win-speed) ease-in-out infinite;
}

@keyframes win-hatch {
  0%, 70%, 100% {
    box-shadow: 4px 0px #cbd5e1, 5px 0px #cbd5e1, 6px 0px #cbd5e1, 7px 0px #cbd5e1, 3px 1px #cbd5e1, 4px 1px #cbd5e1, 5px 1px #cbd5e1, 6px 1px #cbd5e1, 7px 1px #cbd5e1, 8px 1px #cbd5e1, 2px 2px #94a3b8, 3px 2px #94a3b8, 4px 2px #94a3b8, 5px 2px #94a3b8, 6px 2px #94a3b8, 7px 2px #94a3b8, 8px 2px #94a3b8, 9px 2px #94a3b8, 1px 3px #94a3b8, 2px 3px #94a3b8, 3px 3px #94a3b8, 4px 3px #94a3b8, 5px 3px #94a3b8, 6px 3px #94a3b8, 7px 3px #94a3b8, 8px 3px #94a3b8, 9px 3px #94a3b8, 10px 3px #94a3b8, 1px 4px #94a3b8, 2px 4px #94a3b8, 3px 4px #94a3b8, 4px 4px #94a3b8, 5px 4px #94a3b8, 6px 4px #94a3b8, 7px 4px #94a3b8, 8px 4px #94a3b8, 9px 4px #94a3b8, 10px 4px #94a3b8, 1px 5px #94a3b8, 2px 5px #94a3b8, 3px 5px #94a3b8, 4px 5px #94a3b8, 5px 5px #94a3b8, 6px 5px #94a3b8, 7px 5px #94a3b8, 8px 5px #94a3b8, 9px 5px #94a3b8, 10px 5px #94a3b8, 2px 6px #64748b, 3px 6px #64748b, 4px 6px #64748b, 5px 6px #64748b, 6px 6px #64748b, 7px 6px #64748b, 8px 6px #64748b, 9px 6px #64748b, 3px 7px #64748b, 4px 7px #64748b, 5px 7px #64748b, 6px 7px #64748b, 7px 7px #64748b, 8px 7px #64748b;
  }
  10% {
    transform: scale(var(--win-scale)) rotate(5deg);
  }
  20% {
    transform: scale(var(--win-scale)) rotate(-5deg);
  }
  30% {
    transform: scale(var(--win-scale)) rotate(3deg);
  }
  40% {
    transform: scale(var(--win-scale)) rotate(-3deg);
  }
  50% {
    box-shadow: 4px 0px #ffffff, 6px 0px #ffffff, 7px 0px #cbd5e1, 3px 1px #ffffff, 4px 1px #ffffff, 6px 1px #ffffff, 7px 1px #cbd5e1, 8px 1px #cbd5e1, 9px 1px #cbd5e1, 2px 2px #94a3b8, 4px 2px #94a3b8, 5px 2px #94a3b8, 6px 2px #94a3b8, 7px 2px #94a3b8, 8px 2px #94a3b8, 9px 2px #94a3b8, 1px 3px #94a3b8, 2px 3px #94a3b8, 3px 3px #94a3b8, 4px 3px #94a3b8, 5px 3px #94a3b8, 6px 3px #94a3b8, 7px 3px #94a3b8, 8px 3px #94a3b8, 9px 3px #94a3b8, 10px 3px #94a3b8, 1px 4px #94a3b8, 2px 4px #94a3b8, 3px 4px #94a3b8, 4px 4px #94a3b8, 5px 4px #94a3b8, 6px 4px #94a3b8, 7px 4px #94a3b8, 8px 4px #94a3b8, 9px 4px #94a3b8, 10px 4px #94a3b8, 1px 5px #94a3b8, 2px 5px #94a3b8, 3px 5px #94a3b8, 4px 5px #94a3b8, 5px 5px #94a3b8, 6px 5px #94a3b8, 7px 5px #94a3b8, 8px 5px #94a3b8, 9px 5px #94a3b8, 10px 5px #94a3b8, 2px 6px #64748b, 3px 6px #64748b, 4px 6px #64748b, 5px 6px #64748b, 6px 6px #64748b, 7px 6px #64748b, 8px 6px #64748b, 9px 6px #64748b, 3px 7px #64748b, 4px 7px #64748b, 5px 7px #64748b, 6px 7px #64748b, 7px 7px #64748b, 8px 7px #64748b;
    filter: drop-shadow(0 0 12px var(--win-glow));
    transform: scale(var(--win-scale)) rotate(0deg) scale(1.05);
  }
  60% {
    box-shadow: 4px 0px #cbd5e1, 5px 0px #cbd5e1, 6px 0px #cbd5e1, 7px 0px #cbd5e1, 3px 1px #cbd5e1, 4px 1px #cbd5e1, 5px 1px #cbd5e1, 6px 1px #cbd5e1, 7px 1px #cbd5e1, 8px 1px #cbd5e1, 2px 2px #94a3b8, 3px 2px #94a3b8, 4px 2px #94a3b8, 5px 2px #94a3b8, 6px 2px #94a3b8, 7px 2px #94a3b8, 8px 2px #94a3b8, 9px 2px #94a3b8, 1px 3px #94a3b8, 2px 3px #94a3b8, 3px 3px #94a3b8, 4px 3px #94a3b8, 5px 3px #94a3b8, 6px 3px #94a3b8, 7px 3px #94a3b8, 8px 3px #94a3b8, 9px 3px #94a3b8, 10px 3px #94a3b8, 1px 4px #94a3b8, 2px 4px #94a3b8, 3px 4px #94a3b8, 4px 4px #94a3b8, 5px 4px #94a3b8, 6px 4px #94a3b8, 7px 4px #94a3b8, 8px 4px #94a3b8, 9px 4px #94a3b8, 10px 4px #94a3b8, 1px 5px #94a3b8, 2px 5px #94a3b8, 3px 5px #94a3b8, 4px 5px #94a3b8, 5px 5px #94a3b8, 6px 5px #94a3b8, 7px 5px #94a3b8, 8px 5px #94a3b8, 9px 5px #94a3b8, 10px 5px #94a3b8, 2px 6px #64748b, 3px 6px #64748b, 4px 6px #64748b, 5px 6px #64748b, 6px 6px #64748b, 7px 6px #64748b, 8px 6px #64748b, 9px 6px #64748b, 3px 7px #64748b, 4px 7px #64748b, 5px 7px #64748b, 6px 7px #64748b, 7px 7px #64748b, 8px 7px #64748b;
  }
}`,
  html: '<div class="EggWind"></div>',
  params: [
    { name: "--win-speed", label: "Speed", type: "duration", default: 1.5, min: 0.5, max: 5, step: 0.25, unit: "s" },
    { name: "--win-scale", label: "Scale", type: "range", default: 3, min: 2, max: 5, step: 0.5, unit: "x" },
    { name: "--win-glow", label: "Glow", type: "color", default: "#94a3b8" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};

export default EggWind;
