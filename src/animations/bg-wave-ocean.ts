import type { Animation } from "../data/animations";

const bgWaveOcean: Animation = {
  slug: "bg-wave-ocean",
  name: "Ocean Waves",
  category: "background",
  description:
    "Layered ocean wave motion with multiple wave layers. Calming sea background with flowing waves.",
  tags: ["background", "ocean", "wave", "sea", "water", "layered"],
  css: `.bg-wave-ocean {
  --bwo-color: #0ea5e9;
  --bwo-speed: 4s;
  width: 300px;
  height: 150px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #0c4a6e, #075985);
  border-radius: 8px;
}

.bg-wave-ocean span {
  position: absolute;
  bottom: 0;
  left: -50%;
  width: 200%;
  height: 40px;
  background: var(--bwo-color);
  border-radius: 50% 50% 0 0;
  opacity: 0.4;
  animation: bwo-wave var(--bwo-speed) ease-in-out infinite alternate;
}

.bg-wave-ocean span:nth-child(1) {
  bottom: 0;
  opacity: 0.3;
  height: 50px;
  animation-delay: 0s;
}

.bg-wave-ocean span:nth-child(2) {
  bottom: 10px;
  opacity: 0.5;
  height: 40px;
  animation-delay: -1s;
  animation-duration: calc(var(--bwo-speed) * 0.7);
}

.bg-wave-ocean span:nth-child(3) {
  bottom: 20px;
  opacity: 0.7;
  height: 35px;
  animation-delay: -2s;
  animation-duration: calc(var(--bwo-speed) * 0.5);
}

@keyframes bwo-wave {
  0% { transform: translateX(0); }
  100% { transform: translateX(25%); }
}`,
  html: '<div class="bg-wave-ocean"><span></span><span></span><span></span></div>',
  params: [
    { name: "--bwo-color", label: "Color", type: "color", default: "#0ea5e9" },
    { name: "--bwo-speed", label: "Speed", type: "duration", default: 4, min: 2, max: 10, step: 1, unit: "s" },
  ],
  preview: { width: 300, height: 180, darkBg: true },
};

export default bgWaveOcean;
