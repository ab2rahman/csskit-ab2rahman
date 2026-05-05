import type { Animation } from "../data/animations";

const pixelGhost: Animation = {
  slug: "pixel-ghost",
  name: "Pixel Ghost",
  category: "pixel",
  description:
    "Pixel art ghost with floating animation. Cute retro ghost bobbing up and down like Pac-Man style.",
  tags: ["pixel", "ghost", "retro", "8-bit", "pixel-art", "box-shadow", "pac-man", "float"],
  css: `.pixel-ghost {
  width: 1px;
  height: 1px;
  position: relative;
  left: -20px;
  top: -22px;
  transform: scale(3);
  animation: pgh-float 1.5s ease-in-out infinite;
}

@keyframes pgh-float {
  0%, 100% {
    box-shadow: 2px 0px #f1f5f9, 3px 0px #f1f5f9, 4px 0px #f1f5f9, 5px 0px #f1f5f9, 1px 1px #f1f5f9, 2px 1px #f1f5f9, 3px 1px #f1f5f9, 4px 1px #f1f5f9, 5px 1px #f1f5f9, 6px 1px #f1f5f9, 0px 2px #e2e8f0, 1px 2px #f1f5f9, 2px 2px #f1f5f9, 3px 2px #f1f5f9, 4px 2px #f1f5f9, 5px 2px #f1f5f9, 6px 2px #f1f5f9, 7px 2px #e2e8f0, 0px 3px #f1f5f9, 2px 3px #1e293b, 3px 3px #f1f5f9, 5px 3px #1e293b, 6px 3px #94a3b8, 7px 3px #f1f5f9, 0px 4px #e2e8f0, 1px 4px #f1f5f9, 2px 4px #f1f5f9, 3px 4px #f1f5f9, 4px 4px #f1f5f9, 5px 4px #f1f5f9, 6px 4px #f1f5f9, 7px 4px #e2e8f0, 0px 5px #e2e8f0, 1px 5px #f1f5f9, 2px 5px #f1f5f9, 3px 5px #f1f5f9, 4px 5px #f1f5f9, 5px 5px #f1f5f9, 6px 5px #f1f5f9, 7px 5px #e2e8f0, 0px 6px #e2e8f0, 1px 6px #f1f5f9, 2px 6px #f1f5f9, 3px 6px #f1f5f9, 4px 6px #f1f5f9, 5px 6px #f1f5f9, 6px 6px #f1f5f9, 7px 6px #e2e8f0, 0px 7px #e2e8f0, 1px 7px #f1f5f9, 2px 7px #f1f5f9, 3px 7px #f1f5f9, 4px 7px #f1f5f9, 5px 7px #f1f5f9, 6px 7px #f1f5f9, 7px 7px #e2e8f0, 0px 8px #f1f5f9, 2px 8px #e2e8f0, 3px 8px #f1f5f9, 5px 8px #e2e8f0, 6px 8px #f1f5f9;
    transform: scale(3) translateY(0);
  }
  50% {
    box-shadow: 2px 0px #f1f5f9, 3px 0px #f1f5f9, 4px 0px #f1f5f9, 5px 0px #f1f5f9, 1px 1px #f1f5f9, 2px 1px #f1f5f9, 3px 1px #f1f5f9, 4px 1px #f1f5f9, 5px 1px #f1f5f9, 6px 1px #f1f5f9, 0px 2px #e2e8f0, 1px 2px #f1f5f9, 2px 2px #f1f5f9, 3px 2px #f1f5f9, 4px 2px #f1f5f9, 5px 2px #f1f5f9, 6px 2px #f1f5f9, 7px 2px #e2e8f0, 0px 3px #f1f5f9, 2px 3px #1e293b, 3px 3px #f1f5f9, 5px 3px #1e293b, 6px 3px #94a3b8, 7px 3px #f1f5f9, 0px 4px #e2e8f0, 1px 4px #f1f5f9, 2px 4px #f1f5f9, 3px 4px #f1f5f9, 4px 4px #f1f5f9, 5px 4px #f1f5f9, 6px 4px #f1f5f9, 7px 4px #e2e8f0, 0px 5px #e2e8f0, 1px 5px #f1f5f9, 2px 5px #f1f5f9, 3px 5px #f1f5f9, 4px 5px #f1f5f9, 5px 5px #f1f5f9, 6px 5px #f1f5f9, 7px 5px #e2e8f0, 0px 6px #e2e8f0, 1px 6px #f1f5f9, 2px 6px #f1f5f9, 3px 6px #f1f5f9, 4px 6px #f1f5f9, 5px 6px #f1f5f9, 6px 6px #f1f5f9, 7px 6px #e2e8f0, 0px 7px #e2e8f0, 1px 7px #f1f5f9, 2px 7px #f1f5f9, 3px 7px #f1f5f9, 4px 7px #f1f5f9, 5px 7px #f1f5f9, 6px 7px #f1f5f9, 7px 7px #e2e8f0, 1px 8px #f1f5f9, 3px 8px #f1f5f9, 4px 8px #f1f5f9, 6px 8px #f1f5f9, 7px 8px #e2e8f0;
    transform: scale(3) translateY(-6px);
  }
}`,
  html: '<div class="pixel-ghost"></div>',
  params: [],
  preview: { width: 300, height: 220, darkBg: true },
};

export default pixelGhost;
