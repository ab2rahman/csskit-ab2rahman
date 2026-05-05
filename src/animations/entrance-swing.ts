import type { Animation } from "../data/animations";

const entranceSwing: Animation = {
  slug: "entrance-swing",
  name: "Swing In",
  category: "entrance",
  description:
    "Swings in from above like a pendulum. Playful entrance with decaying rotation from the top pivot point.",
  tags: ["entrance", "swing", "pendulum", "rotate", "top", "playful"],
  css: `.entrance-swing {
  --esw-color: #06b6d4;
  --esw-speed: 0.8s;
  display: inline-block;
  padding: 14px 32px;
  border-radius: 10px;
  background: var(--esw-color);
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  font-family: system-ui, sans-serif;
  animation: esw-swing var(--esw-speed) ease-out both;
  transform-origin: top center;
}

@keyframes esw-swing {
  0% { transform: rotate(-30deg); opacity: 0; }
  20% { transform: rotate(20deg); opacity: 1; }
  40% { transform: rotate(-12deg); }
  60% { transform: rotate(6deg); }
  80% { transform: rotate(-2deg); }
  100% { transform: rotate(0); }
}`,
  html: '<div class="entrance-swing">Swing</div>',
  params: [
    { name: "--esw-color", label: "Color", type: "color", default: "#06b6d4" },
    { name: "--esw-speed", label: "Speed", type: "duration", default: 0.8, min: 0.3, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 280, height: 140, darkBg: true },
};

export default entranceSwing;
