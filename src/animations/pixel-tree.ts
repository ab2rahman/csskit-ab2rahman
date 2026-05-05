import type { Animation } from "../data/animations";

const PixelTree: Animation = {
  slug: "pixel-tree",
  name: "Pixel Tree",
  category: "pixel",
  description:
    "Complex pixel art tree with wind sway animation. Detailed nature pixel art with swaying canopy and trunk.",
  tags: ["pixel", "tree", "retro", "8-bit", "pixel-art", "box-shadow", "nature", "wind"],
  css: `.pixelTree {
  --ptr-speed: 2s;
  --ptr-scale: 2.5;
  --ptr-leaf: #22c55e;
  width: 1px;
  height: 1px;
  position: relative;
  left: -34px;
  top: -34px;
  transform: scale(var(--ptr-scale));
  animation: ptr-wind var(--ptr-speed) ease-in-out infinite;
}

.pixelTree {
  filter: drop-shadow(0 0 2px var(--ptr-leaf));
}

@keyframes ptr-wind {
  0%, 100% {
    box-shadow: 6px 0px #22c55e, 7px 0px #22c55e, 5px 1px #16a34a, 6px 1px #22c55e, 7px 1px #22c55e, 8px 1px #22c55e, 4px 2px #16a34a, 5px 2px #16a34a, 6px 2px #22c55e, 7px 2px #22c55e, 8px 2px #22c55e, 9px 2px #16a34a, 3px 3px #16a34a, 4px 3px #16a34a, 5px 3px #16a34a, 6px 3px #16a34a, 7px 3px #16a34a, 8px 3px #16a34a, 9px 3px #16a34a, 10px 3px #16a34a, 2px 4px #16a34a, 3px 4px #16a34a, 4px 4px #16a34a, 5px 4px #16a34a, 6px 4px #16a34a, 7px 4px #16a34a, 8px 4px #16a34a, 9px 4px #16a34a, 10px 4px #16a34a, 11px 4px #16a34a, 1px 5px #15803d, 2px 5px #15803d, 3px 5px #15803d, 4px 5px #15803d, 5px 5px #15803d, 6px 5px #15803d, 7px 5px #15803d, 8px 5px #15803d, 9px 5px #15803d, 10px 5px #15803d, 11px 5px #15803d, 12px 5px #15803d, 0px 6px #15803d, 1px 6px #15803d, 2px 6px #15803d, 3px 6px #15803d, 4px 6px #15803d, 5px 6px #15803d, 6px 6px #15803d, 7px 6px #15803d, 8px 6px #15803d, 9px 6px #15803d, 10px 6px #15803d, 11px 6px #15803d, 12px 6px #15803d, 13px 6px #15803d, 2px 7px #15803d, 3px 7px #15803d, 4px 7px #15803d, 5px 7px #15803d, 6px 7px #15803d, 7px 7px #15803d, 8px 7px #15803d, 9px 7px #15803d, 10px 7px #15803d, 11px 7px #15803d, 3px 8px #166534, 4px 8px #166534, 5px 8px #166534, 6px 8px #166534, 7px 8px #166534, 8px 8px #166534, 9px 8px #166534, 10px 8px #166534, 4px 9px #166534, 5px 9px #166534, 6px 9px #166534, 7px 9px #166534, 8px 9px #166534, 9px 9px #166534, 5px 10px #92400e, 6px 10px #92400e, 7px 10px #92400e, 8px 10px #92400e, 6px 11px #92400e, 7px 11px #92400e, 6px 12px #92400e, 7px 12px #92400e, 6px 13px #92400e, 7px 13px #92400e;
  }
  50% {
    box-shadow: 5px 0px #16a34a, 6px 0px #22c55e, 4px 1px #16a34a, 5px 1px #16a34a, 6px 1px #22c55e, 7px 1px #22c55e, 3px 2px #16a34a, 4px 2px #16a34a, 5px 2px #16a34a, 6px 2px #22c55e, 7px 2px #22c55e, 8px 2px #22c55e, 2px 3px #16a34a, 3px 3px #16a34a, 4px 3px #16a34a, 5px 3px #16a34a, 6px 3px #16a34a, 7px 3px #16a34a, 8px 3px #16a34a, 9px 3px #16a34a, 1px 4px #16a34a, 2px 4px #16a34a, 3px 4px #16a34a, 4px 4px #16a34a, 5px 4px #16a34a, 6px 4px #16a34a, 7px 4px #16a34a, 8px 4px #16a34a, 9px 4px #16a34a, 10px 4px #16a34a, 0px 5px #15803d, 1px 5px #15803d, 2px 5px #15803d, 3px 5px #15803d, 4px 5px #15803d, 5px 5px #15803d, 6px 5px #15803d, 7px 5px #15803d, 8px 5px #15803d, 9px 5px #15803d, 10px 5px #15803d, 11px 5px #15803d, 0px 6px #15803d, 1px 6px #15803d, 2px 6px #15803d, 3px 6px #15803d, 4px 6px #15803d, 5px 6px #15803d, 6px 6px #15803d, 7px 6px #15803d, 8px 6px #15803d, 9px 6px #15803d, 10px 6px #15803d, 11px 6px #15803d, 12px 6px #15803d, 13px 6px #15803d, 2px 7px #15803d, 3px 7px #15803d, 4px 7px #15803d, 5px 7px #15803d, 6px 7px #15803d, 7px 7px #15803d, 8px 7px #15803d, 9px 7px #15803d, 10px 7px #15803d, 11px 7px #15803d, 3px 8px #166534, 4px 8px #166534, 5px 8px #166534, 6px 8px #166534, 7px 8px #166534, 8px 8px #166534, 9px 8px #166534, 10px 8px #166534, 4px 9px #166534, 5px 9px #166534, 6px 9px #166534, 7px 9px #166534, 8px 9px #166534, 9px 9px #166534, 5px 10px #92400e, 6px 10px #92400e, 7px 10px #92400e, 8px 10px #92400e, 6px 11px #92400e, 7px 11px #92400e, 6px 12px #92400e, 7px 12px #92400e, 6px 13px #92400e, 7px 13px #92400e;
    transform: scale(var(--ptr-scale)) translateX(2px);
  }
}`,
  html: '<div class="pixelTree"></div>',
  params: [
    { name: "--ptr-speed", label: "Wind Speed", type: "duration", default: 2, min: 0.5, max: 6, step: 0.5, unit: "s" },
    { name: "--ptr-scale", label: "Scale", type: "range", default: 2.5, min: 1.5, max: 4, step: 0.5, unit: "x" },
    { name: "--ptr-leaf", label: "Leaf Glow", type: "color", default: "#22c55e" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};

export default PixelTree;
