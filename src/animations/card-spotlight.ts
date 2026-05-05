import type { Animation } from "../data/animations";

const cardSpotlight: Animation = {
  slug: "card-spotlight",
  name: "Card Spotlight",
  category: "card",
  description:
    "Mouse-following spotlight gradient on card. Dynamic radial gradient that follows cursor position for a premium feel.",
  tags: ["card", "spotlight", "mouse", "cursor", "gradient", "premium"],
  css: `.card-spotlight {
  --cs-color: #3b82f6;
  --cs-speed: 0.3s;
  position: relative;
  width: 260px;
  padding: 24px;
  border-radius: 16px;
  background: #111827;
  border: 1px solid #1f2937;
  overflow: hidden;
  font-family: system-ui, sans-serif;
  color: #e2e8f0;
  cursor: pointer;
  transition: border-color var(--cs-speed) ease;
}

.card-spotlight::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(400px circle at var(--cs-x, 50%) var(--cs-y, 50%), rgba(59, 130, 246, 0.12), transparent 60%);
  pointer-events: none;
  transition: opacity var(--cs-speed) ease;
  opacity: 0;
}

.card-spotlight:hover {
  border-color: var(--cs-color);
}

.card-spotlight:hover::before {
  opacity: 1;
}

.card-spotlight-title {
  position: relative;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 8px;
}

.card-spotlight-desc {
  position: relative;
  font-size: 12px;
  color: #9ca3af;
  line-height: 1.5;
}

.card-spotlight-tag {
  position: relative;
  display: inline-block;
  margin-top: 14px;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 600;
  background: rgba(59, 130, 246, 0.15);
  color: var(--cs-color);
}`,
  html: '<div class="card-spotlight" onmousemove="this.style.setProperty(\'--cs-x\',(event.offsetX)+\'px\');this.style.setProperty(\'--cs-y\',(event.offsetY)+\'px\')"><div class="card-spotlight-title">Spotlight Card</div><div class="card-spotlight-desc">Move your cursor over this card to see the spotlight follow your mouse.</div><span class="card-spotlight-tag">interactive</span></div>',
  params: [
    { name: "--cs-color", label: "Accent", type: "color", default: "#3b82f6" },
    { name: "--cs-speed", label: "Speed", type: "duration", default: 0.3, min: 0.1, max: 1, step: 0.05, unit: "s" },
  ],
  preview: { width: 340, height: 220, darkBg: true },
};

export default cardSpotlight;
