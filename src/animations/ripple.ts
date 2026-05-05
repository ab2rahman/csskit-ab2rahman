import type { Animation } from "../data/animations";

const ripple: Animation = {
  slug: "ripple",
  name: "Ripple",
  category: "background",
  description: "Expanding ripple circles from center. Customize color and speed.",
  tags: ["background", "ripple", "water", "circles", "expand"],
  css: `.ripple {
  --rp-color: #22d3ee;
  --rp-speed: 2s;
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background: #0f172a;
}

.ripple-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border: 2px solid var(--rp-color);
  border-radius: 50%;
  animation: rp-expand var(--rp-speed) ease-out infinite;
}

.ripple-circle:nth-child(2) { animation-delay: calc(var(--rp-speed) * 0.3); }
.ripple-circle:nth-child(3) { animation-delay: calc(var(--rp-speed) * 0.6); }
.ripple-circle:nth-child(4) { animation-delay: calc(var(--rp-speed) * 0.9); }

@keyframes rp-expand {
  0% {
    width: 10px;
    height: 10px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}`,
  html: `<div class="ripple">
  <div class="ripple-circle"></div>
  <div class="ripple-circle"></div>
  <div class="ripple-circle"></div>
  <div class="ripple-circle"></div>
</div>`,
  params: [
    { name: "--rp-color", label: "Color", type: "color", default: "#22d3ee" },
    { name: "--rp-speed", label: "Speed", type: "duration", default: 2, min: 0.5, max: 5, step: 0.5, unit: "s" },
  ],
  preview: { width: 400, height: 200, darkBg: true },
};

export default ripple;
