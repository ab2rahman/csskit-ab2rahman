import type { Animation } from "../data/animations";

const bgTopography: Animation = {
  slug: "bg-topography",
  name: "Topography",
  category: "background",
  description:
    "Animated topographic contour line pattern. Map-style background with flowing elevation lines.",
  tags: ["background", "topography", "contour", "lines", "map", "flow"],
  css: `.bg-topography {
  --bt-color: #3b82f6;
  --bt-speed: 4s;
  width: 300px;
  height: 150px;
  position: relative;
  overflow: hidden;
  background: #0f172a;
  border-radius: 8px;
}

.bg-topography span {
  position: absolute;
  border: 1px solid rgba(59, 130, 246, 0.25);
  border-radius: 50%;
  animation: bt-drift var(--bt-speed) ease-in-out infinite alternate;
}

.bg-topography span:nth-child(1) { width: 120px; height: 60px; top: 20%; left: 10%; animation-delay: 0s; }
.bg-topography span:nth-child(2) { width: 80px; height: 40px; top: 40%; left: 50%; animation-delay: -1s; }
.bg-topography span:nth-child(3) { width: 160px; height: 80px; top: 10%; left: 30%; animation-delay: -2s; }
.bg-topography span:nth-child(4) { width: 100px; height: 50px; top: 55%; left: 20%; animation-delay: -0.5s; }
.bg-topography span:nth-child(5) { width: 140px; height: 70px; top: 30%; left: 5%; animation-delay: -3s; }

@keyframes bt-drift {
  0% { transform: translateX(0) translateY(0) rotate(0deg); }
  100% { transform: translateX(15px) translateY(-10px) rotate(3deg); }
}`,
  html: '<div class="bg-topography"><span></span><span></span><span></span><span></span><span></span></div>',
  params: [
    { name: "--bt-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--bt-speed", label: "Speed", type: "duration", default: 4, min: 2, max: 12, step: 1, unit: "s" },
  ],
  preview: { width: 300, height: 180, darkBg: true },
};

export default bgTopography;
