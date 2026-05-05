import type { Animation } from "../data/animations";

const EggEarth: Animation = {
  slug: "egg-earth",
  name: "Earth Egg",
  category: "pixel",
  description:
    "Solid earth elemental egg with rocky texture",
  tags: ["pixel", "egg", "earth", "monster-taming", "pixel-art", "box-shadow", "element"],
  css: `.EggEarth {
  --ear-speed: 1.5s;
  --ear-scale: 3;
  --ear-glow: #a16207;
  width: 1px;
  height: 1px;
  position: relative;
  left: -28px;
  top: -20px;
  transform: scale(var(--ear-scale));
  filter: drop-shadow(0 0 4px var(--ear-glow));
  animation: ear-hatch var(--ear-speed) ease-in-out infinite;
}

@keyframes ear-hatch {
  0%, 70%, 100% {
    box-shadow: 4px 0px #fbbf24, 5px 0px #fbbf24, 6px 0px #fbbf24, 7px 0px #fbbf24, 3px 1px #fbbf24, 4px 1px #fbbf24, 5px 1px #fbbf24, 6px 1px #fbbf24, 7px 1px #fbbf24, 8px 1px #fbbf24, 2px 2px #a16207, 3px 2px #a16207, 4px 2px #a16207, 5px 2px #a16207, 6px 2px #a16207, 7px 2px #a16207, 8px 2px #a16207, 9px 2px #a16207, 1px 3px #a16207, 2px 3px #a16207, 3px 3px #a16207, 4px 3px #a16207, 5px 3px #a16207, 6px 3px #a16207, 7px 3px #a16207, 8px 3px #a16207, 9px 3px #a16207, 10px 3px #a16207, 1px 4px #a16207, 2px 4px #a16207, 3px 4px #a16207, 4px 4px #a16207, 5px 4px #a16207, 6px 4px #a16207, 7px 4px #a16207, 8px 4px #a16207, 9px 4px #a16207, 10px 4px #a16207, 1px 5px #a16207, 2px 5px #a16207, 3px 5px #a16207, 4px 5px #a16207, 5px 5px #a16207, 6px 5px #a16207, 7px 5px #a16207, 8px 5px #a16207, 9px 5px #a16207, 10px 5px #a16207, 2px 6px #92400e, 3px 6px #92400e, 4px 6px #92400e, 5px 6px #92400e, 6px 6px #92400e, 7px 6px #92400e, 8px 6px #92400e, 9px 6px #92400e, 3px 7px #92400e, 4px 7px #92400e, 5px 7px #92400e, 6px 7px #92400e, 7px 7px #92400e, 8px 7px #92400e;
  }
  10% {
    transform: scale(var(--ear-scale)) rotate(5deg);
  }
  20% {
    transform: scale(var(--ear-scale)) rotate(-5deg);
  }
  30% {
    transform: scale(var(--ear-scale)) rotate(3deg);
  }
  40% {
    transform: scale(var(--ear-scale)) rotate(-3deg);
  }
  50% {
    box-shadow: 4px 0px #ffffff, 6px 0px #ffffff, 7px 0px #fbbf24, 3px 1px #ffffff, 4px 1px #ffffff, 6px 1px #ffffff, 7px 1px #fbbf24, 8px 1px #fbbf24, 9px 1px #fbbf24, 2px 2px #a16207, 4px 2px #a16207, 5px 2px #a16207, 6px 2px #a16207, 7px 2px #a16207, 8px 2px #a16207, 9px 2px #a16207, 1px 3px #a16207, 2px 3px #a16207, 3px 3px #a16207, 4px 3px #a16207, 5px 3px #a16207, 6px 3px #a16207, 7px 3px #a16207, 8px 3px #a16207, 9px 3px #a16207, 10px 3px #a16207, 1px 4px #a16207, 2px 4px #a16207, 3px 4px #a16207, 4px 4px #a16207, 5px 4px #a16207, 6px 4px #a16207, 7px 4px #a16207, 8px 4px #a16207, 9px 4px #a16207, 10px 4px #a16207, 1px 5px #a16207, 2px 5px #a16207, 3px 5px #a16207, 4px 5px #a16207, 5px 5px #a16207, 6px 5px #a16207, 7px 5px #a16207, 8px 5px #a16207, 9px 5px #a16207, 10px 5px #a16207, 2px 6px #92400e, 3px 6px #92400e, 4px 6px #92400e, 5px 6px #92400e, 6px 6px #92400e, 7px 6px #92400e, 8px 6px #92400e, 9px 6px #92400e, 3px 7px #92400e, 4px 7px #92400e, 5px 7px #92400e, 6px 7px #92400e, 7px 7px #92400e, 8px 7px #92400e;
    filter: drop-shadow(0 0 12px var(--ear-glow));
    transform: scale(var(--ear-scale)) rotate(0deg) scale(1.05);
  }
  60% {
    box-shadow: 4px 0px #fbbf24, 5px 0px #fbbf24, 6px 0px #fbbf24, 7px 0px #fbbf24, 3px 1px #fbbf24, 4px 1px #fbbf24, 5px 1px #fbbf24, 6px 1px #fbbf24, 7px 1px #fbbf24, 8px 1px #fbbf24, 2px 2px #a16207, 3px 2px #a16207, 4px 2px #a16207, 5px 2px #a16207, 6px 2px #a16207, 7px 2px #a16207, 8px 2px #a16207, 9px 2px #a16207, 1px 3px #a16207, 2px 3px #a16207, 3px 3px #a16207, 4px 3px #a16207, 5px 3px #a16207, 6px 3px #a16207, 7px 3px #a16207, 8px 3px #a16207, 9px 3px #a16207, 10px 3px #a16207, 1px 4px #a16207, 2px 4px #a16207, 3px 4px #a16207, 4px 4px #a16207, 5px 4px #a16207, 6px 4px #a16207, 7px 4px #a16207, 8px 4px #a16207, 9px 4px #a16207, 10px 4px #a16207, 1px 5px #a16207, 2px 5px #a16207, 3px 5px #a16207, 4px 5px #a16207, 5px 5px #a16207, 6px 5px #a16207, 7px 5px #a16207, 8px 5px #a16207, 9px 5px #a16207, 10px 5px #a16207, 2px 6px #92400e, 3px 6px #92400e, 4px 6px #92400e, 5px 6px #92400e, 6px 6px #92400e, 7px 6px #92400e, 8px 6px #92400e, 9px 6px #92400e, 3px 7px #92400e, 4px 7px #92400e, 5px 7px #92400e, 6px 7px #92400e, 7px 7px #92400e, 8px 7px #92400e;
  }
}`,
  html: '<div class="EggEarth"></div>',
  params: [
    { name: "--ear-speed", label: "Speed", type: "duration", default: 1.5, min: 0.5, max: 5, step: 0.25, unit: "s" },
    { name: "--ear-scale", label: "Scale", type: "range", default: 3, min: 2, max: 5, step: 0.5, unit: "x" },
    { name: "--ear-glow", label: "Glow", type: "color", default: "#a16207" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};

export default EggEarth;
