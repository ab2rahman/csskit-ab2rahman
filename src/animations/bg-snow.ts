import type { Animation } from "../data/animations";

const bgSnow: Animation = {
  slug: "bg-snow",
  name: "Snowfall",
  category: "background",
  description:
    "Gentle falling snowflakes animation. Winter scene effect with varying sizes and speeds.",
  tags: ["background", "snow", "snowfall", "winter", "particles", "cold"],
  css: `.bg-snow {
  --bs-color: #ffffff;
  --bs-speed: 5s;
  width: 300px;
  height: 150px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #1e3a5f, #0f1b2d);
  border-radius: 8px;
}

.bg-snow span {
  position: absolute;
  top: -10px;
  background: var(--bs-color);
  border-radius: 50%;
  opacity: 0.8;
  animation: bs-fall linear infinite;
}

.bg-snow span:nth-child(1) { left: 10%; width: 4px; height: 4px; animation-duration: calc(var(--bs-speed) * 0.8); animation-delay: 0s; }
.bg-snow span:nth-child(2) { left: 25%; width: 3px; height: 3px; animation-duration: calc(var(--bs-speed) * 1.1); animation-delay: -1s; }
.bg-snow span:nth-child(3) { left: 40%; width: 5px; height: 5px; animation-duration: calc(var(--bs-speed) * 0.6); animation-delay: -2s; }
.bg-snow span:nth-child(4) { left: 55%; width: 3px; height: 3px; animation-duration: calc(var(--bs-speed) * 1.3); animation-delay: -0.5s; }
.bg-snow span:nth-child(5) { left: 70%; width: 4px; height: 4px; animation-duration: calc(var(--bs-speed) * 0.9); animation-delay: -3s; }
.bg-snow span:nth-child(6) { left: 85%; width: 3px; height: 3px; animation-duration: calc(var(--bs-speed) * 1.0); animation-delay: -1.5s; }
.bg-snow span:nth-child(7) { left: 15%; width: 5px; height: 5px; animation-duration: calc(var(--bs-speed) * 0.7); animation-delay: -4s; }
.bg-snow span:nth-child(8) { left: 60%; width: 4px; height: 4px; animation-duration: calc(var(--bs-speed) * 1.2); animation-delay: -2.5s; }

@keyframes bs-fall {
  0% { transform: translateY(-10px) translateX(0); opacity: 0; }
  10% { opacity: 0.8; }
  90% { opacity: 0.6; }
  100% { transform: translateY(160px) translateX(20px); opacity: 0; }
}`,
  html: '<div class="bg-snow"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>',
  params: [
    { name: "--bs-color", label: "Color", type: "color", default: "#ffffff" },
    { name: "--bs-speed", label: "Speed", type: "duration", default: 5, min: 2, max: 15, step: 1, unit: "s" },
  ],
  preview: { width: 300, height: 180, darkBg: true },
};

export default bgSnow;
