import type { Animation } from "../data/animations";

const PixelBomb: Animation = {
  slug: "pixel-bomb",
  name: "Pixel Bomb",
  category: "pixel",
  description:
    "Complex pixel art bomb with fuse spark animation. Retro video game bomb with flashing fuse and glow effect.",
  tags: ["pixel", "bomb", "retro", "8-bit", "pixel-art", "box-shadow", "explosive", "fuse"],
  css: `.pixelBomb {
  --pb-speed: 0.6s;
  --pb-scale: 2.5;
  --pb-spark: #f97316;
  width: 1px;
  height: 1px;
  position: relative;
  left: -34px;
  top: -28px;
  transform: scale(var(--pb-scale));
  animation: pb-fuse var(--pb-speed) steps(1) infinite;
}

.pixelBomb {
  filter: drop-shadow(0 0 3px var(--pb-spark));
}

@keyframes pb-fuse {
  0%, 100% {
    box-shadow: 6px 0px #6b7280, 7px 0px #6b7280, 6px 1px #6b7280, 7px 1px #6b7280, 5px 2px #9ca3af, 6px 2px #9ca3af, 7px 2px #9ca3af, 8px 2px #9ca3af, 4px 3px #9ca3af, 5px 3px #9ca3af, 6px 3px #9ca3af, 7px 3px #9ca3af, 8px 3px #9ca3af, 9px 3px #9ca3af, 3px 4px #4b5563, 4px 4px #4b5563, 5px 4px #4b5563, 6px 4px #4b5563, 7px 4px #ef4444, 8px 4px #4b5563, 9px 4px #4b5563, 10px 4px #4b5563, 2px 5px #4b5563, 3px 5px #4b5563, 4px 5px #4b5563, 5px 5px #4b5563, 6px 5px #4b5563, 7px 5px #ef4444, 8px 5px #4b5563, 9px 5px #4b5563, 10px 5px #4b5563, 11px 5px #4b5563, 1px 6px #374151, 2px 6px #374151, 3px 6px #374151, 4px 6px #374151, 5px 6px #374151, 6px 6px #374151, 7px 6px #374151, 8px 6px #374151, 9px 6px #374151, 10px 6px #374151, 11px 6px #374151, 12px 6px #374151, 1px 7px #374151, 2px 7px #374151, 3px 7px #374151, 4px 7px #374151, 5px 7px #374151, 6px 7px #374151, 7px 7px #374151, 8px 7px #374151, 9px 7px #374151, 10px 7px #374151, 11px 7px #374151, 12px 7px #374151, 2px 8px #374151, 3px 8px #374151, 4px 8px #374151, 5px 8px #374151, 6px 8px #374151, 7px 8px #374151, 8px 8px #374151, 9px 8px #374151, 10px 8px #374151, 11px 8px #374151, 3px 9px #374151, 4px 9px #374151, 5px 9px #374151, 6px 9px #374151, 7px 9px #374151, 8px 9px #374151, 9px 9px #374151, 10px 9px #374151, 4px 10px #374151, 5px 10px #374151, 6px 10px #374151, 7px 10px #374151, 8px 10px #374151, 9px 10px #374151;
  }
  50% {
    box-shadow: 4px 0px #fef08a, 5px 0px #fef08a, 8px 0px #fef08a, 9px 0px #fef08a, 4px 1px #f97316, 6px 1px #f97316, 7px 1px #f97316, 9px 1px #f97316, 5px 2px #9ca3af, 6px 2px #9ca3af, 7px 2px #9ca3af, 8px 2px #9ca3af, 5px 3px #9ca3af, 6px 3px #9ca3af, 7px 3px #9ca3af, 8px 3px #9ca3af, 4px 4px #4b5563, 5px 4px #4b5563, 6px 4px #4b5563, 7px 4px #ef4444, 8px 4px #4b5563, 9px 4px #4b5563, 3px 5px #4b5563, 4px 5px #4b5563, 5px 5px #4b5563, 6px 5px #4b5563, 7px 5px #ef4444, 8px 5px #4b5563, 9px 5px #4b5563, 10px 5px #4b5563, 2px 6px #374151, 3px 6px #374151, 4px 6px #374151, 5px 6px #374151, 6px 6px #374151, 7px 6px #374151, 8px 6px #374151, 9px 6px #374151, 10px 6px #374151, 11px 6px #374151, 1px 7px #374151, 2px 7px #374151, 3px 7px #374151, 4px 7px #374151, 5px 7px #374151, 6px 7px #374151, 7px 7px #374151, 8px 7px #374151, 9px 7px #374151, 10px 7px #374151, 11px 7px #374151, 12px 7px #374151, 1px 8px #374151, 2px 8px #374151, 3px 8px #374151, 4px 8px #374151, 5px 8px #374151, 6px 8px #374151, 7px 8px #374151, 8px 8px #374151, 9px 8px #374151, 10px 8px #374151, 11px 8px #374151, 12px 8px #374151, 2px 9px #374151, 3px 9px #374151, 4px 9px #374151, 5px 9px #374151, 6px 9px #374151, 7px 9px #374151, 8px 9px #374151, 9px 9px #374151, 10px 9px #374151, 11px 9px #374151, 3px 10px #374151, 4px 10px #374151, 5px 10px #374151, 6px 10px #374151, 7px 10px #374151, 8px 10px #374151, 9px 10px #374151, 10px 10px #374151, 4px 11px #374151, 5px 11px #374151, 6px 11px #374151, 7px 11px #374151, 8px 11px #374151, 9px 11px #374151;
    filter: drop-shadow(0 0 8px var(--pb-spark));
  }
}`,
  html: '<div class="pixelBomb"></div>',
  params: [
    { name: "--pb-speed", label: "Speed", type: "duration", default: 0.6, min: 0.2, max: 2, step: 0.1, unit: "s" },
    { name: "--pb-scale", label: "Scale", type: "range", default: 2.5, min: 1.5, max: 4, step: 0.5, unit: "x" },
    { name: "--pb-spark", label: "Spark Color", type: "color", default: "#f97316" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};

export default PixelBomb;
