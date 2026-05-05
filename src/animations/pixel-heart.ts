import type { Animation } from "../data/animations";

const pixelHeart: Animation = {
  slug: "pixel-heart",
  name: "Pixel Heart",
  category: "pixel",
  description:
    "Pixel art heart with a heartbeat animation. Pure CSS box-shadow pixel art with pulsing love.",
  tags: ["pixel", "heart", "retro", "8-bit", "pixel-art", "box-shadow", "love"],
  css: `.pixel-heart {
  width: 1px;
  height: 1px;
  position: relative;
  left: -24px;
  top: -24px;
  transform: scale(4);
  animation: ph-beat 1s ease-in-out infinite;
}

@keyframes ph-beat {
  0%, 100% {
    box-shadow: 2px 0px #ff6b81, 3px 0px #ff6b81, 6px 0px #ff6b81, 7px 0px #ff6b81, 1px 1px #ff4757, 2px 1px #ff4757, 3px 1px #e74c3c, 4px 1px #e74c3c, 5px 1px #e74c3c, 6px 1px #e74c3c, 7px 1px #ff4757, 8px 1px #ff4757, 0px 2px #e74c3c, 1px 2px #e74c3c, 2px 2px #e74c3c, 3px 2px #e74c3c, 4px 2px #e74c3c, 5px 2px #e74c3c, 6px 2px #e74c3c, 7px 2px #e74c3c, 8px 2px #e74c3c, 9px 2px #e74c3c, 0px 3px #e74c3c, 1px 3px #e74c3c, 2px 3px #e74c3c, 3px 3px #e74c3c, 4px 3px #e74c3c, 5px 3px #e74c3c, 6px 3px #e74c3c, 7px 3px #e74c3c, 8px 3px #e74c3c, 9px 3px #e74c3c, 0px 4px #e74c3c, 1px 4px #e74c3c, 2px 4px #e74c3c, 3px 4px #e74c3c, 4px 4px #e74c3c, 5px 4px #e74c3c, 6px 4px #e74c3c, 7px 4px #e74c3c, 8px 4px #e74c3c, 9px 4px #e74c3c, 1px 5px #e74c3c, 2px 5px #e74c3c, 3px 5px #e74c3c, 4px 5px #e74c3c, 5px 5px #e74c3c, 6px 5px #e74c3c, 7px 5px #e74c3c, 8px 5px #e74c3c, 2px 6px #e74c3c, 3px 6px #e74c3c, 4px 6px #e74c3c, 5px 6px #e74c3c, 6px 6px #e74c3c, 7px 6px #e74c3c, 3px 7px #c0392b, 4px 7px #c0392b, 5px 7px #c0392b, 6px 7px #c0392b, 4px 8px #c0392b, 5px 8px #c0392b;
  }
  15% {
    box-shadow: 2px 0px #ff6b81, 3px 0px #ff6b81, 6px 0px #ff6b81, 7px 0px #ff6b81, 1px 1px #ff4757, 2px 1px #ff4757, 3px 1px #e74c3c, 4px 1px #e74c3c, 5px 1px #e74c3c, 6px 1px #e74c3c, 7px 1px #ff4757, 8px 1px #ff4757, 0px 2px #e74c3c, 1px 2px #e74c3c, 2px 2px #e74c3c, 3px 2px #e74c3c, 4px 2px #e74c3c, 5px 2px #e74c3c, 6px 2px #e74c3c, 7px 2px #e74c3c, 8px 2px #e74c3c, 9px 2px #e74c3c, 0px 3px #e74c3c, 1px 3px #e74c3c, 2px 3px #e74c3c, 3px 3px #e74c3c, 4px 3px #e74c3c, 5px 3px #e74c3c, 6px 3px #e74c3c, 7px 3px #e74c3c, 8px 3px #e74c3c, 9px 3px #e74c3c, 1px 4px #e74c3c, 2px 4px #e74c3c, 3px 4px #e74c3c, 4px 4px #e74c3c, 5px 4px #e74c3c, 6px 4px #e74c3c, 7px 4px #e74c3c, 8px 4px #e74c3c, 2px 5px #e74c3c, 3px 5px #e74c3c, 4px 5px #e74c3c, 5px 5px #e74c3c, 6px 5px #e74c3c, 7px 5px #e74c3c, 3px 6px #c0392b, 4px 6px #c0392b, 5px 6px #c0392b, 6px 6px #c0392b, 4px 7px #c0392b, 5px 7px #c0392b;
    transform: scale(4.3);
  }
  30% {
    box-shadow: 2px 0px #ff6b81, 3px 0px #ff6b81, 6px 0px #ff6b81, 7px 0px #ff6b81, 1px 1px #ff4757, 2px 1px #ff4757, 3px 1px #e74c3c, 4px 1px #e74c3c, 5px 1px #e74c3c, 6px 1px #e74c3c, 7px 1px #ff4757, 8px 1px #ff4757, 0px 2px #e74c3c, 1px 2px #e74c3c, 2px 2px #e74c3c, 3px 2px #e74c3c, 4px 2px #e74c3c, 5px 2px #e74c3c, 6px 2px #e74c3c, 7px 2px #e74c3c, 8px 2px #e74c3c, 9px 2px #e74c3c, 0px 3px #e74c3c, 1px 3px #e74c3c, 2px 3px #e74c3c, 3px 3px #e74c3c, 4px 3px #e74c3c, 5px 3px #e74c3c, 6px 3px #e74c3c, 7px 3px #e74c3c, 8px 3px #e74c3c, 9px 3px #e74c3c, 0px 4px #e74c3c, 1px 4px #e74c3c, 2px 4px #e74c3c, 3px 4px #e74c3c, 4px 4px #e74c3c, 5px 4px #e74c3c, 6px 4px #e74c3c, 7px 4px #e74c3c, 8px 4px #e74c3c, 9px 4px #e74c3c, 1px 5px #e74c3c, 2px 5px #e74c3c, 3px 5px #e74c3c, 4px 5px #e74c3c, 5px 5px #e74c3c, 6px 5px #e74c3c, 7px 5px #e74c3c, 8px 5px #e74c3c, 2px 6px #e74c3c, 3px 6px #e74c3c, 4px 6px #e74c3c, 5px 6px #e74c3c, 6px 6px #e74c3c, 7px 6px #e74c3c, 3px 7px #c0392b, 4px 7px #c0392b, 5px 7px #c0392b, 6px 7px #c0392b, 4px 8px #c0392b, 5px 8px #c0392b;
    transform: scale(4);
  }
  45% {
    box-shadow: 2px 0px #ff6b81, 3px 0px #ff6b81, 6px 0px #ff6b81, 7px 0px #ff6b81, 1px 1px #ff4757, 2px 1px #ff4757, 3px 1px #e74c3c, 4px 1px #e74c3c, 5px 1px #e74c3c, 6px 1px #e74c3c, 7px 1px #ff4757, 8px 1px #ff4757, 0px 2px #e74c3c, 1px 2px #e74c3c, 2px 2px #e74c3c, 3px 2px #e74c3c, 4px 2px #e74c3c, 5px 2px #e74c3c, 6px 2px #e74c3c, 7px 2px #e74c3c, 8px 2px #e74c3c, 9px 2px #e74c3c, 0px 3px #e74c3c, 1px 3px #e74c3c, 2px 3px #e74c3c, 3px 3px #e74c3c, 4px 3px #e74c3c, 5px 3px #e74c3c, 6px 3px #e74c3c, 7px 3px #e74c3c, 8px 3px #e74c3c, 9px 3px #e74c3c, 1px 4px #e74c3c, 2px 4px #e74c3c, 3px 4px #e74c3c, 4px 4px #e74c3c, 5px 4px #e74c3c, 6px 4px #e74c3c, 7px 4px #e74c3c, 8px 4px #e74c3c, 2px 5px #e74c3c, 3px 5px #e74c3c, 4px 5px #e74c3c, 5px 5px #e74c3c, 6px 5px #e74c3c, 7px 5px #e74c3c, 3px 6px #c0392b, 4px 6px #c0392b, 5px 6px #c0392b, 6px 6px #c0392b, 4px 7px #c0392b, 5px 7px #c0392b;
    transform: scale(4.15);
  }
  60% {
    box-shadow: 2px 0px #ff6b81, 3px 0px #ff6b81, 6px 0px #ff6b81, 7px 0px #ff6b81, 1px 1px #ff4757, 2px 1px #ff4757, 3px 1px #e74c3c, 4px 1px #e74c3c, 5px 1px #e74c3c, 6px 1px #e74c3c, 7px 1px #ff4757, 8px 1px #ff4757, 0px 2px #e74c3c, 1px 2px #e74c3c, 2px 2px #e74c3c, 3px 2px #e74c3c, 4px 2px #e74c3c, 5px 2px #e74c3c, 6px 2px #e74c3c, 7px 2px #e74c3c, 8px 2px #e74c3c, 9px 2px #e74c3c, 0px 3px #e74c3c, 1px 3px #e74c3c, 2px 3px #e74c3c, 3px 3px #e74c3c, 4px 3px #e74c3c, 5px 3px #e74c3c, 6px 3px #e74c3c, 7px 3px #e74c3c, 8px 3px #e74c3c, 9px 3px #e74c3c, 0px 4px #e74c3c, 1px 4px #e74c3c, 2px 4px #e74c3c, 3px 4px #e74c3c, 4px 4px #e74c3c, 5px 4px #e74c3c, 6px 4px #e74c3c, 7px 4px #e74c3c, 8px 4px #e74c3c, 9px 4px #e74c3c, 1px 5px #e74c3c, 2px 5px #e74c3c, 3px 5px #e74c3c, 4px 5px #e74c3c, 5px 5px #e74c3c, 6px 5px #e74c3c, 7px 5px #e74c3c, 8px 5px #e74c3c, 2px 6px #e74c3c, 3px 6px #e74c3c, 4px 6px #e74c3c, 5px 6px #e74c3c, 6px 6px #e74c3c, 7px 6px #e74c3c, 3px 7px #c0392b, 4px 7px #c0392b, 5px 7px #c0392b, 6px 7px #c0392b, 4px 8px #c0392b, 5px 8px #c0392b;
    transform: scale(4);
  }
}`,
  html: '<div class="pixel-heart"></div>',
  params: [],
  preview: { width: 300, height: 200, darkBg: true },
};

export default pixelHeart;
