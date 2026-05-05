import type { Animation } from "../data/animations";

const dividerChevron: Animation = {
  slug: "divider-chevron",
  name: "Chevron",
  category: "divider",
  description:
    "Animated chevron arrows pointing in a direction. Directional divider with moving arrow pattern.",
  tags: ["divider", "chevron", "arrow", "animated", "directional", "moving"],
  css: `.divider-chevron {
  --dch-color: #6366f1;
  --dch-speed: 1.5s;
  display: flex;
  align-items: center;
  gap: 6px;
  width: 200px;
  justify-content: center;
}

.divider-chevron span {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-right: 2px solid var(--dch-color);
  border-bottom: 2px solid var(--dch-color);
  transform: rotate(-45deg);
  animation: dch-move var(--dch-speed) ease-in-out infinite;
  opacity: 0.3;
}

.divider-chevron span:nth-child(1) { animation-delay: 0s; }
.divider-chevron span:nth-child(2) { animation-delay: 0.15s; }
.divider-chevron span:nth-child(3) { animation-delay: 0.3s; }
.divider-chevron span:nth-child(4) { animation-delay: 0.45s; }
.divider-chevron span:nth-child(5) { animation-delay: 0.6s; }

@keyframes dch-move {
  0%, 100% { opacity: 0.3; transform: rotate(-45deg) translate(0, 0); }
  50% { opacity: 1; transform: rotate(-45deg) translate(4px, 4px); }
}`,
  html: '<div class="divider-chevron"><span></span><span></span><span></span><span></span><span></span></div>',
  params: [
    { name: "--dch-color", label: "Color", type: "color", default: "#6366f1" },
    { name: "--dch-speed", label: "Speed", type: "duration", default: 1.5, min: 0.5, max: 5, step: 0.25, unit: "s" },
  ],
  preview: { width: 350, height: 100, darkBg: false },
};

export default dividerChevron;
