import type { Animation } from "../data/animations";

const PixelCat: Animation = {
  slug: "pixel-cat",
  name: "Pixel Cat",
  category: "pixel",
  description:
    "Complex pixel art cat with tail wag animation. Cute feline with expressive eyes and tail movement cycle.",
  tags: ["pixel", "cat", "retro", "8-bit", "pixel-art", "box-shadow", "cute", "animal"],
  css: `.pixelCat {
  --pc-speed: 0.8s;
  --pc-scale: 3;
  --pc-eye: #22c55e;
  width: 1px;
  height: 1px;
  position: relative;
  left: -28px;
  top: -24px;
  transform: scale(var(--pc-scale));
  animation: pc-tail var(--pc-speed) ease-in-out infinite;
}

.pixelCat {
  filter: drop-shadow(0 0 2px var(--pc-eye));
}

@keyframes pc-tail {
  0%, 100% {
    box-shadow: 2px 0px #f97316, 3px 0px #f97316, 8px 0px #f97316, 9px 0px #f97316, 2px 1px #f97316, 3px 1px #f97316, 8px 1px #f97316, 9px 1px #f97316, 3px 2px #f97316, 5px 2px #f97316, 6px 2px #f97316, 8px 2px #f97316, 2px 3px #f97316, 3px 3px #f97316, 4px 3px #f97316, 5px 3px #f97316, 6px 3px #f97316, 7px 3px #f97316, 8px 3px #f97316, 9px 3px #f97316, 2px 4px #f97316, 4px 4px #15803d, 5px 4px #f97316, 6px 4px #fbbf24, 8px 4px #15803d, 9px 4px #f97316, 2px 5px #f97316, 3px 5px #f97316, 4px 5px #f97316, 5px 5px #f97316, 6px 5px #f472b6, 7px 5px #f97316, 8px 5px #f97316, 9px 5px #f97316, 2px 6px #f97316, 3px 6px #f97316, 4px 6px #f97316, 5px 6px #f97316, 6px 6px #f97316, 7px 6px #f97316, 8px 6px #f97316, 9px 6px #f97316, 3px 7px #ea580c, 4px 7px #ea580c, 5px 7px #ea580c, 6px 7px #ea580c, 7px 7px #ea580c, 8px 7px #ea580c, 9px 7px #ea580c, 4px 8px #ea580c, 5px 8px #ea580c, 6px 8px #ea580c, 7px 8px #ea580c, 8px 8px #ea580c, 5px 9px #ea580c, 6px 9px #ea580c, 7px 9px #ea580c;
  }
  50% {
    box-shadow: 2px 0px #f97316, 3px 0px #f97316, 8px 0px #f97316, 9px 0px #f97316, 2px 1px #f97316, 3px 1px #f97316, 8px 1px #f97316, 9px 1px #f97316, 3px 2px #f97316, 5px 2px #f97316, 6px 2px #f97316, 8px 2px #f97316, 2px 3px #f97316, 3px 3px #f97316, 4px 3px #f97316, 5px 3px #f97316, 6px 3px #f97316, 7px 3px #f97316, 8px 3px #f97316, 9px 3px #f97316, 2px 4px #f97316, 4px 4px #15803d, 5px 4px #f97316, 6px 4px #fbbf24, 8px 4px #15803d, 9px 4px #f97316, 2px 5px #f97316, 3px 5px #f97316, 4px 5px #f97316, 5px 5px #f97316, 6px 5px #f472b6, 7px 5px #f97316, 8px 5px #f97316, 9px 5px #f97316, 2px 6px #f97316, 3px 6px #f97316, 4px 6px #f97316, 5px 6px #f97316, 6px 6px #f97316, 7px 6px #f97316, 8px 6px #f97316, 9px 6px #f97316, 3px 7px #ea580c, 4px 7px #ea580c, 5px 7px #ea580c, 6px 7px #ea580c, 7px 7px #ea580c, 8px 7px #ea580c, 9px 7px #ea580c, 4px 8px #ea580c, 5px 8px #ea580c, 6px 8px #ea580c, 7px 8px #ea580c, 8px 8px #ea580c, 11px 8px #ea580c, 5px 9px #ea580c, 6px 9px #ea580c, 7px 9px #ea580c, 10px 9px #ea580c, 11px 9px #ea580c;
    transform: scale(var(--pc-scale)) translateY(-1px);
  }
}`,
  html: '<div class="pixelCat"></div>',
  params: [
    { name: "--pc-speed", label: "Speed", type: "duration", default: 0.8, min: 0.3, max: 3, step: 0.1, unit: "s" },
    { name: "--pc-scale", label: "Scale", type: "range", default: 3, min: 2, max: 5, step: 0.5, unit: "x" },
    { name: "--pc-eye", label: "Eye Color", type: "color", default: "#22c55e" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};

export default PixelCat;
