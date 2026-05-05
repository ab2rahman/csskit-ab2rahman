import type { Animation } from "../data/animations";

const dividerIcon: Animation = {
  slug: "divider-icon",
  name: "Icon Divider",
  category: "divider",
  description:
    "Animated icon centered between two lines. Decorative divider with spinning/fading icon accent.",
  tags: ["divider", "icon", "animated", "decorative", "spinning", "lines"],
  css: `.divider-icon {
  --di-color: #f59e0b;
  --di-speed: 3s;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 240px;
}

.divider-icon .di-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--di-color), transparent);
}

.divider-icon .di-icon {
  color: var(--di-color);
  font-size: 1.2rem;
  animation: di-spin var(--di-speed) ease-in-out infinite;
}

@keyframes di-spin {
  0%, 100% { transform: rotate(0deg) scale(1); opacity: 1; }
  25% { transform: rotate(90deg) scale(1.2); opacity: 0.7; }
  50% { transform: rotate(180deg) scale(1); opacity: 1; }
  75% { transform: rotate(270deg) scale(1.2); opacity: 0.7; }
}`,
  html: '<div class="divider-icon"><div class="di-line"></div><div class="di-icon">✦</div><div class="di-line"></div></div>',
  params: [
    { name: "--di-color", label: "Color", type: "color", default: "#f59e0b" },
    { name: "--di-speed", label: "Speed", type: "duration", default: 3, min: 1, max: 8, step: 0.5, unit: "s" },
  ],
  preview: { width: 350, height: 100, darkBg: false },
};

export default dividerIcon;
