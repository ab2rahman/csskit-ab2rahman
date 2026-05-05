import type { Animation } from "../data/animations";

const floatingParticles: Animation = {
  slug: "floating-particles",
  name: "Floating Particles",
  category: "background",
  description: "CSS-only floating particle dots. Customize count and color.",
  tags: ["background", "particles", "float", "dots", "ambient"],
  css: `.floating-particles {
  --fp-color: #818cf8;
  --fp-size: 6px;
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background: #111827;
}

.fp-particle {
  position: absolute;
  width: var(--fp-size);
  height: var(--fp-size);
  background: var(--fp-color);
  border-radius: 50%;
  opacity: 0;
  animation: fp-float linear infinite;
}

.fp-particle:nth-child(1) { left: 10%; animation-duration: 7s; animation-delay: 0s; }
.fp-particle:nth-child(2) { left: 25%; animation-duration: 9s; animation-delay: 1s; }
.fp-particle:nth-child(3) { left: 40%; animation-duration: 6s; animation-delay: 2s; }
.fp-particle:nth-child(4) { left: 55%; animation-duration: 8s; animation-delay: 0.5s; }
.fp-particle:nth-child(5) { left: 70%; animation-duration: 10s; animation-delay: 3s; }
.fp-particle:nth-child(6) { left: 85%; animation-duration: 7.5s; animation-delay: 1.5s; }
.fp-particle:nth-child(7) { left: 15%; animation-duration: 11s; animation-delay: 2.5s; }
.fp-particle:nth-child(8) { left: 50%; animation-duration: 6.5s; animation-delay: 4s; }

@keyframes fp-float {
  0% {
    bottom: -10%;
    opacity: 0;
    transform: translateX(0);
  }
  10% { opacity: 0.6; }
  50% { opacity: 0.3; transform: translateX(20px); }
  90% { opacity: 0.6; }
  100% {
    bottom: 110%;
    opacity: 0;
    transform: translateX(-20px);
  }
}`,
  html: `<div class="floating-particles">
  <div class="fp-particle"></div>
  <div class="fp-particle"></div>
  <div class="fp-particle"></div>
  <div class="fp-particle"></div>
  <div class="fp-particle"></div>
  <div class="fp-particle"></div>
  <div class="fp-particle"></div>
  <div class="fp-particle"></div>
</div>`,
  params: [
    { name: "--fp-color", label: "Color", type: "color", default: "#818cf8" },
    { name: "--fp-size", label: "Size", type: "range", default: 6, min: 3, max: 12, step: 1, unit: "px" },
  ],
  preview: { width: 400, height: 200, darkBg: true },
};

export default floatingParticles;
