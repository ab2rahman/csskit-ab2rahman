import type { Animation } from "../data/animations";

const hoverSink: Animation = {
  slug: "hover-sink",
  name: "Sink Down",
  category: "hover",
  description:
    "Element sinks down with a growing shadow on hover, creating a pressed-in depth effect. Smooth press interaction.",
  tags: ["hover", "sink", "press", "depth", "shadow", "3d"],
  css: `.hover-sink {
  --hs-color: #6366f1;
  --hs-speed: 0.3s;
  width: 140px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  background: var(--hs-color);
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 6px 0 #4338ca, 0 8px 16px rgba(99, 102, 241, 0.3);
  transition: transform var(--hs-speed) ease, box-shadow var(--hs-speed) ease;
}

.hover-sink:hover {
  transform: translateY(4px);
  box-shadow: 0 2px 0 #4338ca, 0 4px 8px rgba(99, 102, 241, 0.2);
}`,
  html: '<div class="hover-sink">Sink</div>',
  params: [
    { name: "--hs-color", label: "Color", type: "color", default: "#6366f1" },
    { name: "--hs-speed", label: "Speed", type: "duration", default: 0.3, min: 0.1, max: 1, step: 0.05, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: false },
};

export default hoverSink;
