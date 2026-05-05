import type { Animation } from "../data/animations";

const loadingCogs: Animation = {
  slug: "loading-cogs",
  name: "Cogs",
  category: "loading",
  description:
    "Two interlocking gears spinning in opposite directions. Mechanical loading indicator with industrial feel.",
  tags: ["loading", "cogs", "gears", "mechanical", "spin", "industrial"],
  css: `.loading-cogs {
  --lc-color: #64748b;
  --lc-speed: 3s;
  position: relative;
  width: 60px;
  height: 50px;
}

.loading-cogs .lc-cog {
  position: absolute;
  width: 30px;
  height: 30px;
  border: 3px solid var(--lc-color);
  border-radius: 50%;
  border-left-color: transparent;
  border-right-color: transparent;
}

.loading-cogs .lc-cog:first-child {
  top: 2px;
  left: 2px;
  animation: lc-spin var(--lc-speed) linear infinite;
}

.loading-cogs .lc-cog:last-child {
  top: 16px;
  left: 24px;
  width: 24px;
  height: 24px;
  animation: lc-spin-reverse var(--lc-speed) linear infinite;
}

@keyframes lc-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes lc-spin-reverse {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-360deg); }
}`,
  html: '<div class="loading-cogs"><div class="lc-cog"></div><div class="lc-cog"></div></div>',
  params: [
    { name: "--lc-color", label: "Color", type: "color", default: "#64748b" },
    { name: "--lc-speed", label: "Speed", type: "duration", default: 3, min: 1, max: 8, step: 0.5, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default loadingCogs;
