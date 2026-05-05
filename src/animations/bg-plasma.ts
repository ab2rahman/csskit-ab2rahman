import type { Animation } from "../data/animations";

const bgPlasma: Animation = {
  slug: "bg-plasma",
  name: "Plasma",
  category: "background",
  description:
    "Retro plasma color cycling effect. Psychedelic background with shifting hue gradients.",
  tags: ["background", "plasma", "retro", "psychedelic", "hue", "cycling"],
  css: `.bg-plasma {
  --bp-speed: 5s;
  width: 300px;
  height: 150px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background: linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #ff006e);
  background-size: 400% 400%;
  animation: bp-shift var(--bp-speed) ease infinite;
}

@keyframes bp-shift {
  0% { background-position: 0% 50%; filter: hue-rotate(0deg); }
  25% { background-position: 100% 0%; }
  50% { background-position: 100% 100%; filter: hue-rotate(90deg); }
  75% { background-position: 0% 100%; }
  100% { background-position: 0% 50%; filter: hue-rotate(0deg); }
}`,
  html: '<div class="bg-plasma"></div>',
  params: [
    { name: "--bp-speed", label: "Speed", type: "duration", default: 5, min: 2, max: 15, step: 1, unit: "s" },
  ],
  preview: { width: 300, height: 180, darkBg: true },
};

export default bgPlasma;
