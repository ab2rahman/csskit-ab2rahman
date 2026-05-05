import type { Animation } from "../data/animations";

const PixelSpaceship: Animation = {
  slug: "pixel-spaceship",
  name: "Pixel Spaceship",
  category: "pixel",
  description:
    "Complex pixel art spaceship with thrust flame animation. Detailed spacecraft with engine glow and 2-frame thrust cycle.",
  tags: ["pixel", "spaceship", "retro", "8-bit", "pixel-art", "box-shadow", "space", "thrust"],
  css: `.pixelSpaceship {
  --ps-speed: 0.5s;
  --ps-scale: 2.5;
  --ps-thrust: #fbbf24;
  width: 1px;
  height: 1px;
  position: relative;
  left: -34px;
  top: -30px;
  transform: scale(var(--ps-scale));
  animation: ps-thrust var(--ps-speed) steps(1) infinite;
}

.pixelSpaceship {
  filter: drop-shadow(0 0 3px var(--ps-thrust));
}

@keyframes ps-thrust {
  0%, 100% {
    box-shadow: 6px 0px #e2e8f0, 7px 0px #e2e8f0, 5px 1px #e2e8f0, 6px 1px #e2e8f0, 7px 1px #e2e8f0, 8px 1px #e2e8f0, 5px 2px #e2e8f0, 6px 2px #e2e8f0, 7px 2px #e2e8f0, 8px 2px #e2e8f0, 4px 3px #e2e8f0, 5px 3px #e2e8f0, 6px 3px #e2e8f0, 7px 3px #e2e8f0, 8px 3px #e2e8f0, 9px 3px #e2e8f0, 3px 4px #94a3b8, 4px 4px #94a3b8, 5px 4px #94a3b8, 6px 4px #94a3b8, 7px 4px #94a3b8, 8px 4px #94a3b8, 9px 4px #94a3b8, 10px 4px #94a3b8, 2px 5px #94a3b8, 3px 5px #94a3b8, 4px 5px #94a3b8, 5px 5px #94a3b8, 6px 5px #94a3b8, 7px 5px #94a3b8, 8px 5px #94a3b8, 9px 5px #94a3b8, 10px 5px #94a3b8, 11px 5px #94a3b8, 1px 6px #60a5fa, 2px 6px #94a3b8, 3px 6px #94a3b8, 4px 6px #94a3b8, 5px 6px #94a3b8, 6px 6px #94a3b8, 7px 6px #94a3b8, 8px 6px #94a3b8, 9px 6px #94a3b8, 10px 6px #94a3b8, 11px 6px #94a3b8, 12px 6px #60a5fa, 0px 7px #3b82f6, 1px 7px #60a5fa, 2px 7px #94a3b8, 3px 7px #94a3b8, 4px 7px #94a3b8, 5px 7px #94a3b8, 6px 7px #94a3b8, 7px 7px #94a3b8, 8px 7px #94a3b8, 9px 7px #94a3b8, 10px 7px #94a3b8, 11px 7px #94a3b8, 12px 7px #60a5fa, 13px 7px #3b82f6, 0px 8px #64748b, 1px 8px #64748b, 2px 8px #64748b, 3px 8px #64748b, 4px 8px #64748b, 5px 8px #64748b, 6px 8px #64748b, 7px 8px #64748b, 8px 8px #64748b, 9px 8px #64748b, 10px 8px #64748b, 11px 8px #64748b, 12px 8px #64748b, 13px 8px #64748b, 1px 9px #64748b, 2px 9px #64748b, 4px 9px #64748b, 5px 9px #64748b, 6px 9px #64748b, 7px 9px #64748b, 9px 9px #64748b, 10px 9px #64748b, 2px 10px #475569, 5px 10px #475569, 6px 10px #475569, 9px 10px #475569;
  }
  50% {
    box-shadow: 6px 0px #e2e8f0, 7px 0px #e2e8f0, 5px 1px #e2e8f0, 6px 1px #e2e8f0, 7px 1px #e2e8f0, 8px 1px #e2e8f0, 5px 2px #e2e8f0, 6px 2px #e2e8f0, 7px 2px #e2e8f0, 8px 2px #e2e8f0, 4px 3px #e2e8f0, 5px 3px #e2e8f0, 6px 3px #e2e8f0, 7px 3px #e2e8f0, 8px 3px #e2e8f0, 9px 3px #e2e8f0, 3px 4px #94a3b8, 4px 4px #94a3b8, 5px 4px #94a3b8, 6px 4px #94a3b8, 7px 4px #94a3b8, 8px 4px #94a3b8, 9px 4px #94a3b8, 10px 4px #94a3b8, 2px 5px #94a3b8, 3px 5px #94a3b8, 4px 5px #94a3b8, 5px 5px #94a3b8, 6px 5px #94a3b8, 7px 5px #94a3b8, 8px 5px #94a3b8, 9px 5px #94a3b8, 10px 5px #94a3b8, 11px 5px #94a3b8, 1px 6px #60a5fa, 2px 6px #94a3b8, 3px 6px #94a3b8, 4px 6px #94a3b8, 5px 6px #94a3b8, 6px 6px #94a3b8, 7px 6px #94a3b8, 8px 6px #94a3b8, 9px 6px #94a3b8, 10px 6px #94a3b8, 11px 6px #94a3b8, 12px 6px #60a5fa, 0px 7px #3b82f6, 1px 7px #60a5fa, 2px 7px #94a3b8, 3px 7px #94a3b8, 4px 7px #94a3b8, 5px 7px #94a3b8, 6px 7px #94a3b8, 7px 7px #94a3b8, 8px 7px #94a3b8, 9px 7px #94a3b8, 10px 7px #94a3b8, 11px 7px #94a3b8, 12px 7px #60a5fa, 13px 7px #3b82f6, 0px 8px #64748b, 1px 8px #64748b, 2px 8px #64748b, 3px 8px #64748b, 4px 8px #64748b, 5px 8px #64748b, 6px 8px #64748b, 7px 8px #64748b, 8px 8px #64748b, 9px 8px #64748b, 10px 8px #64748b, 11px 8px #64748b, 12px 8px #64748b, 13px 8px #64748b, 1px 9px #64748b, 2px 9px #64748b, 4px 9px #64748b, 5px 9px #64748b, 6px 9px #64748b, 7px 9px #64748b, 9px 9px #64748b, 10px 9px #64748b, 2px 10px #475569, 5px 10px #475569, 6px 10px #475569, 9px 10px #475569, 3px 11px #fbbf24, 5px 11px #fbbf24, 6px 11px #fbbf24, 8px 11px #fbbf24, 4px 12px #f97316, 5px 12px #f97316, 6px 12px #f97316, 7px 12px #f97316;
    transform: scale(var(--ps-scale)) translateY(-2px);
  }
}`,
  html: '<div class="pixelSpaceship"></div>',
  params: [
    { name: "--ps-speed", label: "Speed", type: "duration", default: 0.5, min: 0.2, max: 2, step: 0.1, unit: "s" },
    { name: "--ps-scale", label: "Scale", type: "range", default: 2.5, min: 1.5, max: 4, step: 0.5, unit: "x" },
    { name: "--ps-thrust", label: "Thrust Glow", type: "color", default: "#fbbf24" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};

export default PixelSpaceship;
