import type { Animation } from "../data/animations";

const cardContentSlide: Animation = {
  slug: "card-content-slide",
  name: "Content Slide",
  category: "card",
  description:
    "Inner content slides up to reveal hidden content on hover. Overlay card with vertical slide transition.",
  tags: ["card", "content", "slide", "reveal", "overlay", "vertical"],
  css: `.card-content-slide {
  --ccs-speed: 0.4s;
  position: relative;
  width: 160px;
  height: 120px;
  background: #f8fafc;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.card-content-slide .ccs-top {
  padding: 16px;
  background: #3b82f6;
  color: #ffffff;
  height: 100%;
  transition: transform var(--ccs-speed) ease;
}

.card-content-slide .ccs-top strong {
  display: block;
  font-size: 0.95rem;
}

.card-content-slide .ccs-top span {
  font-size: 0.8rem;
  opacity: 0.8;
}

.card-content-slide .ccs-bottom {
  position: absolute;
  inset: 0;
  padding: 16px;
  font-size: 0.8rem;
  color: #64748b;
  background: #f8fafc;
}

.card-content-slide:hover .ccs-top {
  transform: translateY(-100%);
}`,
  html: '<div class="card-content-slide"><div class="ccs-bottom">Hidden content revealed on hover!</div><div class="ccs-top"><strong>Slide</strong><span>Hover to reveal</span></div></div>',
  params: [
    { name: "--ccs-speed", label: "Speed", type: "duration", default: 0.4, min: 0.1, max: 1.5, step: 0.05, unit: "s" },
  ],
  preview: { width: 300, height: 180, darkBg: false },
};

export default cardContentSlide;
