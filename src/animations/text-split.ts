import type { Animation } from "../data/animations";

const textSplit: Animation = {
  slug: "text-split",
  name: "Text Split",
  category: "text",
  description:
    "Characters split apart horizontally then reassemble. Dramatic text reveal that breaks and reforms letter by letter.",
  tags: ["text", "split", "break", "reveal", "dramatic", "characters"],
  css: `.text-split {
  --ts-color: #e2e8f0;
  --ts-accent: #3b82f6;
  --ts-speed: 1.5s;
  font-family: system-ui, sans-serif;
  font-size: 32px;
  font-weight: 700;
  display: flex;
  gap: 4px;
}

.text-split-char {
  display: inline-block;
  color: var(--ts-color);
  animation: split-char var(--ts-speed) ease-out both;
}

.text-split-char:nth-child(1) { animation-delay: 0s; }
.text-split-char:nth-child(2) { animation-delay: 0.1s; }
.text-split-char:nth-child(3) { animation-delay: 0.2s; }
.text-split-char:nth-child(4) { animation-delay: 0.3s; }
.text-split-char:nth-child(5) { animation-delay: 0.4s; }
.text-split-char:nth-child(6) { animation-delay: 0.5s; }

@keyframes split-char {
  0% { transform: translateX(0) scaleX(1); opacity: 0; }
  20% { transform: translateX(30px) scaleX(0.3); opacity: 0.5; color: var(--ts-accent); }
  50% { transform: translateX(-10px) scaleX(0.8); opacity: 0.8; }
  100% { transform: translateX(0) scaleX(1); opacity: 1; }
}`,
  html: '<div class="text-split"><span class="text-split-char">S</span><span class="text-split-char">P</span><span class="text-split-char">L</span><span class="text-split-char">I</span><span class="text-split-char">T</span><span class="text-split-char">!</span></div>',
  params: [
    { name: "--ts-color", label: "Text Color", type: "color", default: "#e2e8f0" },
    { name: "--ts-accent", label: "Accent", type: "color", default: "#3b82f6" },
    { name: "--ts-speed", label: "Speed", type: "duration", default: 1.5, min: 0.5, max: 4, step: 0.1, unit: "s" },
  ],
  preview: { width: 350, height: 150, darkBg: true },
};

export default textSplit;
