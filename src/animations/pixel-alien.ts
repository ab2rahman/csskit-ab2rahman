import type { Animation } from "../data/animations";

const pixelAlien: Animation = {
  slug: "pixel-alien",
  name: "Pixel Alien",
  category: "pixel",
  description:
    "Pixel art space invader alien with arm animation. Classic arcade-style extraterrestrial with waving arms.",
  tags: ["pixel", "alien", "retro", "8-bit", "pixel-art", "box-shadow", "space", "invader"],
  css: `.pixel-alien {
  width: 1px;
  height: 1px;
  position: relative;
  left: -18px;
  top: -26px;
  transform: scale(3);
  animation: pal-move 0.8s steps(1) infinite;
}

@keyframes pal-move {
  0%, 100% {
    box-shadow: 3px 0px #22c55e, 4px 0px #22c55e, 2px 1px #22c55e, 3px 1px #22c55e, 4px 1px #22c55e, 5px 1px #22c55e, 1px 2px #22c55e, 2px 2px #22c55e, 3px 2px #22c55e, 4px 2px #22c55e, 5px 2px #22c55e, 6px 2px #22c55e, 1px 3px #22c55e, 3px 3px #000000, 4px 3px #000000, 6px 3px #22c55e, 1px 4px #22c55e, 2px 4px #22c55e, 3px 4px #22c55e, 4px 4px #22c55e, 5px 4px #22c55e, 6px 4px #22c55e, 2px 5px #22c55e, 3px 5px #22c55e, 4px 5px #22c55e, 5px 5px #22c55e, 3px 6px #22c55e, 4px 6px #22c55e, 1px 7px #22c55e, 3px 7px #22c55e, 4px 7px #22c55e, 6px 7px #22c55e, 0px 8px #22c55e, 3px 8px #22c55e, 4px 8px #22c55e, 7px 8px #22c55e, 3px 9px #22c55e, 4px 9px #22c55e, 2px 10px #22c55e, 5px 10px #22c55e;
  }
  50% {
    box-shadow: 3px 0px #22c55e, 4px 0px #22c55e, 2px 1px #22c55e, 3px 1px #22c55e, 4px 1px #22c55e, 5px 1px #22c55e, 1px 2px #22c55e, 2px 2px #22c55e, 3px 2px #22c55e, 4px 2px #22c55e, 5px 2px #22c55e, 6px 2px #22c55e, 1px 3px #22c55e, 3px 3px #000000, 4px 3px #000000, 6px 3px #22c55e, 1px 4px #22c55e, 2px 4px #22c55e, 3px 4px #22c55e, 4px 4px #22c55e, 5px 4px #22c55e, 6px 4px #22c55e, 2px 5px #22c55e, 3px 5px #22c55e, 4px 5px #22c55e, 5px 5px #22c55e, 3px 6px #22c55e, 4px 6px #22c55e, 0px 7px #22c55e, 3px 7px #22c55e, 4px 7px #22c55e, 7px 7px #22c55e, 3px 8px #22c55e, 4px 8px #22c55e, 2px 9px #22c55e, 5px 9px #22c55e, 1px 10px #22c55e, 6px 10px #22c55e;
  }
}`,
  html: '<div class="pixel-alien"></div>',
  params: [],
  preview: { width: 300, height: 220, darkBg: true },
};

export default pixelAlien;
