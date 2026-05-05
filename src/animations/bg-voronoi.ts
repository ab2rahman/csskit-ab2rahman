import type { Animation } from "../data/animations";

const bgVoronoi: Animation = {
  slug: "bg-voronoi",
  name: "Voronoi Cells",
  category: "background",
  description:
    "Animated cell-like pattern with organic shapes. Scientific and abstract background with morphing cell boundaries.",
  tags: ["background", "voronoi", "cells", "organic", "abstract", "science"],
  css: `.bg-voronoi {
  --bv-color: #3b82f6;
  --bv-speed: 6s;
  width: 300px;
  height: 150px;
  position: relative;
  overflow: hidden;
  background: #0f172a;
  border-radius: 8px;
}

.bg-voronoi span {
  position: absolute;
  border-radius: 40%;
  border: 1px solid var(--bv-color);
  opacity: 0.3;
  animation: bv-morph var(--bv-speed) ease-in-out infinite alternate;
}

.bg-voronoi span:nth-child(1) { top: 5%; left: 5%; width: 80px; height: 70px; animation-delay: 0s; }
.bg-voronoi span:nth-child(2) { top: 15%; left: 55%; width: 90px; height: 65px; animation-delay: -1s; }
.bg-voronoi span:nth-child(3) { top: 50%; left: 10%; width: 70px; height: 60px; animation-delay: -2s; }
.bg-voronoi span:nth-child(4) { top: 45%; left: 60%; width: 85px; height: 75px; animation-delay: -3s; }
.bg-voronoi span:nth-child(5) { top: 25%; left: 35%; width: 75px; height: 80px; animation-delay: -1.5s; opacity: 0.2; }

@keyframes bv-morph {
  0% { transform: rotate(0deg) scale(1); border-radius: 40%; }
  33% { transform: rotate(5deg) scale(1.1); border-radius: 35% 45% 40% 50%; }
  66% { transform: rotate(-3deg) scale(0.95); border-radius: 45% 35% 50% 40%; }
  100% { transform: rotate(2deg) scale(1.05); border-radius: 38% 42% 48% 35%; }
}`,
  html: '<div class="bg-voronoi"><span></span><span></span><span></span><span></span><span></span></div>',
  params: [
    { name: "--bv-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--bv-speed", label: "Speed", type: "duration", default: 6, min: 2, max: 15, step: 1, unit: "s" },
  ],
  preview: { width: 300, height: 180, darkBg: true },
};

export default bgVoronoi;
