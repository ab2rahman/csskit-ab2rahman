import type { Animation } from "../data/animations";

const cardColorShift: Animation = {
  slug: "card-color-shift",
  name: "Color Shift",
  category: "card",
  description:
    "Background gradient shifts on hover. Card with animated color transition across the surface.",
  tags: ["card", "color", "gradient", "shift", "hover", "transition"],
  css: `.card-color-shift {
  --ccs-color1: #667eea;
  --ccs-color2: #764ba2;
  --ccs-speed: 0.5s;
  width: 160px;
  height: 120px;
  border-radius: 12px;
  padding: 16px;
  color: #ffffff;
  cursor: pointer;
  background: linear-gradient(135deg, var(--ccs-color1), var(--ccs-color2));
  background-size: 200% 200%;
  background-position: 0% 50%;
  transition: background-position var(--ccs-speed) ease, transform var(--ccs-speed) ease;
}

.card-color-shift strong {
  display: block;
  font-size: 0.95rem;
  margin-bottom: 4px;
}

.card-color-shift span {
  font-size: 0.8rem;
  opacity: 0.8;
}

.card-color-shift:hover {
  background-position: 100% 50%;
  transform: scale(1.02);
}`,
  html: '<div class="card-color-shift"><strong>Color Shift</strong><span>Hover to shift colors</span></div>',
  params: [
    { name: "--ccs-color1", label: "Color 1", type: "color", default: "#667eea" },
    { name: "--ccs-color2", label: "Color 2", type: "color", default: "#764ba2" },
    { name: "--ccs-speed", label: "Speed", type: "duration", default: 0.5, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 180, darkBg: true },
};

export default cardColorShift;
