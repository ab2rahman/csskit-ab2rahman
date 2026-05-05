import type { Animation } from "../data/animations";

const aurora: Animation = {
  slug: "aurora",
  name: "Aurora",
  category: "background",
  description: "Northern lights effect with customizable colors and speed.",
  tags: ["background", "aurora", "lights", "nature", "ambient"],
  css: `.aurora {
  --au-color-1: #00ff87;
  --au-color-2: #60efff;
  --au-color-3: #0061ff;
  --au-speed: 6s;
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background: #0a0a0a;
}

.aurora::before,
.aurora::after {
  content: "";
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  border-radius: 50%;
  filter: blur(60px);
  mix-blend-mode: screen;
  animation: au-move var(--au-speed) ease-in-out infinite alternate;
}

.aurora::before {
  background: radial-gradient(circle, var(--au-color-1) 0%, transparent 50%);
}

.aurora::after {
  background: radial-gradient(circle, var(--au-color-2) 0%, transparent 50%);
  animation-delay: calc(var(--au-speed) * -0.5);
  animation-direction: alternate-reverse;
}

.aurora-glow {
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  border-radius: 50%;
  background: radial-gradient(circle, var(--au-color-3) 0%, transparent 50%);
  filter: blur(80px);
  mix-blend-mode: screen;
  animation: au-move calc(var(--au-speed) * 1.3) ease-in-out infinite alternate;
  animation-delay: calc(var(--au-speed) * -0.3);
}

@keyframes au-move {
  0% { transform: translate(-20%, -20%) rotate(0deg); }
  33% { transform: translate(10%, -10%) rotate(120deg); }
  66% { transform: translate(-10%, 10%) rotate(240deg); }
  100% { transform: translate(20%, 20%) rotate(360deg); }
}`,
  html: `<div class="aurora">
  <div class="aurora-glow"></div>
</div>`,
  params: [
    { name: "--au-color-1", label: "Color 1", type: "color", default: "#00ff87" },
    { name: "--au-color-2", label: "Color 2", type: "color", default: "#60efff" },
    { name: "--au-color-3", label: "Color 3", type: "color", default: "#0061ff" },
    { name: "--au-speed", label: "Speed", type: "duration", default: 6, min: 2, max: 15, step: 0.5, unit: "s" },
  ],
  preview: { width: 400, height: 200, darkBg: true },
};

export default aurora;
