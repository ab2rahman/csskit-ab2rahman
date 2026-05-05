import type { Animation } from "../data/animations";

const textWave3d: Animation = {
  slug: "text-wave-3d",
  name: "Wave 3D",
  category: "text",
  description:
    "Text waves in 3D perspective with rotating letters. Dynamic perspective text animation with depth.",
  tags: ["text", "wave", "3d", "perspective", "rotate", "depth"],
  css: `.text-wave-3d {
  --tw3-color: #3b82f6;
  --tw3-speed: 2s;
  color: var(--tw3-color);
  font-size: 2rem;
  font-weight: 800;
  display: flex;
  gap: 2px;
  perspective: 300px;
}

.text-wave-3d span {
  display: inline-block;
  animation: tw3-wave var(--tw3-speed) ease-in-out infinite;
  transform-origin: bottom;
}

.text-wave-3d span:nth-child(1) { animation-delay: 0s; }
.text-wave-3d span:nth-child(2) { animation-delay: 0.1s; }
.text-wave-3d span:nth-child(3) { animation-delay: 0.2s; }
.text-wave-3d span:nth-child(4) { animation-delay: 0.3s; }

@keyframes tw3-wave {
  0%, 100% {
    transform: rotateX(0deg) translateY(0);
  }
  25% {
    transform: rotateX(30deg) translateY(-8px);
  }
  50% {
    transform: rotateX(-10deg) translateY(4px);
  }
  75% {
    transform: rotateX(15deg) translateY(-4px);
  }
}`,
  html: '<div class="text-wave-3d"><span>W</span><span>A</span><span>V</span><span>E</span></div>',
  params: [
    { name: "--tw3-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--tw3-speed", label: "Speed", type: "duration", default: 2, min: 0.5, max: 5, step: 0.25, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: false },
};

export default textWave3d;
