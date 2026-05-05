import type { Animation } from "../data/animations";

const pixelSwordShield: Animation = {
  slug: "pixel-sword-shield",
  name: "Pixel Shield",
  category: "pixel",
  description:
    "Pixel art shield with gleaming animation. RPG-style defense shield with metallic shimmer.",
  tags: ["pixel", "shield", "retro", "8-bit", "pixel-art", "box-shadow", "rpg"],
  css: `.pixel-sword-shield {
  width: 1px;
  height: 1px;
  position: relative;
  left: -20px;
  top: -22px;
  transform: scale(3);
  animation: psh-gleam 1.5s ease-in-out infinite;
}

@keyframes psh-gleam {
  0%, 100% {
    box-shadow: 1px 1px #64748b, 2px 1px #94a3b8, 3px 1px #94a3b8, 4px 1px #94a3b8, 5px 1px #94a3b8, 6px 1px #64748b, 0px 2px #fbbf24, 2px 2px #94a3b8, 3px 2px #94a3b8, 4px 2px #94a3b8, 5px 2px #94a3b8, 7px 2px #fbbf24, 0px 3px #fbbf24, 1px 3px #64748b, 2px 3px #94a3b8, 3px 3px #94a3b8, 4px 3px #94a3b8, 5px 3px #94a3b8, 6px 3px #64748b, 7px 3px #fbbf24, 0px 4px #fbbf24, 1px 4px #64748b, 2px 4px #94a3b8, 3px 4px #94a3b8, 4px 4px #94a3b8, 5px 4px #94a3b8, 6px 4px #64748b, 7px 4px #fbbf24, 0px 5px #fbbf24, 1px 5px #64748b, 2px 5px #94a3b8, 3px 5px #94a3b8, 4px 5px #94a3b8, 5px 5px #94a3b8, 6px 5px #64748b, 7px 5px #fbbf24, 1px 6px #64748b, 2px 6px #94a3b8, 3px 6px #94a3b8, 4px 6px #94a3b8, 5px 6px #94a3b8, 6px 6px #64748b, 2px 7px #94a3b8, 3px 7px #94a3b8, 4px 7px #94a3b8, 5px 7px #94a3b8, 3px 8px #94a3b8, 4px 8px #94a3b8;
  }
  50% {
    box-shadow: 1px 1px #cbd5e1, 2px 1px #94a3b8, 3px 1px #94a3b8, 4px 1px #94a3b8, 5px 1px #94a3b8, 6px 1px #cbd5e1, 0px 2px #fbbf24, 2px 2px #94a3b8, 3px 2px #94a3b8, 4px 2px #94a3b8, 5px 2px #94a3b8, 7px 2px #fbbf24, 0px 3px #fbbf24, 1px 3px #cbd5e1, 2px 3px #94a3b8, 3px 3px #cbd5e1, 4px 3px #cbd5e1, 5px 3px #cbd5e1, 6px 3px #cbd5e1, 7px 3px #fbbf24, 0px 4px #fbbf24, 1px 4px #cbd5e1, 2px 4px #94a3b8, 3px 4px #cbd5e1, 4px 4px #cbd5e1, 5px 4px #cbd5e1, 6px 4px #cbd5e1, 7px 4px #fbbf24, 0px 5px #fbbf24, 1px 5px #cbd5e1, 2px 5px #94a3b8, 3px 5px #cbd5e1, 4px 5px #cbd5e1, 5px 5px #cbd5e1, 6px 5px #cbd5e1, 7px 5px #fbbf24, 1px 6px #cbd5e1, 2px 6px #94a3b8, 3px 6px #94a3b8, 4px 6px #94a3b8, 5px 6px #94a3b8, 6px 6px #cbd5e1, 2px 7px #94a3b8, 3px 7px #94a3b8, 4px 7px #94a3b8, 5px 7px #94a3b8, 3px 8px #94a3b8, 4px 8px #94a3b8;
    transform: scale(3.08);
  }
}`,
  html: '<div class="pixel-sword-shield"></div>',
  params: [],
  preview: { width: 300, height: 220, darkBg: true },
};

export default pixelSwordShield;
