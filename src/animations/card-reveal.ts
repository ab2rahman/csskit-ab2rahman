import type { Animation } from "../data/animations";

const cardReveal: Animation = {
  slug: "card-reveal",
  name: "Card Reveal",
  category: "card",
  description:
    "Content reveals from behind a mask on hover. Elegant card with sliding cover reveal animation.",
  tags: ["card", "reveal", "mask", "cover", "slide", "elegant"],
  css: `.card-reveal {
  --cr-color: #3b82f6;
  --cr-speed: 0.5s;
  position: relative;
  width: 160px;
  height: 120px;
  background: #f8fafc;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.card-reveal .cr-content {
  padding: 16px;
  font-size: 0.8rem;
  color: #64748b;
}

.card-reveal .cr-content strong {
  display: block;
  font-size: 1rem;
  color: #1e293b;
  margin-bottom: 4px;
}

.card-reveal .cr-cover {
  position: absolute;
  inset: 0;
  background: var(--cr-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.9rem;
  transition: transform var(--cr-speed) ease;
}

.card-reveal:hover .cr-cover {
  transform: translateY(-100%);
}`,
  html: '<div class="card-reveal"><div class="cr-content"><strong>Hidden</strong>Hover to reveal this content</div><div class="cr-cover">Hover Me</div></div>',
  params: [
    { name: "--cr-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--cr-speed", label: "Speed", type: "duration", default: 0.5, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 180, darkBg: false },
};

export default cardReveal;
