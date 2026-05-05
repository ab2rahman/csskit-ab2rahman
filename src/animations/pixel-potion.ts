import type { Animation } from "../data/animations";

const pixelPotion: Animation = {
  slug: "pixel-potion",
  name: "Pixel Potion",
  category: "pixel",
  description:
    "Pixel art potion with bubbling animation. RPG-style magic potion with purple liquid and bubbles.",
  tags: ["pixel", "potion", "retro", "8-bit", "pixel-art", "box-shadow", "rpg", "magic"],
  css: `.pixel-potion {
  width: 1px;
  height: 1px;
  position: relative;
  left: -14px;
  top: -22px;
  transform: scale(3);
  animation: pp-bubble 0.8s steps(1) infinite;
}

@keyframes pp-bubble {
  0%, 100% {
    box-shadow: 2px 0px #e9d5ff, 3px 0px #e9d5ff, 2px 1px #e9d5ff, 3px 1px #e9d5ff, 1px 2px #e9d5ff, 2px 2px #e9d5ff, 3px 2px #e9d5ff, 4px 2px #e9d5ff, 0px 3px #7c3aed, 1px 3px #c084fc, 2px 3px #a855f7, 3px 3px #a855f7, 4px 3px #a855f7, 5px 3px #7c3aed, 0px 4px #7c3aed, 1px 4px #a855f7, 2px 4px #a855f7, 3px 4px #a855f7, 4px 4px #a855f7, 5px 4px #7c3aed, 0px 5px #7c3aed, 1px 5px #a855f7, 2px 5px #a855f7, 3px 5px #a855f7, 4px 5px #a855f7, 5px 5px #7c3aed, 0px 6px #7c3aed, 1px 6px #a855f7, 2px 6px #a855f7, 3px 6px #a855f7, 4px 6px #a855f7, 5px 6px #7c3aed, 1px 7px #a855f7, 2px 7px #a855f7, 3px 7px #a855f7, 4px 7px #a855f7, 2px 8px #a855f7, 3px 8px #a855f7;
  }
  50% {
    box-shadow: 2px 0px #e9d5ff, 3px 0px #e9d5ff, 2px 1px #e9d5ff, 3px 1px #e9d5ff, 1px 2px #e9d5ff, 2px 2px #e9d5ff, 3px 2px #e9d5ff, 4px 2px #e9d5ff, 0px 3px #7c3aed, 2px 3px #a855f7, 3px 3px #a855f7, 4px 3px #a855f7, 5px 3px #7c3aed, 0px 4px #7c3aed, 1px 4px #a855f7, 2px 4px #a855f7, 3px 4px #a855f7, 4px 4px #a855f7, 5px 4px #7c3aed, 0px 5px #7c3aed, 1px 5px #a855f7, 2px 5px #a855f7, 3px 5px #a855f7, 4px 5px #a855f7, 5px 5px #7c3aed, 0px 6px #7c3aed, 1px 6px #a855f7, 2px 6px #a855f7, 3px 6px #a855f7, 4px 6px #a855f7, 5px 6px #7c3aed, 1px 7px #a855f7, 2px 7px #a855f7, 3px 7px #a855f7, 4px 7px #a855f7, 2px 8px #a855f7, 3px 8px #a855f7;
  }
}`,
  html: '<div class="pixel-potion"></div>',
  params: [],
  preview: { width: 300, height: 220, darkBg: true },
};

export default pixelPotion;
