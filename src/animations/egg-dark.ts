import type { Animation } from "../data/animations";

const EggDark: Animation = {
  slug: "egg-dark",
  name: "Dark Egg",
  category: "pixel",
  description:
    "Shadowy dark elemental egg with purple mist",
  tags: ["pixel", "egg", "dark", "monster-taming", "pixel-art", "box-shadow", "element"],
  css: `.EggDark {
  --dar-speed: 1.5s;
  --dar-scale: 3;
  --dar-glow: #7c3aed;
  width: 1px;
  height: 1px;
  position: relative;
  left: -28px;
  top: -20px;
  transform: scale(var(--dar-scale));
  filter: drop-shadow(0 0 4px var(--dar-glow));
  animation: dar-hatch var(--dar-speed) ease-in-out infinite;
}

@keyframes dar-hatch {
  0%, 70%, 100% {
    box-shadow: 4px 0px #a78bfa, 5px 0px #a78bfa, 6px 0px #a78bfa, 7px 0px #a78bfa, 3px 1px #a78bfa, 4px 1px #a78bfa, 5px 1px #a78bfa, 6px 1px #a78bfa, 7px 1px #a78bfa, 8px 1px #a78bfa, 2px 2px #7c3aed, 3px 2px #7c3aed, 4px 2px #7c3aed, 5px 2px #7c3aed, 6px 2px #7c3aed, 7px 2px #7c3aed, 8px 2px #7c3aed, 9px 2px #7c3aed, 1px 3px #7c3aed, 2px 3px #7c3aed, 3px 3px #7c3aed, 4px 3px #7c3aed, 5px 3px #7c3aed, 6px 3px #7c3aed, 7px 3px #7c3aed, 8px 3px #7c3aed, 9px 3px #7c3aed, 10px 3px #7c3aed, 1px 4px #7c3aed, 2px 4px #7c3aed, 3px 4px #7c3aed, 4px 4px #7c3aed, 5px 4px #7c3aed, 6px 4px #7c3aed, 7px 4px #7c3aed, 8px 4px #7c3aed, 9px 4px #7c3aed, 10px 4px #7c3aed, 1px 5px #7c3aed, 2px 5px #7c3aed, 3px 5px #7c3aed, 4px 5px #7c3aed, 5px 5px #7c3aed, 6px 5px #7c3aed, 7px 5px #7c3aed, 8px 5px #7c3aed, 9px 5px #7c3aed, 10px 5px #7c3aed, 2px 6px #6d28d9, 3px 6px #6d28d9, 4px 6px #6d28d9, 5px 6px #6d28d9, 6px 6px #6d28d9, 7px 6px #6d28d9, 8px 6px #6d28d9, 9px 6px #6d28d9, 3px 7px #6d28d9, 4px 7px #6d28d9, 5px 7px #6d28d9, 6px 7px #6d28d9, 7px 7px #6d28d9, 8px 7px #6d28d9;
  }
  10% {
    transform: scale(var(--dar-scale)) rotate(5deg);
  }
  20% {
    transform: scale(var(--dar-scale)) rotate(-5deg);
  }
  30% {
    transform: scale(var(--dar-scale)) rotate(3deg);
  }
  40% {
    transform: scale(var(--dar-scale)) rotate(-3deg);
  }
  50% {
    box-shadow: 4px 0px #ffffff, 6px 0px #ffffff, 7px 0px #a78bfa, 3px 1px #ffffff, 4px 1px #ffffff, 6px 1px #ffffff, 7px 1px #a78bfa, 8px 1px #a78bfa, 9px 1px #a78bfa, 2px 2px #7c3aed, 4px 2px #7c3aed, 5px 2px #7c3aed, 6px 2px #7c3aed, 7px 2px #7c3aed, 8px 2px #7c3aed, 9px 2px #7c3aed, 1px 3px #7c3aed, 2px 3px #7c3aed, 3px 3px #7c3aed, 4px 3px #7c3aed, 5px 3px #7c3aed, 6px 3px #7c3aed, 7px 3px #7c3aed, 8px 3px #7c3aed, 9px 3px #7c3aed, 10px 3px #7c3aed, 1px 4px #7c3aed, 2px 4px #7c3aed, 3px 4px #7c3aed, 4px 4px #7c3aed, 5px 4px #7c3aed, 6px 4px #7c3aed, 7px 4px #7c3aed, 8px 4px #7c3aed, 9px 4px #7c3aed, 10px 4px #7c3aed, 1px 5px #7c3aed, 2px 5px #7c3aed, 3px 5px #7c3aed, 4px 5px #7c3aed, 5px 5px #7c3aed, 6px 5px #7c3aed, 7px 5px #7c3aed, 8px 5px #7c3aed, 9px 5px #7c3aed, 10px 5px #7c3aed, 2px 6px #6d28d9, 3px 6px #6d28d9, 4px 6px #6d28d9, 5px 6px #6d28d9, 6px 6px #6d28d9, 7px 6px #6d28d9, 8px 6px #6d28d9, 9px 6px #6d28d9, 3px 7px #6d28d9, 4px 7px #6d28d9, 5px 7px #6d28d9, 6px 7px #6d28d9, 7px 7px #6d28d9, 8px 7px #6d28d9;
    filter: drop-shadow(0 0 12px var(--dar-glow));
    transform: scale(var(--dar-scale)) rotate(0deg) scale(1.05);
  }
  60% {
    box-shadow: 4px 0px #a78bfa, 5px 0px #a78bfa, 6px 0px #a78bfa, 7px 0px #a78bfa, 3px 1px #a78bfa, 4px 1px #a78bfa, 5px 1px #a78bfa, 6px 1px #a78bfa, 7px 1px #a78bfa, 8px 1px #a78bfa, 2px 2px #7c3aed, 3px 2px #7c3aed, 4px 2px #7c3aed, 5px 2px #7c3aed, 6px 2px #7c3aed, 7px 2px #7c3aed, 8px 2px #7c3aed, 9px 2px #7c3aed, 1px 3px #7c3aed, 2px 3px #7c3aed, 3px 3px #7c3aed, 4px 3px #7c3aed, 5px 3px #7c3aed, 6px 3px #7c3aed, 7px 3px #7c3aed, 8px 3px #7c3aed, 9px 3px #7c3aed, 10px 3px #7c3aed, 1px 4px #7c3aed, 2px 4px #7c3aed, 3px 4px #7c3aed, 4px 4px #7c3aed, 5px 4px #7c3aed, 6px 4px #7c3aed, 7px 4px #7c3aed, 8px 4px #7c3aed, 9px 4px #7c3aed, 10px 4px #7c3aed, 1px 5px #7c3aed, 2px 5px #7c3aed, 3px 5px #7c3aed, 4px 5px #7c3aed, 5px 5px #7c3aed, 6px 5px #7c3aed, 7px 5px #7c3aed, 8px 5px #7c3aed, 9px 5px #7c3aed, 10px 5px #7c3aed, 2px 6px #6d28d9, 3px 6px #6d28d9, 4px 6px #6d28d9, 5px 6px #6d28d9, 6px 6px #6d28d9, 7px 6px #6d28d9, 8px 6px #6d28d9, 9px 6px #6d28d9, 3px 7px #6d28d9, 4px 7px #6d28d9, 5px 7px #6d28d9, 6px 7px #6d28d9, 7px 7px #6d28d9, 8px 7px #6d28d9;
  }
}`,
  html: '<div class="EggDark"></div>',
  params: [
    { name: "--dar-speed", label: "Speed", type: "duration", default: 1.5, min: 0.5, max: 5, step: 0.25, unit: "s" },
    { name: "--dar-scale", label: "Scale", type: "range", default: 3, min: 2, max: 5, step: 0.5, unit: "x" },
    { name: "--dar-glow", label: "Glow", type: "color", default: "#7c3aed" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};

export default EggDark;
