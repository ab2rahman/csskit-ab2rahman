import type { Animation } from "../data/animations";

const PixelTreasure: Animation = {
  slug: "pixel-treasure",
  name: "Pixel Treasure",
  category: "pixel",
  description:
    "Complex pixel art treasure chest with opening animation. RPG loot chest with gold coins and gem sparkle cycle.",
  tags: ["pixel", "treasure", "retro", "8-bit", "pixel-art", "box-shadow", "rpg", "loot"],
  css: `.pixelTreasure {
  --pt-speed: 1.5s;
  --pt-scale: 3;
  --pt-glow: #fbbf24;
  width: 1px;
  height: 1px;
  position: relative;
  left: -34px;
  top: -22px;
  transform: scale(var(--pt-scale));
  animation: pt-open var(--pt-speed) ease-in-out infinite;
}

.pixelTreasure {
  filter: drop-shadow(0 0 3px var(--pt-glow));
}

@keyframes pt-open {
  0%, 20% {
    box-shadow: 1px 1px #92400e, 2px 1px #92400e, 3px 1px #92400e, 4px 1px #92400e, 5px 1px #92400e, 6px 1px #92400e, 7px 1px #92400e, 8px 1px #92400e, 9px 1px #92400e, 10px 1px #92400e, 11px 1px #92400e, 12px 1px #92400e, 1px 2px #92400e, 2px 2px #92400e, 3px 2px #92400e, 4px 2px #92400e, 5px 2px #92400e, 6px 2px #92400e, 7px 2px #ef4444, 8px 2px #92400e, 9px 2px #92400e, 10px 2px #92400e, 11px 2px #92400e, 12px 2px #92400e, 0px 3px #78350f, 1px 3px #92400e, 2px 3px #92400e, 3px 3px #92400e, 4px 3px #92400e, 5px 3px #92400e, 6px 3px #92400e, 7px 3px #fbbf24, 8px 3px #92400e, 9px 3px #92400e, 10px 3px #92400e, 11px 3px #92400e, 12px 3px #92400e, 13px 3px #78350f, 0px 4px #92400e, 1px 4px #92400e, 2px 4px #92400e, 3px 4px #92400e, 4px 4px #92400e, 5px 4px #92400e, 6px 4px #92400e, 7px 4px #92400e, 8px 4px #92400e, 9px 4px #92400e, 10px 4px #92400e, 11px 4px #92400e, 12px 4px #92400e, 13px 4px #92400e, 0px 5px #92400e, 1px 5px #92400e, 2px 5px #92400e, 3px 5px #92400e, 4px 5px #92400e, 5px 5px #92400e, 6px 5px #92400e, 7px 5px #92400e, 8px 5px #92400e, 9px 5px #92400e, 10px 5px #92400e, 11px 5px #92400e, 12px 5px #92400e, 13px 5px #92400e, 0px 6px #92400e, 1px 6px #92400e, 2px 6px #92400e, 3px 6px #92400e, 4px 6px #92400e, 5px 6px #92400e, 6px 6px #92400e, 7px 6px #92400e, 8px 6px #92400e, 9px 6px #92400e, 10px 6px #92400e, 11px 6px #92400e, 12px 6px #92400e, 13px 6px #92400e, 1px 7px #92400e, 2px 7px #92400e, 3px 7px #92400e, 4px 7px #92400e, 5px 7px #92400e, 6px 7px #92400e, 7px 7px #92400e, 8px 7px #92400e, 9px 7px #92400e, 10px 7px #92400e, 11px 7px #92400e, 12px 7px #92400e, 2px 8px #92400e, 3px 8px #92400e, 4px 8px #92400e, 5px 8px #92400e, 6px 8px #92400e, 7px 8px #92400e, 8px 8px #92400e, 9px 8px #92400e, 10px 8px #92400e, 11px 8px #92400e;
  }
  40%, 60% {
    box-shadow: 4px 0px #92400e, 5px 0px #92400e, 6px 0px #92400e, 7px 0px #92400e, 8px 0px #92400e, 9px 0px #92400e, 3px 1px #92400e, 4px 1px #92400e, 5px 1px #92400e, 6px 1px #92400e, 7px 1px #92400e, 8px 1px #92400e, 9px 1px #92400e, 10px 1px #92400e, 2px 2px #92400e, 3px 2px #92400e, 4px 2px #92400e, 5px 2px #92400e, 6px 2px #92400e, 7px 2px #ef4444, 8px 2px #92400e, 9px 2px #92400e, 10px 2px #92400e, 11px 2px #92400e, 1px 3px #92400e, 2px 3px #92400e, 3px 3px #92400e, 4px 3px #92400e, 5px 3px #92400e, 6px 3px #92400e, 7px 3px #fbbf24, 8px 3px #92400e, 9px 3px #92400e, 10px 3px #92400e, 11px 3px #92400e, 12px 3px #92400e, 0px 5px #fde68a, 1px 5px #fbbf24, 2px 5px #fde68a, 3px 5px #fde68a, 4px 5px #fbbf24, 5px 5px #fde68a, 6px 5px #fde68a, 7px 5px #fbbf24, 8px 5px #fde68a, 9px 5px #fde68a, 10px 5px #fbbf24, 11px 5px #fde68a, 12px 5px #fde68a, 13px 5px #fbbf24, 0px 6px #92400e, 1px 6px #92400e, 2px 6px #92400e, 3px 6px #92400e, 4px 6px #92400e, 5px 6px #92400e, 6px 6px #92400e, 7px 6px #92400e, 8px 6px #92400e, 9px 6px #92400e, 10px 6px #92400e, 11px 6px #92400e, 12px 6px #92400e, 13px 6px #92400e, 1px 7px #92400e, 2px 7px #92400e, 3px 7px #92400e, 4px 7px #92400e, 5px 7px #92400e, 6px 7px #92400e, 7px 7px #92400e, 8px 7px #92400e, 9px 7px #92400e, 10px 7px #92400e, 11px 7px #92400e, 12px 7px #92400e, 2px 8px #92400e, 3px 8px #92400e, 4px 8px #92400e, 5px 8px #92400e, 6px 8px #92400e, 7px 8px #92400e, 8px 8px #92400e, 9px 8px #92400e, 10px 8px #92400e, 11px 8px #92400e;
    transform: scale(var(--pt-scale)) translateY(-2px);
  }
  80%, 100% {
    box-shadow: 1px 1px #92400e, 2px 1px #92400e, 3px 1px #92400e, 4px 1px #92400e, 5px 1px #92400e, 6px 1px #92400e, 7px 1px #92400e, 8px 1px #92400e, 9px 1px #92400e, 10px 1px #92400e, 11px 1px #92400e, 12px 1px #92400e, 1px 2px #92400e, 2px 2px #92400e, 3px 2px #92400e, 4px 2px #92400e, 5px 2px #92400e, 6px 2px #92400e, 7px 2px #ef4444, 8px 2px #92400e, 9px 2px #92400e, 10px 2px #92400e, 11px 2px #92400e, 12px 2px #92400e, 0px 3px #78350f, 1px 3px #92400e, 2px 3px #92400e, 3px 3px #92400e, 4px 3px #92400e, 5px 3px #92400e, 6px 3px #92400e, 7px 3px #fbbf24, 8px 3px #92400e, 9px 3px #92400e, 10px 3px #92400e, 11px 3px #92400e, 12px 3px #92400e, 13px 3px #78350f, 0px 4px #92400e, 1px 4px #92400e, 2px 4px #92400e, 3px 4px #92400e, 4px 4px #92400e, 5px 4px #92400e, 6px 4px #92400e, 7px 4px #92400e, 8px 4px #92400e, 9px 4px #92400e, 10px 4px #92400e, 11px 4px #92400e, 12px 4px #92400e, 13px 4px #92400e, 0px 5px #92400e, 1px 5px #92400e, 2px 5px #92400e, 3px 5px #92400e, 4px 5px #92400e, 5px 5px #92400e, 6px 5px #92400e, 7px 5px #92400e, 8px 5px #92400e, 9px 5px #92400e, 10px 5px #92400e, 11px 5px #92400e, 12px 5px #92400e, 13px 5px #92400e, 0px 6px #92400e, 1px 6px #92400e, 2px 6px #92400e, 3px 6px #92400e, 4px 6px #92400e, 5px 6px #92400e, 6px 6px #92400e, 7px 6px #92400e, 8px 6px #92400e, 9px 6px #92400e, 10px 6px #92400e, 11px 6px #92400e, 12px 6px #92400e, 13px 6px #92400e, 1px 7px #92400e, 2px 7px #92400e, 3px 7px #92400e, 4px 7px #92400e, 5px 7px #92400e, 6px 7px #92400e, 7px 7px #92400e, 8px 7px #92400e, 9px 7px #92400e, 10px 7px #92400e, 11px 7px #92400e, 12px 7px #92400e, 2px 8px #92400e, 3px 8px #92400e, 4px 8px #92400e, 5px 8px #92400e, 6px 8px #92400e, 7px 8px #92400e, 8px 8px #92400e, 9px 8px #92400e, 10px 8px #92400e, 11px 8px #92400e;
  }
}`,
  html: '<div class="pixelTreasure"></div>',
  params: [
    { name: "--pt-speed", label: "Speed", type: "duration", default: 1.5, min: 0.5, max: 5, step: 0.25, unit: "s" },
    { name: "--pt-scale", label: "Scale", type: "range", default: 3, min: 2, max: 5, step: 0.5, unit: "x" },
    { name: "--pt-glow", label: "Gold Glow", type: "color", default: "#fbbf24" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};

export default PixelTreasure;
