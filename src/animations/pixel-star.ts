import type { Animation } from "../data/animations";

const pixelStar: Animation = {
  slug: "pixel-star",
  name: "Pixel Star",
  category: "pixel",
  description:
    "Pixel art star with twinkling animation. Pure CSS box-shadow pixel art with a golden shimmer effect.",
  tags: ["pixel", "star", "retro", "8-bit", "pixel-art", "box-shadow", "gold", "twinkle"],
  css: `.pixel-star {
  width: 1px;
  height: 1px;
  position: relative;
  left: -24px;
  top: -24px;
  transform: scale(4);
  animation: ps-twinkle 0.8s steps(1) infinite;
}

@keyframes ps-twinkle {
  0%, 100% {
    box-shadow: 5px 0px #f9e547, 5px 1px #f9e547, 4px 2px #f9e547, 5px 2px #f9e547, 6px 2px #f9e547, 4px 3px #f9e547, 5px 3px #f9e547, 6px 3px #f9e547, 0px 4px #f9e547, 1px 4px #f9e547, 2px 4px #f9e547, 3px 4px #f9e547, 4px 4px #ffffff, 5px 4px #ffffff, 6px 4px #ffffff, 7px 4px #f9e547, 8px 4px #f9e547, 9px 4px #f9e547, 10px 4px #f9e547, 1px 5px #f1c40f, 2px 5px #f1c40f, 3px 5px #f1c40f, 4px 5px #f1c40f, 5px 5px #f1c40f, 6px 5px #f1c40f, 7px 5px #f1c40f, 8px 5px #f1c40f, 9px 5px #f1c40f, 2px 6px #f1c40f, 3px 6px #f1c40f, 4px 6px #f1c40f, 5px 6px #f1c40f, 6px 6px #f1c40f, 7px 6px #f1c40f, 8px 6px #f1c40f, 2px 7px #d4a017, 3px 7px #d4a017, 7px 7px #d4a017, 8px 7px #d4a017, 1px 8px #d4a017, 2px 8px #d4a017, 8px 8px #d4a017, 9px 8px #d4a017, 1px 9px #d4a017, 9px 9px #d4a017;
  }
  50% {
    box-shadow: 5px 0px #f9e547, 5px 1px #e67e22, 4px 2px #e67e22, 5px 2px #f9e547, 6px 2px #f9e547, 4px 3px #f9e547, 5px 3px #f9e547, 6px 3px #e67e22, 0px 4px #f9e547, 1px 4px #f9e547, 2px 4px #e67e22, 3px 4px #ffffff, 4px 4px #ffffff, 5px 4px #ffffff, 6px 4px #ffffff, 7px 4px #ffffff, 8px 4px #e67e22, 9px 4px #f9e547, 10px 4px #f9e547, 1px 5px #e67e22, 2px 5px #f1c40f, 3px 5px #f1c40f, 4px 5px #e67e22, 5px 5px #f1c40f, 6px 5px #f1c40f, 7px 5px #e67e22, 8px 5px #f1c40f, 9px 5px #f1c40f, 2px 6px #f1c40f, 3px 6px #e67e22, 4px 6px #f1c40f, 5px 6px #f1c40f, 6px 6px #e67e22, 7px 6px #f1c40f, 8px 6px #f1c40f, 2px 7px #e67e22, 3px 7px #d4a017, 7px 7px #d4a017, 8px 7px #e67e22, 1px 8px #e67e22, 2px 8px #d4a017, 8px 8px #d4a017, 9px 8px #d4a017, 1px 9px #d4a017, 9px 9px #e67e22;
  }
}`,
  html: '<div class="pixel-star"></div>',
  params: [],
  preview: { width: 300, height: 200, darkBg: true },
};

export default pixelStar;
