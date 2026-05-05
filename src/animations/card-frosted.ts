import type { Animation } from "../data/animations";

const cardFrosted: Animation = {
  slug: "card-frosted",
  name: "Frosted Glass",
  category: "card",
  description:
    "Glass morphism blur effect on hover. Modern frosted glass card with backdrop blur and transparency.",
  tags: ["card", "frosted", "glass", "blur", "morph", "transparency"],
  css: `.card-frosted {
  --cfr-speed: 0.4s;
  position: relative;
  width: 160px;
  height: 120px;
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(0px);
  transition: backdrop-filter var(--cfr-speed) ease, background var(--cfr-speed) ease, border-color var(--cfr-speed) ease;
  color: rgba(255, 255, 255, 0.6);
}

.card-frosted strong {
  display: block;
  font-size: 0.95rem;
  color: #ffffff;
  margin-bottom: 4px;
}

.card-frosted span {
  font-size: 0.8rem;
}

.card-frosted:hover {
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.4);
  color: rgba(255, 255, 255, 0.9);
}`,
  html: '<div class="card-frosted"><strong>Frosted</strong><span>Hover to blur</span></div>',
  params: [
    { name: "--cfr-speed", label: "Speed", type: "duration", default: 0.4, min: 0.1, max: 1.5, step: 0.05, unit: "s" },
  ],
  preview: { width: 300, height: 180, darkBg: true },
};

export default cardFrosted;
