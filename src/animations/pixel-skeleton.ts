import type { Animation } from "../data/animations";

const pixelSkeleton: Animation = {
  slug: "pixel-skeleton",
  name: "Pixel Skeleton",
  category: "pixel",
  description:
    "Pixel art skeleton with walking animation. Retro RPG-style character with bone-rattling step cycle.",
  tags: ["pixel", "skeleton", "retro", "8-bit", "pixel-art", "box-shadow", "rpg", "walk"],
  css: `.pixel-skeleton {
  width: 1px;
  height: 1px;
  position: relative;
  left: -14px;
  top: -28px;
  transform: scale(3);
  animation: psk-walk 0.6s steps(1) infinite;
}

@keyframes psk-walk {
  0%, 100% {
    box-shadow: 2px 0px #94a3b8, 3px 0px #94a3b8, 1px 1px #94a3b8, 2px 1px #94a3b8, 3px 1px #94a3b8, 4px 1px #94a3b8, 2px 2px #e2e8f0, 3px 2px #e2e8f0, 1px 3px #e2e8f0, 2px 3px #e2e8f0, 3px 3px #e2e8f0, 4px 3px #e2e8f0, 2px 4px #e2e8f0, 3px 4px #e2e8f0, 2px 5px #e2e8f0, 3px 5px #e2e8f0, 1px 6px #94a3b8, 4px 6px #94a3b8, 1px 7px #94a3b8, 4px 7px #94a3b8, 2px 8px #94a3b8, 3px 8px #94a3b8, 2px 9px #94a3b8, 3px 9px #94a3b8, 1px 10px #94a3b8, 4px 10px #94a3b8, 1px 11px #94a3b8, 4px 11px #94a3b8;
  }
  50% {
    box-shadow: 2px 0px #94a3b8, 3px 0px #94a3b8, 1px 1px #94a3b8, 2px 1px #94a3b8, 3px 1px #94a3b8, 4px 1px #94a3b8, 2px 2px #e2e8f0, 3px 2px #e2e8f0, 1px 3px #e2e8f0, 2px 3px #e2e8f0, 3px 3px #e2e8f0, 4px 3px #e2e8f0, 2px 4px #e2e8f0, 3px 4px #e2e8f0, 2px 5px #e2e8f0, 3px 5px #e2e8f0, 1px 6px #94a3b8, 4px 6px #94a3b8, 2px 7px #94a3b8, 4px 7px #94a3b8, 2px 8px #94a3b8, 3px 8px #94a3b8, 2px 9px #94a3b8, 2px 10px #94a3b8, 4px 10px #94a3b8, 3px 11px #94a3b8;
  }
}`,
  html: '<div class="pixel-skeleton"></div>',
  params: [],
  preview: { width: 300, height: 220, darkBg: true },
};

export default pixelSkeleton;
