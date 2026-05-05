import type { Animation } from "../data/animations";

const bgLightning: Animation = {
  slug: "bg-lightning",
  name: "Lightning",
  category: "background",
  description:
    "Random lightning flash effect on a dark stormy background. Dramatic weather animation with sudden bright flashes.",
  tags: ["background", "lightning", "storm", "flash", "weather", "dramatic"],
  css: `.bg-lightning {
  --bl-color: #e0e7ff;
  --bl-speed: 4s;
  width: 300px;
  height: 150px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #1a1a2e, #16213e);
  border-radius: 8px;
}

.bg-lightning::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--bl-color);
  opacity: 0;
  animation: bl-flash var(--bl-speed) ease-in-out infinite;
}

.bg-lightning::after {
  content: '';
  position: absolute;
  top: 10%;
  left: 45%;
  width: 3px;
  height: 60%;
  background: var(--bl-color);
  clip-path: polygon(0 0, 100% 0, 60% 40%, 100% 40%, 30% 100%, 40% 55%, 0 55%);
  filter: blur(1px);
  opacity: 0;
  animation: bl-bolt var(--bl-speed) ease-in-out infinite;
}

@keyframes bl-flash {
  0%, 100% { opacity: 0; }
  48% { opacity: 0; }
  49% { opacity: 0.8; }
  50% { opacity: 0; }
  51% { opacity: 0.5; }
  52% { opacity: 0; }
}

@keyframes bl-bolt {
  0%, 100% { opacity: 0; }
  48% { opacity: 0; }
  49% { opacity: 1; }
  51% { opacity: 1; }
  52% { opacity: 0; }
}`,
  html: '<div class="bg-lightning"></div>',
  params: [
    { name: "--bl-color", label: "Color", type: "color", default: "#e0e7ff" },
    { name: "--bl-speed", label: "Speed", type: "duration", default: 4, min: 2, max: 10, step: 1, unit: "s" },
  ],
  preview: { width: 300, height: 180, darkBg: true },
};

export default bgLightning;
