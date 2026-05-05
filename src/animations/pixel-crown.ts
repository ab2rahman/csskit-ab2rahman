import type { Animation } from "../data/animations";

const pixelCrown: Animation = {
  slug: "pixel-crown",
  name: "Pixel Crown",
  category: "pixel",
  description:
    "Pixel art crown with shimmer animation. Royal golden crown with gemstones and glowing effect.",
  tags: ["pixel", "crown", "retro", "8-bit", "pixel-art", "box-shadow", "royal", "gold"],
  css: `.pixel-crown {
  width: 1px;
  height: 1px;
  position: relative;
  left: -22px;
  top: -14px;
  transform: scale(3);
  animation: pcr-shimmer 1.2s ease-in-out infinite;
}

@keyframes pcr-shimmer {
  0%, 100% {
    box-shadow: 0px 0px #fbbf24, 3px 0px #fbbf24, 5px 0px #fbbf24, 8px 0px #fbbf24, 0px 1px #fbbf24, 1px 1px #fbbf24, 4px 1px #fbbf24, 7px 1px #fbbf24, 8px 1px #fbbf24, 0px 2px #fbbf24, 1px 2px #ef4444, 2px 2px #fbbf24, 3px 2px #fbbf24, 4px 2px #ef4444, 5px 2px #fbbf24, 6px 2px #fbbf24, 7px 2px #ef4444, 8px 2px #fbbf24, 0px 3px #fbbf24, 1px 3px #ef4444, 2px 3px #fbbf24, 3px 3px #fbbf24, 4px 3px #ef4444, 5px 3px #fbbf24, 6px 3px #fbbf24, 7px 3px #ef4444, 8px 3px #fbbf24, 1px 4px #fbbf24, 2px 4px #fbbf24, 3px 4px #fbbf24, 4px 4px #fbbf24, 5px 4px #fbbf24, 6px 4px #fbbf24, 7px 4px #fbbf24, 1px 5px #fbbf24, 2px 5px #fbbf24, 3px 5px #fbbf24, 4px 5px #fbbf24, 5px 5px #fbbf24, 6px 5px #fbbf24, 7px 5px #fbbf24;
  }
  50% {
    box-shadow: 0px 0px #fde68a, 3px 0px #fde68a, 5px 0px #fde68a, 8px 0px #fde68a, 0px 1px #fde68a, 1px 1px #fde68a, 4px 1px #fde68a, 7px 1px #fde68a, 8px 1px #fde68a, 0px 2px #fde68a, 1px 2px #ff6b81, 2px 2px #fde68a, 3px 2px #fde68a, 4px 2px #ff6b81, 5px 2px #fde68a, 6px 2px #fde68a, 7px 2px #ff6b81, 8px 2px #fde68a, 0px 3px #fde68a, 1px 3px #ff6b81, 2px 3px #fde68a, 3px 3px #fde68a, 4px 3px #ff6b81, 5px 3px #fde68a, 6px 3px #fde68a, 7px 3px #ff6b81, 8px 3px #fde68a, 1px 4px #fbbf24, 2px 4px #fde68a, 3px 4px #fbbf24, 4px 4px #fbbf24, 5px 4px #fde68a, 6px 4px #fbbf24, 7px 4px #fbbf24, 1px 5px #fde68a, 2px 5px #fbbf24, 3px 5px #fbbf24, 4px 5px #fde68a, 5px 5px #fbbf24, 6px 5px #fbbf24, 7px 5px #fde68a;
    transform: scale(3.1);
  }
}`,
  html: '<div class="pixel-crown"></div>',
  params: [],
  preview: { width: 300, height: 220, darkBg: true },
};

export default pixelCrown;
