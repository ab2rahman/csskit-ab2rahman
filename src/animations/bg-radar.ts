import type { Animation } from "../data/animations";

const bgRadar: Animation = {
  slug: "bg-radar",
  name: "Radar",
  category: "background",
  description:
    "Sweeping radar effect with rotating scan line. Military-style radar display with pulsing rings.",
  tags: ["background", "radar", "sweep", "scan", "military", "rotate"],
  css: `.bg-radar {
  --br-color: #22c55e;
  --br-speed: 3s;
  width: 300px;
  height: 150px;
  position: relative;
  overflow: hidden;
  background: #0a1628;
  border-radius: 8px;
}

.bg-radar::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 120px;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: 50%;
  box-shadow: inset 0 0 0 20px transparent, inset 0 0 0 40px rgba(34, 197, 94, 0.1), inset 0 0 0 60px rgba(34, 197, 94, 0.05);
}

.bg-radar::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 4px;
  background: linear-gradient(90deg, var(--br-color), transparent);
  transform-origin: left center;
  animation: br-sweep var(--br-speed) linear infinite;
}

@keyframes br-sweep {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
  html: '<div class="bg-radar"></div>',
  params: [
    { name: "--br-color", label: "Color", type: "color", default: "#22c55e" },
    { name: "--br-speed", label: "Speed", type: "duration", default: 3, min: 1, max: 8, step: 0.5, unit: "s" },
  ],
  preview: { width: 300, height: 180, darkBg: true },
};

export default bgRadar;
