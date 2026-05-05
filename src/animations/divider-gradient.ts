import type { Animation } from "../data/animations";

const dividerGradient: Animation = {
  slug: "divider-gradient",
  name: "Gradient Slide",
  category: "divider",
  description:
    "Animated gradient sliding across a horizontal line. Colorful divider with moving gradient effect.",
  tags: ["divider", "gradient", "slide", "colorful", "animated", "line"],
  css: `.divider-gradient {
  --dg-color1: #3b82f6;
  --dg-color2: #8b5cf6;
  --dg-color3: #ec4899;
  --dg-speed: 2s;
  width: 240px;
  height: 3px;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--dg-color1), var(--dg-color2), var(--dg-color3), var(--dg-color1));
  background-size: 200% 100%;
  animation: dg-slide var(--dg-speed) linear infinite;
}

@keyframes dg-slide {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}`,
  html: '<div class="divider-gradient"></div>',
  params: [
    { name: "--dg-color1", label: "Color 1", type: "color", default: "#3b82f6" },
    { name: "--dg-color2", label: "Color 2", type: "color", default: "#8b5cf6" },
    { name: "--dg-color3", label: "Color 3", type: "color", default: "#ec4899" },
    { name: "--dg-speed", label: "Speed", type: "duration", default: 2, min: 0.5, max: 6, step: 0.5, unit: "s" },
  ],
  preview: { width: 350, height: 100, darkBg: false },
};

export default dividerGradient;
