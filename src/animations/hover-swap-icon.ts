import type { Animation } from "../data/animations";

const hoverSwapIcon: Animation = {
  slug: "hover-swap-icon",
  name: "Swap Icon",
  category: "hover",
  description:
    "Icon rotates and swaps to a different one on hover. Smooth icon transition with Y-axis rotation.",
  tags: ["hover", "swap", "icon", "rotate", "transition", "flip"],
  css: `.hover-swap-icon {
  --hsi-color: #1e293b;
  --hsi-speed: 0.4s;
  width: 50px;
  height: 50px;
  perspective: 200px;
  cursor: pointer;
}

.hover-swap-icon .hsi-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform var(--hsi-speed) ease;
}

.hover-swap-icon:hover .hsi-inner {
  transform: rotateY(180deg);
}

.hover-swap-icon .hsi-front,
.hover-swap-icon .hsi-back {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  backface-visibility: hidden;
  color: var(--hsi-color);
}

.hover-swap-icon .hsi-back {
  transform: rotateY(180deg);
}`,
  html: '<div class="hover-swap-icon"><div class="hsi-inner"><div class="hsi-front">+</div><div class="hsi-back">-</div></div></div>',
  params: [
    { name: "--hsi-speed", label: "Speed", type: "duration", default: 0.4, min: 0.1, max: 1.5, step: 0.05, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: false },
};

export default hoverSwapIcon;
