import type { Animation } from "../data/animations";

const loadingMaze: Animation = {
  slug: "loading-maze",
  name: "Maze",
  category: "loading",
  description:
    "Dot navigating through a grid maze path. Animated dot tracing a route through corridors.",
  tags: ["loading", "maze", "dot", "path", "grid", "navigate"],
  css: `.loading-maze {
  --lm-color: #3b82f6;
  --lm-wall: #e2e8f0;
  --lm-speed: 3s;
  width: 50px;
  height: 50px;
  display: grid;
  grid-template-columns: repeat(5, 10px);
  grid-template-rows: repeat(5, 10px);
  gap: 0;
}

.loading-maze span {
  width: 10px;
  height: 10px;
  background: var(--lm-wall);
  border-radius: 2px;
}

.loading-maze span:nth-child(2),
.loading-maze span:nth-child(8),
.loading-maze span:nth-child(12),
.loading-maze span:nth-child(18),
.loading-maze span:nth-child(22) {
  background: transparent;
}

.loading-maze .lm-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  background: var(--lm-color);
  border-radius: 50%;
  animation: lm-path var(--lm-speed) ease-in-out infinite;
}

@keyframes lm-path {
  0% { transform: translate(1px, 1px); }
  20% { transform: translate(21px, 1px); }
  40% { transform: translate(21px, 21px); }
  60% { transform: translate(31px, 21px); }
  80% { transform: translate(31px, 41px); }
  100% { transform: translate(41px, 41px); }
}`,
  html: '<div class="loading-maze" style="position:relative"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><div class="lm-dot"></div></div>',
  params: [
    { name: "--lm-color", label: "Dot Color", type: "color", default: "#3b82f6" },
    { name: "--lm-speed", label: "Speed", type: "duration", default: 3, min: 1, max: 8, step: 0.5, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default loadingMaze;
