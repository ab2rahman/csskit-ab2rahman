import type { Animation } from "../data/animations";

const EggGrass: Animation = {
  slug: "egg-grass",
  name: "Grass Egg",
  category: "pixel",
  description:
    "Natural grass elemental egg with leaf patterns",
  tags: ["pixel", "egg", "grass", "monster-taming", "pixel-art", "box-shadow", "element"],
  css: `.EggGrass {
  --gra-speed: 1.5s;
  --gra-scale: 3;
  --gra-glow: #22c55e;
  width: 1px;
  height: 1px;
  position: relative;
  left: -28px;
  top: -20px;
  transform: scale(var(--gra-scale));
  filter: drop-shadow(0 0 4px var(--gra-glow));
  animation: gra-hatch var(--gra-speed) ease-in-out infinite;
}

@keyframes gra-hatch {
  0%, 70%, 100% {
    box-shadow: 4px 0px #86efac, 5px 0px #86efac, 6px 0px #86efac, 7px 0px #86efac, 3px 1px #86efac, 4px 1px #86efac, 5px 1px #86efac, 6px 1px #86efac, 7px 1px #86efac, 8px 1px #86efac, 2px 2px #22c55e, 3px 2px #22c55e, 4px 2px #22c55e, 5px 2px #22c55e, 6px 2px #22c55e, 7px 2px #22c55e, 8px 2px #22c55e, 9px 2px #22c55e, 1px 3px #22c55e, 2px 3px #22c55e, 3px 3px #22c55e, 4px 3px #22c55e, 5px 3px #22c55e, 6px 3px #22c55e, 7px 3px #22c55e, 8px 3px #22c55e, 9px 3px #22c55e, 10px 3px #22c55e, 1px 4px #22c55e, 2px 4px #22c55e, 3px 4px #22c55e, 4px 4px #22c55e, 5px 4px #22c55e, 6px 4px #22c55e, 7px 4px #22c55e, 8px 4px #22c55e, 9px 4px #22c55e, 10px 4px #22c55e, 1px 5px #22c55e, 2px 5px #22c55e, 3px 5px #22c55e, 4px 5px #22c55e, 5px 5px #22c55e, 6px 5px #22c55e, 7px 5px #22c55e, 8px 5px #22c55e, 9px 5px #22c55e, 10px 5px #22c55e, 2px 6px #16a34a, 3px 6px #16a34a, 4px 6px #16a34a, 5px 6px #16a34a, 6px 6px #16a34a, 7px 6px #16a34a, 8px 6px #16a34a, 9px 6px #16a34a, 3px 7px #16a34a, 4px 7px #16a34a, 5px 7px #16a34a, 6px 7px #16a34a, 7px 7px #16a34a, 8px 7px #16a34a;
  }
  10% {
    transform: scale(var(--gra-scale)) rotate(5deg);
  }
  20% {
    transform: scale(var(--gra-scale)) rotate(-5deg);
  }
  30% {
    transform: scale(var(--gra-scale)) rotate(3deg);
  }
  40% {
    transform: scale(var(--gra-scale)) rotate(-3deg);
  }
  50% {
    box-shadow: 4px 0px #ffffff, 6px 0px #ffffff, 7px 0px #86efac, 3px 1px #ffffff, 4px 1px #ffffff, 6px 1px #ffffff, 7px 1px #86efac, 8px 1px #86efac, 9px 1px #86efac, 2px 2px #22c55e, 4px 2px #22c55e, 5px 2px #22c55e, 6px 2px #22c55e, 7px 2px #22c55e, 8px 2px #22c55e, 9px 2px #22c55e, 1px 3px #22c55e, 2px 3px #22c55e, 3px 3px #22c55e, 4px 3px #22c55e, 5px 3px #22c55e, 6px 3px #22c55e, 7px 3px #22c55e, 8px 3px #22c55e, 9px 3px #22c55e, 10px 3px #22c55e, 1px 4px #22c55e, 2px 4px #22c55e, 3px 4px #22c55e, 4px 4px #22c55e, 5px 4px #22c55e, 6px 4px #22c55e, 7px 4px #22c55e, 8px 4px #22c55e, 9px 4px #22c55e, 10px 4px #22c55e, 1px 5px #22c55e, 2px 5px #22c55e, 3px 5px #22c55e, 4px 5px #22c55e, 5px 5px #22c55e, 6px 5px #22c55e, 7px 5px #22c55e, 8px 5px #22c55e, 9px 5px #22c55e, 10px 5px #22c55e, 2px 6px #16a34a, 3px 6px #16a34a, 4px 6px #16a34a, 5px 6px #16a34a, 6px 6px #16a34a, 7px 6px #16a34a, 8px 6px #16a34a, 9px 6px #16a34a, 3px 7px #16a34a, 4px 7px #16a34a, 5px 7px #16a34a, 6px 7px #16a34a, 7px 7px #16a34a, 8px 7px #16a34a;
    filter: drop-shadow(0 0 12px var(--gra-glow));
    transform: scale(var(--gra-scale)) rotate(0deg) scale(1.05);
  }
  60% {
    box-shadow: 4px 0px #86efac, 5px 0px #86efac, 6px 0px #86efac, 7px 0px #86efac, 3px 1px #86efac, 4px 1px #86efac, 5px 1px #86efac, 6px 1px #86efac, 7px 1px #86efac, 8px 1px #86efac, 2px 2px #22c55e, 3px 2px #22c55e, 4px 2px #22c55e, 5px 2px #22c55e, 6px 2px #22c55e, 7px 2px #22c55e, 8px 2px #22c55e, 9px 2px #22c55e, 1px 3px #22c55e, 2px 3px #22c55e, 3px 3px #22c55e, 4px 3px #22c55e, 5px 3px #22c55e, 6px 3px #22c55e, 7px 3px #22c55e, 8px 3px #22c55e, 9px 3px #22c55e, 10px 3px #22c55e, 1px 4px #22c55e, 2px 4px #22c55e, 3px 4px #22c55e, 4px 4px #22c55e, 5px 4px #22c55e, 6px 4px #22c55e, 7px 4px #22c55e, 8px 4px #22c55e, 9px 4px #22c55e, 10px 4px #22c55e, 1px 5px #22c55e, 2px 5px #22c55e, 3px 5px #22c55e, 4px 5px #22c55e, 5px 5px #22c55e, 6px 5px #22c55e, 7px 5px #22c55e, 8px 5px #22c55e, 9px 5px #22c55e, 10px 5px #22c55e, 2px 6px #16a34a, 3px 6px #16a34a, 4px 6px #16a34a, 5px 6px #16a34a, 6px 6px #16a34a, 7px 6px #16a34a, 8px 6px #16a34a, 9px 6px #16a34a, 3px 7px #16a34a, 4px 7px #16a34a, 5px 7px #16a34a, 6px 7px #16a34a, 7px 7px #16a34a, 8px 7px #16a34a;
  }
}`,
  html: '<div class="EggGrass"></div>',
  params: [
    { name: "--gra-speed", label: "Speed", type: "duration", default: 1.5, min: 0.5, max: 5, step: 0.25, unit: "s" },
    { name: "--gra-scale", label: "Scale", type: "range", default: 3, min: 2, max: 5, step: 0.5, unit: "x" },
    { name: "--gra-glow", label: "Glow", type: "color", default: "#22c55e" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};

export default EggGrass;
