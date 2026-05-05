import type { Animation } from "../data/animations";

const hoverRaise: Animation = {
  slug: "hover-raise",
  name: "Raise",
  category: "hover",
  description:
    "Element raises upward with growing shadow on hover. Elevation effect with dynamic shadow depth.",
  tags: ["hover", "raise", "lift", "shadow", "elevation", "depth"],
  css: `.hover-raise {
  --hra-color: #ffffff;
  --hra-speed: 0.3s;
  width: 140px;
  height: 80px;
  background: var(--hra-color);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: #334155;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: transform var(--hra-speed) ease, box-shadow var(--hra-speed) ease;
}

.hover-raise:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 20px rgba(0,0,0,0.15);
}`,
  html: '<div class="hover-raise">Raise</div>',
  params: [
    { name: "--hra-speed", label: "Speed", type: "duration", default: 0.3, min: 0.1, max: 1, step: 0.05, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: false },
};

export default hoverRaise;
