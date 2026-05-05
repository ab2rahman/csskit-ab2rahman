import type { Animation } from "../data/animations";

const bgLava: Animation = {
  slug: "bg-lava",
  name: "Lava Lamp",
  category: "background",
  description:
    "Flowing lava lamp blobs with color morphing. Retro psychedelic background with organic blob movement.",
  tags: ["background", "lava", "lamp", "blob", "retro", "psychedelic"],
  css: `.bg-lava {
  --bla-color1: #ef4444;
  --bla-color2: #f97316;
  --bla-speed: 6s;
  width: 300px;
  height: 150px;
  position: relative;
  overflow: hidden;
  background: #1a0a0a;
  border-radius: 8px;
}

.bg-lava span {
  position: absolute;
  border-radius: 40%;
  filter: blur(8px);
  opacity: 0.7;
  animation: bla-float var(--bla-speed) ease-in-out infinite alternate;
}

.bg-lava span:nth-child(1) {
  width: 80px;
  height: 80px;
  background: var(--bla-color1);
  bottom: -20px;
  left: 20%;
  animation-delay: 0s;
}

.bg-lava span:nth-child(2) {
  width: 60px;
  height: 60px;
  background: var(--bla-color2);
  bottom: -10px;
  left: 60%;
  animation-delay: -2s;
  animation-duration: calc(var(--bla-speed) * 1.3);
}

.bg-lava span:nth-child(3) {
  width: 50px;
  height: 50px;
  background: var(--bla-color1);
  bottom: -15px;
  left: 40%;
  animation-delay: -4s;
  animation-duration: calc(var(--bla-speed) * 0.8);
}

@keyframes bla-float {
  0% { transform: translateY(0) scale(1); border-radius: 40%; }
  50% { border-radius: 30% 50% 40% 60%; }
  100% { transform: translateY(-140px) scale(1.3); border-radius: 50% 30% 60% 40%; }
}`,
  html: '<div class="bg-lava"><span></span><span></span><span></span></div>',
  params: [
    { name: "--bla-color1", label: "Color 1", type: "color", default: "#ef4444" },
    { name: "--bla-color2", label: "Color 2", type: "color", default: "#f97316" },
    { name: "--bla-speed", label: "Speed", type: "duration", default: 6, min: 2, max: 15, step: 1, unit: "s" },
  ],
  preview: { width: 300, height: 180, darkBg: true },
};

export default bgLava;
