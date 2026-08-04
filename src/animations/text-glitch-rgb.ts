import type { Animation } from "../data/animations";

const textGlitchRgb: Animation = {
  slug: "text-glitch-rgb",
  name: "RGB Glitch",
  category: "text",
  description: "Tiga baris judul glitch RGB bertingkat untuk efek digital yang lebih dramatis.",
  tags: ["text", "glitch", "rgb", "split", "cyberpunk", "channel"],
  css: `.text-glitch-rgb {
  --tgr-accent: #ff9b8e;
  --tgr-speed: .95s;
  display: grid;
  gap: .08em;
  color: #fff;
  font: 700 clamp(1.55rem, 6vw, 2.4rem)/.88 Inter, system-ui, sans-serif;
  letter-spacing: -.07em;
}

.text-glitch-rgb__line {
  position: relative;
  display: block;
  width: max-content;
  text-shadow: 3px 0 #ff728b, -3px 0 var(--tgr-accent);
  animation: tgr-jitter var(--tgr-speed) steps(2) infinite;
}

.text-glitch-rgb__line:nth-child(2) { margin-left: .55em; animation-delay: -.16s; }
.text-glitch-rgb__line:nth-child(3) { margin-left: 1.1em; animation-delay: -.32s; }

.text-glitch-rgb__line::before,
.text-glitch-rgb__line::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  color: #fff;
  opacity: .6;
}

.text-glitch-rgb__line::before {
  transform: translate(-3px,-2px);
  clip-path: inset(0 0 55% 0);
}

.text-glitch-rgb__line::after {
  transform: translate(3px,2px);
  clip-path: inset(55% 0 0 0);
}

@keyframes tgr-jitter {
  20% { transform: translate(2px,-1px); }
  40% { transform: translate(-3px,2px); }
  60% { transform: translate(3px,1px); }
  80% { transform: translate(-1px,-2px); }
}

@media (prefers-reduced-motion: reduce) {
  .text-glitch-rgb__line { animation: none; }
}`,
  html: '<div class="text-glitch-rgb"><span class="text-glitch-rgb__line" data-text="BUG ATAU STYLE?">BUG ATAU STYLE?</span><span class="text-glitch-rgb__line" data-text="BUG ATAU STYLE?">BUG ATAU STYLE?</span><span class="text-glitch-rgb__line" data-text="BUG ATAU STYLE?">BUG ATAU STYLE?</span></div>',
  params: [
    { name: "--tgr-accent", label: "Accent", type: "color", default: "#ff9b8e" },
    { name: "--tgr-speed", label: "Glitch Speed", type: "duration", default: 0.95, min: 0.3, max: 3, step: 0.05, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: true },
};

export default textGlitchRgb;
