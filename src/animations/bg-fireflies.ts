import type { Animation } from "../data/animations";

const bgFireflies: Animation = {
  slug: "bg-fireflies",
  name: "Fireflies",
  category: "background",
  description:
    "Random glowing dots floating around in a dark scene. Magical firefly night effect with soft glowing particles.",
  tags: ["background", "fireflies", "glow", "particles", "night", "magic"],
  css: `.bg-fireflies {
  --bf-color: #fbbf24;
  --bf-speed: 6s;
  width: 300px;
  height: 150px;
  position: relative;
  overflow: hidden;
  background: #0c1222;
  border-radius: 8px;
}

.bg-fireflies span {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--bf-color);
  border-radius: 50%;
  box-shadow: 0 0 6px 2px var(--bf-color);
  animation: bf-drift var(--bf-speed) ease-in-out infinite alternate;
}

.bg-fireflies span:nth-child(1) { top: 20%; left: 15%; animation-duration: calc(var(--bf-speed) * 0.8); animation-delay: 0s; }
.bg-fireflies span:nth-child(2) { top: 60%; left: 75%; animation-duration: calc(var(--bf-speed) * 1.2); animation-delay: -1s; }
.bg-fireflies span:nth-child(3) { top: 40%; left: 45%; animation-duration: calc(var(--bf-speed) * 0.6); animation-delay: -2s; }
.bg-fireflies span:nth-child(4) { top: 80%; left: 25%; animation-duration: calc(var(--bf-speed) * 1.1); animation-delay: -3s; }
.bg-fireflies span:nth-child(5) { top: 10%; left: 85%; animation-duration: calc(var(--bf-speed) * 0.9); animation-delay: -0.5s; }
.bg-fireflies span:nth-child(6) { top: 70%; left: 55%; animation-duration: calc(var(--bf-speed) * 1.3); animation-delay: -1.5s; }
.bg-fireflies span:nth-child(7) { top: 50%; left: 10%; animation-duration: calc(var(--bf-speed) * 0.7); animation-delay: -2.5s; }
.bg-fireflies span:nth-child(8) { top: 30%; left: 65%; animation-duration: calc(var(--bf-speed) * 1.0); animation-delay: -4s; }

@keyframes bf-drift {
  0% { transform: translate(0, 0); opacity: 0.2; }
  25% { opacity: 1; }
  50% { transform: translate(20px, -15px); opacity: 0.3; }
  75% { opacity: 0.8; }
  100% { transform: translate(-15px, 10px); opacity: 0.2; }
}`,
  html: '<div class="bg-fireflies"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>',
  params: [
    { name: "--bf-color", label: "Color", type: "color", default: "#fbbf24" },
    { name: "--bf-speed", label: "Speed", type: "duration", default: 6, min: 2, max: 15, step: 1, unit: "s" },
  ],
  preview: { width: 300, height: 180, darkBg: true },
};

export default bgFireflies;
