import type { Animation } from "../data/animations";

const textGlitchRgb: Animation = {
  slug: "text-glitch-rgb",
  name: "RGB Glitch",
  category: "text",
  description:
    "Red and blue channel split glitch effect. Cyberpunk-style text with RGB color separation and jitter.",
  tags: ["text", "glitch", "rgb", "split", "cyberpunk", "channel"],
  css: `.text-glitch-rgb {
  --tgr-color: #ffffff;
  --tgr-speed: 2s;
  position: relative;
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--tgr-color);
  animation: tgr-skew var(--tgr-speed) infinite;
}

.text-glitch-rgb::before,
.text-glitch-rgb::after {
  content: 'GLITCH';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.text-glitch-rgb::before {
  color: #ff0000;
  animation: tgr-red var(--tgr-speed) infinite;
  clip-path: inset(0 0 0 0);
}

.text-glitch-rgb::after {
  color: #0000ff;
  animation: tgr-blue var(--tgr-speed) infinite;
  clip-path: inset(0 0 0 0);
}

@keyframes tgr-skew {
  0%, 100% { transform: skew(0deg); }
  20% { transform: skew(-2deg); }
  40% { transform: skew(0deg); }
  60% { transform: skew(1deg); }
  80% { transform: skew(-1deg); }
}

@keyframes tgr-red {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-3px, 2px); }
  40% { transform: translate(2px, -1px); }
  60% { transform: translate(-1px, 1px); }
  80% { transform: translate(3px, -2px); }
}

@keyframes tgr-blue {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(3px, -2px); }
  40% { transform: translate(-2px, 1px); }
  60% { transform: translate(1px, -1px); }
  80% { transform: translate(-3px, 2px); }
}`,
  html: '<div class="text-glitch-rgb">GLITCH</div>',
  params: [
    { name: "--tgr-speed", label: "Speed", type: "duration", default: 2, min: 0.5, max: 5, step: 0.5, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: true },
};

export default textGlitchRgb;
