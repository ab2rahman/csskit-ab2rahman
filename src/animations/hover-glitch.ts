import type { Animation } from "../data/animations";

const hoverGlitch: Animation = {
  slug: "hover-glitch",
  name: "Hover Glitch",
  category: "hover",
  description:
    "Brief color-split glitch effect on hover. Quick, punchy distortion that adds a cyberpunk/digital feel to any element.",
  tags: ["hover", "glitch", "distort", "cyber", "digital", "split"],
  css: `.hover-glitch {
  --hg-color: #e2e8f0;
  --hg-accent: #ef4444;
  --hg-speed: 0.3s;
  display: inline-block;
  padding: 14px 32px;
  border-radius: 10px;
  background: #1e293b;
  color: var(--hg-color);
  font-weight: 600;
  font-size: 15px;
  font-family: system-ui, sans-serif;
  position: relative;
  cursor: pointer;
  transition: background var(--hg-speed);
}

.hover-glitch:hover {
  animation: hglitch var(--hg-speed) steps(2);
}

@keyframes hglitch {
  0% { transform: translate(0); }
  20% { transform: translate(-3px, 2px); text-shadow: 3px 0 var(--hg-accent), -3px 0 #3b82f6; }
  40% { transform: translate(3px, -1px); text-shadow: -2px 0 var(--hg-accent), 2px 0 #3b82f6; }
  60% { transform: translate(-2px, 1px); text-shadow: 2px 0 var(--hg-accent), -2px 0 #3b82f6; }
  80% { transform: translate(1px, -1px); text-shadow: -1px 0 var(--hg-accent); }
  100% { transform: translate(0); text-shadow: none; }
}`,
  html: '<div class="hover-glitch">Hover me</div>',
  params: [
    { name: "--hg-color", label: "Text Color", type: "color", default: "#e2e8f0" },
    { name: "--hg-accent", label: "Glitch Color", type: "color", default: "#ef4444" },
    { name: "--hg-speed", label: "Speed", type: "duration", default: 0.3, min: 0.1, max: 1, step: 0.05, unit: "s" },
  ],
  preview: { width: 280, height: 120, darkBg: true },
};

export default hoverGlitch;
