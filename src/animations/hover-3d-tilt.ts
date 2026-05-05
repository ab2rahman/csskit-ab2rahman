import type { Animation } from "../data/animations";

const hover3dTilt: Animation = {
  slug: "hover-3d-tilt",
  name: "3D Tilt",
  category: "hover",
  description:
    "Element tilts in 3D perspective on hover. Creates depth and interactivity with perspective transform.",
  tags: ["hover", "3d", "tilt", "perspective", "transform", "depth"],
  css: `.hover-3d-tilt {
  --h3dt-speed: 0.4s;
  width: 140px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 12px;
  cursor: pointer;
  transition: transform var(--h3dt-speed) ease;
  transform-style: preserve-3d;
  perspective: 500px;
}

.hover-3d-tilt:hover {
  transform: perspective(500px) rotateY(-10deg) rotateX(5deg);
}`,
  html: '<div class="hover-3d-tilt">Tilt Me</div>',
  params: [
    { name: "--h3dt-speed", label: "Speed", type: "duration", default: 0.4, min: 0.1, max: 1.5, step: 0.05, unit: "s" },
  ],
  preview: { width: 300, height: 140, darkBg: true },
};

export default hover3dTilt;
