import type { Animation } from "../data/animations";

const exitBlur: Animation = {
  slug: "exit-blur",
  name: "Blur Out",
  category: "exit",
  description:
    "Element blurs and fades out smoothly. Cinematic exit with soft disappearing effect.",
  tags: ["exit", "blur", "fade", "cinematic", "soft", "disappear"],
  css: `.exit-blur {
  --ebl-color: #14b8a6;
  --ebl-speed: 0.6s;
  width: 100px;
  height: 60px;
  background: var(--ebl-color);
  border-radius: 12px;
  animation: ebl-out var(--ebl-speed) ease-in forwards;
}

@keyframes ebl-out {
  0% {
    filter: blur(0px);
    opacity: 1;
    transform: scale(1);
  }
  100% {
    filter: blur(20px);
    opacity: 0;
    transform: scale(1.1);
  }
}`,
  html: '<div class="exit-blur"></div>',
  params: [
    { name: "--ebl-color", label: "Color", type: "color", default: "#14b8a6" },
    { name: "--ebl-speed", label: "Speed", type: "duration", default: 0.6, min: 0.2, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default exitBlur;
