import type { Animation } from "../data/animations";

const EggPsychic: Animation = {
  slug: "egg-psychic",
  name: "Psychic Egg",
  category: "pixel",
  description:
    "Mysterious psychic egg with glowing aura",
  tags: ["pixel", "egg", "psychic", "monster-taming", "pixel-art", "box-shadow", "element"],
  css: `.EggPsychic {
  --psy-speed: 1.5s;
  --psy-scale: 3;
  --psy-glow: #ec4899;
  width: 1px;
  height: 1px;
  position: relative;
  left: -28px;
  top: -20px;
  transform: scale(var(--psy-scale));
  filter: drop-shadow(0 0 4px var(--psy-glow));
  animation: psy-hatch var(--psy-speed) ease-in-out infinite;
}

@keyframes psy-hatch {
  0%, 70%, 100% {
    box-shadow: 4px 0px #f9a8d4, 5px 0px #f9a8d4, 6px 0px #f9a8d4, 7px 0px #f9a8d4, 3px 1px #f9a8d4, 4px 1px #f9a8d4, 5px 1px #f9a8d4, 6px 1px #f9a8d4, 7px 1px #f9a8d4, 8px 1px #f9a8d4, 2px 2px #ec4899, 3px 2px #ec4899, 4px 2px #ec4899, 5px 2px #ec4899, 6px 2px #ec4899, 7px 2px #ec4899, 8px 2px #ec4899, 9px 2px #ec4899, 1px 3px #ec4899, 2px 3px #ec4899, 3px 3px #ec4899, 4px 3px #ec4899, 5px 3px #ec4899, 6px 3px #ec4899, 7px 3px #ec4899, 8px 3px #ec4899, 9px 3px #ec4899, 10px 3px #ec4899, 1px 4px #ec4899, 2px 4px #ec4899, 3px 4px #ec4899, 4px 4px #ec4899, 5px 4px #ec4899, 6px 4px #ec4899, 7px 4px #ec4899, 8px 4px #ec4899, 9px 4px #ec4899, 10px 4px #ec4899, 1px 5px #ec4899, 2px 5px #ec4899, 3px 5px #ec4899, 4px 5px #ec4899, 5px 5px #ec4899, 6px 5px #ec4899, 7px 5px #ec4899, 8px 5px #ec4899, 9px 5px #ec4899, 10px 5px #ec4899, 2px 6px #db2777, 3px 6px #db2777, 4px 6px #db2777, 5px 6px #db2777, 6px 6px #db2777, 7px 6px #db2777, 8px 6px #db2777, 9px 6px #db2777, 3px 7px #db2777, 4px 7px #db2777, 5px 7px #db2777, 6px 7px #db2777, 7px 7px #db2777, 8px 7px #db2777;
  }
  10% {
    transform: scale(var(--psy-scale)) rotate(5deg);
  }
  20% {
    transform: scale(var(--psy-scale)) rotate(-5deg);
  }
  30% {
    transform: scale(var(--psy-scale)) rotate(3deg);
  }
  40% {
    transform: scale(var(--psy-scale)) rotate(-3deg);
  }
  50% {
    box-shadow: 4px 0px #ffffff, 6px 0px #ffffff, 7px 0px #f9a8d4, 3px 1px #ffffff, 4px 1px #ffffff, 6px 1px #ffffff, 7px 1px #f9a8d4, 8px 1px #f9a8d4, 9px 1px #f9a8d4, 2px 2px #ec4899, 4px 2px #ec4899, 5px 2px #ec4899, 6px 2px #ec4899, 7px 2px #ec4899, 8px 2px #ec4899, 9px 2px #ec4899, 1px 3px #ec4899, 2px 3px #ec4899, 3px 3px #ec4899, 4px 3px #ec4899, 5px 3px #ec4899, 6px 3px #ec4899, 7px 3px #ec4899, 8px 3px #ec4899, 9px 3px #ec4899, 10px 3px #ec4899, 1px 4px #ec4899, 2px 4px #ec4899, 3px 4px #ec4899, 4px 4px #ec4899, 5px 4px #ec4899, 6px 4px #ec4899, 7px 4px #ec4899, 8px 4px #ec4899, 9px 4px #ec4899, 10px 4px #ec4899, 1px 5px #ec4899, 2px 5px #ec4899, 3px 5px #ec4899, 4px 5px #ec4899, 5px 5px #ec4899, 6px 5px #ec4899, 7px 5px #ec4899, 8px 5px #ec4899, 9px 5px #ec4899, 10px 5px #ec4899, 2px 6px #db2777, 3px 6px #db2777, 4px 6px #db2777, 5px 6px #db2777, 6px 6px #db2777, 7px 6px #db2777, 8px 6px #db2777, 9px 6px #db2777, 3px 7px #db2777, 4px 7px #db2777, 5px 7px #db2777, 6px 7px #db2777, 7px 7px #db2777, 8px 7px #db2777;
    filter: drop-shadow(0 0 12px var(--psy-glow));
    transform: scale(var(--psy-scale)) rotate(0deg) scale(1.05);
  }
  60% {
    box-shadow: 4px 0px #f9a8d4, 5px 0px #f9a8d4, 6px 0px #f9a8d4, 7px 0px #f9a8d4, 3px 1px #f9a8d4, 4px 1px #f9a8d4, 5px 1px #f9a8d4, 6px 1px #f9a8d4, 7px 1px #f9a8d4, 8px 1px #f9a8d4, 2px 2px #ec4899, 3px 2px #ec4899, 4px 2px #ec4899, 5px 2px #ec4899, 6px 2px #ec4899, 7px 2px #ec4899, 8px 2px #ec4899, 9px 2px #ec4899, 1px 3px #ec4899, 2px 3px #ec4899, 3px 3px #ec4899, 4px 3px #ec4899, 5px 3px #ec4899, 6px 3px #ec4899, 7px 3px #ec4899, 8px 3px #ec4899, 9px 3px #ec4899, 10px 3px #ec4899, 1px 4px #ec4899, 2px 4px #ec4899, 3px 4px #ec4899, 4px 4px #ec4899, 5px 4px #ec4899, 6px 4px #ec4899, 7px 4px #ec4899, 8px 4px #ec4899, 9px 4px #ec4899, 10px 4px #ec4899, 1px 5px #ec4899, 2px 5px #ec4899, 3px 5px #ec4899, 4px 5px #ec4899, 5px 5px #ec4899, 6px 5px #ec4899, 7px 5px #ec4899, 8px 5px #ec4899, 9px 5px #ec4899, 10px 5px #ec4899, 2px 6px #db2777, 3px 6px #db2777, 4px 6px #db2777, 5px 6px #db2777, 6px 6px #db2777, 7px 6px #db2777, 8px 6px #db2777, 9px 6px #db2777, 3px 7px #db2777, 4px 7px #db2777, 5px 7px #db2777, 6px 7px #db2777, 7px 7px #db2777, 8px 7px #db2777;
  }
}`,
  html: '<div class="EggPsychic"></div>',
  params: [
    { name: "--psy-speed", label: "Speed", type: "duration", default: 1.5, min: 0.5, max: 5, step: 0.25, unit: "s" },
    { name: "--psy-scale", label: "Scale", type: "range", default: 3, min: 2, max: 5, step: 0.5, unit: "x" },
    { name: "--psy-glow", label: "Glow", type: "color", default: "#ec4899" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};

export default EggPsychic;
