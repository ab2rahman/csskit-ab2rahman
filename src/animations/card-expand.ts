import type { Animation } from "../data/animations";

const cardExpand: Animation = {
  slug: "card-expand",
  name: "Card Expand",
  category: "card",
  description:
    "Card expands vertically on hover to reveal hidden content. Accordion-style expand pattern for compact layouts.",
  tags: ["card", "expand", "accordion", "hover", "reveal", "content"],
  css: `.card-expand {
  --ce-accent: #3b82f6;
  --ce-speed: 0.35s;
  width: 260px;
  border-radius: 14px;
  overflow: hidden;
  background: #111827;
  border: 1px solid #1f2937;
  transition: all var(--ce-speed) ease;
  cursor: pointer;
}

.card-expand-header {
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #e2e8f0;
}

.card-expand-header svg {
  width: 16px;
  height: 16px;
  color: var(--ce-accent);
  transition: transform var(--ce-speed) ease;
}

.card-expand-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--ce-speed) ease, padding var(--ce-speed) ease;
  padding: 0 20px;
}

.card-expand-body-inner {
  font-family: system-ui, sans-serif;
  font-size: 13px;
  color: #9ca3af;
  line-height: 1.6;
  padding-bottom: 16px;
}

.card-expand:hover {
  border-color: var(--ce-accent);
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.15);
}

.card-expand:hover .card-expand-body {
  max-height: 120px;
  padding: 0 20px;
}

.card-expand:hover .card-expand-header svg {
  transform: rotate(180deg);
}`,
  html: '<div class="card-expand"><div class="card-expand-header">Details <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg></div><div class="card-expand-body"><div class="card-expand-body-inner">Hidden content revealed on hover. This expands smoothly to show additional details and information.</div></div></div>',
  params: [
    { name: "--ce-accent", label: "Accent", type: "color", default: "#3b82f6" },
    { name: "--ce-speed", label: "Speed", type: "duration", default: 0.35, min: 0.1, max: 1, step: 0.05, unit: "s" },
  ],
  preview: { width: 340, height: 240, darkBg: true },
};

export default cardExpand;
