import type { Animation } from "../data/animations";

const PixelRobot: Animation = {
  slug: "pixel-robot",
  name: "Pixel Robot",
  category: "pixel",
  description:
    "Complex pixel art robot with waving arm animation. Detailed mech robot with glowing eyes and arm movement cycle.",
  tags: ["pixel", "robot", "retro", "8-bit", "pixel-art", "box-shadow", "mech", "cyber"],
  css: `.pixelRobot {
  --pr-speed: 1.2s;
  --pr-scale: 2.5;
  --pr-eye: #22d3ee;
  width: 1px;
  height: 1px;
  position: relative;
  left: -34px;
  top: -34px;
  transform: scale(var(--pr-scale));
  animation: pr-wave var(--pr-speed) steps(1) infinite;
}

.pixelRobot {
  filter: drop-shadow(0 0 2px var(--pr-eye));
}

@keyframes pr-wave {
  0%, 100% {
    box-shadow: 4px 0px #6366f1, 5px 0px #6366f1, 6px 0px #6366f1, 7px 0px #6366f1, 8px 0px #6366f1, 9px 0px #6366f1, 4px 1px #6366f1, 5px 1px #6366f1, 6px 1px #6366f1, 7px 1px #6366f1, 8px 1px #6366f1, 9px 1px #6366f1, 3px 2px #64748b, 4px 2px #64748b, 5px 2px #64748b, 6px 2px #64748b, 7px 2px #64748b, 8px 2px #64748b, 9px 2px #64748b, 10px 2px #64748b, 2px 3px #64748b, 3px 3px #22d3ee, 5px 3px #64748b, 6px 3px #22d3ee, 8px 3px #64748b, 9px 3px #64748b, 10px 3px #64748b, 2px 4px #64748b, 3px 4px #374151, 4px 4px #374151, 5px 4px #374151, 6px 4px #374151, 7px 4px #374151, 8px 4px #374151, 9px 4px #374151, 10px 4px #64748b, 2px 5px #64748b, 3px 5px #64748b, 4px 5px #64748b, 5px 5px #64748b, 6px 5px #64748b, 7px 5px #64748b, 8px 5px #64748b, 9px 5px #64748b, 10px 5px #64748b, 1px 6px #94a3b8, 2px 6px #94a3b8, 3px 6px #94a3b8, 4px 6px #94a3b8, 5px 6px #94a3b8, 6px 6px #94a3b8, 7px 6px #94a3b8, 8px 6px #94a3b8, 9px 6px #94a3b8, 10px 6px #94a3b8, 11px 6px #94a3b8, 0px 7px #94a3b8, 1px 7px #94a3b8, 2px 7px #94a3b8, 3px 7px #94a3b8, 4px 7px #94a3b8, 5px 7px #94a3b8, 6px 7px #94a3b8, 7px 7px #94a3b8, 8px 7px #94a3b8, 9px 7px #94a3b8, 10px 7px #94a3b8, 11px 7px #94a3b8, 12px 7px #94a3b8, 0px 8px #94a3b8, 1px 8px #94a3b8, 2px 8px #94a3b8, 3px 8px #94a3b8, 4px 8px #94a3b8, 5px 8px #94a3b8, 6px 8px #94a3b8, 7px 8px #94a3b8, 8px 8px #94a3b8, 9px 8px #94a3b8, 10px 8px #94a3b8, 11px 8px #94a3b8, 12px 8px #94a3b8, 1px 9px #475569, 2px 9px #94a3b8, 4px 9px #475569, 5px 9px #475569, 6px 9px #94a3b8, 7px 9px #94a3b8, 8px 9px #94a3b8, 9px 9px #94a3b8, 11px 9px #475569, 12px 9px #475569, 4px 10px #94a3b8, 5px 10px #94a3b8, 6px 10px #94a3b8, 7px 10px #94a3b8, 8px 10px #94a3b8, 9px 10px #94a3b8, 4px 11px #94a3b8, 5px 11px #94a3b8, 8px 11px #94a3b8, 9px 11px #94a3b8, 3px 12px #94a3b8, 4px 12px #94a3b8, 9px 12px #94a3b8, 10px 12px #94a3b8, 3px 13px #94a3b8, 4px 13px #94a3b8, 9px 13px #94a3b8, 10px 13px #94a3b8;
  }
  50% {
    box-shadow: 4px 0px #6366f1, 5px 0px #6366f1, 6px 0px #6366f1, 7px 0px #6366f1, 8px 0px #6366f1, 9px 0px #6366f1, 4px 1px #6366f1, 5px 1px #6366f1, 6px 1px #6366f1, 7px 1px #6366f1, 8px 1px #6366f1, 9px 1px #6366f1, 3px 2px #64748b, 4px 2px #64748b, 5px 2px #64748b, 6px 2px #64748b, 7px 2px #64748b, 8px 2px #64748b, 9px 2px #64748b, 10px 2px #64748b, 2px 3px #64748b, 3px 3px #22d3ee, 5px 3px #64748b, 6px 3px #22d3ee, 8px 3px #64748b, 9px 3px #64748b, 10px 3px #64748b, 2px 4px #64748b, 3px 4px #374151, 4px 4px #374151, 5px 4px #374151, 6px 4px #374151, 7px 4px #374151, 8px 4px #374151, 9px 4px #374151, 10px 4px #64748b, 2px 5px #64748b, 3px 5px #64748b, 4px 5px #64748b, 5px 5px #64748b, 6px 5px #64748b, 7px 5px #64748b, 8px 5px #64748b, 9px 5px #64748b, 10px 5px #64748b, 1px 6px #94a3b8, 2px 6px #94a3b8, 3px 6px #94a3b8, 4px 6px #94a3b8, 5px 6px #94a3b8, 6px 6px #94a3b8, 7px 6px #94a3b8, 8px 6px #94a3b8, 9px 6px #94a3b8, 10px 6px #94a3b8, 11px 6px #94a3b8, 0px 7px #94a3b8, 1px 7px #94a3b8, 2px 7px #94a3b8, 3px 7px #94a3b8, 4px 7px #94a3b8, 5px 7px #94a3b8, 6px 7px #94a3b8, 7px 7px #94a3b8, 8px 7px #94a3b8, 9px 7px #94a3b8, 10px 7px #94a3b8, 11px 7px #94a3b8, 12px 7px #94a3b8, 0px 8px #94a3b8, 2px 8px #94a3b8, 3px 8px #94a3b8, 4px 8px #94a3b8, 5px 8px #94a3b8, 6px 8px #94a3b8, 7px 8px #94a3b8, 8px 8px #94a3b8, 9px 8px #94a3b8, 10px 8px #94a3b8, 11px 8px #94a3b8, 12px 8px #94a3b8, 13px 8px #94a3b8, 0px 9px #475569, 1px 9px #475569, 4px 9px #475569, 5px 9px #475569, 6px 9px #94a3b8, 7px 9px #94a3b8, 8px 9px #94a3b8, 9px 9px #94a3b8, 12px 9px #475569, 4px 10px #94a3b8, 5px 10px #94a3b8, 6px 10px #94a3b8, 7px 10px #94a3b8, 8px 10px #94a3b8, 9px 10px #94a3b8, 4px 11px #94a3b8, 5px 11px #94a3b8, 8px 11px #94a3b8, 9px 11px #94a3b8, 3px 12px #94a3b8, 4px 12px #94a3b8, 9px 12px #94a3b8, 10px 12px #94a3b8, 3px 13px #94a3b8, 4px 13px #94a3b8, 9px 13px #94a3b8, 10px 13px #94a3b8;
  }
}`,
  html: '<div class="pixelRobot"></div>',
  params: [
    { name: "--pr-speed", label: "Speed", type: "duration", default: 1.2, min: 0.4, max: 4, step: 0.2, unit: "s" },
    { name: "--pr-scale", label: "Scale", type: "range", default: 2.5, min: 1.5, max: 4, step: 0.5, unit: "x" },
    { name: "--pr-eye", label: "Eye Glow", type: "color", default: "#22d3ee" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};

export default PixelRobot;
