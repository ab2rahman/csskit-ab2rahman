import type { Animation } from "../data/animations";

const pixelDiamond: Animation = {
  slug: "pixel-diamond",
  name: "Pixel Diamond",
  category: "pixel",
  description:
    "Pixel art diamond with sparkle animation. Precious gemstone pixel art with glittering light effect.",
  tags: ["pixel", "diamond", "retro", "8-bit", "pixel-art", "box-shadow", "gem", "sparkle"],
  css: `.pixel-diamond {
  width: 1px;
  height: 1px;
  position: relative;
  left: -22px;
  top: -22px;
  transform: scale(3);
  animation: pdi-sparkle 1s steps(1) infinite;
}

@keyframes pdi-sparkle {
  0%, 100% {
    box-shadow: 4px 0px #ffffff, 3px 1px #67e8f9, 4px 1px #67e8f9, 5px 1px #67e8f9, 2px 2px #06b6d4, 3px 2px #67e8f9, 4px 2px #67e8f9, 5px 2px #67e8f9, 6px 2px #06b6d4, 1px 3px #06b6d4, 2px 3px #06b6d4, 3px 3px #06b6d4, 4px 3px #06b6d4, 5px 3px #06b6d4, 6px 3px #06b6d4, 7px 3px #06b6d4, 0px 4px #06b6d4, 1px 4px #06b6d4, 2px 4px #06b6d4, 3px 4px #06b6d4, 4px 4px #06b6d4, 5px 4px #06b6d4, 6px 4px #06b6d4, 7px 4px #06b6d4, 8px 4px #06b6d4, 1px 5px #06b6d4, 2px 5px #06b6d4, 3px 5px #06b6d4, 4px 5px #06b6d4, 5px 5px #06b6d4, 6px 5px #06b6d4, 7px 5px #06b6d4, 2px 6px #0891b2, 3px 6px #0891b2, 4px 6px #0891b2, 5px 6px #0891b2, 6px 6px #0891b2, 3px 7px #0891b2, 4px 7px #0891b2, 5px 7px #0891b2, 4px 8px #0891b2;
  }
  50% {
    box-shadow: 4px 0px #ffffff, 3px 1px #67e8f9, 4px 1px #67e8f9, 5px 1px #67e8f9, 2px 2px #67e8f9, 3px 2px #67e8f9, 4px 2px #67e8f9, 5px 2px #67e8f9, 6px 2px #67e8f9, 1px 3px #ffffff, 2px 3px #67e8f9, 3px 3px #67e8f9, 4px 3px #67e8f9, 5px 3px #67e8f9, 6px 3px #67e8f9, 7px 3px #06b6d4, 0px 4px #ffffff, 1px 4px #06b6d4, 2px 4px #06b6d4, 3px 4px #06b6d4, 4px 4px #ffffff, 5px 4px #06b6d4, 6px 4px #06b6d4, 7px 4px #06b6d4, 8px 4px #ffffff, 1px 5px #06b6d4, 2px 5px #06b6d4, 3px 5px #ffffff, 4px 5px #06b6d4, 5px 5px #06b6d4, 6px 5px #06b6d4, 7px 5px #ffffff, 2px 6px #ffffff, 3px 6px #06b6d4, 4px 6px #06b6d4, 5px 6px #06b6d4, 6px 6px #ffffff, 3px 7px #0891b2, 4px 7px #0891b2, 5px 7px #0891b2, 4px 8px #0891b2;
  }
}`,
  html: '<div class="pixel-diamond"></div>',
  params: [],
  preview: { width: 300, height: 220, darkBg: true },
};

export default pixelDiamond;
