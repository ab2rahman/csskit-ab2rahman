import type { Animation } from "../data/animations";

const EggElectric: Animation = {
  slug: "egg-electric",
  name: "Electric Egg",
  category: "pixel",
  description:
    "Charged electric elemental egg with sparks",
  tags: ["pixel", "egg", "electric", "monster-taming", "pixel-art", "box-shadow", "element"],
  css: `.EggElectric {
  --ele-speed: 1.5s;
  --ele-scale: 3;
  --ele-glow: #eab308;
  width: 1px;
  height: 1px;
  position: relative;
  left: -28px;
  top: -20px;
  transform: scale(var(--ele-scale));
  filter: drop-shadow(0 0 4px var(--ele-glow));
  animation: ele-hatch var(--ele-speed) ease-in-out infinite;
}

@keyframes ele-hatch {
  0%, 70%, 100% {
    box-shadow: 4px 0px #fef08a, 5px 0px #fef08a, 6px 0px #fef08a, 7px 0px #fef08a, 3px 1px #fef08a, 4px 1px #fef08a, 5px 1px #fef08a, 6px 1px #fef08a, 7px 1px #fef08a, 8px 1px #fef08a, 2px 2px #eab308, 3px 2px #eab308, 4px 2px #eab308, 5px 2px #eab308, 6px 2px #eab308, 7px 2px #eab308, 8px 2px #eab308, 9px 2px #eab308, 1px 3px #eab308, 2px 3px #eab308, 3px 3px #eab308, 4px 3px #eab308, 5px 3px #eab308, 6px 3px #eab308, 7px 3px #eab308, 8px 3px #eab308, 9px 3px #eab308, 10px 3px #eab308, 1px 4px #eab308, 2px 4px #eab308, 3px 4px #eab308, 4px 4px #eab308, 5px 4px #eab308, 6px 4px #eab308, 7px 4px #eab308, 8px 4px #eab308, 9px 4px #eab308, 10px 4px #eab308, 1px 5px #eab308, 2px 5px #eab308, 3px 5px #eab308, 4px 5px #eab308, 5px 5px #eab308, 6px 5px #eab308, 7px 5px #eab308, 8px 5px #eab308, 9px 5px #eab308, 10px 5px #eab308, 2px 6px #facc15, 3px 6px #facc15, 4px 6px #facc15, 5px 6px #facc15, 6px 6px #facc15, 7px 6px #facc15, 8px 6px #facc15, 9px 6px #facc15, 3px 7px #facc15, 4px 7px #facc15, 5px 7px #facc15, 6px 7px #facc15, 7px 7px #facc15, 8px 7px #facc15;
  }
  10% {
    transform: scale(var(--ele-scale)) rotate(5deg);
  }
  20% {
    transform: scale(var(--ele-scale)) rotate(-5deg);
  }
  30% {
    transform: scale(var(--ele-scale)) rotate(3deg);
  }
  40% {
    transform: scale(var(--ele-scale)) rotate(-3deg);
  }
  50% {
    box-shadow: 4px 0px #ffffff, 6px 0px #ffffff, 7px 0px #fef08a, 3px 1px #ffffff, 4px 1px #ffffff, 6px 1px #ffffff, 7px 1px #fef08a, 8px 1px #fef08a, 9px 1px #fef08a, 2px 2px #eab308, 4px 2px #eab308, 5px 2px #eab308, 6px 2px #eab308, 7px 2px #eab308, 8px 2px #eab308, 9px 2px #eab308, 1px 3px #eab308, 2px 3px #eab308, 3px 3px #eab308, 4px 3px #eab308, 5px 3px #eab308, 6px 3px #eab308, 7px 3px #eab308, 8px 3px #eab308, 9px 3px #eab308, 10px 3px #eab308, 1px 4px #eab308, 2px 4px #eab308, 3px 4px #eab308, 4px 4px #eab308, 5px 4px #eab308, 6px 4px #eab308, 7px 4px #eab308, 8px 4px #eab308, 9px 4px #eab308, 10px 4px #eab308, 1px 5px #eab308, 2px 5px #eab308, 3px 5px #eab308, 4px 5px #eab308, 5px 5px #eab308, 6px 5px #eab308, 7px 5px #eab308, 8px 5px #eab308, 9px 5px #eab308, 10px 5px #eab308, 2px 6px #facc15, 3px 6px #facc15, 4px 6px #facc15, 5px 6px #facc15, 6px 6px #facc15, 7px 6px #facc15, 8px 6px #facc15, 9px 6px #facc15, 3px 7px #facc15, 4px 7px #facc15, 5px 7px #facc15, 6px 7px #facc15, 7px 7px #facc15, 8px 7px #facc15;
    filter: drop-shadow(0 0 12px var(--ele-glow));
    transform: scale(var(--ele-scale)) rotate(0deg) scale(1.05);
  }
  60% {
    box-shadow: 4px 0px #fef08a, 5px 0px #fef08a, 6px 0px #fef08a, 7px 0px #fef08a, 3px 1px #fef08a, 4px 1px #fef08a, 5px 1px #fef08a, 6px 1px #fef08a, 7px 1px #fef08a, 8px 1px #fef08a, 2px 2px #eab308, 3px 2px #eab308, 4px 2px #eab308, 5px 2px #eab308, 6px 2px #eab308, 7px 2px #eab308, 8px 2px #eab308, 9px 2px #eab308, 1px 3px #eab308, 2px 3px #eab308, 3px 3px #eab308, 4px 3px #eab308, 5px 3px #eab308, 6px 3px #eab308, 7px 3px #eab308, 8px 3px #eab308, 9px 3px #eab308, 10px 3px #eab308, 1px 4px #eab308, 2px 4px #eab308, 3px 4px #eab308, 4px 4px #eab308, 5px 4px #eab308, 6px 4px #eab308, 7px 4px #eab308, 8px 4px #eab308, 9px 4px #eab308, 10px 4px #eab308, 1px 5px #eab308, 2px 5px #eab308, 3px 5px #eab308, 4px 5px #eab308, 5px 5px #eab308, 6px 5px #eab308, 7px 5px #eab308, 8px 5px #eab308, 9px 5px #eab308, 10px 5px #eab308, 2px 6px #facc15, 3px 6px #facc15, 4px 6px #facc15, 5px 6px #facc15, 6px 6px #facc15, 7px 6px #facc15, 8px 6px #facc15, 9px 6px #facc15, 3px 7px #facc15, 4px 7px #facc15, 5px 7px #facc15, 6px 7px #facc15, 7px 7px #facc15, 8px 7px #facc15;
  }
}`,
  html: '<div class="EggElectric"></div>',
  params: [
    { name: "--ele-speed", label: "Speed", type: "duration", default: 1.5, min: 0.5, max: 5, step: 0.25, unit: "s" },
    { name: "--ele-scale", label: "Scale", type: "range", default: 3, min: 2, max: 5, step: 0.5, unit: "x" },
    { name: "--ele-glow", label: "Glow", type: "color", default: "#eab308" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};

export default EggElectric;
