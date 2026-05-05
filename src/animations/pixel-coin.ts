import type { Animation } from "../data/animations";

const pixelCoin: Animation = {
  slug: "pixel-coin",
  name: "Pixel Coin",
  category: "pixel",
  description:
    "Pixel art coin with spinning animation. Gold coin rotating in 3D perspective with shine effect.",
  tags: ["pixel", "coin", "retro", "8-bit", "pixel-art", "box-shadow", "gold", "spin"],
  css: `.pixel-coin {
  width: 1px;
  height: 1px;
  position: relative;
  left: -20px;
  top: -20px;
  transform: scale(3);
  animation: pcoin-spin 0.9s steps(1) infinite;
}

@keyframes pcoin-spin {
  0% {
    box-shadow: 2px 0px #fbbf24, 3px 0px #fbbf24, 4px 0px #fbbf24, 5px 0px #fbbf24, 1px 1px #fbbf24, 2px 1px #fbbf24, 3px 1px #fbbf24, 4px 1px #fbbf24, 5px 1px #fbbf24, 6px 1px #fbbf24, 0px 2px #fbbf24, 1px 2px #fbbf24, 3px 2px #fef08a, 4px 2px #fef08a, 6px 2px #fbbf24, 7px 2px #fbbf24, 0px 3px #fbbf24, 1px 3px #fbbf24, 2px 3px #fbbf24, 3px 3px #fef08a, 4px 3px #fef08a, 5px 3px #fef08a, 6px 3px #fbbf24, 7px 3px #fbbf24, 0px 4px #fbbf24, 1px 4px #fbbf24, 3px 4px #fef08a, 4px 4px #fef08a, 6px 4px #fbbf24, 7px 4px #fbbf24, 0px 5px #fbbf24, 1px 5px #fbbf24, 2px 5px #fbbf24, 3px 5px #fef08a, 4px 5px #fef08a, 5px 5px #fef08a, 6px 5px #fbbf24, 7px 5px #fbbf24, 1px 6px #fbbf24, 2px 6px #fbbf24, 3px 6px #fbbf24, 4px 6px #fbbf24, 5px 6px #fbbf24, 6px 6px #fbbf24, 2px 7px #fbbf24, 3px 7px #fbbf24, 4px 7px #fbbf24, 5px 7px #fbbf24;
  }
  33% {
    box-shadow: 3px 0px #fbbf24, 4px 0px #fbbf24, 2px 1px #fbbf24, 3px 1px #fbbf24, 4px 1px #fbbf24, 5px 1px #fbbf24, 1px 2px #fbbf24, 3px 2px #fef08a, 4px 2px #fef08a, 6px 2px #fbbf24, 1px 3px #fbbf24, 2px 3px #fbbf24, 3px 3px #fef08a, 4px 3px #fef08a, 5px 3px #fef08a, 6px 3px #fbbf24, 1px 4px #fbbf24, 3px 4px #fef08a, 4px 4px #fef08a, 6px 4px #fbbf24, 1px 5px #fbbf24, 2px 5px #fbbf24, 3px 5px #fef08a, 4px 5px #fef08a, 5px 5px #fef08a, 6px 5px #fbbf24, 2px 6px #fbbf24, 3px 6px #fbbf24, 4px 6px #fbbf24, 5px 6px #fbbf24, 3px 7px #fbbf24, 4px 7px #fbbf24;
  }
  66% {
    box-shadow: 4px 0px #fbbf24, 3px 1px #fbbf24, 4px 1px #fbbf24, 2px 2px #fbbf24, 4px 2px #fef08a, 2px 3px #fbbf24, 3px 3px #fef08a, 4px 3px #fef08a, 2px 4px #fbbf24, 4px 4px #fef08a, 2px 5px #fbbf24, 3px 5px #fef08a, 4px 5px #fef08a, 3px 6px #fbbf24, 4px 6px #fbbf24, 4px 7px #fbbf24;
  }
  100% {
    box-shadow: 3px 0px #fbbf24, 4px 0px #fbbf24, 2px 1px #fbbf24, 3px 1px #fbbf24, 4px 1px #fbbf24, 5px 1px #fbbf24, 1px 2px #fbbf24, 3px 2px #fef08a, 4px 2px #fef08a, 6px 2px #fbbf24, 1px 3px #fbbf24, 2px 3px #fbbf24, 3px 3px #fef08a, 4px 3px #fef08a, 5px 3px #fef08a, 6px 3px #fbbf24, 1px 4px #fbbf24, 3px 4px #fef08a, 4px 4px #fef08a, 6px 4px #fbbf24, 1px 5px #fbbf24, 2px 5px #fbbf24, 3px 5px #fef08a, 4px 5px #fef08a, 5px 5px #fef08a, 6px 5px #fbbf24, 2px 6px #fbbf24, 3px 6px #fbbf24, 4px 6px #fbbf24, 5px 6px #fbbf24, 3px 7px #fbbf24, 4px 7px #fbbf24;
  }
}`,
  html: '<div class="pixel-coin"></div>',
  params: [],
  preview: { width: 300, height: 220, darkBg: true },
};

export default pixelCoin;
