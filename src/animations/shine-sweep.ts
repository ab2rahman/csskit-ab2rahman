import type { Animation } from "../data/animations";

const shineSweep: Animation = {
  slug: "shine-sweep",
  name: "Shine Sweep",
  category: "hover",
  description: "Light sweep across element on hover. Customize angle and color.",
  tags: ["hover", "shine", "sweep", "light", "glossy"],
  css: `.shine-sweep {
  --shine-color: rgba(255, 255, 255, 0.4);
  --shine-speed: 0.6s;
  --shine-bg: #374151;
  position: relative;
  display: inline-block;
  padding: 14px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  background: var(--shine-bg);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
}

.shine-sweep::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    var(--shine-color),
    transparent
  );
  transition: left var(--shine-speed) ease;
}

.shine-sweep:hover::before {
  left: 150%;
}`,
  html: `<button class="shine-sweep">Shine Sweep</button>`,
  params: [
    { name: "--shine-bg", label: "Background", type: "color", default: "#374151" },
    { name: "--shine-color", label: "Shine Color", type: "color", default: "#ffffff" },
    { name: "--shine-speed", label: "Speed", type: "duration", default: 0.6, min: 0.2, max: 1.5, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 150, darkBg: true },
};

export default shineSweep;
