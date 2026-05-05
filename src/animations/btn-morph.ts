import type { Animation } from "../data/animations";

const btnMorph: Animation = {
  slug: "btn-morph",
  name: "Morph",
  category: "button",
  description:
    "Button morphs shape on hover from rounded to square or vice versa. Shape-shifting button interaction.",
  tags: ["button", "morph", "shape", "round", "square", "transform"],
  css: `.btn-morph {
  --bm-color: #6366f1;
  --bm-speed: 0.4s;
  width: 140px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  background: var(--bm-color);
  border-radius: 25px;
  cursor: pointer;
  transition: border-radius var(--bm-speed) ease, transform var(--bm-speed) ease;
}

.btn-morph:hover {
  border-radius: 8px;
  transform: scale(1.05);
}`,
  html: '<div class="btn-morph">Morph Me</div>',
  params: [
    { name: "--bm-color", label: "Color", type: "color", default: "#6366f1" },
    { name: "--bm-speed", label: "Speed", type: "duration", default: 0.4, min: 0.1, max: 1.5, step: 0.05, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: false },
};

export default btnMorph;
