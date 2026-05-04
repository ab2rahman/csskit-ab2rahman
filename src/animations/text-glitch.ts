import type { Animation } from "../data/animations";

const textGlitch: Animation = {
  slug: "text-glitch",
  name: "Glitch Text",
  category: "text",
  description: "Color-split glitch effect with customizable text, color, and speed.",
  tags: ["text", "glitch", "distort", "cyber", "retro"],
  css: `.text-glitch {
  --glitch-color: #ff0040;
  --glitch-speed: 2s;
  --glitch-text: "GLITCH";
  font-size: 3rem;
  font-weight: 900;
  color: white;
  position: relative;
  display: inline-block;
}

.text-glitch::before,
.text-glitch::after {
  content: var(--glitch-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.text-glitch::before {
  color: var(--glitch-color);
  animation: glitch-1 var(--glitch-speed) infinite linear alternate-reverse;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
}

.text-glitch::after {
  color: cyan;
  animation: glitch-2 var(--glitch-speed) infinite linear alternate-reverse;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
}

@keyframes glitch-1 {
  0% { transform: translate(0); }
  20% { transform: translate(-3px, 3px); }
  40% { transform: translate(-3px, -3px); }
  60% { transform: translate(3px, 3px); }
  80% { transform: translate(3px, -3px); }
  100% { transform: translate(0); }
}

@keyframes glitch-2 {
  0% { transform: translate(0); }
  20% { transform: translate(3px, -3px); }
  40% { transform: translate(3px, 3px); }
  60% { transform: translate(-3px, -3px); }
  80% { transform: translate(-3px, 3px); }
  100% { transform: translate(0); }
}`,
  html: `<span class="text-glitch" style="--glitch-text: 'GLITCH'">GLITCH</span>`,
  params: [
    { name: "--glitch-text", label: "Text", type: "text", default: "GLITCH" },
    { name: "--glitch-color", label: "Glitch Color", type: "color", default: "#ff0040" },
    { name: "--glitch-speed", label: "Speed", type: "duration", default: 2, min: 0.5, max: 5, step: 0.1, unit: "s" },
  ],
  preview: { width: 400, height: 200, darkBg: true },
};

export default textGlitch;
