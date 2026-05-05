import type { Animation } from "../data/animations";

const bgSmoke: Animation = {
  slug: "bg-smoke",
  name: "Smoke",
  category: "background",
  description:
    "Rising smoke wisps with soft blur and opacity. Atmospheric smoke effect for dark-themed backgrounds.",
  tags: ["background", "smoke", "wisps", "fog", "atmospheric", "blur"],
  css: `.bg-smoke {
  --bsm-color: rgba(148, 163, 184, 0.3);
  --bsm-speed: 6s;
  width: 300px;
  height: 150px;
  position: relative;
  overflow: hidden;
  background: #0f172a;
  border-radius: 8px;
}

.bg-smoke span {
  position: absolute;
  bottom: -20px;
  border-radius: 50%;
  background: var(--bsm-color);
  filter: blur(20px);
  animation: bsm-rise var(--bsm-speed) ease-out infinite;
}

.bg-smoke span:nth-child(1) { left: 20%; width: 60px; height: 40px; animation-duration: calc(var(--bsm-speed) * 0.8); animation-delay: 0s; }
.bg-smoke span:nth-child(2) { left: 50%; width: 80px; height: 50px; animation-duration: calc(var(--bsm-speed) * 1.1); animation-delay: -2s; }
.bg-smoke span:nth-child(3) { left: 70%; width: 50px; height: 35px; animation-duration: calc(var(--bsm-speed) * 0.9); animation-delay: -1s; }
.bg-smoke span:nth-child(4) { left: 35%; width: 70px; height: 45px; animation-duration: calc(var(--bsm-speed) * 1.2); animation-delay: -3s; }

@keyframes bsm-rise {
  0% {
    transform: translateY(0) scale(0.5);
    opacity: 0;
  }
  20% {
    opacity: 0.6;
  }
  60% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(-180px) scale(1.5) translateX(30px);
    opacity: 0;
  }
}`,
  html: '<div class="bg-smoke"><span></span><span></span><span></span><span></span></div>',
  params: [
    { name: "--bsm-speed", label: "Speed", type: "duration", default: 6, min: 2, max: 15, step: 1, unit: "s" },
  ],
  preview: { width: 300, height: 180, darkBg: true },
};

export default bgSmoke;
