import type { Animation } from "../data/animations";

const pixelMushroom: Animation = {
  slug: "pixel-mushroom",
  name: "Pixel Mushroom",
  category: "pixel",
  description:
    "Pixel art mushroom with bouncing animation. Classic Mario-style power-up mushroom with squish effect.",
  tags: ["pixel", "mushroom", "retro", "8-bit", "pixel-art", "box-shadow", "mario", "bounce"],
  css: `.pixel-mushroom {
  width: 1px;
  height: 1px;
  position: relative;
  left: -20px;
  top: -20px;
  transform: scale(3);
  animation: pm-bounce 1s ease-in-out infinite;
}

@keyframes pm-bounce {
  0%, 100% {
    box-shadow: 2px 0px #ef4444, 3px 0px #ef4444, 4px 0px #ef4444, 5px 0px #ef4444, 1px 1px #fef3c7, 2px 1px #ef4444, 3px 1px #ef4444, 4px 1px #ef4444, 5px 1px #ef4444, 6px 1px #fef3c7, 0px 2px #ef4444, 2px 2px #ef4444, 3px 2px #ef4444, 4px 2px #ef4444, 5px 2px #ef4444, 7px 2px #ef4444, 0px 3px #ef4444, 1px 3px #fef3c7, 2px 3px #ef4444, 3px 3px #ef4444, 4px 3px #ef4444, 5px 3px #ef4444, 6px 3px #fef3c7, 7px 3px #ef4444, 2px 4px #92400e, 3px 4px #92400e, 4px 4px #92400e, 5px 4px #92400e, 3px 5px #92400e, 4px 5px #92400e, 3px 6px #92400e, 4px 6px #92400e, 2px 7px #92400e, 3px 7px #92400e, 4px 7px #92400e, 5px 7px #92400e;
    transform: scale(3) translateY(0);
  }
  50% {
    box-shadow: 1px 0px #fef3c7, 2px 0px #ef4444, 3px 0px #ef4444, 4px 0px #ef4444, 5px 0px #ef4444, 6px 0px #fef3c7, 0px 1px #ef4444, 1px 1px #fef3c7, 2px 1px #ef4444, 3px 1px #ef4444, 4px 1px #ef4444, 5px 1px #ef4444, 6px 1px #fef3c7, 7px 1px #ef4444, 0px 2px #ef4444, 2px 2px #ef4444, 3px 2px #ef4444, 4px 2px #ef4444, 5px 2px #ef4444, 7px 2px #ef4444, 0px 3px #ef4444, 1px 3px #fef3c7, 2px 3px #ef4444, 3px 3px #ef4444, 4px 3px #ef4444, 5px 3px #ef4444, 6px 3px #fef3c7, 7px 3px #ef4444, 2px 4px #92400e, 3px 4px #92400e, 4px 4px #92400e, 5px 4px #92400e, 3px 5px #92400e, 4px 5px #92400e, 3px 6px #92400e, 4px 6px #92400e, 3px 7px #92400e, 4px 7px #92400e;
    transform: scale(3.1) translateY(-4px);
  }
}`,
  html: '<div class="pixel-mushroom"></div>',
  params: [],
  preview: { width: 300, height: 220, darkBg: true },
};

export default pixelMushroom;
