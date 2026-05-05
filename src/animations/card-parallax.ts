import type { Animation } from "../data/animations";

const cardParallax: Animation = {
  slug: "card-parallax",
  name: "Parallax",
  category: "card",
  description:
    "Inner content shifts with parallax depth on hover. Layered card effect with differential movement.",
  tags: ["card", "parallax", "depth", "layer", "shift", "hover"],
  css: `.card-parallax {
  --cpa-speed: 0.4s;
  width: 160px;
  height: 120px;
  background: linear-gradient(135deg, #1e293b, #334155);
  border-radius: 12px;
  padding: 16px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
}

.card-parallax .cpa-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.3), transparent 60%);
  transition: transform var(--cpa-speed) ease;
}

.card-parallax .cpa-text {
  position: relative;
  z-index: 1;
  transition: transform var(--cpa-speed) ease;
}

.card-parallax .cpa-text strong {
  display: block;
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 4px;
}

.card-parallax .cpa-text span {
  font-size: 0.75rem;
  color: #94a3b8;
}

.card-parallax:hover .cpa-bg {
  transform: translate(5px, 5px) scale(1.05);
}

.card-parallax:hover .cpa-text {
  transform: translate(-3px, -3px);
}`,
  html: '<div class="card-parallax"><div class="cpa-bg"></div><div class="cpa-text"><strong>Parallax</strong><span>Hover for depth</span></div></div>',
  params: [
    { name: "--cpa-speed", label: "Speed", type: "duration", default: 0.4, min: 0.1, max: 1.5, step: 0.05, unit: "s" },
  ],
  preview: { width: 300, height: 180, darkBg: true },
};

export default cardParallax;
