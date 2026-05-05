import type { Animation } from "../data/animations";

const PixelDragon: Animation = {
  slug: "pixel-dragon",
  name: "Pixel Dragon",
  category: "pixel",
  description:
    "Complex pixel art dragon with fire breath animation. Detailed 16-color dragon with 3-frame flame cycle and customizable glow.",
  tags: ["pixel", "dragon", "retro", "8-bit", "pixel-art", "box-shadow", "fire", "rpg"],
  css: `.pixelDragon {
  --pd-speed: 0.8s;
  --pd-scale: 2.5;
  --pd-glow: #ef4444;
  width: 1px;
  height: 1px;
  position: relative;
  left: -40px;
  top: -32px;
  transform: scale(var(--pd-scale));
  animation: pd-breathe var(--pd-speed) steps(1) infinite;
}

.pixelDragon {
  filter: drop-shadow(0 0 2px var(--pd-glow));
}

@keyframes pd-breathe {
  0%, 100% {
    box-shadow: 6px 0px #16a34a, 7px 0px #16a34a, 8px 0px #16a34a, 9px 0px #16a34a, 5px 1px #16a34a, 6px 1px #16a34a, 7px 1px #16a34a, 8px 1px #16a34a, 9px 1px #16a34a, 10px 1px #16a34a, 4px 2px #22c55e, 5px 2px #22c55e, 6px 2px #22c55e, 7px 2px #22c55e, 8px 2px #22c55e, 9px 2px #22c55e, 10px 2px #22c55e, 11px 2px #22c55e, 3px 3px #ffffff, 4px 3px #1e293b, 6px 3px #ffffff, 7px 3px #1e293b, 9px 3px #22c55e, 10px 3px #22c55e, 11px 3px #22c55e, 3px 4px #22c55e, 4px 4px #22c55e, 5px 4px #22c55e, 6px 4px #22c55e, 7px 4px #22c55e, 8px 4px #22c55e, 9px 4px #22c55e, 10px 4px #22c55e, 11px 4px #22c55e, 12px 4px #22c55e, 2px 5px #22c55e, 3px 5px #22c55e, 4px 5px #22c55e, 5px 5px #22c55e, 6px 5px #22c55e, 7px 5px #22c55e, 8px 5px #22c55e, 9px 5px #22c55e, 10px 5px #22c55e, 11px 5px #22c55e, 12px 5px #22c55e, 13px 5px #22c55e, 2px 6px #15803d, 3px 6px #15803d, 4px 6px #15803d, 5px 6px #15803d, 6px 6px #15803d, 7px 6px #15803d, 8px 6px #15803d, 9px 6px #15803d, 10px 6px #15803d, 11px 6px #15803d, 12px 6px #15803d, 13px 6px #15803d, 3px 7px #15803d, 4px 7px #15803d, 5px 7px #15803d, 6px 7px #15803d, 7px 7px #15803d, 8px 7px #15803d, 9px 7px #15803d, 10px 7px #15803d, 11px 7px #15803d, 12px 7px #15803d, 13px 7px #15803d, 4px 8px #15803d, 5px 8px #15803d, 6px 8px #15803d, 7px 8px #15803d, 8px 8px #15803d, 9px 8px #15803d, 10px 8px #15803d, 11px 8px #15803d, 12px 8px #15803d, 13px 8px #15803d, 5px 9px #15803d, 6px 9px #15803d, 7px 9px #15803d, 8px 9px #15803d, 9px 9px #15803d, 10px 9px #15803d, 11px 9px #15803d, 12px 9px #15803d, 6px 10px #166534, 7px 10px #166534, 8px 10px #166534, 9px 10px #166534, 10px 10px #166534, 11px 10px #166534, 7px 11px #166534, 8px 11px #166534, 6px 12px #166534, 9px 12px #166534, 5px 13px #166534, 6px 13px #166534, 9px 13px #166534, 10px 13px #166534;
  }
  33% {
    box-shadow: 6px 0px #16a34a, 7px 0px #16a34a, 8px 0px #16a34a, 9px 0px #16a34a, 5px 1px #16a34a, 6px 1px #16a34a, 7px 1px #16a34a, 8px 1px #16a34a, 9px 1px #16a34a, 10px 1px #16a34a, 4px 2px #22c55e, 5px 2px #22c55e, 6px 2px #22c55e, 7px 2px #22c55e, 8px 2px #22c55e, 9px 2px #22c55e, 10px 2px #22c55e, 11px 2px #22c55e, 3px 3px #ffffff, 4px 3px #1e293b, 6px 3px #ffffff, 7px 3px #1e293b, 9px 3px #22c55e, 10px 3px #22c55e, 11px 3px #22c55e, 3px 4px #22c55e, 4px 4px #22c55e, 5px 4px #22c55e, 6px 4px #22c55e, 7px 4px #22c55e, 8px 4px #22c55e, 9px 4px #22c55e, 10px 4px #22c55e, 11px 4px #22c55e, 12px 4px #22c55e, 2px 5px #22c55e, 3px 5px #22c55e, 4px 5px #22c55e, 5px 5px #22c55e, 6px 5px #22c55e, 7px 5px #22c55e, 8px 5px #22c55e, 9px 5px #22c55e, 10px 5px #22c55e, 11px 5px #22c55e, 12px 5px #22c55e, 13px 5px #22c55e, 2px 6px #15803d, 3px 6px #15803d, 4px 6px #15803d, 5px 6px #15803d, 6px 6px #15803d, 7px 6px #15803d, 8px 6px #15803d, 9px 6px #15803d, 10px 6px #15803d, 11px 6px #15803d, 12px 6px #15803d, 13px 6px #15803d, 3px 7px #15803d, 4px 7px #15803d, 5px 7px #15803d, 6px 7px #15803d, 7px 7px #15803d, 8px 7px #15803d, 9px 7px #15803d, 10px 7px #15803d, 11px 7px #15803d, 12px 7px #15803d, 13px 7px #15803d, 4px 8px #15803d, 5px 8px #15803d, 6px 8px #15803d, 7px 8px #15803d, 8px 8px #15803d, 9px 8px #15803d, 10px 8px #15803d, 11px 8px #15803d, 12px 8px #15803d, 13px 8px #15803d, 5px 9px #15803d, 6px 9px #15803d, 7px 9px #15803d, 8px 9px #15803d, 9px 9px #15803d, 10px 9px #15803d, 11px 9px #15803d, 12px 9px #15803d, 6px 10px #166534, 7px 10px #166534, 8px 10px #166534, 9px 10px #166534, 10px 10px #166534, 11px 10px #166534, 7px 11px #166534, 8px 11px #166534, 6px 12px #166534, 9px 12px #166534, 5px 13px #166534, 6px 13px #166534, 9px 13px #166534, 10px 13px #166534, 12px 0px #fef08a, 13px 0px #fef08a, 14px 0px #fef08a, 11px 1px #fef08a, 12px 1px #fef08a, 13px 1px #fef08a, 14px 1px #fef08a, 15px 1px #fef08a, 10px 2px #f97316, 11px 2px #f97316, 12px 2px #f97316, 13px 2px #f97316, 14px 2px #f97316, 15px 2px #f97316, 16px 2px #f97316, 11px 3px #f97316, 12px 3px #f97316, 13px 3px #f97316, 14px 3px #f97316, 15px 3px #f97316, 12px 4px #ef4444, 13px 4px #ef4444, 14px 4px #ef4444;
  }
  66% {
    box-shadow: 6px 0px #16a34a, 7px 0px #16a34a, 8px 0px #16a34a, 9px 0px #16a34a, 5px 1px #16a34a, 6px 1px #16a34a, 7px 1px #16a34a, 8px 1px #16a34a, 9px 1px #16a34a, 10px 1px #16a34a, 4px 2px #22c55e, 5px 2px #22c55e, 6px 2px #22c55e, 7px 2px #22c55e, 8px 2px #22c55e, 9px 2px #22c55e, 10px 2px #22c55e, 11px 2px #22c55e, 3px 3px #ffffff, 4px 3px #1e293b, 6px 3px #ffffff, 7px 3px #1e293b, 9px 3px #22c55e, 10px 3px #22c55e, 11px 3px #22c55e, 3px 4px #22c55e, 4px 4px #22c55e, 5px 4px #22c55e, 6px 4px #22c55e, 7px 4px #22c55e, 8px 4px #22c55e, 9px 4px #22c55e, 10px 4px #22c55e, 11px 4px #22c55e, 12px 4px #22c55e, 2px 5px #22c55e, 3px 5px #22c55e, 4px 5px #22c55e, 5px 5px #22c55e, 6px 5px #22c55e, 7px 5px #22c55e, 8px 5px #22c55e, 9px 5px #22c55e, 10px 5px #22c55e, 11px 5px #22c55e, 12px 5px #22c55e, 13px 5px #22c55e, 2px 6px #15803d, 3px 6px #15803d, 4px 6px #15803d, 5px 6px #15803d, 6px 6px #15803d, 7px 6px #15803d, 8px 6px #15803d, 9px 6px #15803d, 10px 6px #15803d, 11px 6px #15803d, 12px 6px #15803d, 13px 6px #15803d, 3px 7px #15803d, 4px 7px #15803d, 5px 7px #15803d, 6px 7px #15803d, 7px 7px #15803d, 8px 7px #15803d, 9px 7px #15803d, 10px 7px #15803d, 11px 7px #15803d, 12px 7px #15803d, 13px 7px #15803d, 4px 8px #15803d, 5px 8px #15803d, 6px 8px #15803d, 7px 8px #15803d, 8px 8px #15803d, 9px 8px #15803d, 10px 8px #15803d, 11px 8px #15803d, 12px 8px #15803d, 13px 8px #15803d, 5px 9px #15803d, 6px 9px #15803d, 7px 9px #15803d, 8px 9px #15803d, 9px 9px #15803d, 10px 9px #15803d, 11px 9px #15803d, 12px 9px #15803d, 6px 10px #166534, 7px 10px #166534, 8px 10px #166534, 9px 10px #166534, 10px 10px #166534, 11px 10px #166534, 7px 11px #166534, 8px 11px #166534, 6px 12px #166534, 9px 12px #166534, 5px 13px #166534, 6px 13px #166534, 9px 13px #166534, 10px 13px #166534, 13px 0px #fef08a, 14px 0px #fef08a, 12px 1px #fef08a, 13px 1px #fef08a, 14px 1px #fef08a, 15px 1px #fef08a, 11px 2px #f97316, 12px 2px #f97316, 13px 2px #f97316, 14px 2px #f97316, 15px 2px #f97316, 16px 2px #f97316, 10px 3px #f97316, 11px 3px #f97316, 12px 3px #f97316, 13px 3px #f97316, 14px 3px #f97316, 15px 3px #f97316, 16px 3px #f97316, 17px 3px #f97316, 11px 4px #ef4444, 12px 4px #ef4444, 13px 4px #ef4444, 14px 4px #ef4444, 15px 4px #ef4444, 16px 4px #ef4444, 12px 5px #ef4444, 13px 5px #ef4444, 14px 5px #ef4444, 15px 5px #ef4444, 13px 6px #ef4444, 14px 6px #ef4444;
  }
}`,
  html: '<div class="pixelDragon"></div>',
  params: [
    { name: "--pd-speed", label: "Speed", type: "duration", default: 0.8, min: 0.3, max: 3, step: 0.1, unit: "s" },
    { name: "--pd-scale", label: "Scale", type: "range", default: 2.5, min: 1.5, max: 4, step: 0.5, unit: "x" },
    { name: "--pd-glow", label: "Glow Color", type: "color", default: "#ef4444" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};

export default PixelDragon;
