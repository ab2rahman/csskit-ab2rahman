import type { Animation } from "../data/animations";

const pixelSword: Animation = {
  slug: "pixel-sword",
  name: "Pixel Sword",
  category: "pixel",
  description:
    "Pixel art sword with gleaming blade animation. Pure CSS box-shadow pixel art with a shining steel effect.",
  tags: ["pixel", "sword", "retro", "8-bit", "pixel-art", "box-shadow", "weapon", "rpg"],
  css: `.pixel-sword {
  width: 1px;
  height: 1px;
  position: relative;
  left: -20px;
  top: -36px;
  transform: scale(3);
  animation: psword-gleam 1.2s ease-in-out infinite;
}

@keyframes psword-gleam {
  0%, 100% {
    box-shadow: 4px 0px #ecf0f1, 4px 1px #ecf0f1, 3px 2px #bdc3c7, 4px 2px #ecf0f1, 5px 2px #bdc3c7, 3px 3px #bdc3c7, 4px 3px #ecf0f1, 5px 3px #bdc3c7, 3px 4px #bdc3c7, 4px 4px #ecf0f1, 5px 4px #bdc3c7, 3px 5px #bdc3c7, 4px 5px #ecf0f1, 5px 5px #bdc3c7, 3px 6px #bdc3c7, 4px 6px #ecf0f1, 5px 6px #bdc3c7, 3px 7px #bdc3c7, 4px 7px #ecf0f1, 5px 7px #bdc3c7, 3px 8px #bdc3c7, 4px 8px #ecf0f1, 5px 8px #bdc3c7, 3px 9px #bdc3c7, 4px 9px #ecf0f1, 5px 9px #bdc3c7, 1px 10px #f1c40f, 2px 10px #f1c40f, 3px 10px #f1c40f, 4px 10px #f1c40f, 5px 10px #f1c40f, 6px 10px #f1c40f, 7px 10px #f1c40f, 0px 11px #d4a017, 1px 11px #d4a017, 2px 11px #d4a017, 3px 11px #d4a017, 5px 11px #d4a017, 6px 11px #d4a017, 7px 11px #d4a017, 8px 11px #d4a017, 4px 12px #8b4513, 3px 13px #8b4513, 4px 13px #8b4513, 2px 14px #d4a017, 4px 14px #d4a017, 1px 15px #d4a017, 5px 15px #d4a017;
  }
  50% {
    box-shadow: 4px 0px #ffffff, 4px 1px #ffffff, 3px 2px #ffffff, 4px 2px #ffffff, 5px 2px #ffffff, 3px 3px #ffffff, 4px 3px #ffffff, 5px 3px #ffffff, 3px 4px #ffffff, 4px 4px #ffffff, 5px 4px #ffffff, 3px 5px #ffffff, 4px 5px #ffffff, 5px 5px #ffffff, 3px 6px #ffffff, 4px 6px #ffffff, 5px 6px #ffffff, 3px 7px #ffffff, 4px 7px #ffffff, 5px 7px #ffffff, 3px 8px #ffffff, 4px 8px #ffffff, 5px 8px #ffffff, 3px 9px #ffffff, 4px 9px #ffffff, 5px 9px #ffffff, 1px 10px #f1c40f, 2px 10px #f1c40f, 3px 10px #f1c40f, 4px 10px #f1c40f, 5px 10px #f1c40f, 6px 10px #f1c40f, 7px 10px #f1c40f, 0px 11px #f1c40f, 1px 11px #f1c40f, 2px 11px #f1c40f, 3px 11px #f1c40f, 5px 11px #f1c40f, 6px 11px #f1c40f, 7px 11px #f1c40f, 8px 11px #f1c40f, 4px 12px #8b4513, 3px 13px #8b4513, 4px 13px #8b4513, 2px 14px #f1c40f, 4px 14px #f1c40f, 1px 15px #f1c40f, 5px 15px #f1c40f;
    transform: scale(3.1);
  }
}`,
  html: '<div class="pixel-sword"></div>',
  params: [],
  preview: { width: 300, height: 250, darkBg: true },
};

export default pixelSword;
