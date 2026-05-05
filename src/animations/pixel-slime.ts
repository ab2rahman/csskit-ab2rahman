import type { Animation } from "../data/animations";

const PixelSlime: Animation = {
  slug: "pixel-slime",
  name: "Pixel Slime",
  category: "pixel",
  description:
    "Complex pixel art slime with squish bounce animation. RPG-style blob monster with elastic deformation and glow.",
  tags: ["pixel", "slime", "retro", "8-bit", "pixel-art", "box-shadow", "rpg", "monster"],
  css: `.pixelSlime {
  --psl-speed: 0.6s;
  --psl-scale: 3;
  --psl-color: #22c55e;
  width: 1px;
  height: 1px;
  position: relative;
  left: -28px;
  top: -22px;
  transform: scale(var(--psl-scale));
  animation: psl-bounce var(--psl-speed) ease-in-out infinite;
}

.pixelSlime {
  filter: drop-shadow(0 0 4px var(--psl-color));
}

@keyframes psl-bounce {
  0%, 100% {
    box-shadow: 4px 0px #4ade80, 5px 0px #4ade80, 6px 0px #4ade80, 7px 0px #4ade80, 3px 1px #4ade80, 4px 1px #4ade80, 5px 1px #4ade80, 6px 1px #4ade80, 7px 1px #4ade80, 8px 1px #4ade80, 2px 2px #4ade80, 3px 2px #4ade80, 4px 2px #4ade80, 5px 2px #4ade80, 6px 2px #4ade80, 7px 2px #4ade80, 8px 2px #4ade80, 9px 2px #4ade80, 1px 3px #22c55e, 2px 3px #22c55e, 3px 3px #22c55e, 4px 3px #22c55e, 5px 3px #22c55e, 6px 3px #22c55e, 7px 3px #22c55e, 8px 3px #22c55e, 9px 3px #22c55e, 10px 3px #22c55e, 1px 4px #22c55e, 3px 4px #1e293b, 4px 4px #22c55e, 5px 4px #22c55e, 6px 4px #22c55e, 7px 4px #22c55e, 9px 4px #1e293b, 10px 4px #22c55e, 1px 5px #22c55e, 2px 5px #22c55e, 3px 5px #22c55e, 4px 5px #22c55e, 5px 5px #22c55e, 6px 5px #22c55e, 7px 5px #22c55e, 8px 5px #22c55e, 9px 5px #22c55e, 10px 5px #22c55e, 1px 6px #22c55e, 2px 6px #22c55e, 3px 6px #22c55e, 4px 6px #22c55e, 5px 6px #22c55e, 6px 6px #22c55e, 7px 6px #22c55e, 8px 6px #22c55e, 9px 6px #22c55e, 10px 6px #22c55e, 2px 7px #22c55e, 3px 7px #22c55e, 4px 7px #22c55e, 5px 7px #22c55e, 6px 7px #22c55e, 7px 7px #22c55e, 8px 7px #22c55e, 9px 7px #22c55e, 3px 8px #22c55e, 4px 8px #22c55e, 5px 8px #22c55e, 6px 8px #22c55e, 7px 8px #22c55e, 8px 8px #22c55e;
    transform: scale(var(--psl-scale)) scaleX(1.1) scaleY(0.9);
  }
  50% {
    box-shadow: 5px 0px #4ade80, 6px 0px #4ade80, 4px 1px #4ade80, 5px 1px #4ade80, 6px 1px #4ade80, 7px 1px #4ade80, 3px 2px #4ade80, 4px 2px #4ade80, 5px 2px #4ade80, 6px 2px #4ade80, 7px 2px #4ade80, 8px 2px #4ade80, 2px 3px #22c55e, 3px 3px #22c55e, 4px 3px #22c55e, 5px 3px #22c55e, 6px 3px #22c55e, 7px 3px #22c55e, 8px 3px #22c55e, 9px 3px #22c55e, 1px 4px #22c55e, 2px 4px #ffffff, 3px 4px #1e293b, 4px 4px #22c55e, 5px 4px #22c55e, 6px 4px #22c55e, 7px 4px #22c55e, 8px 4px #ffffff, 9px 4px #1e293b, 10px 4px #22c55e, 1px 5px #22c55e, 3px 5px #22c55e, 4px 5px #22c55e, 5px 5px #22c55e, 6px 5px #22c55e, 7px 5px #22c55e, 9px 5px #22c55e, 10px 5px #22c55e, 1px 6px #22c55e, 2px 6px #22c55e, 3px 6px #22c55e, 4px 6px #22c55e, 5px 6px #22c55e, 6px 6px #22c55e, 7px 6px #22c55e, 8px 6px #22c55e, 9px 6px #22c55e, 10px 6px #22c55e, 1px 7px #22c55e, 2px 7px #22c55e, 3px 7px #22c55e, 4px 7px #22c55e, 5px 7px #22c55e, 6px 7px #22c55e, 7px 7px #22c55e, 8px 7px #22c55e, 9px 7px #22c55e, 10px 7px #22c55e, 2px 8px #22c55e, 3px 8px #22c55e, 4px 8px #22c55e, 5px 8px #22c55e, 6px 8px #22c55e, 7px 8px #22c55e, 8px 8px #22c55e, 9px 8px #22c55e;
    transform: scale(var(--psl-scale)) scaleX(0.9) scaleY(1.1) translateY(-6px);
  }
}`,
  html: '<div class="pixelSlime"></div>',
  params: [
    { name: "--psl-speed", label: "Speed", type: "duration", default: 0.6, min: 0.2, max: 3, step: 0.1, unit: "s" },
    { name: "--psl-scale", label: "Scale", type: "range", default: 3, min: 2, max: 5, step: 0.5, unit: "x" },
    { name: "--psl-color", label: "Glow Color", type: "color", default: "#22c55e" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};

export default PixelSlime;
