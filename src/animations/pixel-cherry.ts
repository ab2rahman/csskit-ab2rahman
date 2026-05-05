import type { Animation } from "../data/animations";

const pixelCherry: Animation = {
  slug: "pixel-cherry",
  name: "Pixel Cherry",
  category: "pixel",
  description:
    "Pixel art cherry pair with bouncing animation. Cute retro fruit with stems and sweet bounce effect.",
  tags: ["pixel", "cherry", "retro", "8-bit", "pixel-art", "box-shadow", "fruit", "bounce"],
  css: `.pixel-cherry {
  width: 1px;
  height: 1px;
  position: relative;
  left: -18px;
  top: -28px;
  transform: scale(3);
  animation: pch-bounce 0.8s ease-in-out infinite;
}

@keyframes pch-bounce {
  0%, 100% {
    box-shadow: 3px 0px #22c55e, 2px 1px #22c55e, 3px 1px #22c55e, 5px 1px #22c55e, 2px 2px #22c55e, 6px 2px #22c55e, 1px 3px #22c55e, 7px 3px #22c55e, 2px 5px #ef4444, 3px 5px #ef4444, 1px 6px #ef4444, 2px 6px #ef4444, 3px 6px #ef4444, 4px 6px #ef4444, 1px 7px #ef4444, 2px 7px #ef4444, 3px 7px #ef4444, 4px 7px #ef4444, 2px 8px #ef4444, 3px 8px #ef4444, 4px 9px #ef4444, 5px 9px #ef4444, 3px 10px #ef4444, 4px 10px #ef4444, 5px 10px #ef4444, 6px 10px #ef4444, 3px 11px #ef4444, 4px 11px #ef4444, 5px 11px #ef4444, 6px 11px #ef4444;
  }
  50% {
    box-shadow: 3px 1px #22c55e, 2px 2px #22c55e, 3px 2px #22c55e, 5px 2px #22c55e, 2px 3px #22c55e, 6px 3px #22c55e, 1px 4px #16a34a, 7px 4px #16a34a, 2px 5px #ef4444, 3px 5px #ef4444, 1px 6px #ef4444, 2px 6px #ef4444, 3px 6px #ef4444, 4px 6px #ef4444, 1px 7px #ef4444, 2px 7px #ef4444, 3px 7px #ef4444, 4px 7px #ef4444, 2px 8px #ef4444, 3px 8px #ef4444, 4px 9px #ef4444, 5px 9px #ef4444, 3px 10px #ef4444, 4px 10px #ef4444, 5px 10px #ef4444, 6px 10px #ef4444, 3px 11px #ef4444, 4px 11px #ef4444, 5px 11px #ef4444, 6px 11px #ef4444;
    transform: scale(3) translateY(-3px);
  }
}`,
  html: '<div class="pixel-cherry"></div>',
  params: [],
  preview: { width: 300, height: 220, darkBg: true },
};

export default pixelCherry;
